"use strict";(self.webpackChunkbento=self.webpackChunkbento||[]).push([[2928],{62161:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return i}});var r=t(85893),a=t(11151);t(74866),t(85162);const s={title:"skip_bom",slug:"skip_bom",type:"scanner",status:"stable",name:"skip_bom"},o=void 0,l={id:"components/scanners/skip_bom",title:"skip_bom",description:"\x3c!--",source:"@site/docs/components/scanners/skip_bom.md",sourceDirName:"components/scanners",slug:"/components/scanners/skip_bom",permalink:"/docs/components/scanners/skip_bom",draft:!1,unlisted:!1,editUrl:"https://github.com/warpstreamlabs/bento/edit/main/website/docs/components/scanners/skip_bom.md",tags:[],version:"current",frontMatter:{title:"skip_bom",slug:"skip_bom",type:"scanner",status:"stable",name:"skip_bom"},sidebar:"docs",previous:{title:"re_match",permalink:"/docs/components/scanners/re_match"},next:{title:"switch",permalink:"/docs/components/scanners/switch"}},u={},i=[{value:"Fields",id:"fields",level:2},{value:"<code>into</code>",id:"into",level:3}];function c(e){const n={br:"br",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Skip one or more byte order marks for each opened child scanner."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yml",children:"# Config fields, showing default values\nskip_bom:\n  into:\n    to_the_end: {}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"fields",children:"Fields"}),"\n",(0,r.jsx)(n.h3,{id:"into",children:(0,r.jsx)(n.code,{children:"into"})}),"\n",(0,r.jsx)(n.p,{children:"The child scanner to feed the resulting stream into."}),"\n",(0,r.jsxs)(n.p,{children:["Type: ",(0,r.jsx)(n.code,{children:"scanner"}),(0,r.jsx)(n.br,{}),"\n","Default: ",(0,r.jsx)(n.code,{children:'{"to_the_end":{}}'})]})]})}function d(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},85162:function(e,n,t){t.d(n,{Z:function(){return o}});t(67294);var r=t(86010),a={tabItem:"tabItem_Ymn6"},s=t(85893);function o(e){let{children:n,hidden:t,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,o),hidden:t,children:n})}},74866:function(e,n,t){t.d(n,{Z:function(){return w}});var r=t(67294),a=t(86010),s=t(12466),o=t(16550),l=t(20469),u=t(91980),i=t(67392),c=t(50012);function d(e){var n,t;return null!=(n=null==(t=r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}function p(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=null!=n?n:function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,i.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:t}=e;const a=(0,o.k6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:n,groupId:t});return[(0,u._X)(s),(0,r.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(a.location.search);n.set(s,e),a.replace({...a.location,search:n.toString()})}),[s,a])]}function b(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,s=p(e),[o,u]=(0,r.useState)((()=>function(e){var n;let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+r.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}const a=null!=(n=r.find((e=>e.default)))?n:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:s}))),[i,d]=f({queryString:t,groupId:a}),[b,h]=function(e){let{groupId:n}=e;const t=function(e){return e?"docusaurus.tab."+e:null}(n),[a,s]=(0,c.Nk)(t);return[a,(0,r.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:a}),v=(()=>{const e=null!=i?i:b;return m({value:e,tabValues:s})?e:null})();(0,l.Z)((()=>{v&&u(v)}),[v]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error("Can't select invalid tab value="+e);u(e),d(e),h(e)}),[d,h,s]),tabValues:s}}var h=t(72389),v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"},g=t(85893);function k(e){let{className:n,block:t,selectedValue:r,selectValue:o,tabValues:l}=e;const u=[],{blockElementScrollPositionUntilNextRender:i}=(0,s.o5)(),c=e=>{const n=e.currentTarget,t=u.indexOf(n),a=l[t].value;a!==r&&(i(n),o(a))},d=e=>{var n;let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{var r;const n=u.indexOf(e.currentTarget)+1;t=null!=(r=u[n])?r:u[0];break}case"ArrowLeft":{var a;const n=u.indexOf(e.currentTarget)-1;t=null!=(a=u[n])?a:u[u.length-1];break}}null==(n=t)||n.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>u.push(e),onKeyDown:d,onClick:c,...s,className:(0,a.Z)("tabs__item",v.tabItem,null==s?void 0:s.className,{"tabs__item--active":r===n}),children:null!=t?t:n},n)}))})}function x(e){let{lazy:n,children:t,selectedValue:a}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function y(e){const n=b(e);return(0,g.jsxs)("div",{className:(0,a.Z)("tabs-container",v.tabList),children:[(0,g.jsx)(k,{...e,...n}),(0,g.jsx)(x,{...e,...n})]})}function w(e){const n=(0,h.Z)();return(0,g.jsx)(y,{...e,children:d(e.children)},String(n))}},11151:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return o}});var r=t(67294);const a={},s=r.createContext(a);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);