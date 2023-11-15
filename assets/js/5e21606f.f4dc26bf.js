"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1774],{1210:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>x,frontMatter:()=>i,metadata:()=>d,toc:()=>h});var s=l(4246),n=l(1670);const i={id:"Debug",title:"Class: Debug",sidebar_label:"Debug",sidebar_position:0,custom_edit_url:null},r="Example",d={id:"client/classes/Debug",title:"Class: Debug",description:"A class for general debugging purposes in Voxelize, including FPS, value tracking, and real-time value testing.",source:"@site/docs/api/client/classes/Debug.md",sourceDirName:"client/classes",slug:"/client/classes/Debug",permalink:"/api/client/classes/Debug",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"Debug",title:"Class: Debug",sidebar_label:"Debug",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"DOMUtils",permalink:"/api/client/classes/DOMUtils"},next:{title:"Entities",permalink:"/api/client/classes/Entities"}},c={},h=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Overrides",id:"overrides",level:4},{value:"Properties",id:"properties",level:2},{value:"dataWrapper",id:"datawrapper",level:3},{value:"domElement",id:"domelement",level:3},{value:"entriesWrapper",id:"entrieswrapper",level:3},{value:"options",id:"options",level:3},{value:"stats",id:"stats",level:3},{value:"Methods",id:"methods",level:2},{value:"displayNewline",id:"displaynewline",level:3},{value:"Returns",id:"returns-1",level:4},{value:"displayTitle",id:"displaytitle",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-2",level:4},{value:"registerDisplay",id:"registerdisplay",level:3},{value:"Type parameters",id:"type-parameters",level:4},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-3",level:4},{value:"removeDisplay",id:"removedisplay",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-4",level:4},{value:"toggle",id:"toggle",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-5",level:4},{value:"update",id:"update",level:3},{value:"Returns",id:"returns-6",level:4}];function a(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"A class for general debugging purposes in Voxelize, including FPS, value tracking, and real-time value testing."}),"\n",(0,s.jsx)(t.h1,{id:"example",children:"Example"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:'const debug = new VOXELIZE.Debug();\n\n// Track the voxel property of `controls`.\ndebug.registerDisplay("Position", controls, "voxel");\n\n// Add a function to track sunlight dynamically.\ndebug.registerDisplay("Sunlight", () => {\n  return world.getSunlightByVoxel(...controls.voxel);\n});\n\n// In the game loop, trigger debug updates.\ndebug.update();\n'})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Debug",src:l(7327).Z+"",width:"2560",height:"1440"})}),"\n",(0,s.jsx)(t.h2,{id:"hierarchy",children:"Hierarchy"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"Group"})}),"\n",(0,s.jsxs)(t.p,{children:["\u21b3 ",(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"Debug"})})]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"constructors",children:"Constructors"}),"\n",(0,s.jsx)(t.h3,{id:"constructor",children:"constructor"}),"\n",(0,s.jsxs)(t.p,{children:["\u2022 ",(0,s.jsx)(t.strong,{children:"new Debug"}),"(",(0,s.jsx)(t.code,{children:"domElement?"}),", ",(0,s.jsx)(t.code,{children:"options?"}),"): ",(0,s.jsx)(t.a,{href:"/api/client/classes/Debug",children:(0,s.jsx)(t.code,{children:"Debug"})})]}),"\n",(0,s.jsxs)(t.p,{children:["Create a new ",(0,s.jsx)(t.a,{href:"/api/client/classes/Debug",children:"Debug"})," instance."]}),"\n",(0,s.jsx)(t.h4,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Name"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Default value"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"domElement"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"HTMLElement"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"document.body"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"The DOM element to append the debug panel to."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"options"})}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,s.jsx)(t.code,{children:"Partial"}),"<",(0,s.jsx)(t.a,{href:"/api/client/modules#debugoptions",children:(0,s.jsx)(t.code,{children:"DebugOptions"})}),">"]}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"{}"})}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["Parameters to create a ",(0,s.jsx)(t.a,{href:"/api/client/classes/Debug",children:"Debug"})," instance."]})]})]})]}),"\n",(0,s.jsx)(t.h4,{id:"returns",children:"Returns"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"/api/client/classes/Debug",children:(0,s.jsx)(t.code,{children:"Debug"})})}),"\n",(0,s.jsx)(t.h4,{id:"overrides",children:"Overrides"}),"\n",(0,s.jsx)(t.p,{children:"Group.constructor"}),"\n",(0,s.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n",(0,s.jsx)(t.h3,{id:"datawrapper",children:"dataWrapper"}),"\n",(0,s.jsxs)(t.p,{children:["\u2022 ",(0,s.jsx)(t.strong,{children:"dataWrapper"}),": ",(0,s.jsx)(t.code,{children:"HTMLDivElement"})]}),"\n",(0,s.jsx)(t.p,{children:"The HTML element that wraps all the debug entries and stats.js instance, located\non the top-left by default."}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h3,{id:"domelement",children:"domElement"}),"\n",(0,s.jsxs)(t.p,{children:["\u2022 ",(0,s.jsx)(t.strong,{children:"domElement"}),": ",(0,s.jsx)(t.code,{children:"HTMLElement"})]}),"\n",(0,s.jsxs)(t.p,{children:["The DOM element to append the debug panel to. Defaults to ",(0,s.jsx)(t.code,{children:"document.body"}),"."]}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h3,{id:"entrieswrapper",children:"entriesWrapper"}),"\n",(0,s.jsxs)(t.p,{children:["\u2022 ",(0,s.jsx)(t.strong,{children:"entriesWrapper"}),": ",(0,s.jsx)(t.code,{children:"HTMLDivElement"})]}),"\n",(0,s.jsx)(t.p,{children:"A HTML element wrapping all registered debug entries."}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h3,{id:"options",children:"options"}),"\n",(0,s.jsxs)(t.p,{children:["\u2022 ",(0,s.jsx)(t.strong,{children:"options"}),": ",(0,s.jsx)(t.a,{href:"/api/client/modules#debugoptions",children:(0,s.jsx)(t.code,{children:"DebugOptions"})})]}),"\n",(0,s.jsxs)(t.p,{children:["Parameters to create a ",(0,s.jsx)(t.a,{href:"/api/client/classes/Debug",children:"Debug"})," instance."]}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h3,{id:"stats",children:"stats"}),"\n",(0,s.jsxs)(t.p,{children:["\u2022 ",(0,s.jsx)(t.code,{children:"Optional"})," ",(0,s.jsx)(t.strong,{children:"stats"}),": ",(0,s.jsx)(t.code,{children:"Stats"})]}),"\n",(0,s.jsx)(t.p,{children:"The stats.js instance, situated in the top-left corner after the data entries."}),"\n",(0,s.jsx)(t.h2,{id:"methods",children:"Methods"}),"\n",(0,s.jsx)(t.h3,{id:"displaynewline",children:"displayNewline"}),"\n",(0,s.jsxs)(t.p,{children:["\u25b8 ",(0,s.jsx)(t.strong,{children:"displayNewline"}),"(): ",(0,s.jsx)(t.code,{children:"this"})]}),"\n",(0,s.jsx)(t.p,{children:"Add an empty line to the debug entries for spacing."}),"\n",(0,s.jsx)(t.h4,{id:"returns-1",children:"Returns"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"this"})}),"\n",(0,s.jsx)(t.p,{children:"The debug instance for chaining."}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h3,{id:"displaytitle",children:"displayTitle"}),"\n",(0,s.jsxs)(t.p,{children:["\u25b8 ",(0,s.jsx)(t.strong,{children:"displayTitle"}),"(",(0,s.jsx)(t.code,{children:"title"}),"): ",(0,s.jsx)(t.code,{children:"this"})]}),"\n",(0,s.jsx)(t.p,{children:"Add a static title to the debug entries for grouping."}),"\n",(0,s.jsx)(t.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Name"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"title"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"string"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"A title to display."})]})})]}),"\n",(0,s.jsx)(t.h4,{id:"returns-2",children:"Returns"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"this"})}),"\n",(0,s.jsx)(t.p,{children:"The debug instance for chaining."}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h3,{id:"registerdisplay",children:"registerDisplay"}),"\n",(0,s.jsxs)(t.p,{children:["\u25b8 ",(0,s.jsx)(t.strong,{children:"registerDisplay"}),"<",(0,s.jsx)(t.code,{children:"T"}),">(",(0,s.jsx)(t.code,{children:"title"}),", ",(0,s.jsx)(t.code,{children:"object?"}),", ",(0,s.jsx)(t.code,{children:"attribute?"}),", ",(0,s.jsx)(t.code,{children:"formatter?"}),"): ",(0,s.jsx)(t.code,{children:"this"})]}),"\n",(0,s.jsxs)(t.p,{children:["Register a new object attribute to track. Needs to call ",(0,s.jsx)(t.a,{href:"/api/client/classes/Debug#update",children:"Debug.update"})," in the game loop\nto update the value."]}),"\n",(0,s.jsx)(t.h4,{id:"type-parameters",children:"Type parameters"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Name"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"T"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"any"})})]})})]}),"\n",(0,s.jsx)(t.h4,{id:"parameters-2",children:"Parameters"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Name"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"title"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"string"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"The title of the debug entry."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"object?"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"T"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"The object to track."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"attribute?"})}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["keyof ",(0,s.jsx)(t.code,{children:"T"})]}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"The attribute of the object to track."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"formatter"})}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["(",(0,s.jsx)(t.code,{children:"str"}),": ",(0,s.jsx)(t.code,{children:"string"}),") => ",(0,s.jsx)(t.code,{children:"string"})]}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"A function to format the value of the attribute."})]})]})]}),"\n",(0,s.jsx)(t.h4,{id:"returns-3",children:"Returns"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"this"})}),"\n",(0,s.jsx)(t.p,{children:"The debug instance for chaining."}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h3,{id:"removedisplay",children:"removeDisplay"}),"\n",(0,s.jsxs)(t.p,{children:["\u25b8 ",(0,s.jsx)(t.strong,{children:"removeDisplay"}),"(",(0,s.jsx)(t.code,{children:"title"}),"): ",(0,s.jsx)(t.code,{children:"void"})]}),"\n",(0,s.jsx)(t.p,{children:"Remove a registered object attribute from tracking."}),"\n",(0,s.jsx)(t.h4,{id:"parameters-3",children:"Parameters"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Name"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"title"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"string"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"The title of the debug entry."})]})})]}),"\n",(0,s.jsx)(t.h4,{id:"returns-4",children:"Returns"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"void"})}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h3,{id:"toggle",children:"toggle"}),"\n",(0,s.jsxs)(t.p,{children:["\u25b8 ",(0,s.jsx)(t.strong,{children:"toggle"}),"(",(0,s.jsx)(t.code,{children:"force?"}),"): ",(0,s.jsx)(t.code,{children:"void"})]}),"\n",(0,s.jsx)(t.p,{children:"Toggle the debug instance on/off."}),"\n",(0,s.jsx)(t.h4,{id:"parameters-4",children:"Parameters"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Name"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Default value"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"force"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"any"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"null"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Whether or not to force the debug panel to be shown/hidden."})]})})]}),"\n",(0,s.jsx)(t.h4,{id:"returns-5",children:"Returns"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"void"})}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h3,{id:"update",children:"update"}),"\n",(0,s.jsxs)(t.p,{children:["\u25b8 ",(0,s.jsx)(t.strong,{children:"update"}),"(): ",(0,s.jsx)(t.code,{children:"void"})]}),"\n",(0,s.jsx)(t.p,{children:"Update the debug entries with the latest values. This should be called in the game loop."}),"\n",(0,s.jsx)(t.h4,{id:"returns-6",children:"Returns"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"void"})})]})}function x(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},7327:(e,t,l)=>{l.d(t,{Z:()=>s});const s=l.p+"assets/images/debug-674b144d391529bc12997481a6673dbf.png"},1670:(e,t,l)=>{l.d(t,{Z:()=>d,a:()=>r});var s=l(7378);const n={},i=s.createContext(n);function r(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);