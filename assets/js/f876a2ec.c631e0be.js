"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9062],{6762:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>o,frontMatter:()=>s,metadata:()=>d,toc:()=>x});var n=l(4246),r=l(1670);const s={id:"BlockUtils",title:"Class: BlockUtils",sidebar_label:"BlockUtils",sidebar_position:0,custom_edit_url:null},i="Example",d={id:"client/classes/BlockUtils",title:"Class: BlockUtils",description:"A utility class for extracting and inserting voxel data from and into numbers.",source:"@site/docs/api/client/classes/BlockUtils.md",sourceDirName:"client/classes",slug:"/client/classes/BlockUtils",permalink:"/api/client/classes/BlockUtils",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"BlockUtils",title:"Class: BlockUtils",sidebar_label:"BlockUtils",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"BlockRotation",permalink:"/api/client/classes/BlockRotation"},next:{title:"BoxLayer",permalink:"/api/client/classes/BoxLayer"}},c={},x=[{value:"Methods",id:"methods",level:2},{value:"extractID",id:"extractid",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"extractRotation",id:"extractrotation",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"extractStage",id:"extractstage",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"getBlockRotatedTransparency",id:"getblockrotatedtransparency",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-3",level:4},{value:"getBlockTorchLightLevel",id:"getblocktorchlightlevel",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-4",level:4},{value:"insertAll",id:"insertall",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"Returns",id:"returns-5",level:4},{value:"insertID",id:"insertid",level:3},{value:"Parameters",id:"parameters-6",level:4},{value:"Returns",id:"returns-6",level:4},{value:"insertRotation",id:"insertrotation",level:3},{value:"Parameters",id:"parameters-7",level:4},{value:"Returns",id:"returns-7",level:4},{value:"insertStage",id:"insertstage",level:3},{value:"Parameters",id:"parameters-8",level:4},{value:"Returns",id:"returns-8",level:4}];function h(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"A utility class for extracting and inserting voxel data from and into numbers."}),"\n",(0,n.jsx)(t.p,{children:"The voxel data is stored in the following format:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Voxel type: ",(0,n.jsx)(t.code,{children:"0x0000ffff"})]}),"\n",(0,n.jsxs)(t.li,{children:["Rotation: ",(0,n.jsx)(t.code,{children:"0x000f0000"})]}),"\n",(0,n.jsxs)(t.li,{children:["Y-rotation: ",(0,n.jsx)(t.code,{children:"0x00f00000"})]}),"\n",(0,n.jsxs)(t.li,{children:["Stage: ",(0,n.jsx)(t.code,{children:"0xff000000"})]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["TODO-DOCS\nFor more information about voxel data, see ",(0,n.jsx)(t.a,{href:"/",children:"here"})]}),"\n",(0,n.jsx)(t.h1,{id:"example",children:"Example"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:"// Insert a voxel type 13 into zero.\nconst number = VoxelUtils.insertID(0, 13);\n"})}),"\n",(0,n.jsx)(t.h2,{id:"methods",children:"Methods"}),"\n",(0,n.jsx)(t.h3,{id:"extractid",children:"extractID"}),"\n",(0,n.jsxs)(t.p,{children:["\u25b8 ",(0,n.jsx)(t.strong,{children:"extractID"}),"(",(0,n.jsx)(t.code,{children:"voxel"}),"): ",(0,n.jsx)(t.code,{children:"number"})]}),"\n",(0,n.jsx)(t.p,{children:"Extract the voxel id from a number."}),"\n",(0,n.jsx)(t.h4,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Name"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"voxel"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"number"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"The voxel value to extract from."})]})})]}),"\n",(0,n.jsx)(t.h4,{id:"returns",children:"Returns"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:"number"})}),"\n",(0,n.jsx)(t.p,{children:"The extracted voxel id."}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h3,{id:"extractrotation",children:"extractRotation"}),"\n",(0,n.jsxs)(t.p,{children:["\u25b8 ",(0,n.jsx)(t.strong,{children:"extractRotation"}),"(",(0,n.jsx)(t.code,{children:"voxel"}),"): ",(0,n.jsx)(t.a,{href:"/api/client/classes/BlockRotation",children:(0,n.jsx)(t.code,{children:"BlockRotation"})})]}),"\n",(0,n.jsx)(t.p,{children:"Extract the voxel rotation from a number."}),"\n",(0,n.jsx)(t.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Name"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"voxel"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"number"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"The voxel value to extract from."})]})})]}),"\n",(0,n.jsx)(t.h4,{id:"returns-1",children:"Returns"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"/api/client/classes/BlockRotation",children:(0,n.jsx)(t.code,{children:"BlockRotation"})})}),"\n",(0,n.jsx)(t.p,{children:"The extracted voxel rotation."}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h3,{id:"extractstage",children:"extractStage"}),"\n",(0,n.jsxs)(t.p,{children:["\u25b8 ",(0,n.jsx)(t.strong,{children:"extractStage"}),"(",(0,n.jsx)(t.code,{children:"voxel"}),"): ",(0,n.jsx)(t.code,{children:"number"})]}),"\n",(0,n.jsx)(t.p,{children:"Extract the voxel stage from a number."}),"\n",(0,n.jsx)(t.h4,{id:"parameters-2",children:"Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Name"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"voxel"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"number"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"The voxel value to extract from."})]})})]}),"\n",(0,n.jsx)(t.h4,{id:"returns-2",children:"Returns"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:"number"})}),"\n",(0,n.jsx)(t.p,{children:"The extracted voxel stage."}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h3,{id:"getblockrotatedtransparency",children:"getBlockRotatedTransparency"}),"\n",(0,n.jsxs)(t.p,{children:["\u25b8 ",(0,n.jsx)(t.strong,{children:"getBlockRotatedTransparency"}),"(",(0,n.jsx)(t.code,{children:"block"}),", ",(0,n.jsx)(t.code,{children:"rotation"}),"): ",(0,n.jsx)(t.code,{children:"boolean"}),"[]"]}),"\n",(0,n.jsx)(t.h4,{id:"parameters-3",children:"Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Name"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"block"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.a,{href:"/api/client/modules#block",children:(0,n.jsx)(t.code,{children:"Block"})})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"rotation"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.a,{href:"/api/client/classes/BlockRotation",children:(0,n.jsx)(t.code,{children:"BlockRotation"})})})]})]})]}),"\n",(0,n.jsx)(t.h4,{id:"returns-3",children:"Returns"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"boolean"}),"[]"]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h3,{id:"getblocktorchlightlevel",children:"getBlockTorchLightLevel"}),"\n",(0,n.jsxs)(t.p,{children:["\u25b8 ",(0,n.jsx)(t.strong,{children:"getBlockTorchLightLevel"}),"(",(0,n.jsx)(t.code,{children:"block"}),", ",(0,n.jsx)(t.code,{children:"color"}),"): ",(0,n.jsx)(t.code,{children:"number"})]}),"\n",(0,n.jsx)(t.h4,{id:"parameters-4",children:"Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Name"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"block"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.a,{href:"/api/client/modules#block",children:(0,n.jsx)(t.code,{children:"Block"})})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"color"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.a,{href:"/api/client/modules#lightcolor",children:(0,n.jsx)(t.code,{children:"LightColor"})})})]})]})]}),"\n",(0,n.jsx)(t.h4,{id:"returns-4",children:"Returns"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:"number"})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h3,{id:"insertall",children:"insertAll"}),"\n",(0,n.jsxs)(t.p,{children:["\u25b8 ",(0,n.jsx)(t.strong,{children:"insertAll"}),"(",(0,n.jsx)(t.code,{children:"id"}),", ",(0,n.jsx)(t.code,{children:"rotation?"}),", ",(0,n.jsx)(t.code,{children:"stage?"}),"): ",(0,n.jsx)(t.code,{children:"number"})]}),"\n",(0,n.jsx)(t.h4,{id:"parameters-5",children:"Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Name"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"id"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"number"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"rotation?"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.a,{href:"/api/client/classes/BlockRotation",children:(0,n.jsx)(t.code,{children:"BlockRotation"})})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"stage?"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"number"})})]})]})]}),"\n",(0,n.jsx)(t.h4,{id:"returns-5",children:"Returns"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:"number"})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h3,{id:"insertid",children:"insertID"}),"\n",(0,n.jsxs)(t.p,{children:["\u25b8 ",(0,n.jsx)(t.strong,{children:"insertID"}),"(",(0,n.jsx)(t.code,{children:"voxel"}),", ",(0,n.jsx)(t.code,{children:"id"}),"): ",(0,n.jsx)(t.code,{children:"number"})]}),"\n",(0,n.jsx)(t.p,{children:"Insert a voxel id into a number."}),"\n",(0,n.jsx)(t.h4,{id:"parameters-6",children:"Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Name"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"voxel"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"number"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"The voxel value to insert the id into."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"id"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"number"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"The voxel id to insert."})]})]})]}),"\n",(0,n.jsx)(t.h4,{id:"returns-6",children:"Returns"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:"number"})}),"\n",(0,n.jsx)(t.p,{children:"The inserted voxel value."}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h3,{id:"insertrotation",children:"insertRotation"}),"\n",(0,n.jsxs)(t.p,{children:["\u25b8 ",(0,n.jsx)(t.strong,{children:"insertRotation"}),"(",(0,n.jsx)(t.code,{children:"voxel"}),", ",(0,n.jsx)(t.code,{children:"rotation"}),"): ",(0,n.jsx)(t.code,{children:"number"})]}),"\n",(0,n.jsx)(t.p,{children:"Insert a voxel rotation into a number."}),"\n",(0,n.jsx)(t.h4,{id:"parameters-7",children:"Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Name"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"voxel"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"number"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"The voxel value to insert the rotation into."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"rotation"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.a,{href:"/api/client/classes/BlockRotation",children:(0,n.jsx)(t.code,{children:"BlockRotation"})})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"The voxel rotation to insert."})]})]})]}),"\n",(0,n.jsx)(t.h4,{id:"returns-7",children:"Returns"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:"number"})}),"\n",(0,n.jsx)(t.p,{children:"The inserted voxel value."}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h3,{id:"insertstage",children:"insertStage"}),"\n",(0,n.jsxs)(t.p,{children:["\u25b8 ",(0,n.jsx)(t.strong,{children:"insertStage"}),"(",(0,n.jsx)(t.code,{children:"voxel"}),", ",(0,n.jsx)(t.code,{children:"stage"}),"): ",(0,n.jsx)(t.code,{children:"number"})]}),"\n",(0,n.jsx)(t.p,{children:"Insert a voxel stage into a number."}),"\n",(0,n.jsx)(t.h4,{id:"parameters-8",children:"Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Name"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"voxel"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"number"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"The voxel value to insert the stage into."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"stage"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"number"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"The voxel stage to insert."})]})]})]}),"\n",(0,n.jsx)(t.h4,{id:"returns-8",children:"Returns"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:"number"})}),"\n",(0,n.jsx)(t.p,{children:"The inserted voxel value."})]})}function o(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},1670:(e,t,l)=>{l.d(t,{Z:()=>d,a:()=>i});var n=l(7378);const r={},s=n.createContext(r);function i(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);