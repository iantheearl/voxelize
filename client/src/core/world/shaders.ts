import { ShaderLib } from "three";

/**
 * This is the default shaders used for the chunks.
 */
export const DEFAULT_CHUNK_SHADERS = {
  vertex: ShaderLib.basic.vertexShader
    .replace(
      "#include <common>",
      `
attribute int light;

varying float vAO;
varying vec4 vLight;
varying vec4 vWorldPosition;
uniform vec4 uAOTable;
uniform float uTime;

vec4 unpackLight(int l) {
  float r = float((l >> 8) & 0xF) / 15.0;
  float g = float((l >> 4) & 0xF) / 15.0;
  float b = float(l & 0xF) / 15.0;
  float s = float((l >> 12) & 0xF) / 15.0;
  return vec4(r, g, b, s);
}

#include <common>
`
    )
    .replace(
      "#include <color_vertex>",
      `
#include <color_vertex>

int ao = light >> 16;

vAO = ((ao == 0) ? uAOTable.x :
    (ao == 1) ? uAOTable.y :
    (ao == 2) ? uAOTable.z : uAOTable.w) / 255.0; 

vLight = unpackLight(light & ((1 << 16) - 1));
`
    )
    .replace(
      "#include <worldpos_vertex>",
      `
vec4 worldPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
  worldPosition = instanceMatrix * worldPosition;
#endif
worldPosition = modelMatrix * worldPosition;
vWorldPosition = worldPosition;
`
    ),
  fragment: ShaderLib.basic.fragmentShader
    .replace(
      "#include <common>",
      `
uniform vec3 uFogColor;
uniform float uFogNear;
uniform float uFogFar;
uniform float uSunlightIntensity;
uniform float uMinBrightness;
uniform float uTime;
varying float vAO;
varying vec4 vLight; 
varying vec4 vWorldPosition;

#include <common>
`
    )
    .replace(
      "#include <envmap_fragment>",
      `
#include <envmap_fragment>

// Intensity of light is wavelength ** 2 
float s = min(vLight.a * vLight.a * uSunlightIntensity * (1.0 - uMinBrightness) + uMinBrightness, 1.0);
float scale = 2.0;

outgoingLight.rgb *= vec3(s + pow(vLight.r, scale), s + pow(vLight.g, scale), s + pow(vLight.b, scale));
outgoingLight *= vAO;
`
    )
    .replace(
      "#include <fog_fragment>",
      `
vec3 fogOrigin = cameraPosition;

float depth = sqrt(pow(vWorldPosition.x - fogOrigin.x, 2.0) + pow(vWorldPosition.z - fogOrigin.z, 2.0));
float fogFactor = smoothstep(uFogNear, uFogFar, depth);

gl_FragColor = mix(gl_FragColor, vec4(uFogColor, gl_FragColor.w), fogFactor);
`
    ),
};

export const customShaders = {
  /**
   * Create a custom shader that sways the chunk with the wind. This shader's swaying is based on the y axis
   * subtracted by the floored y axis. Therefore, blocks on integer y axis values will not sway.
   *
   * @params params The parameters to pass into the shader.
   * @params params.speed The speed of the sway.
   * @params params.amplitude The amplitude of the sway.
   * @params params.scale The scale that is applied to the final sway.
   * @params params.rooted Whether or not should the y-value be floored to 0 first.
   * @params params.yScale The scale that is applied to the y-axis.
   * @returns Shaders to pass into {@link World.overwriteTransparentMaterial}
   */
  sway(
    params: Partial<{
      speed: number;
      amplitude: number;
      scale: number;
      rooted: boolean;
      yScale: number;
    }> = {}
  ) {
    const { speed, amplitude, rooted, scale, yScale } = {
      speed: 1,
      amplitude: 0.1,
      rooted: false,
      scale: 1,
      yScale: 1,
      ...params,
    };

    return {
      vertexShader: DEFAULT_CHUNK_SHADERS.vertex
        .replace(
          "#include <common>",
          `
//	Simplex 3D Noise 
//	by Ian McEwan, Ashima Arts
//
vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}

float snoise(vec3 v){ 
  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);

// First corner
  vec3 i  = floor(v + dot(v, C.yyy) );
  vec3 x0 =   v - i + dot(i, C.xxx) ;

// Other corners
  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min( g.xyz, l.zxy );
  vec3 i2 = max( g.xyz, l.zxy );

  //  x0 = x0 - 0. + 0.0 * C 
  vec3 x1 = x0 - i1 + 1.0 * C.xxx;
  vec3 x2 = x0 - i2 + 2.0 * C.xxx;
  vec3 x3 = x0 - 1. + 3.0 * C.xxx;

// Permutations
  i = mod(i, 289.0 ); 
  vec4 p = permute( permute( permute( 
             i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
           + i.y + vec4(0.0, i1.y, i2.y, 1.0 )) 
           + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

// Gradients
// ( N*N points uniformly over a square, mapped onto an octahedron.)
  float n_ = 1.0/7.0; // N=7
  vec3  ns = n_ * D.wyz - D.xzx;

  vec4 j = p - 49.0 * floor(p * ns.z *ns.z);  //  mod(p,N*N)

  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)

  vec4 x = x_ *ns.x + ns.yyyy;
  vec4 y = y_ *ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);

  vec4 b0 = vec4( x.xy, y.xy );
  vec4 b1 = vec4( x.zw, y.zw );

  vec4 s0 = floor(b0)*2.0 + 1.0;
  vec4 s1 = floor(b1)*2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));

  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

  vec3 p0 = vec3(a0.xy,h.x);
  vec3 p1 = vec3(a0.zw,h.y);
  vec3 p2 = vec3(a1.xy,h.z);
  vec3 p3 = vec3(a1.zw,h.w);

//Normalise gradients
  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;

// Mix final noise value
  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
  m = m * m;
  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), 
                                dot(p2,x2), dot(p3,x3) ) );
}
`
        )
        .replace(
          "#include <begin_vertex>",
          `
vec3 transformed = vec3(position);
float scale = uTime * 0.00002 * ${speed.toFixed(2)};
transformed.x = position.x 
             + ${
               rooted ? "(position.y - floor(position.y))" : "1.0"
             } * ${scale.toFixed(
            2
          )} * snoise(vec3(position.x * scale, position.y * scale * ${yScale.toFixed(
            2
          )}, position.z * scale)) * 2.0 * ${amplitude.toFixed(2)};
`
        ),
      fragmentShader: DEFAULT_CHUNK_SHADERS.fragment,
    };
  },
};
