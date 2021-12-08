"use strict";(self.webpackChunkliquid_docs=self.webpackChunkliquid_docs||[]).push([[820],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return c}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),m=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=m(n),c=r,g=u["".concat(p,".").concat(c)]||u[c]||d[c]||l;return n?a.createElement(g,o(o({ref:t},s),{},{components:n})):a.createElement(g,o({ref:t},s))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var m=2;m<l;m++)o[m]=n[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2186:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return m},toc:function(){return s},default:function(){return u}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),o=["components"],i={},p="Render Context",m={unversionedId:"introduction/render-context",id:"introduction/render-context",isDocsHomePage:!1,title:"Render Context",description:"The result of rendering a template depends on the context in which it is rendered.",source:"@site/docs/introduction/render-context.md",sourceDirName:"introduction",slug:"/introduction/render-context",permalink:"/liquid/introduction/render-context",editUrl:"https://github.com/jg-rp/liquid/tree/docs/docs/introduction/render-context.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Loading Templates",permalink:"/liquid/introduction/loading-templates"},next:{title:"Objects and Drops",permalink:"/liquid/introduction/objects-and-drops"}},s=[{value:"Environment Globals",id:"environment-globals",children:[],level:2},{value:"Template Globals",id:"template-globals",children:[],level:2},{value:"Render Arguments",id:"render-arguments",children:[],level:2},{value:"Matter",id:"matter",children:[],level:2},{value:"Namespaces",id:"namespaces",children:[{value:"globals",id:"globals",children:[],level:3},{value:"locals",id:"locals",children:[],level:3},{value:"counters",id:"counters",children:[],level:3}],level:2}],d={toc:s};function u(e){var t=e.components,n=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"render-context"},"Render Context"),(0,l.kt)("p",null,"The result of rendering a template depends on the ",(0,l.kt)("a",{parentName:"p",href:"../api/context"},"context")," in which it is rendered.\nThat is, available variables and their values, and options set on the bound ",(0,l.kt)("a",{parentName:"p",href:"../api/Environment"},"Environment"),"."),(0,l.kt)("h2",{id:"environment-globals"},"Environment Globals"),(0,l.kt)("p",null,"You can add ",(0,l.kt)("em",{parentName:"p"},"global")," variables to an environment using the ",(0,l.kt)("inlineCode",{parentName:"p"},"globals")," argument to the\n",(0,l.kt)("a",{parentName:"p",href:"../api/Environment"},"Environment")," constructor. ",(0,l.kt)("inlineCode",{parentName:"p"},"globals")," should be a dictionary (or any Mapping)\nmapping strings to Python objects. Environment globals are automatically added to the render\ncontext of every template rendered with ",(0,l.kt)("a",{parentName:"p",href:"../api/Environment#from_string"},"Environment.from_string"),"\nand ",(0,l.kt)("a",{parentName:"p",href:"../api/Environment#get_template"},"Environment.get_template"),", including templates rendered with\nthe ",(0,l.kt)("a",{parentName:"p",href:"../language/tags#render"},"render tag"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'from liquid import Environment\n\nenv = Environment(globals={"site_name": "MySite"})\n\ntemplate = env.from_string("""\\\n    <html>\n    <head>\n        <title>{{ site_name }}</title>\n    </head>\n    </html>\n""")\n\nprint(template.render())\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-plain",metastring:'title="output"',title:'"output"'},"<html>\n<head>\n    <title>MySite</title>\n</head>\n</html>\n")),(0,l.kt)("h2",{id:"template-globals"},"Template Globals"),(0,l.kt)("p",null,"Similar to ",(0,l.kt)("a",{parentName:"p",href:"#environment-globals"},"Environment Globals"),", you can add global template variables to a\n",(0,l.kt)("a",{parentName:"p",href:"../api/BoundTemplate"},"liquid.template.BoundTemplate"),". Globals set on a template will be merged with\nany set on its environment and added to the render context automatically."),(0,l.kt)("p",null,"If environment and template globals have conflicting names, template variables take priority over\nenvironment variables."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'from liquid import Environment\n\nenv = Environment(globals={"site_name": "MySite"})\n\nsource = """\\\n    <html>\n    <head>\n        <title>{{ site_name }} - {{ page.name }}</title>\n    </head>\n    </html>\n"""\n\ntemplate = env.from_string(source, globals={"page": {"name": "Blog"}})\nprint(template.render())\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-plain",metastring:'title="output"',title:'"output"'},"<html>\n<head>\n    <title>MySite - Blog</title>\n</head>\n</html>\n")),(0,l.kt)("h2",{id:"render-arguments"},"Render Arguments"),(0,l.kt)("p",null,"Keyword arguments passed to ",(0,l.kt)("a",{parentName:"p",href:"../api/BoundTemplate#render"},"liquid.template.BoundTemplate.render()"),"\nare also added to the ",(0,l.kt)("em",{parentName:"p"},"global")," namespace, although, unlike environment and template globals, they do\nnot persist between calls to ",(0,l.kt)("inlineCode",{parentName:"p"},"render()"),"."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"render()")," keyword arguments take priority over environment and template globals."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'from liquid import Environment\n\nenv = Environment(globals={"site_name": "MySite"})\n\nsource = """\\\n    <html>\n    <head>\n        <title>{{ site_name }} - {{ page.name }}</title>\n    </head>\n    <body>\n        <p>Hello, {{ user.name }}</p>\n    </body>\n    </html>\n"""\n\ntemplate = env.from_string(source, globals={"page": {"name": "Blog"}})\nprint(template.render(user = {"name": "Sally"}))\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-plain",metastring:'title="output"',title:'"output"'},"<html>\n<head>\n    <title>MySite - Blog</title>\n</head>\n    <body>\n        <p>Hello, Sally</p>\n    </body>\n</html>\n")),(0,l.kt)("h2",{id:"matter"},"Matter"),(0,l.kt)("p",null,"Matter variables are those that are added to a ",(0,l.kt)("a",{parentName:"p",href:"../api/BoundTemplate"},"template")," by a\n",(0,l.kt)("a",{parentName:"p",href:"loading-templates"},"loader"),". They could be from a ",(0,l.kt)("a",{parentName:"p",href:"../guides/custom-loaders#front-matter-loader"},"front matter loader"),"\nor extra meta data from a ",(0,l.kt)("a",{parentName:"p",href:"../guides/custom-loaders#async-database-loader"},"database loader"),"."),(0,l.kt)("p",null,"These, too, are merged into the ",(0,l.kt)("em",{parentName:"p"},"global")," context namespace, taking priority over template globals,\nbut not ",(0,l.kt)("inlineCode",{parentName:"p"},"render()")," keyword arguments."),(0,l.kt)("h2",{id:"namespaces"},"Namespaces"),(0,l.kt)("p",null,"A new ",(0,l.kt)("a",{parentName:"p",href:"../api/context"},"liquid.Context")," is created automatically every time a template is rendered.\nEach context manages multiple namespaces."),(0,l.kt)("h3",{id:"globals"},"globals"),(0,l.kt)("p",null,"From a template designer's perspective, the ",(0,l.kt)("em",{parentName:"p"},"globals")," namespace is read-only. The built-in\n",(0,l.kt)("a",{parentName:"p",href:"../language/tags#assign"},"assign")," and ",(0,l.kt)("a",{parentName:"p",href:"../language/tags#capture"},"capture")," tags can ",(0,l.kt)("em",{parentName:"p"},"mask")," names\ndefined in the global namespace, but never change them."),(0,l.kt)("p",null,"Built from ",(0,l.kt)("a",{parentName:"p",href:"#environment-globals"},"environment globals"),", ",(0,l.kt)("a",{parentName:"p",href:"#template-globals"},"template globals"),",\n",(0,l.kt)("a",{parentName:"p",href:"#matter"},"matter variables")," and ",(0,l.kt)("a",{parentName:"p",href:"#render-arguments"},"keyword arguments")," passed to ",(0,l.kt)("inlineCode",{parentName:"p"},"render()"),", the\nglobal namespace is available to all templates, including those rendered with\n",(0,l.kt)("a",{parentName:"p",href:"../language/tags#render"},(0,l.kt)("inlineCode",{parentName:"a"},"{% render %}")),"."),(0,l.kt)("h3",{id:"locals"},"locals"),(0,l.kt)("p",null,"The ",(0,l.kt)("em",{parentName:"p"},"local")," namespace is where variables set using ",(0,l.kt)("a",{parentName:"p",href:"../language/tags#assign"},(0,l.kt)("inlineCode",{parentName:"a"},"{% assign %}"))," and\n",(0,l.kt)("a",{parentName:"p",href:"../language/tags#capture"},(0,l.kt)("inlineCode",{parentName:"a"},"{% capture %}"))," are stored. When Liquid resolves a name, it looks in the\nlocal namespace first, then the global namespace."),(0,l.kt)("p",null,"Some tags extend the local namespace for the duration of their block. For example, the\n",(0,l.kt)("a",{parentName:"p",href:"../language/tags/#for"},(0,l.kt)("inlineCode",{parentName:"a"},"{% for %}"))," tag adds a ",(0,l.kt)("inlineCode",{parentName:"p"},"forloop")," object, which goes out of scope when the\nfor loop has finished."),(0,l.kt)("h3",{id:"counters"},"counters"),(0,l.kt)("p",null,"Named counters created with ",(0,l.kt)("a",{parentName:"p",href:"../language/tags#increment"},(0,l.kt)("inlineCode",{parentName:"a"},"{% increment %}"))," and\n",(0,l.kt)("a",{parentName:"p",href:"../language/tags#increment"},(0,l.kt)("inlineCode",{parentName:"a"},"{% decrement %}"))," have their own namespace. Outside of an ",(0,l.kt)("inlineCode",{parentName:"p"},"increment"),"\nor ",(0,l.kt)("inlineCode",{parentName:"p"},"decrement")," tag, Liquid will look in the counters namespace last, after ",(0,l.kt)("a",{parentName:"p",href:"#locals"},"locals")," and\n",(0,l.kt)("a",{parentName:"p",href:"#globals"},"globals"),"."))}u.isMDXComponent=!0}}]);