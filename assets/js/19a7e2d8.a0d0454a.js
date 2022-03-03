"use strict";(self.webpackChunkliquid_docs=self.webpackChunkliquid_docs||[]).push([[941],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return c}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=s(n),c=r,f=m["".concat(p,".").concat(c)]||m[c]||u[c]||i;return n?a.createElement(f,o(o({ref:t},d),{},{components:n})):a.createElement(f,o({ref:t},d))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6544:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return d},default:function(){return m}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],l={},p="Python Liquid Extra",s={unversionedId:"extra/introduction",id:"extra/introduction",title:"Python Liquid Extra",description:"Python Liquid Extra is a repository of extra tags and filters for Python Liquid.",source:"@site/docs/extra/introduction.md",sourceDirName:"extra",slug:"/extra/introduction",permalink:"/liquid/extra/introduction",editUrl:"https://github.com/jg-rp/liquid/tree/docs/docs/extra/introduction.md",tags:[],version:"current",frontMatter:{},sidebar:"languageSidebar",previous:{title:"Liquid Tags",permalink:"/liquid/language/tags"},next:{title:"Extra Filters",permalink:"/liquid/extra/filters"}},d=[{value:"Install",id:"install",children:[],level:2},{value:"Usage",id:"usage",children:[{value:"Filters",id:"filters",children:[],level:3},{value:"Tags",id:"tags",children:[],level:3},{value:"Flask-Liquid",id:"flask-liquid",children:[],level:3},{value:"django-liquid",id:"django-liquid",children:[],level:3}],level:2}],u={toc:d};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"python-liquid-extra"},"Python Liquid Extra"),(0,i.kt)("p",null,"Python Liquid Extra is a repository of extra tags and filters for Python Liquid."),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},'These tags and filters are not part of "standard" Liquid. If you choose to use them in your\ntemplates, those templates are unlikely to render correctly with other implementations of Liquid.'))),(0,i.kt)("h2",{id:"install"},"Install"),(0,i.kt)("p",null,"Install Python Liquid Extra using ",(0,i.kt)("a",{parentName:"p",href:"https://pipenv.pypa.io/en/latest/"},"Pipenv"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ pipenv install python-liquid-extra\n")),(0,i.kt)("p",null,"Or ",(0,i.kt)("a",{parentName:"p",href:"https://pip.pypa.io/en/stable/getting-started/"},"pip"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ python -m pip install -U python-liquid-extra\n")),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,"Unlike ",(0,i.kt)("a",{parentName:"p",href:"/language/tags"},"standard tags and filters"),", which are registered for you automatically,\nyou must register any extra tags and/or filters with an ",(0,i.kt)("a",{parentName:"p",href:"/#environment"},"Environment"),"\nexplicitly. Just like you would with ",(0,i.kt)("a",{parentName:"p",href:"/guides/custom-tags"},"custom tags or filters"),"."),(0,i.kt)("h3",{id:"filters"},"Filters"),(0,i.kt)("p",null,"A filter function is any callable that accepts at least one argument, the result of the left hand\nside of a filtered expression. They can be implemented as simple functions, classes with a\n",(0,i.kt)("inlineCode",{parentName:"p"},"__call__")," method or closures that return a function or callable object. The latter two could take\nadditional arguments. Refer to the ",(0,i.kt)("a",{parentName:"p",href:"filters"},"extra filter reference")," to see what, if any, additional\narguments they support."),(0,i.kt)("p",null,"Add a template filter to an ",(0,i.kt)("a",{parentName:"p",href:"../api/Environment"},"Environment")," by calling its ",(0,i.kt)("a",{parentName:"p",href:"../api/Environment#add_filter"},"add_filter()")," method. For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'from liquid import Environment\nfrom liquid_extra import filters\n\nenv = Environment()\nenv.add_filter("json", filters.JSON())\n')),(0,i.kt)("h3",{id:"tags"},"Tags"),(0,i.kt)("p",null,"Some tags, like ",(0,i.kt)("a",{parentName:"p",href:"tags#if-not"},"if (not)"),", will replace standard, built-in tags. Others will introduce\nnew tags. Refer to the ",(0,i.kt)("a",{parentName:"p",href:"tags"},"extra tag reference")," to see what features each tags adds and/or\nremoves."),(0,i.kt)("p",null,"Register a tag with an ",(0,i.kt)("a",{parentName:"p",href:"../api/Environment"},"Environment")," by calling its ",(0,i.kt)("a",{parentName:"p",href:"../api/Environment#add_tag"},"add_tag"),"\nmethod. Then render templates from that environment. Notice that ",(0,i.kt)("inlineCode",{parentName:"p"},"add_tag")," expects the tag class,\nnot an instance of it."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"from liquid import Environment\nfrom liquid_extra.tags import IfNotTag\n\nenv = Environment()\nenv.add_tag(IfNotTag)\n")),(0,i.kt)("h3",{id:"flask-liquid"},"Flask-Liquid"),(0,i.kt)("p",null,"If you're using ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/jg-rp/Flask-Liquid"},"Flask-Liquid"),", you can get hold of the\nactive ",(0,i.kt)("a",{parentName:"p",href:"../api/Environment"},"liquid.Environment")," from an instance of the ",(0,i.kt)("inlineCode",{parentName:"p"},"Liquid")," extension."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="app.py"',title:'"app.py"'},'from flask import Flask\n\nfrom flask_liquid import Liquid\nfrom flask_liquid import render_template\n\nfrom liquid_extra import filters\nfrom liquid_extra import tags\n\napp = Flask(__name__)\n\nliquid = Liquid(app)\nliquid.env.add_filter("json", filters.JSON())\nliquid.env.add_tag(tags.IfNotTag)\n\n@app.route("/hello/")\n@app.route("/hello/<name>")\ndef index(name=None):\n    return render_template("index.html", name=name)\n')),(0,i.kt)("h3",{id:"django-liquid"},"django-liquid"),(0,i.kt)("p",null,"Using ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/jg-rp/django-liquid"},"django-liquid"),", the ",(0,i.kt)("a",{parentName:"p",href:"../api/Environment"},"liquid.Environment"),"\nneeds to be configured with a factory function. In ",(0,i.kt)("inlineCode",{parentName:"p"},"settings.py"),", when configuring your ",(0,i.kt)("inlineCode",{parentName:"p"},"TEMPLATES"),"\nbackend, set the ",(0,i.kt)("inlineCode",{parentName:"p"},"environment")," option to the path of your environment factory function."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="myproject/liquid.py"',title:'"myproject/liquid.py"'},'from liquid import Environment\nfrom liquid_extra import filters\nfrom liquid_extra import tags\n\ndef environment(**options):\n    env = Environment(**options)\n    env.add_filter("json", filters.JSON())\n    env.add_tag(tags.IfNotTag)\n    # Register more filters or tags here.\n    return env\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="settings.py"',title:'"settings.py"'},"TEMPLATES = [\n    {\n        'BACKEND': 'django_liquid.liquid.Liquid',\n        'DIRS': [],\n        'APP_DIRS': True,\n        'OPTIONS': {\n            'environment': 'myproject.liquid.environment'\n        },\n    },\n]\n")))}m.isMDXComponent=!0}}]);