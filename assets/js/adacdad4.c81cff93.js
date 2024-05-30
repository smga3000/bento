"use strict";(self.webpackChunkbento=self.webpackChunkbento||[]).push([[8217],{86699:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return a},default:function(){return u},frontMatter:function(){return o},metadata:function(){return i},toc:function(){return c}});var r=t(85893),s=t(11151);const o={title:"Compiling Bento to Web Assembly",author:"Ashley Jeffs",author_url:"https://github.com/Jeffail",author_image_url:"/img/ash.jpg",description:"Don't worry about why",keywords:["benthos","go","golang","web assembly","wasm","gowasm"],tags:["Bento Lab"]},a=void 0,i={permalink:"/blog/2019/05/27/compiling-benthos-to-wasm",source:"@site/blog/2019-05-27-compiling-benthos-to-wasm.md",title:"Compiling Bento to Web Assembly",description:"Don't worry about why",date:"2019-05-27T00:00:00.000Z",formattedDate:"May 27, 2019",tags:[{label:"Bento Lab",permalink:"/blog/tags/bento-lab"}],readingTime:3.73,hasTruncateMarker:!0,authors:[{name:"Ashley Jeffs",url:"https://github.com/Jeffail",imageURL:"/img/ash.jpg"}],frontMatter:{title:"Compiling Bento to Web Assembly",author:"Ashley Jeffs",author_url:"https://github.com/Jeffail",author_image_url:"/img/ash.jpg",description:"Don't worry about why",keywords:["benthos","go","golang","web assembly","wasm","gowasm"],tags:["Bento Lab"]},unlisted:!1,prevItem:{title:"Introducing Bento Lab",permalink:"/blog/2019/06/17/introducing-benthos-lab"}},l={authorsImageUrls:[void 0]},c=[{value:"The Build",id:"the-build",level:2},{value:"Executing Go From JavaScript",id:"executing-go-from-javascript",level:2},{value:"Other Issues",id:"other-issues",level:2},{value:"Final Words",id:"final-words",level:2}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["Web assembly won't fix seasons 7 and 8, but it's still pretty cool. At a\r\n",(0,r.jsx)(n.a,{href:"https://underthehood.meltwater.com/blog/2019/06/17/benthos-lab-a-case-study-of-hackathon-innovation/",children:"Meltwater hackathon"})," I had a project in mind (details soon to\r\nfollow) that would benefit hugely from Bento running directly in the browser.\r\nI therefore set out to compile it in wasm, this is my short and sweet journey."]}),"\n",(0,r.jsx)(n.h2,{id:"the-build",children:"The Build"}),"\n",(0,r.jsxs)(n.p,{children:["The first thing I did and the first thing you ought to do if you are targeting\r\nwasm yourself is skim through ",(0,r.jsx)(n.a,{href:"https://github.com/golang/go/wiki/WebAssembly",children:"this section of the Go wiki"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"In short, I wrote a Go file:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'package main\r\n\r\nimport (\r\n\t"syscall/js"\r\n\r\n\t"github.com/warpstreamlabs/bento/lib/config"\r\n\t"gopkg.in/yaml.v3"\r\n)\r\n\r\nfunc normalise(this js.Value, args []js.Value) interface{} {\r\n\tvar configStr string\r\n\tif len(args) > 0 {\r\n\t\tconfigStr = args[0].String()\r\n\t}\r\n\r\n\tconf := config.New()\r\n\r\n\t// Ignoring errors for brevity\r\n\tyaml.Unmarshal([]byte(configStr), &conf)\r\n\r\n\tsanit, _ := conf.Sanitised()\r\n\tsanitBytes, _ := yaml.Marshal(sanit)\r\n\r\n\treturn string(sanitBytes)\r\n}\r\n\r\nfunc main() {\r\n\tc := make(chan struct{}, 0)\r\n\tjs.Global().Set("benthosNormaliseConfig", js.FuncOf(normalise))\r\n\t<-c\r\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"And compiled it:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"GOOS=js GOARCH=wasm go build -o main.wasm\n"})}),"\n",(0,r.jsx)(n.p,{children:"I was pretty sure that this would be the end of the road for me. Bento uses a\r\nvast swathe of dependencies for its various connectors and so I was sure that I\r\nwould be immobilised with errors. However, to my surprise there were only three\r\n(formatted for brevity):"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:"lib/util/disk/check.go:29:11: undefined: syscall.Statfs_t\r\ngithub.com/edsrzf/mmap-go@v1.0.0/mmap.go:77:9: undefined: mmap\r\ngithub.com/lib/pq@v1.0.0/conn.go:321:13: undefined: userCurrent\n"})}),"\n",(0,r.jsx)(n.p,{children:"Which involved some calls for a buffer implementation using a memory-mapped file\r\nlibrary and the PostgreSQL driver for the SQL package. The errors themselves are\r\nbasically \"this thing doesn't exist in Web Assembly\", which usually means the\r\nlibrary has a feature behind build constraints but doesn't support wasm yet."}),"\n",(0,r.jsx)(n.p,{children:"The solution for these problems in my case was as simple as to not to do the\r\ncall, and perhaps document that the feature doesn't work with a wasm build."}),"\n",(0,r.jsxs)(n.p,{children:["Obviously, we only want to disable these calls specifically when targeting wasm.\r\nIn Go that's easy, stick a cheeky\r\n",(0,r.jsx)(n.a,{href:"https://golang.org/pkg/go/build/#hdr-Build_Constraints",children:"build constraint on there"}),". Here's the actual commit:\r\n",(0,r.jsx)(n.a,{href:"https://github.com/warpstreamlabs/bento/commit/9903b3d5d8519fcf7ecbce94c336e7f054a75942#diff-146b6fd87106d7f70f56facf7b1e7d98",children:"9903b3d5d8519fcf7ecbce94c336e7f054a75942"}),", note that you can't\r\njust constrain the feature, you also need to add an empty stub that has the\r\nopposite constraint in order to satisfy your build."]}),"\n",(0,r.jsx)(n.h2,{id:"executing-go-from-javascript",children:"Executing Go From JavaScript"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.a,{href:"https://github.com/golang/go/wiki/WebAssembly",children:"Go Wiki"})," shows you how to actually execute your wasm build\r\nand I won't repeat it here, but I followed the steps and it was pretty straight\r\nforward."]}),"\n",(0,r.jsx)(n.p,{children:"There was, however, one issue I came across. Some functions that I was calling\r\nfrom JavaScript were causing my wasm runtime to panic and stop. The functions\r\nall had channel blocking in common, something like this:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"func ashHasACoolBlog(this js.Value, args []js.Value) interface{} {\r\n\tsomeChan <- args[0].String()\r\n\treturn <-someOtherChanIHateNamingThings\r\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"The function would sometimes execute successfully. Other times, specifically for\r\nlonger running calls, I would get a deadlock panic:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:"fatal error: all goroutines are asleep - deadlock! wasm_exec.js:47:6\r\nwasm_exec.js:47:6\r\ngoroutine 1 [chan receive]: wasm_exec.js:47:6\r\nmain.main() wasm_exec.js:47:6\r\n\t/home/ash/tmp/wasm/main.go:20 +0x7\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Which was odd as they would be occasions where I would not expect a real\r\ndeadlock. I then found the relevant docs in the ",(0,r.jsx)(n.a,{href:"https://godoc.org/syscall/js#Func",children:(0,r.jsx)(n.code,{children:"syscall/js"})}),"\r\npackage:"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Blocking operations in the wrapped function will block the event loop. As a\r\nconsequence, if one wrapped function blocks, other wrapped funcs will not be\r\nprocessed. A blocking function should therefore explicitly start a new\r\ngoroutine."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"The consequences of blocking sound pretty harmless here, but in reality it\r\nseemed to be the cause of my deadlock crash. I assume the odd error message is a\r\nresult of some nuanced mechanics within the wasm runtime."}),"\n",(0,r.jsx)(n.p,{children:"I didn't investigate this crash any further as I was a lazy idiot back in those\r\ndark days. I simply stopped writing blocking functions, and instead spawned\r\ngoroutines everywhere like they were losers at a Nickelback concert:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'func iJustWantToClarify(this js.Value, args []js.Value) interface{} {\r\n\tgo func() {\r\n\t\tsomeChan <- args[0].String()\r\n\t\totherThing := <-someOtherChanIHateNamingThings\r\n\r\n\t\tjs.Global().Get("thatActually").Set(\r\n\t\t\t"textContent",\r\n\t\t\t"I quite enjoy and respect Knickelback as artists... " + otherThing,\r\n\t\t)\r\n\t}()\r\n\treturn nil\r\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"other-issues",children:"Other Issues"}),"\n",(0,r.jsx)(n.p,{children:"There weren't any."}),"\n",(0,r.jsx)(n.h2,{id:"final-words",children:"Final Words"}),"\n",(0,r.jsx)(n.p,{children:"It took a day for me to get a working application together and soon I'll be\r\nblogging about the resulting product. Web assembly with Go is yummy."}),"\n",(0,r.jsx)(n.p,{children:"Kudos to both the W3C and the Go team for taking their time to build something\r\nto completion without rushing the conclusion. Yes, I'm still bitter about Game\r\nof Thrones."})]})}function u(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},11151:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return a}});var r=t(67294);const s={},o=r.createContext(s);function a(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);