"use strict";(self.webpackChunkliquid_docs=self.webpackChunkliquid_docs||[]).push([[6474],{9475:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return c}});var a=n(3117),o=n(102),i=(n(7294),n(3905)),r=["components"],l={},p="liquid.Context",d={unversionedId:"api/context",id:"api/context",title:"liquid.Context",description:"A render context, containing namespaces for template variables and a references to the bound environment.",source:"@site/docs/api/context.md",sourceDirName:"api",slug:"/api/context",permalink:"/liquid/api/context",draft:!1,editUrl:"https://github.com/jg-rp/liquid/tree/docs/docs/api/context.md",tags:[],version:"current",frontMatter:{},sidebar:"apiSidebar",previous:{title:"liquid.loaders.DictLoader",permalink:"/liquid/api/dictloader"},next:{title:"liquid.tag.Tag",permalink:"/liquid/api/Tag"}},s={},c=[{value:"<code>Context</code>",id:"context",level:2},{value:"Properties",id:"properties",level:2},{value:"<code>env</code>",id:"env",level:3},{value:"<code>locals</code>",id:"locals",level:3},{value:"<code>globals</code>",id:"globals",level:3},{value:"<code>counters</code>",id:"counters",level:3},{value:"<code>scope</code>",id:"scope",level:3},{value:"<code>loops</code>",id:"loops",level:3},{value:"<code>disabled_tags</code>",id:"disabled_tags",level:3},{value:"<code>autoescape</code>",id:"autoescape",level:3},{value:"Methods",id:"methods",level:2},{value:"<code>assign</code>",id:"assign",level:3},{value:"<code>get</code>",id:"get",level:3},{value:"<code>get_async</code>",id:"get_async",level:3},{value:"<code>resolve</code>",id:"resolve",level:3},{value:"<code>filter</code>",id:"filter",level:3},{value:"<code>get_template</code>",id:"get_template",level:3},{value:"<code>get_template_async</code>",id:"get_template_async",level:3},{value:"<code>extend</code>",id:"extend",level:3},{value:"<code>copy</code>",id:"copy",level:3},{value:"<code>error</code>",id:"error",level:3}],u={toc:c};function m(e){var t=e.components,n=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"liquidcontext"},"liquid.Context"),(0,i.kt)("p",null,"A render context, containing namespaces for template variables and a references to the bound environment."),(0,i.kt)("p",null,"You probably don't want to instantiate a context directly. A new one is created automatically every time a template is rendered. If you're writing custom tags, consider ",(0,i.kt)("a",{parentName:"p",href:"#copy"},"copying")," or ",(0,i.kt)("a",{parentName:"p",href:"#extend"},"extending")," an existing context."),(0,i.kt)("h2",{id:"context"},(0,i.kt)("inlineCode",{parentName:"h2"},"Context")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"class Context(env, [options])")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"env: liquid.Environment")," - The ",(0,i.kt)("a",{parentName:"p",href:"/liquid/api/Environment"},(0,i.kt)("inlineCode",{parentName:"a"},"Environment"))," associated with this context.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"globals: Optional[Mapping[str, object]]")," - Template global variables.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"disabled_tags: Optional[List[str]]"),' - A list of tags names that are disallowed in this context.\nFor example, partial templates rendered using the "render" tag are not allowed to use "include"\ntags.')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"copy_depth: int = 0")," - The number times a context was copied to create this one."))),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"env"},(0,i.kt)("inlineCode",{parentName:"h3"},"env")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"liquid.Environment")),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"/liquid/api/Environment"},(0,i.kt)("inlineCode",{parentName:"a"},"Environment"))," associated with this context."),(0,i.kt)("h3",{id:"locals"},(0,i.kt)("inlineCode",{parentName:"h3"},"locals")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Dict[str, Any]")),(0,i.kt)("p",null,"A namespace for template local variables. Those that are bound with ",(0,i.kt)("inlineCode",{parentName:"p"},"assign")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"capture"),"."),(0,i.kt)("h3",{id:"globals"},(0,i.kt)("inlineCode",{parentName:"h3"},"globals")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Mapping[str, object]")),(0,i.kt)("p",null,"A read-only namespace containing globally available variables. Usually passed down from the\nenvironment."),(0,i.kt)("h3",{id:"counters"},(0,i.kt)("inlineCode",{parentName:"h3"},"counters")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Dict[str, int]")),(0,i.kt)("p",null,"A namespace for ",(0,i.kt)("inlineCode",{parentName:"p"},"increment")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"decrement")," counters."),(0,i.kt)("h3",{id:"scope"},(0,i.kt)("inlineCode",{parentName:"h3"},"scope")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"ReadOnlyChainMap")),(0,i.kt)("p",null,"Namespaces are searched using this chain map. When a context is extended, the temporary namespace is\npushed to the front of this chain."),(0,i.kt)("h3",{id:"loops"},(0,i.kt)("inlineCode",{parentName:"h3"},"loops")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"List[object]")),(0,i.kt)("p",null,"As stack of ",(0,i.kt)("inlineCode",{parentName:"p"},"forloop")," objects. Used for populating ",(0,i.kt)("inlineCode",{parentName:"p"},"forloop.parentloop"),"."),(0,i.kt)("h3",{id:"disabled_tags"},(0,i.kt)("inlineCode",{parentName:"h3"},"disabled_tags")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"List[str]")),(0,i.kt)("p",null,'A list of tags names that are disallowed in this context. For example, partial templates rendered\nusing the "render" tag are not allowed to use "include" tags.'),(0,i.kt)("h3",{id:"autoescape"},(0,i.kt)("inlineCode",{parentName:"h3"},"autoescape")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"bool")),(0,i.kt)("p",null,"Indicates if HTML auto-escaping is enabled."),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"assign"},(0,i.kt)("inlineCode",{parentName:"h3"},"assign")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"assign(key: str, val: Any) -> None")),(0,i.kt)("p",null,"Add ",(0,i.kt)("inlineCode",{parentName:"p"},"val")," to the local namespace with key ",(0,i.kt)("inlineCode",{parentName:"p"},"key"),"."),(0,i.kt)("h3",{id:"get"},(0,i.kt)("inlineCode",{parentName:"h3"},"get")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"get(path: Union[str, Sequence[Union[str, int]]], default: object = _undefined) -> object:")),(0,i.kt)("p",null,"Return the value at path ",(0,i.kt)("inlineCode",{parentName:"p"},"path")," if it is in scope, else default."),(0,i.kt)("h3",{id:"get_async"},(0,i.kt)("inlineCode",{parentName:"h3"},"get_async")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"async get_async(key: str, val: Any) -> None")),(0,i.kt)("p",null,"An async version of ",(0,i.kt)("a",{parentName:"p",href:"#get"},(0,i.kt)("inlineCode",{parentName:"a"},"get()")),"."),(0,i.kt)("h3",{id:"resolve"},(0,i.kt)("inlineCode",{parentName:"h3"},"resolve")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"resolve(name: str, default: object = _undefined) -> Any")),(0,i.kt)("p",null,"Return the object at ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," in the current scope. This is like ",(0,i.kt)("a",{parentName:"p",href:"#get"},(0,i.kt)("inlineCode",{parentName:"a"},"get()")),", but does a single,\ntop-level lookup rather than a chained lookup from a sequence of keys.`"),(0,i.kt)("h3",{id:"filter"},(0,i.kt)("inlineCode",{parentName:"h3"},"filter")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"filter(name: str) -> Callable[..., object]")),(0,i.kt)("p",null,"Return the filter function with given name."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Raises"),": NoSuchFilterFunc if a filter with the given name does not exist."),(0,i.kt)("h3",{id:"get_template"},(0,i.kt)("inlineCode",{parentName:"h3"},"get_template")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"get_template(name: str) -> BoundTemplate")),(0,i.kt)("p",null,"Load a template from the environment."),(0,i.kt)("h3",{id:"get_template_async"},(0,i.kt)("inlineCode",{parentName:"h3"},"get_template_async")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"async get_template_async(name: str) -> BoundTemplate")),(0,i.kt)("p",null,"Load a template from the environment asynchronously."),(0,i.kt)("h3",{id:"extend"},(0,i.kt)("inlineCode",{parentName:"h3"},"extend")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"extend(namespace: Mapping[str, object]) -> Iterator[Context]")),(0,i.kt)("p",null,"A context manager that extends this context with the given read-only namespace."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Raises"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"ContextDepthError")," if the context has been extended too many times."),(0,i.kt)("h3",{id:"copy"},(0,i.kt)("inlineCode",{parentName:"h3"},"copy")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"copy( self, namespace: Dict[str, object], disabled_tags: Optional[List[str]] = None) -> Context:")),(0,i.kt)("p",null,"Return a copy of this context without any local variables or other state for stateful tags."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Raises"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"ContextDepthError")," if the context has been copied too many times."),(0,i.kt)("h3",{id:"error"},(0,i.kt)("inlineCode",{parentName:"h3"},"error")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"error(exc: Error) -> None:")),(0,i.kt)("p",null,"Ignore, raise or convert the given exception to a warning, according to the current tolerance mode."))}m.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=d(n),m=o,k=u["".concat(p,".").concat(m)]||u[m]||c[m]||i;return n?a.createElement(k,r(r({ref:t},s),{},{components:n})):a.createElement(k,r({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var d=2;d<i;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);