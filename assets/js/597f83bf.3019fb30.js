(self.webpackChunkdropship_website_docs=self.webpackChunkdropship_website_docs||[]).push([[295],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=r.createContext({}),s=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(u.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(t),m=i,g=d["".concat(u,".").concat(m)]||d[m]||l[m]||o;return t?r.createElement(g,a(a({ref:n},p),{},{components:t})):r.createElement(g,a({ref:n},p))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=d;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var s=2;s<o;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3701:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var r=t(2122),i=t(9756),o=(t(7294),t(3905)),a=["components"],c={title:"BepInEx Guide"},u=void 0,s={unversionedId:"guides/bepinex_guide",id:"guides/bepinex_guide",isDocsHomePage:!1,title:"BepInEx Guide",description:"Best Practices",source:"@site/docs/guides/bepinex_guide.md",sourceDirName:"guides",slug:"/guides/bepinex_guide",permalink:"/guides/bepinex_guide",editUrl:"https://github.com/NuclearPowered/docs.reactor.gg/blob/master/docs/guides/bepinex_guide.md",version:"current",frontMatter:{title:"BepInEx Guide"},sidebar:"docs",previous:{title:"Launching the mod and More Resources",permalink:"/quick_start/launch_more_resources"},next:{title:"Harmony Guide",permalink:"/guides/harmony_guide"}},p=[{value:"Best Practices",id:"best-practices",children:[]}],l={toc:p};function d(e){var n=e.components,t=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"best-practices"},"Best Practices"),(0,o.kt)("p",null,"Here is an example BasePlugin class. Note how it does not (ab)use static variables everywhere, and calls ",(0,o.kt)("inlineCode",{parentName:"p"},"Harmony.PatchAll()")," after it has been created with a user defined ",(0,o.kt)("inlineCode",{parentName:"p"},"Id = gg.reactor.Example"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'using BepInEx;\nusing BepInEx.Configuration;\nusing BepInEx.IL2CPP;\nusing HarmonyLib;\nusing Reactor;\n\nnamespace Example\n{\n    [BepInPlugin(Id)]\n    [BepInProcess("Among Us.exe")]\n    [BepInDependency(ReactorPlugin.Id)]\n    public class ExamplePlugin : BasePlugin\n    {\n        public const string Id = "gg.reactor.Example";\n\n        public Harmony Harmony { get; } = new Harmony(Id);\n\n        public override void Load()\n        {\n            Harmony.PatchAll();\n        }\n    }\n}\n')))}d.isMDXComponent=!0}}]);