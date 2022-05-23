"use strict";(self.webpackChunkliquid_docs=self.webpackChunkliquid_docs||[]).push([[29],{1063:function(e,n,t){t.r(n),t.d(n,{assets:function(){return f},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return d},metadata:function(){return u},toc:function(){return s}});var i=t(3117),r=t(102),a=(t(7294),t(3905)),l=["components"],d={},o="Undefined Variables",u={unversionedId:"guides/undefined-variables",id:"guides/undefined-variables",title:"Undefined Variables",description:'When rendering a Liquid template, if a variable name can not be resolved, an instance of liquid.Undefined is used instead. We can customize template rendering behavior by implementing some of Python\'s "magic" methods on a subclass of liquid.Undefined.',source:"@site/docs/guides/undefined-variables.md",sourceDirName:"guides",slug:"/guides/undefined-variables",permalink:"/liquid/guides/undefined-variables",draft:!1,editUrl:"https://github.com/jg-rp/liquid/tree/docs/docs/guides/undefined-variables.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Static Template Analysis",permalink:"/liquid/guides/static-template-analysis"},next:{title:"Django Liquid",permalink:"/liquid/guides/django-liquid"}},f={},s=[{value:"Default Undefined",id:"default-undefined",level:2},{value:"Strict Undefined",id:"strict-undefined",level:2},{value:"The default filter",id:"the-default-filter",level:2},{value:"Falsy StrictUndefined",id:"falsy-strictundefined",level:2}],p={toc:s};function m(e){var n=e.components,t=(0,r.Z)(e,l);return(0,a.kt)("wrapper",(0,i.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"undefined-variables"},"Undefined Variables"),(0,a.kt)("p",null,"When rendering a Liquid template, if a variable name can not be resolved, an instance of ",(0,a.kt)("inlineCode",{parentName:"p"},"liquid.Undefined")," is used instead. We can customize template rendering behavior by implementing some of ",(0,a.kt)("a",{parentName:"p",href:"https://docs.python.org/3/reference/datamodel.html#basic-customization"},'Python\'s "magic" methods')," on a subclass of ",(0,a.kt)("inlineCode",{parentName:"p"},"liquid.Undefined"),"."),(0,a.kt)("h2",{id:"default-undefined"},"Default Undefined"),(0,a.kt)("p",null,"All operations on the default ",(0,a.kt)("inlineCode",{parentName:"p"},"Undefined")," type are silently ignored and, when rendered, it produces an empty string. For example, you can access properties and iterate an undefined variable without error."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-liquid",metastring:'title="template"',title:'"template"'},"Hello {{ nosuchthing }}\n{% for thing in nosuchthing %}\n    {{ thing }}\n{% endfor %}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-plain",metastring:'title="output"',title:'"output"'},"Hello\n\n\n\n")),(0,a.kt)("h2",{id:"strict-undefined"},"Strict Undefined"),(0,a.kt)("p",null,"When ",(0,a.kt)("inlineCode",{parentName:"p"},"liquid.StrictUndefined")," is passed as the ",(0,a.kt)("inlineCode",{parentName:"p"},"undefined")," argument to ",(0,a.kt)("a",{parentName:"p",href:"../api/Environment"},"Environment()")," or ",(0,a.kt)("a",{parentName:"p",href:"../api/Template"},"Template()"),", any operation on an undefined variable will raise an ",(0,a.kt)("inlineCode",{parentName:"p"},"UndefinedError"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"from liquid import Environment, StrictUndefined\n\nenv = Environment(undefined=StrictUndefined)\ntemplate = env.from_string(\"Hello {{ nosuchthing }}\")\ntemplate.render()\n# UndefinedError: 'nosuchthing' is undefined, on line 1\n")),(0,a.kt)("h2",{id:"the-default-filter"},"The default filter"),(0,a.kt)("p",null,"With ",(0,a.kt)("inlineCode",{parentName:"p"},"StrictUndefined"),", the built-in ",(0,a.kt)("a",{parentName:"p",href:"/liquid/language/filters#default"},"default filter")," does not handle undefined variables the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Shopify/liquid/issues/1404"},"way you might expect"),". The following example will raise an ",(0,a.kt)("inlineCode",{parentName:"p"},"UndefinedError")," if ",(0,a.kt)("inlineCode",{parentName:"p"},"username")," is undefined."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-liquid"},'Hello {{ username | default: "user" }}\n')),(0,a.kt)("p",null,"We can fix this by implementing our own ",(0,a.kt)("inlineCode",{parentName:"p"},"Undefined")," type and registering an updated version of the ",(0,a.kt)("inlineCode",{parentName:"p"},"default")," filter."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="strict_default_undefined.py"',title:'"strict_default_undefined.py"'},'from liquid import StrictUndefined\nfrom liquid.exceptions import UndefinedError\n\nclass StrictDefaultUndefined(StrictUndefined):\n\n    def __getattribute__(self, name: str) -> Any:\n        if name in (\n            "__repr__",\n            "__liquid__",\n            "__class__",\n            "name",\n            "hint",\n            "obj",\n            "hint",\n            "msg",\n        ):\n            return super().__getattribute__(name)\n        raise UndefinedError(self.msg)\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="my_default_filter.py"',title:'"my_default_filter.py"'},'from liquid.filter import liquid_filter\nfrom liquid import is_undefined\n\n@liquid_filter\ndef default_undefined(\n    obj: object,\n    default_: object = "",\n    *,\n    allow_false: bool = False\n) -> object:\n    """Return a default value if the input is undefined, nil, false, or empty."""\n    _obj = obj\n    if hasattr(obj, "__liquid__"):\n        _obj = obj.__liquid__()\n\n    if allow_false is True and _obj is False:\n        return obj\n\n    if is_undefined(_obj) or _obj in (None, False, EMPTY):\n        return default_\n\n    return obj\n')),(0,a.kt)("p",null,"Use ",(0,a.kt)("inlineCode",{parentName:"p"},"StrictDefaultUndefined")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"default_undefined")," by registering them with an ",(0,a.kt)("a",{parentName:"p",href:"../api/Environment"},"Environment"),", then loading and rendering templates from that environment."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'from liquid import Environment\nfrom strict_default_undefined import StrictDefaultUndefined\nfrom my_default_filter import default_undefined\n\nenv = Environment(undefined=StrictDefaultUndefined)\nenv.add_filter("default", default_undefined)\n')),(0,a.kt)("h2",{id:"falsy-strictundefined"},"Falsy StrictUndefined"),(0,a.kt)("p",null,"It's usually ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Shopify/liquid/issues/1034"},"not possible")," to detect undefined variables in a template using an ",(0,a.kt)("a",{parentName:"p",href:"../language/tags#if"},"if tag"),", for example."),(0,a.kt)("p",null,"In Python Liquid we can implement an ",(0,a.kt)("inlineCode",{parentName:"p"},"Undefined")," type that allows us to write ",(0,a.kt)("inlineCode",{parentName:"p"},"{% if nosuchthing %}"),", but still get some strictness when undefined variables are used elsewhere."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'from liquid import Environment\nfrom liquid import StrictUndefined\n\nclass FalsyStrictUndefined(StrictUndefined):\n    def __bool__(self) -> bool:\n        return False\n\n    def __eq__(self, other: object) -> bool:\n        if other is False:\n            return True\n        raise UndefinedError(self.msg)\n\nenv = Environment(undefined=FalsyStrictUndefined)\n\ntemplate = env.from_string("{% if nosuchthing %}foo{% else %}bar{% endif %}")\ntemplate.render() # "bar"\n\ntemplate = env.from_string("{{ nosuchthing }}")\ntemplate.render()\n# UndefinedError: \'nosuchthing\' is undefined, on line 1\n')))}m.isMDXComponent=!0},3905:function(e,n,t){t.d(n,{Zo:function(){return f},kt:function(){return m}});var i=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=i.createContext({}),u=function(e){var n=i.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},f=function(e){var n=u(e.components);return i.createElement(o.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},p=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,f=d(e,["components","mdxType","originalType","parentName"]),p=u(t),m=r,c=p["".concat(o,".").concat(m)]||p[m]||s[m]||a;return t?i.createElement(c,l(l({ref:n},f),{},{components:t})):i.createElement(c,l({ref:n},f))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,l=new Array(a);l[0]=p;var d={};for(var o in n)hasOwnProperty.call(n,o)&&(d[o]=n[o]);d.originalType=e,d.mdxType="string"==typeof e?e:r,l[1]=d;for(var u=2;u<a;u++)l[u]=t[u];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}p.displayName="MDXCreateElement"}}]);