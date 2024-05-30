"use strict";(self.webpackChunkbento=self.webpackChunkbento||[]).push([[1597],{27127:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return i},default:function(){return p},frontMatter:function(){return a},metadata:function(){return o},toc:function(){return d}});var r=t(85893),s=t(11151),l=t(74866),c=t(85162);const a={title:"pusher",slug:"pusher",type:"output",status:"experimental",categories:["Services"],name:"pusher"},i=void 0,o={id:"components/outputs/pusher",title:"pusher",description:"\x3c!--",source:"@site/docs/components/outputs/pusher.md",sourceDirName:"components/outputs",slug:"/components/outputs/pusher",permalink:"/docs/components/outputs/pusher",draft:!1,unlisted:!1,editUrl:"https://github.com/warpstreamlabs/bento/edit/main/website/docs/components/outputs/pusher.md",tags:[],version:"current",frontMatter:{title:"pusher",slug:"pusher",type:"output",status:"experimental",categories:["Services"],name:"pusher"},sidebar:"docs",previous:{title:"pulsar",permalink:"/docs/components/outputs/pulsar"},next:{title:"redis_hash",permalink:"/docs/components/outputs/redis_hash"}},u={},d=[{value:"Fields",id:"fields",level:2},{value:"<code>batching</code>",id:"batching",level:3},{value:"<code>batching.count</code>",id:"batchingcount",level:3},{value:"<code>batching.byte_size</code>",id:"batchingbyte_size",level:3},{value:"<code>batching.period</code>",id:"batchingperiod",level:3},{value:"<code>batching.check</code>",id:"batchingcheck",level:3},{value:"<code>batching.processors</code>",id:"batchingprocessors",level:3},{value:"<code>channel</code>",id:"channel",level:3},{value:"<code>event</code>",id:"event",level:3},{value:"<code>appId</code>",id:"appid",level:3},{value:"<code>key</code>",id:"key",level:3},{value:"<code>secret</code>",id:"secret",level:3},{value:"<code>cluster</code>",id:"cluster",level:3},{value:"<code>secure</code>",id:"secure",level:3},{value:"<code>max_in_flight</code>",id:"max_in_flight",level:3}];function h(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.admonition,{title:"EXPERIMENTAL",type:"caution",children:(0,r.jsx)(n.p,{children:"This component is experimental and therefore subject to change or removal outside of major version releases."})}),"\n",(0,r.jsxs)(n.p,{children:["Output for publishing messages to Pusher API (",(0,r.jsx)(n.a,{href:"https://pusher.com",children:"https://pusher.com"}),")"]}),"\n",(0,r.jsx)(n.p,{children:"Introduced in version 4.3.0."}),"\n",(0,r.jsxs)(l.Z,{defaultValue:"common",values:[{label:"Common",value:"common"},{label:"Advanced",value:"advanced"}],children:[(0,r.jsx)(c.Z,{value:"common",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yml",children:'# Common config fields, showing default values\noutput:\n  label: ""\n  pusher:\n    batching:\n      count: 0\n      byte_size: 0\n      period: ""\n      check: ""\n    channel: my_channel # No default (required)\n    event: "" # No default (required)\n    appId: "" # No default (required)\n    key: "" # No default (required)\n    secret: "" # No default (required)\n    cluster: "" # No default (required)\n    secure: true\n    max_in_flight: 1\n'})})}),(0,r.jsx)(c.Z,{value:"advanced",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yml",children:'# All config fields, showing default values\noutput:\n  label: ""\n  pusher:\n    batching:\n      count: 0\n      byte_size: 0\n      period: ""\n      check: ""\n      processors: [] # No default (optional)\n    channel: my_channel # No default (required)\n    event: "" # No default (required)\n    appId: "" # No default (required)\n    key: "" # No default (required)\n    secret: "" # No default (required)\n    cluster: "" # No default (required)\n    secure: true\n    max_in_flight: 1\n'})})})]}),"\n",(0,r.jsx)(n.h2,{id:"fields",children:"Fields"}),"\n",(0,r.jsx)(n.h3,{id:"batching",children:(0,r.jsx)(n.code,{children:"batching"})}),"\n",(0,r.jsx)(n.p,{children:"maximum batch size is 10 (limit of the pusher library)"}),"\n",(0,r.jsxs)(n.p,{children:["Type: ",(0,r.jsx)(n.code,{children:"object"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yml",children:'# Examples\n\nbatching:\n  byte_size: 5000\n  count: 0\n  period: 1s\n\nbatching:\n  count: 10\n  period: 1s\n\nbatching:\n  check: this.contains("END BATCH")\n  count: 0\n  period: 1m\n'})}),"\n",(0,r.jsx)(n.h3,{id:"batchingcount",children:(0,r.jsx)(n.code,{children:"batching.count"})}),"\n",(0,r.jsxs)(n.p,{children:["A number of messages at which the batch should be flushed. If ",(0,r.jsx)(n.code,{children:"0"})," disables count based batching."]}),"\n",(0,r.jsxs)(n.p,{children:["Type: ",(0,r.jsx)(n.code,{children:"int"}),(0,r.jsx)(n.br,{}),"\n","Default: ",(0,r.jsx)(n.code,{children:"0"})]}),"\n",(0,r.jsx)(n.h3,{id:"batchingbyte_size",children:(0,r.jsx)(n.code,{children:"batching.byte_size"})}),"\n",(0,r.jsxs)(n.p,{children:["An amount of bytes at which the batch should be flushed. If ",(0,r.jsx)(n.code,{children:"0"})," disables size based batching."]}),"\n",(0,r.jsxs)(n.p,{children:["Type: ",(0,r.jsx)(n.code,{children:"int"}),(0,r.jsx)(n.br,{}),"\n","Default: ",(0,r.jsx)(n.code,{children:"0"})]}),"\n",(0,r.jsx)(n.h3,{id:"batchingperiod",children:(0,r.jsx)(n.code,{children:"batching.period"})}),"\n",(0,r.jsx)(n.p,{children:"A period in which an incomplete batch should be flushed regardless of its size."}),"\n",(0,r.jsxs)(n.p,{children:["Type: ",(0,r.jsx)(n.code,{children:"string"}),(0,r.jsx)(n.br,{}),"\n","Default: ",(0,r.jsx)(n.code,{children:'""'})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yml",children:"# Examples\n\nperiod: 1s\n\nperiod: 1m\n\nperiod: 500ms\n"})}),"\n",(0,r.jsx)(n.h3,{id:"batchingcheck",children:(0,r.jsx)(n.code,{children:"batching.check"})}),"\n",(0,r.jsxs)(n.p,{children:["A ",(0,r.jsx)(n.a,{href:"/docs/guides/bloblang/about/",children:"Bloblang query"})," that should return a boolean value indicating whether a message should end a batch."]}),"\n",(0,r.jsxs)(n.p,{children:["Type: ",(0,r.jsx)(n.code,{children:"string"}),(0,r.jsx)(n.br,{}),"\n","Default: ",(0,r.jsx)(n.code,{children:'""'})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yml",children:'# Examples\n\ncheck: this.type == "end_of_transaction"\n'})}),"\n",(0,r.jsx)(n.h3,{id:"batchingprocessors",children:(0,r.jsx)(n.code,{children:"batching.processors"})}),"\n",(0,r.jsxs)(n.p,{children:["A list of ",(0,r.jsx)(n.a,{href:"/docs/components/processors/about",children:"processors"})," to apply to a batch as it is flushed. This allows you to aggregate and archive the batch however you see fit. Please note that all resulting messages are flushed as a single batch, therefore splitting the batch into smaller batches using these processors is a no-op."]}),"\n",(0,r.jsxs)(n.p,{children:["Type: ",(0,r.jsx)(n.code,{children:"array"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yml",children:"# Examples\n\nprocessors:\n  - archive:\n      format: concatenate\n\nprocessors:\n  - archive:\n      format: lines\n\nprocessors:\n  - archive:\n      format: json_array\n"})}),"\n",(0,r.jsx)(n.h3,{id:"channel",children:(0,r.jsx)(n.code,{children:"channel"})}),"\n",(0,r.jsxs)(n.p,{children:["Pusher channel to publish to. Interpolation functions can also be used\nThis field supports ",(0,r.jsx)(n.a,{href:"/docs/configuration/interpolation#bloblang-queries",children:"interpolation functions"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Type: ",(0,r.jsx)(n.code,{children:"string"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yml",children:'# Examples\n\nchannel: my_channel\n\nchannel: ${!json("id")}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"event",children:(0,r.jsx)(n.code,{children:"event"})}),"\n",(0,r.jsx)(n.p,{children:"Event to publish to"}),"\n",(0,r.jsxs)(n.p,{children:["Type: ",(0,r.jsx)(n.code,{children:"string"})]}),"\n",(0,r.jsx)(n.h3,{id:"appid",children:(0,r.jsx)(n.code,{children:"appId"})}),"\n",(0,r.jsx)(n.p,{children:"Pusher app id"}),"\n",(0,r.jsxs)(n.p,{children:["Type: ",(0,r.jsx)(n.code,{children:"string"})]}),"\n",(0,r.jsx)(n.h3,{id:"key",children:(0,r.jsx)(n.code,{children:"key"})}),"\n",(0,r.jsx)(n.p,{children:"Pusher key"}),"\n",(0,r.jsxs)(n.p,{children:["Type: ",(0,r.jsx)(n.code,{children:"string"})]}),"\n",(0,r.jsx)(n.h3,{id:"secret",children:(0,r.jsx)(n.code,{children:"secret"})}),"\n",(0,r.jsx)(n.p,{children:"Pusher secret"}),"\n",(0,r.jsxs)(n.p,{children:["Type: ",(0,r.jsx)(n.code,{children:"string"})]}),"\n",(0,r.jsx)(n.h3,{id:"cluster",children:(0,r.jsx)(n.code,{children:"cluster"})}),"\n",(0,r.jsx)(n.p,{children:"Pusher cluster"}),"\n",(0,r.jsxs)(n.p,{children:["Type: ",(0,r.jsx)(n.code,{children:"string"})]}),"\n",(0,r.jsx)(n.h3,{id:"secure",children:(0,r.jsx)(n.code,{children:"secure"})}),"\n",(0,r.jsx)(n.p,{children:"Enable SSL encryption"}),"\n",(0,r.jsxs)(n.p,{children:["Type: ",(0,r.jsx)(n.code,{children:"bool"}),(0,r.jsx)(n.br,{}),"\n","Default: ",(0,r.jsx)(n.code,{children:"true"})]}),"\n",(0,r.jsx)(n.h3,{id:"max_in_flight",children:(0,r.jsx)(n.code,{children:"max_in_flight"})}),"\n",(0,r.jsx)(n.p,{children:"The maximum number of parallel message batches to have in flight at any given time."}),"\n",(0,r.jsxs)(n.p,{children:["Type: ",(0,r.jsx)(n.code,{children:"int"}),(0,r.jsx)(n.br,{}),"\n","Default: ",(0,r.jsx)(n.code,{children:"1"})]})]})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},85162:function(e,n,t){t.d(n,{Z:function(){return c}});t(67294);var r=t(86010),s={tabItem:"tabItem_Ymn6"},l=t(85893);function c(e){let{children:n,hidden:t,className:c}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,r.Z)(s.tabItem,c),hidden:t,children:n})}},74866:function(e,n,t){t.d(n,{Z:function(){return k}});var r=t(67294),s=t(86010),l=t(12466),c=t(16550),a=t(20469),i=t(91980),o=t(67392),u=t(50012);function d(e){var n,t;return null!=(n=null==(t=r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=null!=n?n:function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:s}}=e;return{value:n,label:t,attributes:r,default:s}}))}(t);return function(e){const n=(0,o.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function b(e){let{queryString:n=!1,groupId:t}=e;const s=(0,c.k6)(),l=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:n,groupId:t});return[(0,i._X)(l),(0,r.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(s.location.search);n.set(l,e),s.replace({...s.location,search:n.toString()})}),[l,s])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,l=h(e),[c,i]=(0,r.useState)((()=>function(e){var n;let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+r.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}const s=null!=(n=r.find((e=>e.default)))?n:r[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:l}))),[o,d]=b({queryString:t,groupId:s}),[f,m]=function(e){let{groupId:n}=e;const t=function(e){return e?"docusaurus.tab."+e:null}(n),[s,l]=(0,u.Nk)(t);return[s,(0,r.useCallback)((e=>{t&&l.set(e)}),[t,l])]}({groupId:s}),x=(()=>{const e=null!=o?o:f;return p({value:e,tabValues:l})?e:null})();(0,a.Z)((()=>{x&&i(x)}),[x]);return{selectedValue:c,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error("Can't select invalid tab value="+e);i(e),d(e),m(e)}),[d,m,l]),tabValues:l}}var m=t(72389),x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"},j=t(85893);function g(e){let{className:n,block:t,selectedValue:r,selectValue:c,tabValues:a}=e;const i=[],{blockElementScrollPositionUntilNextRender:o}=(0,l.o5)(),u=e=>{const n=e.currentTarget,t=i.indexOf(n),s=a[t].value;s!==r&&(o(n),c(s))},d=e=>{var n;let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{var r;const n=i.indexOf(e.currentTarget)+1;t=null!=(r=i[n])?r:i[0];break}case"ArrowLeft":{var s;const n=i.indexOf(e.currentTarget)-1;t=null!=(s=i[n])?s:i[i.length-1];break}}null==(n=t)||n.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":t},n),children:a.map((e=>{let{value:n,label:t,attributes:l}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>i.push(e),onKeyDown:d,onClick:u,...l,className:(0,s.Z)("tabs__item",x.tabItem,null==l?void 0:l.className,{"tabs__item--active":r===n}),children:null!=t?t:n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:s}=e;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function y(e){const n=f(e);return(0,j.jsxs)("div",{className:(0,s.Z)("tabs-container",x.tabList),children:[(0,j.jsx)(g,{...e,...n}),(0,j.jsx)(v,{...e,...n})]})}function k(e){const n=(0,m.Z)();return(0,j.jsx)(y,{...e,children:d(e.children)},String(n))}},11151:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return c}});var r=t(67294);const s={},l=r.createContext(s);function c(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);