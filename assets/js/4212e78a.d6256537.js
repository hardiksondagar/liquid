"use strict";(self.webpackChunkliquid_docs=self.webpackChunkliquid_docs||[]).push([[9853],{8954:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return m}});var r=n(3117),a=n(102),i=(n(7294),n(3905)),o=["components"],p={},c="Caching",l={unversionedId:"introduction/caching",id:"introduction/caching",title:"Caching",description:"Template Caching",source:"@site/docs/introduction/caching.md",sourceDirName:"introduction",slug:"/introduction/caching",permalink:"/liquid/introduction/caching",draft:!1,editUrl:"https://github.com/jg-rp/liquid/tree/docs/docs/introduction/caching.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Async Support",permalink:"/liquid/introduction/async-support"},next:{title:"Custom Filters",permalink:"/liquid/guides/custom-filters"}},s={},m=[{value:"Template Caching",id:"template-caching",level:2},{value:"Expression Caching",id:"expression-caching",level:2}],u={toc:m};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"caching"},"Caching"),(0,i.kt)("h2",{id:"template-caching"},"Template Caching"),(0,i.kt)("p",null,"An in-memory template cache is included with every ",(0,i.kt)("a",{parentName:"p",href:"/liquid/api/Environment"},(0,i.kt)("inlineCode",{parentName:"a"},"Environment")),". Templates parsed with ",(0,i.kt)("a",{parentName:"p",href:"/liquid/api/Environment#get_template"},(0,i.kt)("inlineCode",{parentName:"a"},"Environment.get_template()")),", the ",(0,i.kt)("a",{parentName:"p",href:"/liquid/language/tags#render"},(0,i.kt)("inlineCode",{parentName:"a"},"{% render %}"))," tag or the ",(0,i.kt)("a",{parentName:"p",href:"/liquid/language/tags#include"},(0,i.kt)("inlineCode",{parentName:"a"},"{% include %}"))," tag are stored so as to avoid parsing them multiple times unnecessarily, should that same template be needed again. Templates parsed using ",(0,i.kt)("a",{parentName:"p",href:"/liquid/api/Environment#from_string"},(0,i.kt)("inlineCode",{parentName:"a"},"Environment.from_string()"))," are never cached."),(0,i.kt)("p",null,"The default cache size is ",(0,i.kt)("inlineCode",{parentName:"p"},"300")," (that's 300 templates). You can control the cache capacity with the ",(0,i.kt)("inlineCode",{parentName:"p"},"cache_size")," argument to ",(0,i.kt)("a",{parentName:"p",href:"/liquid/api/Environment"},(0,i.kt)("inlineCode",{parentName:"a"},"Environment"))," or ",(0,i.kt)("a",{parentName:"p",href:"/liquid/api/Template"},(0,i.kt)("inlineCode",{parentName:"a"},"Template")),". Setting ",(0,i.kt)("inlineCode",{parentName:"p"},"cache_size")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"0")," disables template caching altogether."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"from liquid import Environment\nenv = Environment(cache_size=800)\n")),(0,i.kt)("p",null,"Using an ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Cache_replacement_policies#Least_recently_used_(LRU)"},"LRU")," policy, the default cache is most effective in situations where the same template is ",(0,i.kt)("a",{parentName:"p",href:"/liquid/language/tags#render"},"rendered")," or ",(0,i.kt)("a",{parentName:"p",href:"/liquid/language/tags#include"},"included")," multiple times in a short space of time, or when most of your templates fit in the cache."),(0,i.kt)("h2",{id:"expression-caching"},"Expression Caching"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"New in version 1.1.0"))),(0,i.kt)("p",null,"Expression caching is useful in situations where the same Liquid expression appears multiple times in one or more templates. Depending on the nature of your templates, expression caching can significantly improve template parsing performance."),(0,i.kt)("p",null,"Expression caching is disabled by default. Enable it with the ",(0,i.kt)("inlineCode",{parentName:"p"},"expression_cache_size")," argument to ",(0,i.kt)("a",{parentName:"p",href:"/liquid/api/Environment"},(0,i.kt)("inlineCode",{parentName:"a"},"Environment"))," or ",(0,i.kt)("a",{parentName:"p",href:"/liquid/api/Template"},(0,i.kt)("inlineCode",{parentName:"a"},"Template")),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"from liquid import Environment\nenv = Environment(expression_cache_size=80)\n")),(0,i.kt)("p",null,"An ",(0,i.kt)("a",{parentName:"p",href:"/liquid/api/Environment"},(0,i.kt)("inlineCode",{parentName:"a"},"Environment"))," will manage one cache for each of the common, built-in expression types, ",(0,i.kt)("em",{parentName:"p"},"filtered"),", ",(0,i.kt)("em",{parentName:"p"},"boolean")," and ",(0,i.kt)("em",{parentName:"p"},"loop")," expressions. Each uses an ",(0,i.kt)("a",{parentName:"p",href:"https://docs.python.org/3/library/functools.html#functools.lru_cache"},"lru_cache")," from Python's ",(0,i.kt)("a",{parentName:"p",href:"https://docs.python.org/3/library/functools.html#module-functools"},"functools")," module. You can inspect cache ",(0,i.kt)("em",{parentName:"p"},"hits"),", ",(0,i.kt)("em",{parentName:"p"},"misses")," and ",(0,i.kt)("em",{parentName:"p"},"currsize")," for each using the ",(0,i.kt)("inlineCode",{parentName:"p"},"cache_info()")," function of ",(0,i.kt)("inlineCode",{parentName:"p"},"Environment.parse_filtered_expression_value"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Environment.parse_boolean_expression_value")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Environment.parse_loop_expression_value"),"."),(0,i.kt)("p",null,"Tests with the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/jg-rp/liquid/tree/main/tests/fixtures"},"benchmark fixtures")," show that extra memory used from caching expressions is offset by the reduced size of the resulting syntax trees."))}d.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(n),d=a,h=u["".concat(c,".").concat(d)]||u[d]||m[d]||i;return n?r.createElement(h,o(o({ref:t},s),{},{components:n})):r.createElement(h,o({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);