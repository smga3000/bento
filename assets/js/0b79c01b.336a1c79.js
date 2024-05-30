"use strict";(self.webpackChunkbento=self.webpackChunkbento||[]).push([[4348],{23933:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return o},metadata:function(){return r},toc:function(){return h}});var i=n(85893),a=n(11151);const o={title:"First Look at the V4 Roadmap",author:"Ashley Jeffs",author_url:"https://github.com/Jeffail",author_image_url:"/img/ash.jpg",description:"Well, it's roadmapish",keywords:["v4","roadmap","go","golang","stream processor","ETL"],tags:["v4"]},s=void 0,r={permalink:"/blog/2021/01/04/v4-roadmap",source:"@site/blog/2021-01-04-v4-roadmap.md",title:"First Look at the V4 Roadmap",description:"Well, it's roadmapish",date:"2021-01-04T00:00:00.000Z",formattedDate:"January 4, 2021",tags:[{label:"v4",permalink:"/blog/tags/v-4"}],readingTime:6.46,hasTruncateMarker:!0,authors:[{name:"Ashley Jeffs",url:"https://github.com/Jeffail",imageURL:"/img/ash.jpg"}],frontMatter:{title:"First Look at the V4 Roadmap",author:"Ashley Jeffs",author_url:"https://github.com/Jeffail",author_image_url:"/img/ash.jpg",description:"Well, it's roadmapish",keywords:["v4","roadmap","go","golang","stream processor","ETL"],tags:["v4"]},unlisted:!1,prevItem:{title:"Cross Post: We're Bringing Simple Back (to Streaming)",permalink:"/blog/2021/03/09/redpanda"},nextItem:{title:"Powered Up Workflows",permalink:"/blog/2020/08/30/improved-workflows"}},l={authorsImageUrls:[void 0]},h=[{value:"Improved plugin APIs",id:"improved-plugin-apis",level:3},{value:"Streams Mode API for Resources",id:"streams-mode-api-for-resources",level:3},{value:"Input Scheduling Capabilities",id:"input-scheduling-capabilities",level:3},{value:"Configuration Templating",id:"configuration-templating",level:3},{value:"Improved Logging",id:"improved-logging",level:3},{value:"Improved Metrics",id:"improved-metrics",level:3},{value:"Configuration File Reloading",id:"configuration-file-reloading",level:3},{value:"Tracking these Features",id:"tracking-these-features",level:2},{value:"What&#39;s Next",id:"whats-next",level:2}];function d(e){const t={a:"a",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["Bento has been at major version 3 for over a year now, and I consider it to be a pretty cool achievement that given ",(0,i.jsx)(t.a,{href:"https://github.com/warpstreamlabs/bento/blob/master/CHANGELOG.md",children:"all the great features added"})," we've managed to keep both the Bento config spec and APIs fully backwards compatible."]}),"\n",(0,i.jsx)(t.p,{children:"However, eventually it would be nice to cut a new major release and prune all of the dead weight that has accumulated during this time. Since major version releases don't come often I wanted to be sure that we've considered and planned any other potential breaking changes that could be bundled along with it."}),"\n",(0,i.jsxs)(t.p,{children:["Up until now Bento has never had a roadmap or really any plan beyond just building what we want to use or want to build, this is known in the industry as attention-span-driven development. Alas, if we're going to get mileage out of version 4 then ",(0,i.jsx)(t.em,{children:"some"})," planning is necessary, and I figured we might as well put together our very first roadmap."]}),"\n",(0,i.jsxs)(t.p,{children:["A few months ago I ",(0,i.jsx)(t.a,{href:"https://github.com/warpstreamlabs/bento/issues/503",children:"asked for feedback"}),", I already had my own wish list of things to change in the next major release but I wanted to give you all an opportunity to factor in your own use cases. I've attempted to capture all of the feedback and create issues for the stuff that's achievable, then I marked the issues that require breaking changes and added them to my roadmap plans. I think it's currently in a state that works for me and is something deliverable, therefore I think it's now worth sharing and allowing you all to help shape it further."]}),"\n",(0,i.jsx)(t.p,{children:"Bento is blessed with a decent and growing number of contributors. However, it's still clear that if I personally were to burn out then the project would pretty much grind to a temporary halt, and therefore my sanity is a higher priority than committing to a rigid plan. Here's a few things to clarify about this roadmap before you get too excited:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"This isn't final, it's going to mutate over time in order to flex around \"everything else\" going on."}),"\n",(0,i.jsx)(t.li,{children:"This isn't everything. The only items included in this roadmap are items that I consider required to have ready for v4. Any features that can definitely be implemented without breaking changes are not included and can be worked on at any time, including right now."}),"\n",(0,i.jsx)(t.li,{children:"There is no timeline or estimate for this work (by design). If you are blocked on any of the items on this roadmap and aren't able to contribute then please still make sure I'm aware and I'll factor that in, but do not expect promises or commitments (unless you're paying for them)."}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["With that made clear and everyone sufficiently bored let's get into the planned work ",(0,i.jsx)(t.em,{children:"as it currently stands"}),". I've created an issue for every item here where you can read more details beyond my elevator pitch."]}),"\n",(0,i.jsx)(t.h3,{id:"improved-plugin-apis",children:"Improved plugin APIs"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://github.com/warpstreamlabs/bento/issues/501",children:"Click here to access the issue."})}),"\n",(0,i.jsxs)(t.p,{children:["This is by far the biggest item of work I want to establish ",(0,i.jsx)(t.em,{children:"before"})," v4. The plugin APIs are currently heavily tied into the same component interfaces that are used internally. This means that it's not possible for me to modify the signatures of internal components without breaking the plugin APIs. This has historically put us in awkward positions where in order to make a change that's backwards compatible with both our configuration spec and the plugin APIs we have to implement nasty tricks."]}),"\n",(0,i.jsx)(t.p,{children:"If we're instead able to isolate the plugin APIs with an air gap then it will allow us to iterate on the internal components without impacting the APIs used for plugins."}),"\n",(0,i.jsxs)(t.p,{children:["The plan is to fully implement an isolated (and nicer) plugin API, give everyone a lot of time to try it out, provide feedback, and migrate, all within good time ",(0,i.jsx)(t.em,{children:"before"})," v4 so that I don't pull the rug out from under current plugin users."]}),"\n",(0,i.jsx)(t.h3,{id:"streams-mode-api-for-resources",children:"Streams Mode API for Resources"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://github.com/warpstreamlabs/bento/issues/566",children:"Click here to access the issue."})}),"\n",(0,i.jsx)(t.p,{children:"This one's pretty simple, we want to expand the streams mode APIs to allow the mutation of resources. This is blocked behind a breaking change (to the plugin APIs) as it would require sweeping changes to how resources are accessed."}),"\n",(0,i.jsx)(t.h3,{id:"input-scheduling-capabilities",children:"Input Scheduling Capabilities"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://github.com/warpstreamlabs/bento/issues/580",children:"Click here to access the issue."})}),"\n",(0,i.jsx)(t.p,{children:"Sometimes it's nice to slow things down, this issue would allow us to configure inputs that are triggered in scheduled bursts rather than realtime streams in order to have them behave similar to batch processors. Implementing this will require a minor review of the input initialization flow, which could potentially lead to breaking changes to the internal API."}),"\n",(0,i.jsx)(t.h3,{id:"configuration-templating",children:"Configuration Templating"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://github.com/warpstreamlabs/bento/issues/590",children:"Click here to access the issue."})}),"\n",(0,i.jsx)(t.p,{children:"This would allow you to create reusable, parameterized, configuration templates and have them natively supported within Bento. This issue is pretty great but also a significant amount of work, it could easily result in breaking changes being required and so I'd like to have this at least planned out and understood before v4."}),"\n",(0,i.jsx)(t.h3,{id:"improved-logging",children:"Improved Logging"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://github.com/warpstreamlabs/bento/issues/589",children:"Click here to access the issue."})}),"\n",(0,i.jsx)(t.p,{children:"As Bento has evolved it has gained a few oddities in how logging works. This issue adjusts logging to lean more into structured logging fields and update the configuration defaults to be more sensible. This will mostly impact internal components that create logs, and therefore depends on having the isolated plugin APIs."}),"\n",(0,i.jsx)(t.h3,{id:"improved-metrics",children:"Improved Metrics"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://github.com/warpstreamlabs/bento/issues/510",children:"Click here to access the issue."})}),"\n",(0,i.jsx)(t.p,{children:"Similar to the logging issue, metrics in Bento are a bit wonky due to the collision between targets that do and don't support labels/tagging. Since Prometheus and other tag based metrics types seem to be winning out nowadays I think we can flip the defaults to favour tags over long metric names."}),"\n",(0,i.jsx)(t.h3,{id:"configuration-file-reloading",children:"Configuration File Reloading"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://github.com/warpstreamlabs/bento/issues/338",children:"Click here to access the issue."})}),"\n",(0,i.jsx)(t.p,{children:"Pretty much self explanatory. I believe this can be implemented without any breaking changes, but it would be good to have it understood (or finished) before v4 just in case."}),"\n",(0,i.jsx)(t.h2,{id:"tracking-these-features",children:"Tracking these Features"}),"\n",(0,i.jsxs)(t.p,{children:["There's a ",(0,i.jsx)(t.a,{href:"https://github.com/warpstreamlabs/bento/projects/2",children:"project on Github"}),' containing all of these issues, but the way that I\'ve configured it is unique as issues aren\'t necessarily tracked by their progress. Issues in the "Blocked" column are unable to progress without a breaking change and therefore are blocked on v4. Issues in the "Unblocked" column are features that can be worked on, and will either become done if they were able to be completed without breaking changes, or will be put back into "Blocked" once they reach a point where breaking changes are needed.']}),"\n",(0,i.jsx)(t.p,{children:'Once the "Unblocked" column has been emptied, and all of our v4 issues are either blocked or done, that will indicate that we are ready to commit to a new major version release, at which point a v4 branch will be created and that work can be started.'}),"\n",(0,i.jsx)(t.p,{children:"I'm hoping that this will make it easier for me to minimize disruption. Ideally, I want the process of implementing Bento v4 to be a simple case of deleting old deprecated stuff, and then removing flags/feature toggles in order to make new breaking features the default, having already been implemented and tested. There should be no green field work as part of the new v4 branch."}),"\n",(0,i.jsx)(t.h2,{id:"whats-next",children:"What's Next"}),"\n",(0,i.jsxs)(t.p,{children:["Make sure you get your thoughts and opinions added to the issues you're interested in. I'm also going to try and open up mini forums over ",(0,i.jsx)(t.a,{href:"/community",children:"our Discord server"})," to get feedback on the plans. If any of these issues are something you'd personally like then please add a thumbs up emoji to it, as that helps me prioritize them."]}),"\n",(0,i.jsxs)(t.p,{children:["If you're interested in getting involved then make sure you've joined one or more of our ",(0,i.jsx)(t.a,{href:"/community",children:"glorious community spaces"}),"."]})]})}function c(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},11151:function(e,t,n){n.d(t,{Z:function(){return r},a:function(){return s}});var i=n(67294);const a={},o=i.createContext(a);function s(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);