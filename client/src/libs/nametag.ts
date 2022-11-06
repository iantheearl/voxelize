import { NearestFilter } from "three";

import { SpriteText } from "./sprite-text";

/**
 * Parameters to create a name tag.
 */
export type NameTagParams = {
  /**
   * The font face to create the name tag. Defaults to `"monospace"`.
   */
  fontFace?: string;

  /**
   * The font size to create the name tag. Defaults to `0.1`.
   */
  fontSize?: number;

  /**
   * The y-offset of the nametag moved upwards. Defaults to `0`.
   */
  yOffset?: number;

  /**
   * The color of the name tag. Defaults to `0xffffff`.
   */
  color?: string;

  /**
   * The background color of the name tag. Defaults to `0x00000077`.
   */
  backgroundColor?: string;
};

const defaultParams: NameTagParams = {
  fontFace: "monospace",
  fontSize: 0.1,
  yOffset: 0,
  color: "#ffffff",
  backgroundColor: "#00000077",
};

/**
 * A class that allows you to create a name tag mesh. This name tag mesh also supports colored text
 * using the {@link ColorText} syntax. Name tags can be treated like any other mesh.
 *
 * ![Name tag](/img/nametag.png)
 *
 * @noInheritDoc
 */
export class NameTag extends SpriteText {
  constructor(text: string, params: Partial<NameTagParams> = {}) {
    super(text, params.fontSize ?? defaultParams.fontSize);

    const { fontFace, yOffset, backgroundColor, color } = {
      ...defaultParams,
      ...params,
    };

    this.fontFace = fontFace;
    this.position.y += yOffset;
    this.backgroundColor = backgroundColor;
    this.material.depthTest = false;
    this.renderOrder = 1000000000000;
    this.strokeColor = color;

    const image = this.material.map;

    if (image) {
      image.minFilter = NearestFilter;
      image.magFilter = NearestFilter;
    }
  }
}
