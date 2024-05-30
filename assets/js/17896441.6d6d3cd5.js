"use strict";(self.webpackChunkbento=self.webpackChunkbento||[]).push([[7918],{78945:function(e,t,n){n.r(t),n.d(t,{default:function(){return de}});var a=n(67294),s=n(10833),i=n(902),l=n(85893);const o=a.createContext(null);function r(e){let{children:t,content:n}=e;const s=function(e){return(0,a.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(n);return(0,l.jsx)(o.Provider,{value:s,children:t})}function c(){const e=(0,a.useContext)(o);if(null===e)throw new i.i6("DocProvider");return e}function d(){var e;const{metadata:t,frontMatter:n,assets:a}=c();return(0,l.jsx)(s.d,{title:t.title,description:t.description,keywords:n.keywords,image:null!=(e=a.image)?e:n.image})}var u=n(86010),m=n(87524),h=n(95999),v=n(32244);function x(e){const{previous:t,next:n}=e;return(0,l.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,h.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"}),children:[t&&(0,l.jsx)(v.Z,{...t,subLabel:(0,l.jsx)(h.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})}),n&&(0,l.jsx)(v.Z,{...n,subLabel:(0,l.jsx)(h.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0})]})}function b(){const{metadata:e}=c();return(0,l.jsx)(x,{previous:e.previous,next:e.next})}var p=n(52263),f=n(39960),g=n(80143),j=n(35281),L=n(60373),N=n(74477);const C={unreleased:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,l.jsx)(h.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:(0,l.jsx)("b",{children:n.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,l.jsx)(h.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:(0,l.jsx)("b",{children:n.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function Z(e){const t=C[e.versionMetadata.banner];return(0,l.jsx)(t,{...e})}function _(e){let{versionLabel:t,to:n,onClick:a}=e;return(0,l.jsx)(h.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:(0,l.jsx)("b",{children:(0,l.jsx)(f.Z,{to:n,onClick:a,children:(0,l.jsx)(h.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function k(e){let{className:t,versionMetadata:n}=e;const{siteConfig:{title:a}}=(0,p.Z)(),{pluginId:s}=(0,g.gA)({failfast:!0}),{savePreferredVersionName:i}=(0,L.J)(s),{latestDocSuggestion:o,latestVersionSuggestion:r}=(0,g.Jo)(s),c=null!=o?o:(d=r).docs.find((e=>e.id===d.mainDocId));var d;return(0,l.jsxs)("div",{className:(0,u.Z)(t,j.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,l.jsx)("div",{children:(0,l.jsx)(Z,{siteTitle:a,versionMetadata:n})}),(0,l.jsx)("div",{className:"margin-top--md",children:(0,l.jsx)(_,{versionLabel:r.label,to:c.path,onClick:()=>i(r.name)})})]})}function T(e){let{className:t}=e;const n=(0,N.E)();return n.banner?(0,l.jsx)(k,{className:t,versionMetadata:n}):null}function U(e){let{className:t}=e;const n=(0,N.E)();return n.badge?(0,l.jsx)("span",{className:(0,u.Z)(t,j.k.docs.docVersionBadge,"badge badge--secondary"),children:(0,l.jsx)(h.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label},children:"Version: {versionLabel}"})}):null}function H(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:n}=e;return(0,l.jsx)(h.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:(0,l.jsx)("b",{children:(0,l.jsx)("time",{dateTime:new Date(1e3*t).toISOString(),children:n})})},children:" on {date}"})}function y(e){let{lastUpdatedBy:t}=e;return(0,l.jsx)(h.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:(0,l.jsx)("b",{children:t})},children:" by {user}"})}function w(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:n,lastUpdatedBy:a}=e;return(0,l.jsxs)("span",{className:j.k.common.lastUpdated,children:[(0,l.jsx)(h.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&n?(0,l.jsx)(H,{lastUpdatedAt:t,formattedLastUpdatedAt:n}):"",byUser:a?(0,l.jsx)(y,{lastUpdatedBy:a}):""},children:"Last updated{atDate}{byUser}"}),!1]})}var A=n(84881),M=n(71526),E={lastUpdated:"lastUpdated_vwxv"};function I(e){return(0,l.jsx)("div",{className:(0,u.Z)(j.k.docs.docFooterTagsRow,"row margin-bottom--sm"),children:(0,l.jsx)("div",{className:"col",children:(0,l.jsx)(M.Z,{...e})})})}function B(e){let{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:a,formattedLastUpdatedAt:s}=e;return(0,l.jsxs)("div",{className:(0,u.Z)(j.k.docs.docFooterEditMetaRow,"row"),children:[(0,l.jsx)("div",{className:"col",children:t&&(0,l.jsx)(A.Z,{editUrl:t})}),(0,l.jsx)("div",{className:(0,u.Z)("col",E.lastUpdated),children:(n||a)&&(0,l.jsx)(w,{lastUpdatedAt:n,formattedLastUpdatedAt:s,lastUpdatedBy:a})})]})}function O(){const{metadata:e}=c(),{editUrl:t,lastUpdatedAt:n,formattedLastUpdatedAt:a,lastUpdatedBy:s,tags:i}=e,o=i.length>0,r=!!(t||n||s);return o||r?(0,l.jsxs)("footer",{className:(0,u.Z)(j.k.docs.docFooter,"docusaurus-mt-lg"),children:[o&&(0,l.jsx)(I,{tags:i}),r&&(0,l.jsx)(B,{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:s,formattedLastUpdatedAt:a})]}):null}var S=n(86043),V=n(93743),P={tocCollapsibleButton:"tocCollapsibleButton_TO0P",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_MG3E"};function R(e){let{collapsed:t,...n}=e;return(0,l.jsx)("button",{type:"button",...n,className:(0,u.Z)("clean-btn",P.tocCollapsibleButton,!t&&P.tocCollapsibleButtonExpanded,n.className),children:(0,l.jsx)(h.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component",children:"On this page"})})}var D={tocCollapsible:"tocCollapsible_ETCw",tocCollapsibleContent:"tocCollapsibleContent_vkbj",tocCollapsibleExpanded:"tocCollapsibleExpanded_sAul"};function F(e){let{toc:t,className:n,minHeadingLevel:a,maxHeadingLevel:s}=e;const{collapsed:i,toggleCollapsed:o}=(0,S.u)({initialState:!0});return(0,l.jsxs)("div",{className:(0,u.Z)(D.tocCollapsible,!i&&D.tocCollapsibleExpanded,n),children:[(0,l.jsx)(R,{collapsed:i,onClick:o}),(0,l.jsx)(S.z,{lazy:!0,className:D.tocCollapsibleContent,collapsed:i,children:(0,l.jsx)(V.Z,{toc:t,minHeadingLevel:a,maxHeadingLevel:s})})]})}var z={tocMobile:"tocMobile_ITEo"};function q(){const{toc:e,frontMatter:t}=c();return(0,l.jsx)(F,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,u.Z)(j.k.docs.docTocMobile,z.tocMobile)})}var G=n(39407);function W(){const{toc:e,frontMatter:t}=c();return(0,l.jsx)(G.Z,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:j.k.docs.docTocDesktop})}var J=n(92503),Q=n(45042);function X(e){let{children:t}=e;const n=function(){const{metadata:e,frontMatter:t,contentTitle:n}=c();return t.hide_title||void 0!==n?null:e.title}();return(0,l.jsxs)("div",{className:(0,u.Z)(j.k.docs.docMarkdown,"markdown"),children:[n&&(0,l.jsx)("header",{children:(0,l.jsx)(J.Z,{as:"h1",children:n})}),(0,l.jsx)(Q.Z,{children:t})]})}var Y=n(53438),K=n(48596),$=n(44996);function ee(e){return(0,l.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,l.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})})}var te={breadcrumbHomeIcon:"breadcrumbHomeIcon_YNFT"};function ne(){const e=(0,$.Z)("/");return(0,l.jsx)("li",{className:"breadcrumbs__item",children:(0,l.jsx)(f.Z,{"aria-label":(0,h.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e,children:(0,l.jsx)(ee,{className:te.breadcrumbHomeIcon})})})}var ae={breadcrumbsContainer:"breadcrumbsContainer_Z_bl"};function se(e){let{children:t,href:n,isLast:a}=e;const s="breadcrumbs__link";return a?(0,l.jsx)("span",{className:s,itemProp:"name",children:t}):n?(0,l.jsx)(f.Z,{className:s,href:n,itemProp:"item",children:(0,l.jsx)("span",{itemProp:"name",children:t})}):(0,l.jsx)("span",{className:s,children:t})}function ie(e){let{children:t,active:n,index:a,addMicrodata:s}=e;return(0,l.jsxs)("li",{...s&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},className:(0,u.Z)("breadcrumbs__item",{"breadcrumbs__item--active":n}),children:[t,(0,l.jsx)("meta",{itemProp:"position",content:String(a+1)})]})}function le(){const e=(0,Y.s1)(),t=(0,K.Ns)();return e?(0,l.jsx)("nav",{className:(0,u.Z)(j.k.docs.docBreadcrumbs,ae.breadcrumbsContainer),"aria-label":(0,h.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,l.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[t&&(0,l.jsx)(ne,{}),e.map(((t,n)=>{const a=n===e.length-1,s="category"===t.type&&t.linkUnlisted?void 0:t.href;return(0,l.jsx)(ie,{active:a,index:n,addMicrodata:!!s,children:(0,l.jsx)(se,{href:s,isLast:a,children:t.label})},n)}))]})}):null}var oe=n(22212),re={docItemContainer:"docItemContainer_Djhp",docItemCol:"docItemCol_VOVn"};function ce(e){let{children:t}=e;const n=function(){const{frontMatter:e,toc:t}=c(),n=(0,m.i)(),a=e.hide_table_of_contents,s=!a&&t.length>0;return{hidden:a,mobile:s?(0,l.jsx)(q,{}):void 0,desktop:!s||"desktop"!==n&&"ssr"!==n?void 0:(0,l.jsx)(W,{})}}(),{metadata:{unlisted:a}}=c();return(0,l.jsxs)("div",{className:"row",children:[(0,l.jsxs)("div",{className:(0,u.Z)("col",!n.hidden&&re.docItemCol),children:[a&&(0,l.jsx)(oe.Z,{}),(0,l.jsx)(T,{}),(0,l.jsxs)("div",{className:re.docItemContainer,children:[(0,l.jsxs)("article",{children:[(0,l.jsx)(le,{}),(0,l.jsx)(U,{}),n.mobile,(0,l.jsx)(X,{children:t}),(0,l.jsx)(O,{})]}),(0,l.jsx)(b,{})]})]}),n.desktop&&(0,l.jsx)("div",{className:"col col--3",children:n.desktop})]})}function de(e){const t="docs-doc-id-"+e.content.metadata.id,n=e.content;return(0,l.jsx)(r,{content:e.content,children:(0,l.jsxs)(s.FG,{className:t,children:[(0,l.jsx)(d,{}),(0,l.jsx)(ce,{children:(0,l.jsx)(n,{})})]})})}},84881:function(e,t,n){n.d(t,{Z:function(){return d}});n(67294);var a=n(95999),s=n(35281),i=n(39960),l=n(86010),o={iconEdit:"iconEdit_Z9Sw"},r=n(85893);function c(e){let{className:t,...n}=e;return(0,r.jsx)("svg",{fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,l.Z)(o.iconEdit,t),"aria-hidden":"true",...n,children:(0,r.jsx)("g",{children:(0,r.jsx)("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})})})}function d(e){let{editUrl:t}=e;return(0,r.jsxs)(i.Z,{to:t,className:s.k.common.editThisPage,children:[(0,r.jsx)(c,{}),(0,r.jsx)(a.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page",children:"Edit this page"})]})}},45042:function(e,t,n){n.d(t,{Z:function(){return l}});n(67294);var a=n(11151),s=n(11611),i=n(85893);function l(e){let{children:t}=e;return(0,i.jsx)(a.Z,{components:s.Z,children:t})}},32244:function(e,t,n){n.d(t,{Z:function(){return l}});n(67294);var a=n(86010),s=n(39960),i=n(85893);function l(e){const{permalink:t,title:n,subLabel:l,isNext:o}=e;return(0,i.jsxs)(s.Z,{className:(0,a.Z)("pagination-nav__link",o?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[l&&(0,i.jsx)("div",{className:"pagination-nav__sublabel",children:l}),(0,i.jsx)("div",{className:"pagination-nav__label",children:n})]})}},39407:function(e,t,n){n.d(t,{Z:function(){return c}});n(67294);var a=n(86010),s=n(93743),i={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"},l=n(85893);const o="table-of-contents__link toc-highlight",r="table-of-contents__link--active";function c(e){let{className:t,...n}=e;return(0,l.jsx)("div",{className:(0,a.Z)(i.tableOfContents,"thin-scrollbar",t),children:(0,l.jsx)(s.Z,{...n,linkClassName:o,linkActiveClassName:r})})}},93743:function(e,t,n){n.d(t,{Z:function(){return x}});var a=n(67294),s=n(86668);function i(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const a=n.slice(2,e.level);e.parentIndex=Math.max(...a),n[e.level]=t}));const a=[];return t.forEach((e=>{const{parentIndex:n,...s}=e;n>=0?t[n].children.push(s):a.push(s)})),a}function l(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return t.flatMap((e=>{const t=l({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[{...e,children:t}]:t}))}function o(e){const t=e.getBoundingClientRect();return t.top===t.bottom?o(e.parentNode):t}function r(e,t){var n;let{anchorTopOffset:a}=t;const s=e.find((e=>o(e).top>=a));if(s){var i;return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(o(s))?s:null!=(i=e[e.indexOf(s)-1])?i:null}return null!=(n=e[e.length-1])?n:null}function c(){const e=(0,a.useRef)(0),{navbar:{hideOnScroll:t}}=(0,s.L)();return(0,a.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function d(e){const t=(0,a.useRef)(void 0),n=c();(0,a.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:s,minHeadingLevel:i,maxHeadingLevel:l}=e;function o(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),o=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const a=[];for(let s=t;s<=n;s+=1)a.push("h"+s+".anchor");return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:i,maxHeadingLevel:l}),c=r(o,{anchorTopOffset:n.current}),d=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(s),e.classList.add(s),t.current=e):e.classList.remove(s)}(e,e===d)}))}return document.addEventListener("scroll",o),document.addEventListener("resize",o),o(),()=>{document.removeEventListener("scroll",o),document.removeEventListener("resize",o)}}),[e,n])}var u=n(39960),m=n(85893);function h(e){let{toc:t,className:n,linkClassName:a,isChild:s}=e;return t.length?(0,m.jsx)("ul",{className:s?void 0:n,children:t.map((e=>(0,m.jsxs)("li",{children:[(0,m.jsx)(u.Z,{to:"#"+e.id,className:null!=a?a:void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,m.jsx)(h,{isChild:!0,toc:e.children,className:n,linkClassName:a})]},e.id)))}):null}var v=a.memo(h);function x(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:o="table-of-contents__link",linkActiveClassName:r,minHeadingLevel:c,maxHeadingLevel:u,...h}=e;const x=(0,s.L)(),b=null!=c?c:x.tableOfContents.minHeadingLevel,p=null!=u?u:x.tableOfContents.maxHeadingLevel,f=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:s}=e;return(0,a.useMemo)((()=>l({toc:i(t),minHeadingLevel:n,maxHeadingLevel:s})),[t,n,s])}({toc:t,minHeadingLevel:b,maxHeadingLevel:p});return d((0,a.useMemo)((()=>{if(o&&r)return{linkClassName:o,linkActiveClassName:r,minHeadingLevel:b,maxHeadingLevel:p}}),[o,r,b,p])),(0,m.jsx)(v,{toc:f,className:n,linkClassName:o,...h})}},13008:function(e,t,n){n.d(t,{Z:function(){return o}});n(67294);var a=n(86010),s=n(39960),i={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"},l=n(85893);function o(e){let{permalink:t,label:n,count:o}=e;return(0,l.jsxs)(s.Z,{href:t,className:(0,a.Z)(i.tag,o?i.tagWithCount:i.tagRegular),children:[n,o&&(0,l.jsx)("span",{children:o})]})}},71526:function(e,t,n){n.d(t,{Z:function(){return r}});n(67294);var a=n(86010),s=n(95999),i=n(13008),l={tags:"tags_jXut",tag:"tag_QGVx"},o=n(85893);function r(e){let{tags:t}=e;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("b",{children:(0,o.jsx)(s.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,o.jsx)("ul",{className:(0,a.Z)(l.tags,"padding--none","margin-left--sm"),children:t.map((e=>{let{label:t,permalink:n}=e;return(0,o.jsx)("li",{className:l.tag,children:(0,o.jsx)(i.Z,{label:t,permalink:n})},n)}))})]})}},22212:function(e,t,n){n.d(t,{Z:function(){return h}});n(67294);var a=n(86010),s=n(95999),i=n(35742),l=n(85893);function o(){return(0,l.jsx)(s.Z,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function r(){return(0,l.jsx)(s.Z,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function c(){return(0,l.jsx)(i.Z,{children:(0,l.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}var d=n(35281),u=n(59047);function m(e){let{className:t}=e;return(0,l.jsx)(u.Z,{type:"caution",title:(0,l.jsx)(o,{}),className:(0,a.Z)(t,d.k.common.unlistedBanner),children:(0,l.jsx)(r,{})})}function h(e){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(c,{}),(0,l.jsx)(m,{...e})]})}}}]);