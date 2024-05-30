"use strict";(self.webpackChunkbento=self.webpackChunkbento||[]).push([[8585],{74789:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return d}});var r=n(85893),a=n(11151),s=n(74866),i=n(85162);const o={title:"archive",slug:"archive",type:"processor",status:"stable",categories:["Parsing","Utility"],name:"archive"},l=void 0,c={id:"components/processors/archive",title:"archive",description:"\x3c!--",source:"@site/docs/components/processors/archive.md",sourceDirName:"components/processors",slug:"/components/processors/archive",permalink:"/docs/components/processors/archive",draft:!1,unlisted:!1,editUrl:"https://github.com/warpstreamlabs/bento/edit/main/website/docs/components/processors/archive.md",tags:[],version:"current",frontMatter:{title:"archive",slug:"archive",type:"processor",status:"stable",categories:["Parsing","Utility"],name:"archive"},sidebar:"docs",previous:{title:"About",permalink:"/docs/components/processors/about"},next:{title:"avro",permalink:"/docs/components/processors/avro"}},u={},d=[{value:"Fields",id:"fields",level:2},{value:"<code>format</code>",id:"format",level:3},{value:"<code>path</code>",id:"path",level:3},{value:"Examples",id:"examples",level:2}];function h(e){const t={a:"a",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"Archives all the messages of a batch into a single message according to the selected archive format."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yml",children:'# Config fields, showing default values\nlabel: ""\narchive:\n  format: "" # No default (required)\n  path: ""\n'})}),"\n",(0,r.jsxs)(t.p,{children:["Some archive formats (such as tar, zip) treat each archive item (message part) as a file with a path. Since message parts only contain raw data a unique path must be generated for each part. This can be done by using function interpolations on the 'path' field as described ",(0,r.jsx)(t.a,{href:"/docs/configuration/interpolation#bloblang-queries",children:"here"}),". For types that aren't file based (such as binary) the file field is ignored."]}),"\n",(0,r.jsxs)(t.p,{children:["The resulting archived message adopts the metadata of the ",(0,r.jsx)(t.em,{children:"first"})," message part of the batch."]}),"\n",(0,r.jsxs)(t.p,{children:["The functionality of this processor depends on being applied across messages that are batched. You can find out more about batching ",(0,r.jsx)(t.a,{href:"/docs/configuration/batching",children:"in this doc"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"fields",children:"Fields"}),"\n",(0,r.jsx)(t.h3,{id:"format",children:(0,r.jsx)(t.code,{children:"format"})}),"\n",(0,r.jsx)(t.p,{children:"The archiving format to apply."}),"\n",(0,r.jsxs)(t.p,{children:["Type: ",(0,r.jsx)(t.code,{children:"string"})]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Option"}),(0,r.jsx)(t.th,{children:"Summary"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"binary"})}),(0,r.jsxs)(t.td,{children:["Archive messages to a ",(0,r.jsx)(t.a,{href:"https://github.com/warpstreamlabs/bento/blob/main/internal/message/message.go#L96",children:"binary blob format"}),"."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"concatenate"})}),(0,r.jsx)(t.td,{children:"Join the raw contents of each message into a single binary message."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"json_array"})}),(0,r.jsx)(t.td,{children:"Attempt to parse each message as a JSON document and append the result to an array, which becomes the contents of the resulting message."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"lines"})}),(0,r.jsx)(t.td,{children:"Join the raw contents of each message and insert a line break between each one."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"tar"})}),(0,r.jsx)(t.td,{children:"Archive messages to a unix standard tape archive."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"zip"})}),(0,r.jsx)(t.td,{children:"Archive messages to a zip file."})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"path",children:(0,r.jsx)(t.code,{children:"path"})}),"\n",(0,r.jsxs)(t.p,{children:["The path to set for each message in the archive (when applicable).\nThis field supports ",(0,r.jsx)(t.a,{href:"/docs/configuration/interpolation#bloblang-queries",children:"interpolation functions"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["Type: ",(0,r.jsx)(t.code,{children:"string"}),(0,r.jsx)(t.br,{}),"\n","Default: ",(0,r.jsx)(t.code,{children:'""'})]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yml",children:'# Examples\n\npath: ${!count("files")}-${!timestamp_unix_nano()}.txt\n\npath: ${!meta("kafka_key")}-${!json("id")}.json\n'})}),"\n",(0,r.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(s.Z,{defaultValue:"Tar Archive",values:[{label:"Tar Archive",value:"Tar Archive"}],children:(0,r.jsxs)(i.Z,{value:"Tar Archive",children:[(0,r.jsx)(t.p,{children:"If we had JSON messages in a batch each of the form:"}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'{"doc":{"id":"foo","body":"hello world 1"}}\n'})}),(0,r.jsxs)(t.p,{children:["And we wished to tar archive them, setting their filenames to their respective unique IDs (with the extension ",(0,r.jsx)(t.code,{children:".json"}),"), our config might look like\nthis:"]}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:'pipeline:\n  processors:\n    - archive:\n        format: tar\n        path: ${!json("doc.id")}.json\n'})})]})})]})}function p(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},85162:function(e,t,n){n.d(t,{Z:function(){return i}});n(67294);var r=n(86010),a={tabItem:"tabItem_Ymn6"},s=n(85893);function i(e){let{children:t,hidden:n,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,i),hidden:n,children:t})}},74866:function(e,t,n){n.d(t,{Z:function(){return w}});var r=n(67294),a=n(86010),s=n(12466),i=n(16550),o=n(20469),l=n(91980),c=n(67392),u=n(50012);function d(e){var t,n;return null!=(t=null==(n=r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=null!=t?t:function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.k6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:t,groupId:n});return[(0,l._X)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,s=h(e),[i,l]=(0,r.useState)((()=>function(e){var t;let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+r.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}const a=null!=(t=r.find((e=>e.default)))?t:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:s}))),[c,d]=f({queryString:n,groupId:a}),[m,b]=function(e){let{groupId:t}=e;const n=function(e){return e?"docusaurus.tab."+e:null}(t),[a,s]=(0,u.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:a}),v=(()=>{const e=null!=c?c:m;return p({value:e,tabValues:s})?e:null})();(0,o.Z)((()=>{v&&l(v)}),[v]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error("Can't select invalid tab value="+e);l(e),d(e),b(e)}),[d,b,s]),tabValues:s}}var b=n(72389),v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"},x=n(85893);function g(e){let{className:t,block:n,selectedValue:r,selectValue:i,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),u=e=>{const t=e.currentTarget,n=l.indexOf(t),a=o[n].value;a!==r&&(c(t),i(a))},d=e=>{var t;let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{var r;const t=l.indexOf(e.currentTarget)+1;n=null!=(r=l[t])?r:l[0];break}case"ArrowLeft":{var a;const t=l.indexOf(e.currentTarget)-1;n=null!=(a=l[t])?a:l[l.length-1];break}}null==(t=n)||t.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>l.push(e),onKeyDown:d,onClick:u,...s,className:(0,a.Z)("tabs__item",v.tabItem,null==s?void 0:s.className,{"tabs__item--active":r===t}),children:null!=n?n:t},t)}))})}function j(e){let{lazy:t,children:n,selectedValue:a}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function y(e){const t=m(e);return(0,x.jsxs)("div",{className:(0,a.Z)("tabs-container",v.tabList),children:[(0,x.jsx)(g,{...e,...t}),(0,x.jsx)(j,{...e,...t})]})}function w(e){const t=(0,b.Z)();return(0,x.jsx)(y,{...e,children:d(e.children)},String(t))}},11151:function(e,t,n){n.d(t,{Z:function(){return o},a:function(){return i}});var r=n(67294);const a={},s=r.createContext(a);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);