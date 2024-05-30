"use strict";(self.webpackChunkbento=self.webpackChunkbento||[]).push([[1855],{57775:function(e,n,t){t.r(n),t.d(n,{assets:function(){return i},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return u}});var r=t(85893),s=t(11151);t(74866),t(85162);const a={title:"stdin",slug:"stdin",type:"input",status:"stable",categories:["Local"],name:"stdin"},o=void 0,l={id:"components/inputs/stdin",title:"stdin",description:"\x3c!--",source:"@site/docs/components/inputs/stdin.md",sourceDirName:"components/inputs",slug:"/components/inputs/stdin",permalink:"/docs/components/inputs/stdin",draft:!1,unlisted:!1,editUrl:"https://github.com/warpstreamlabs/bento/edit/main/website/docs/components/inputs/stdin.md",tags:[],version:"current",frontMatter:{title:"stdin",slug:"stdin",type:"input",status:"stable",categories:["Local"],name:"stdin"},sidebar:"docs",previous:{title:"sql_select",permalink:"/docs/components/inputs/sql_select"},next:{title:"subprocess",permalink:"/docs/components/inputs/subprocess"}},i={},u=[{value:"Fields",id:"fields",level:2},{value:"<code>scanner</code>",id:"scanner",level:3},{value:"<code>auto_replay_nacks</code>",id:"auto_replay_nacks",level:3}];function c(e){const n={a:"a",br:"br",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Consumes data piped to stdin, chopping it into individual messages according to the specified scanner."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yml",children:'# Config fields, showing default values\ninput:\n  label: ""\n  stdin:\n    scanner:\n      lines: {}\n    auto_replay_nacks: true\n'})}),"\n",(0,r.jsx)(n.h2,{id:"fields",children:"Fields"}),"\n",(0,r.jsx)(n.h3,{id:"scanner",children:(0,r.jsx)(n.code,{children:"scanner"})}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.a,{href:"/docs/components/scanners/about",children:"scanner"})," by which the stream of bytes consumed will be broken out into individual messages. Scanners are useful for processing large sources of data without holding the entirety of it within memory. For example, the ",(0,r.jsx)(n.code,{children:"csv"})," scanner allows you to process individual CSV rows without loading the entire CSV file in memory at once."]}),"\n",(0,r.jsxs)(n.p,{children:["Type: ",(0,r.jsx)(n.code,{children:"scanner"}),(0,r.jsx)(n.br,{}),"\n","Default: ",(0,r.jsx)(n.code,{children:'{"lines":{}}'}),(0,r.jsx)(n.br,{}),"\n","Requires version 4.25.0 or newer"]}),"\n",(0,r.jsx)(n.h3,{id:"auto_replay_nacks",children:(0,r.jsx)(n.code,{children:"auto_replay_nacks"})}),"\n",(0,r.jsxs)(n.p,{children:["Whether messages that are rejected (nacked) at the output level should be automatically replayed indefinitely, eventually resulting in back pressure if the cause of the rejections is persistent. If set to ",(0,r.jsx)(n.code,{children:"false"})," these messages will instead be deleted. Disabling auto replays can greatly improve memory efficiency of high throughput streams as the original shape of the data can be discarded immediately upon consumption and mutation."]}),"\n",(0,r.jsxs)(n.p,{children:["Type: ",(0,r.jsx)(n.code,{children:"bool"}),(0,r.jsx)(n.br,{}),"\n","Default: ",(0,r.jsx)(n.code,{children:"true"})]})]})}function d(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},85162:function(e,n,t){t.d(n,{Z:function(){return o}});t(67294);var r=t(86010),s={tabItem:"tabItem_Ymn6"},a=t(85893);function o(e){let{children:n,hidden:t,className:o}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.Z)(s.tabItem,o),hidden:t,children:n})}},74866:function(e,n,t){t.d(n,{Z:function(){return w}});var r=t(67294),s=t(86010),a=t(12466),o=t(16550),l=t(20469),i=t(91980),u=t(67392),c=t(50012);function d(e){var n,t;return null!=(n=null==(t=r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}function p(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=null!=n?n:function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:s}}=e;return{value:n,label:t,attributes:r,default:s}}))}(t);return function(e){const n=(0,u.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:t}=e;const s=(0,o.k6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:n,groupId:t});return[(0,i._X)(a),(0,r.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(s.location.search);n.set(a,e),s.replace({...s.location,search:n.toString()})}),[a,s])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,a=p(e),[o,i]=(0,r.useState)((()=>function(e){var n;let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+r.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}const s=null!=(n=r.find((e=>e.default)))?n:r[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:a}))),[u,d]=f({queryString:t,groupId:s}),[m,b]=function(e){let{groupId:n}=e;const t=function(e){return e?"docusaurus.tab."+e:null}(n),[s,a]=(0,c.Nk)(t);return[s,(0,r.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:s}),v=(()=>{const e=null!=u?u:m;return h({value:e,tabValues:a})?e:null})();(0,l.Z)((()=>{v&&i(v)}),[v]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:a}))throw new Error("Can't select invalid tab value="+e);i(e),d(e),b(e)}),[d,b,a]),tabValues:a}}var b=t(72389),v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"},g=t(85893);function y(e){let{className:n,block:t,selectedValue:r,selectValue:o,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:u}=(0,a.o5)(),c=e=>{const n=e.currentTarget,t=i.indexOf(n),s=l[t].value;s!==r&&(u(n),o(s))},d=e=>{var n;let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{var r;const n=i.indexOf(e.currentTarget)+1;t=null!=(r=i[n])?r:i[0];break}case"ArrowLeft":{var s;const n=i.indexOf(e.currentTarget)-1;t=null!=(s=i[n])?s:i[i.length-1];break}}null==(n=t)||n.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:a}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>i.push(e),onKeyDown:d,onClick:c,...a,className:(0,s.Z)("tabs__item",v.tabItem,null==a?void 0:a.className,{"tabs__item--active":r===n}),children:null!=t?t:n},n)}))})}function x(e){let{lazy:n,children:t,selectedValue:s}=e;const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function j(e){const n=m(e);return(0,g.jsxs)("div",{className:(0,s.Z)("tabs-container",v.tabList),children:[(0,g.jsx)(y,{...e,...n}),(0,g.jsx)(x,{...e,...n})]})}function w(e){const n=(0,b.Z)();return(0,g.jsx)(j,{...e,children:d(e.children)},String(n))}},11151:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return o}});var r=t(67294);const s={},a=r.createContext(s);function o(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);