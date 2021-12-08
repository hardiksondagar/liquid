"use strict";(self.webpackChunkliquid_docs=self.webpackChunkliquid_docs||[]).push([[936],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return u}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),m=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=m(n),u=r,f=c["".concat(p,".").concat(u)]||c[u]||s[u]||o;return n?a.createElement(f,i(i({ref:t},d),{},{components:n})):a.createElement(f,i({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var m=2;m<o;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2566:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return m},toc:function(){return d},default:function(){return c}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],l={},p="Loading Templates",m={unversionedId:"introduction/loading-templates",id:"introduction/loading-templates",isDocsHomePage:!1,title:"Loading Templates",description:"You can load templates from a file system or database, for example, by creating an",source:"@site/docs/introduction/loading-templates.md",sourceDirName:"introduction",slug:"/introduction/loading-templates",permalink:"/liquid/introduction/loading-templates",editUrl:"https://github.com/jg-rp/liquid/tree/docs/docs/introduction/loading-templates.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Getting Started",permalink:"/liquid/"},next:{title:"Render Context",permalink:"/liquid/introduction/render-context"}},d=[],s={toc:d};function c(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"loading-templates"},"Loading Templates"),(0,o.kt)("p",null,"You can load templates from a file system or database, for example, by creating an\n",(0,o.kt)("a",{parentName:"p",href:"../api/Environment"},"Environment")," and configuring a template ",(0,o.kt)("em",{parentName:"p"},"loader"),". You'd also need a loader if\nyou want to use the built-in ",(0,o.kt)("a",{parentName:"p",href:"../language/tags#include"},"include")," or ",(0,o.kt)("a",{parentName:"p",href:"../language/tags#render"},"render"),"\ntags."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"../api/Environment#get_template"},"Environment.get_template()")," and ",(0,o.kt)("a",{parentName:"p",href:"../api/Environment#get_template_async"},"Environment.get_template_async()"),"\naccept a template name, and return a ",(0,o.kt)("a",{parentName:"p",href:"../api/BoundTemplate"},"BoundTemplate"),". That is a template bound\nto the environment, ready to be rendered. It is up to the loader to interpret a template name. In\nthe case of ",(0,o.kt)("a",{parentName:"p",href:"../api/FileSystemLoader"},"FileSystemLoader"),", the name would be a file name, possibly\npreceded by a path relative to the configured search path."),(0,o.kt)("p",null,"This example assumes a folder called ",(0,o.kt)("inlineCode",{parentName:"p"},"templates")," exists in the current working directory, and that\ntemplate files ",(0,o.kt)("inlineCode",{parentName:"p"},"index.html")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"some-list.html")," exist within it."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="templates/index.html"',title:'"templates/index.html"'},"<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <title>{{ page_title }}</title>\n  </head>\n  <body>\n    <h1>{{ heading }}</h1>\n    {% render 'some-list.html' with people %}\n  </body>\n</html>\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="templates/some-list.html"',title:'"templates/some-list.html"'},"<ul>\n  {% for person in people %}\n  <li>{{ person.name }}</li>\n  {% endfor %}\n</ul>\n")),(0,o.kt)("p",null,"By default, every ",(0,o.kt)("a",{parentName:"p",href:"../api/Environment"},"Environment")," is created with an empty ",(0,o.kt)("a",{parentName:"p",href:"../api/DictLoader"},"DictLoader"),".\nSpecify an alternative template loader using the ",(0,o.kt)("inlineCode",{parentName:"p"},"loader")," argument."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from liquid import Environment\nfrom liquid import FileSystemLoader\n\nenv = Environment(loader=FileSystemLoader("templates/"))\n\npeople = [\n    {"name": "John"},\n    {"name": "Sally"},\n]\n\ntemplate = env.get_template("index.html")\nprint(template.render(\n    heading="Some List",\n    page_title="Awesome Title",\n    people=people,\n))\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <title>Awesome Title</title>\n  </head>\n  <body>\n    <h1>Some List</h1>\n    <ul>\n\n  <li>John</li>\n\n  <li>Sally</li>\n\n</ul>\n  </body>\n</html>\n')),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Notice how whitespace is output unchanged. See ",(0,o.kt)("a",{parentName:"p",href:"../language/whitespace-control"},"whitespace control"),"\nfor more information."))),(0,o.kt)("p",null,"Available, built-in loaders are ",(0,o.kt)("a",{parentName:"p",href:"../api/FileSystemLoader"},"FileSystemLoader"),", ",(0,o.kt)("a",{parentName:"p",href:"../api/DictLoader"},"DictLoader"),"\nand ",(0,o.kt)("a",{parentName:"p",href:"../api/ChoiceLoader"},"ChoiceLoader"),"."),(0,o.kt)("p",null,"See also ",(0,o.kt)("a",{parentName:"p",href:"../guides/custom-loaders"},"custom loaders"),",\nand examples of a ",(0,o.kt)("a",{parentName:"p",href:"../guides/custom-loaders#front-matter-loader"},"FrontMatterFileSystemLoader"),"\nand an ",(0,o.kt)("a",{parentName:"p",href:"../guides/custom-loaders#async-database-loader"},"AsyncDatabaseLoader"),"."))}c.isMDXComponent=!0}}]);