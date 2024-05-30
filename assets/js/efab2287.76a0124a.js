"use strict";(self.webpackChunkbento=self.webpackChunkbento||[]).push([[4310],{58348:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return a}});var o=t(85893),r=t(11151);const s={title:"Using CUE"},i=void 0,l={id:"configuration/using_cue",title:"Using CUE",description:"CUE support is experimental. It may change for some time to improve CUE's ability to type-check Bento configurations at the expense of causing new validation errors when moving from one Bento release to the next.",source:"@site/docs/configuration/using_cue.md",sourceDirName:"configuration",slug:"/configuration/using_cue",permalink:"/docs/configuration/using_cue",draft:!1,unlisted:!1,editUrl:"https://github.com/warpstreamlabs/bento/edit/main/website/docs/configuration/using_cue.md",tags:[],version:"current",frontMatter:{title:"Using CUE"},sidebar:"docs",previous:{title:"Dynamic Inputs and Outputs",permalink:"/docs/configuration/dynamic_inputs_and_outputs"},next:{title:"About",permalink:"/docs/components/about"}},c={},a=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Create",id:"create",level:2},{value:"Enhance",id:"enhance",level:2},{value:"Included CUE types",id:"included-cue-types",level:2},{value:"Wrap up",id:"wrap-up",level:2}];function u(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.admonition,{title:"EXPERIMENTAL",type:"warning",children:(0,o.jsx)(n.p,{children:"CUE support is experimental. It may change for some time to improve CUE's ability to type-check Bento configurations at the expense of causing new validation errors when moving from one Bento release to the next."})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"https://cuelang.org/",children:(0,o.jsx)(n.strong,{children:"CUE"})})," is a powerful configuration language that makes it easier and safer to build Bento configurations. It achieves this by validating and type-checking configurations as well as allowing you to build useful utilities that reduce boilerplate. In this guide, we will see how to build a Bento configuration using CUE, export it to YAML and execute it."]}),"\n",(0,o.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,o.jsxs)(n.p,{children:["Before you get started, ensure that you have installed CUE by ",(0,o.jsx)(n.a,{href:"https://cuelang.org/docs/install/",children:"following this guide"}),". If this is your first time workin with it, then it's a great idea to step through the ",(0,o.jsx)(n.a,{href:"https://cuelang.org/docs/tutorials/",children:"CUE tutorial"})," and familiarize yourself with the language."]}),"\n",(0,o.jsx)(n.h2,{id:"create",children:"Create"}),"\n",(0,o.jsx)(n.p,{children:"Create a directory for the CUE module that will contain our benthos configuration:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"mkdir hello-cue\ncd hello-cue\ncue mod init example.com/hello-cue\ntouch config.cue\n"})}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["CUE modules must start with a hostname. This will typically be the URL of your repository. For example: ",(0,o.jsx)(n.code,{children:"cue mod init github.com/benthosdev/hello-cue"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"bento list"})," command will generate a CUE package containing the types we'll need to build our configuration. Let's write this package into our project:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"mkdir bento\nbento list --format cue > bento/schema.cue\n"})}),"\n",(0,o.jsx)(n.p,{children:"At this point, you should now have the following directory structure:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"hello-cue/\n    benthos/\n        schema.cue\n    cue.mod/\n        pkg/\n        usr/\n        module.cue\n    config.cue\n"})}),"\n",(0,o.jsxs)(n.p,{children:["We are now ready to write our Bento config in CUE. Let's start by editing our ",(0,o.jsx)(n.code,{children:"config.cue"})," to include the following snippet:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-cue",children:'import "example.com/hello-cue/benthos"\n\nbento.#Config & {\n  input: {\n    generate: {\n      mapping: """\n      root = { "message": "Hello, CUE!" }\n      """\n    }\n  }\n\n\n  pipeline: {\n    processors: [\n      {\n        mapping: """\n        root = this\n        root.id = uuid_v4()\n        """\n      }\n    ]\n  }\n\n  output: {\n    stdout: {}\n  }\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["Let's see what this will look like as YAML by running ",(0,o.jsx)(n.code,{children:"cue export"})," while in the ",(0,o.jsx)(n.code,{children:"hello-cue"})," directory:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"cue export --out yaml config.cue\n"})}),"\n",(0,o.jsx)(n.p,{children:"This should output something like this:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:'input:\n  generate:\n    mapping: \'root = { "message": "Hello, CUE!" }\'\npipeline:\n  processors:\n    - mapping: |-\n        root = this\n        root.id = uuid_v4()\noutput:\n  stdout: {}\ntests: []\n'})}),"\n",(0,o.jsx)(n.p,{children:"We can run this with Bento to see that it indeed works:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"bento -c <(cue export --out yaml config.cue)\n"})}),"\n",(0,o.jsx)(n.p,{children:"When you are satisfied with the results, terminate the Bento process and let's move on to look at some of the nice features that we get with CUE."}),"\n",(0,o.jsx)(n.h2,{id:"enhance",children:"Enhance"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"config.cue"})," above looks eerily like JSON. This is because CUE is a superset of JSON and shares its syntax. However, we can shorten our configuration to reduce identation and curly brackets. Let's rewrite ",(0,o.jsx)(n.code,{children:"config.cue"})," to look like this:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-cue",children:'import "example.com/hello-cue/benthos"\n\nbento.#Config & {\n  input: generate: mapping: """\n  root = { "message": "Hello, CUE!" }\n  """\n\n\n  pipeline: processors: [\n    {\n      mapping: """\n      root = this\n      root.id = uuid_v4()\n      """\n    }\n  ]\n\n  output: stdout: {}\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["If you run the same ",(0,o.jsx)(n.code,{children:"cue export"})," command from earlier, you'll notice that the YAML output is the same."]}),"\n",(0,o.jsxs)(n.p,{children:["Next, we'll look at what some error handling patterns might look like with CUE. One typical technique to detect messages with errors is to use the ",(0,o.jsx)(n.code,{children:"switch"})," output to wrap another output with some error detection and handling. Another pattern involves limiting the number of retries on a given output that is misbehaving and rejecting or dropping messages with some useful logging. If we combine all these concepts together we get:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:'output:\n  switch:\n    cases:\n      - check: errored()\n        output:\n          reject: "failed to process message: ${! error() }"\n      - output:\n          retry:\n            max_retries: 5\n            output:\n              gcp_pubsub:\n                project: "sample-project"\n                topic: "sample-topic"\n'})}),"\n",(0,o.jsx)(n.p,{children:"There are quite a few lines of YAML here and we seem to be going sideways as we compose more functionality. We can try and make this more manageable with CUE!"}),"\n",(0,o.jsxs)(n.p,{children:["Let's create a new file in our ",(0,o.jsx)(n.code,{children:"hello-cue"})," directory called ",(0,o.jsx)(n.code,{children:"bento/helpers.cue"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"touch benthos/helpers.cue\n"})}),"\n",(0,o.jsx)(n.p,{children:"In this file, add the following snippet:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-cue",children:'package bento\n\n#Guarded: self = {\n  // The desired output that will be wrapped with error handling mechanisms\n  #output: #Output\n\n  // The error text to emit if the output receives any messages which contained\n  // processing errors\n  #errorMessage: string\n\n  // The number of retries to attempt on the desired output (default is 3)\n  #maxRetries: uint | *3\n\n  // The error message to emit if the retry attempts are exhausted\n  #retryErrorMessage: string\n\n  // Whether to drop or reject any failed messages\n  #errorHandling: "drop" | "reject"\n\n  switch: cases: [\n    {\n      check: "errored()"\n      output: {\n        if self.#errorHandling == "reject" { reject: self.#errorMessage }\n\n        if self.#errorHandling == "drop" {\n          drop: {}\n          processors: [{ log: message: self.#errorMessage }]\n        }\n      }\n    },\n    {\n      output: fallback: [\n        {\n          retry: {\n            max_retries: self.#maxRetries\n            output: self.#output\n          }\n        },\n        {\n          if self.#errorHandling == "reject" { reject: self.#retryErrorMessage }\n\n          if self.#errorHandling == "drop" {\n            drop: {}\n            processors: [{ log: message: self.#retryErrorMessage }]\n          }\n        }\n      ]\n    }\n  ]\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["Now, let's get back to ",(0,o.jsx)(n.code,{children:"config.cue"})," and edit a few bits while leveraging this helper:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-cue",children:'import "example.com/hello-cue/benthos"\n\nbento.#Config & {\n  input: generate: {\n    count: 1\n    interval: "0"\n    mapping: """\n    root = { "message": "Hello, CUE!" }\n    """\n  }\n\n  output: bento.#Guarded & {\n    #errorMessage: "failed to process message: ${! error() }"\n\n    #maxRetries: 3\n    #retryErrorMessage: "failed to output message after \\(#maxRetries) retries"\n\n    #errorHandling: "drop"\n\n    #output: http_client: {\n      url: "http://localhost:4195/sad-blob"\n      retries: 0\n    }\n  }\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["If you rerun ",(0,o.jsx)(n.code,{children:"cue export"})," now, you'll see that we've wrapped our output with a couple of error handling mechanisms. We also had access to powerful CUE features like conditional fields based on ",(0,o.jsx)(n.code,{children:"#errorHandling"}),", default values and interpolations."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:'input:\n  generate:\n    count: 1\n    interval: "0"\n    mapping: \'root = { "message": "Hello, CUE!" }\'\noutput:\n  switch:\n    cases:\n      - check: errored()\n        output:\n          drop: {}\n          processors:\n            - log:\n                message: \'failed to process message: ${! error() }\'\n      - output:\n          fallback:\n            - retry:\n                max_retries: 3\n                output:\n                  http_client:\n                    url: http://localhost:4195/sad-blob\n                    retries: 0\n            - drop: {}\n              processors:\n                - log:\n                    message: failed to output message after 3 retries\ntests: []\n'})}),"\n",(0,o.jsx)(n.p,{children:"The final directory structure of your hello-cue project should look like this:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"hello-cue/\n    benthos/\n        schema.cue\n        helpers.cue\n    cue.mod/\n        pkg/\n        usr/\n        module.cue\n    config.cue\n"})}),"\n",(0,o.jsx)(n.h2,{id:"included-cue-types",children:"Included CUE types"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"bento.cue"})," file we emitted earlier contains a number of useful types that we can use when build configuration files and helpers. These include:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"bento.#Config"})}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"This definition describes the format of a Bento config file. You'll want to use it at the top of your configuration file to validate its overall structure."}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"bento.#Input"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"bento.#Output"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"bento.#Processor"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"bento.#RateLimit"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"bento.#Buffer"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"bento.#Cache"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"bento.#Metric"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"bento.#Tracer"})}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Each of these definitions is a disjunction that holds all the corresponding components in Bento. In other words, a CUE field that is specified as ",(0,o.jsx)(n.code,{children:"bento.#Input"}),", such as ",(0,o.jsx)(n.code,{children:"myfield: bento.#Input"}),", must resolve to a valid Bento input."]}),"\n",(0,o.jsx)(n.h2,{id:"wrap-up",children:"Wrap up"}),"\n",(0,o.jsxs)(n.p,{children:["Being able to define helper packages and definitions like ",(0,o.jsx)(n.code,{children:"#Guarded"})," and reusing them across your Bento configurations is a really powerful feature of CUE. This will allow you to share consistent good practices without messy boilerplate across projects and teams!"]})]})}function d(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},11151:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return i}});var o=t(67294);const r={},s=o.createContext(r);function i(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);