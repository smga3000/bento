"use strict";(self.webpackChunkbento=self.webpackChunkbento||[]).push([[6763],{73820:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return a},default:function(){return d},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return u}});var n=r(85893),s=r(11151);r(74866),r(85162);const o={title:"catch",slug:"catch",type:"processor",status:"stable",categories:["Composition"],name:"catch"},a=void 0,c={id:"components/processors/catch",title:"catch",description:"\x3c!--",source:"@site/docs/components/processors/catch.md",sourceDirName:"components/processors",slug:"/components/processors/catch",permalink:"/docs/components/processors/catch",draft:!1,unlisted:!1,editUrl:"https://github.com/warpstreamlabs/bento/edit/main/website/docs/components/processors/catch.md",tags:[],version:"current",frontMatter:{title:"catch",slug:"catch",type:"processor",status:"stable",categories:["Composition"],name:"catch"},sidebar:"docs",previous:{title:"cached",permalink:"/docs/components/processors/cached"},next:{title:"command",permalink:"/docs/components/processors/command"}},l={},u=[];function i(e){const t={a:"a",code:"code",em:"em",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["Applies a list of child processors ",(0,n.jsx)(t.em,{children:"only"})," when a previous processing step has failed."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-yml",children:'# Config fields, showing default values\nlabel: ""\ncatch: []\n'})}),"\n",(0,n.jsxs)(t.p,{children:["Behaves similarly to the ",(0,n.jsx)(t.a,{href:"/docs/components/processors/for_each",children:(0,n.jsx)(t.code,{children:"for_each"})})," processor, where a list of child processors are applied to individual messages of a batch. However, processors are only applied to messages that failed a processing step prior to the catch."]}),"\n",(0,n.jsx)(t.p,{children:"For example, with the following config:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-yaml",children:"pipeline:\n  processors:\n    - resource: foo\n    - catch:\n      - resource: bar\n      - resource: baz\n"})}),"\n",(0,n.jsxs)(t.p,{children:["If the processor ",(0,n.jsx)(t.code,{children:"foo"})," fails for a particular message, that message will be fed into the processors ",(0,n.jsx)(t.code,{children:"bar"})," and ",(0,n.jsx)(t.code,{children:"baz"}),". Messages that do not fail for the processor ",(0,n.jsx)(t.code,{children:"foo"})," will skip these processors."]}),"\n",(0,n.jsx)(t.p,{children:"When messages leave the catch block their fail flags are cleared. This processor is useful for when it's possible to recover failed messages, or when special actions (such as logging/metrics) are required before dropping them."}),"\n",(0,n.jsxs)(t.p,{children:["More information about error handling can be found ",(0,n.jsx)(t.a,{href:"/docs/configuration/error_handling",children:"here"}),"."]})]})}function d(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(i,{...e})}):i(e)}},85162:function(e,t,r){r.d(t,{Z:function(){return a}});r(67294);var n=r(86010),s={tabItem:"tabItem_Ymn6"},o=r(85893);function a(e){let{children:t,hidden:r,className:a}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,n.Z)(s.tabItem,a),hidden:r,children:t})}},74866:function(e,t,r){r.d(t,{Z:function(){return j}});var n=r(67294),s=r(86010),o=r(12466),a=r(16550),c=r(20469),l=r(91980),u=r(67392),i=r(50012);function d(e){var t,r;return null!=(t=null==(r=n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:r.filter(Boolean))?t:[]}function p(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=null!=t?t:function(e){return d(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:s}}=e;return{value:t,label:r,attributes:n,default:s}}))}(r);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,r])}function h(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:r}=e;const s=(0,a.k6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:t,groupId:r});return[(0,l._X)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(s.location.search);t.set(o,e),s.replace({...s.location,search:t.toString()})}),[o,s])]}function m(e){const{defaultValue:t,queryString:r=!1,groupId:s}=e,o=p(e),[a,l]=(0,n.useState)((()=>function(e){var t;let{defaultValue:r,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!h({value:r,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+r+'" but none of its children has the corresponding value. Available values are: '+n.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return r}const s=null!=(t=n.find((e=>e.default)))?t:n[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:t,tabValues:o}))),[u,d]=f({queryString:r,groupId:s}),[m,b]=function(e){let{groupId:t}=e;const r=function(e){return e?"docusaurus.tab."+e:null}(t),[s,o]=(0,i.Nk)(r);return[s,(0,n.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:s}),g=(()=>{const e=null!=u?u:m;return h({value:e,tabValues:o})?e:null})();(0,c.Z)((()=>{g&&l(g)}),[g]);return{selectedValue:a,selectValue:(0,n.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error("Can't select invalid tab value="+e);l(e),d(e),b(e)}),[d,b,o]),tabValues:o}}var b=r(72389),g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"},v=r(85893);function x(e){let{className:t,block:r,selectedValue:n,selectValue:a,tabValues:c}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.o5)(),i=e=>{const t=e.currentTarget,r=l.indexOf(t),s=c[r].value;s!==n&&(u(t),a(s))},d=e=>{var t;let r=null;switch(e.key){case"Enter":i(e);break;case"ArrowRight":{var n;const t=l.indexOf(e.currentTarget)+1;r=null!=(n=l[t])?n:l[0];break}case"ArrowLeft":{var s;const t=l.indexOf(e.currentTarget)-1;r=null!=(s=l[t])?s:l[l.length-1];break}}null==(t=r)||t.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":r},t),children:c.map((e=>{let{value:t,label:r,attributes:o}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>l.push(e),onKeyDown:d,onClick:i,...o,className:(0,s.Z)("tabs__item",g.tabItem,null==o?void 0:o.className,{"tabs__item--active":n===t}),children:null!=r?r:t},t)}))})}function w(e){let{lazy:t,children:r,selectedValue:s}=e;const o=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===s));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function y(e){const t=m(e);return(0,v.jsxs)("div",{className:(0,s.Z)("tabs-container",g.tabList),children:[(0,v.jsx)(x,{...e,...t}),(0,v.jsx)(w,{...e,...t})]})}function j(e){const t=(0,b.Z)();return(0,v.jsx)(y,{...e,children:d(e.children)},String(t))}},11151:function(e,t,r){r.d(t,{Z:function(){return c},a:function(){return a}});var n=r(67294);const s={},o=n.createContext(s);function a(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);