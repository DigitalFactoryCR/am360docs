(window.webpackJsonp=window.webpackJsonp||[]).push([[149],{207:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return u})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return m}));var a=n(2),r=n(6),o=(n(0),n(359)),i=n(363),l=n(364),u={id:"examples",title:"Beaver Builder Module/Column/Row Display Setting Examples",description:"Some Beaver Builder Module/Column/Row display examples using ActiveMember360.",sidebar_label:"Beaver Builder Module/Column/Row Display Setting Examples"},s={unversionedId:"extensions/beaver-builder/examples",id:"extensions/beaver-builder/examples",isDocsHomePage:!1,title:"Beaver Builder Module/Column/Row Display Setting Examples",description:"Some Beaver Builder Module/Column/Row display examples using ActiveMember360.",source:"@site/docs/extensions/beaver-builder/examples.mdx",slug:"/extensions/beaver-builder/examples",permalink:"/am360docs/extensions/beaver-builder/examples",version:"current",sidebar_label:"Beaver Builder Module/Column/Row Display Setting Examples",sidebar:"extensions",previous:{title:"Set Beaver Builder Module/Column/Row Visibility Based Upon Conditional PHP Statement",permalink:"/am360docs/extensions/beaver-builder/module-condition-php-statement"},next:{title:"Set Visibility Conditions For Beaver Builder Module/Column/Row Using Beaver Themer Conditional Logic With ActiveMember360 Conditionals",permalink:"/am360docs/extensions/beaver-builder/module-themer-conditional-logic"}},c=[],p={rightToc:c};function m(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)(i.a,{groupId:"examples",defaultValue:"ex1",values:[{label:"Example 1",value:"ex1"},{label:"Example 2",value:"ex2"},{label:"Example 3",value:"ex3"},{label:"Example 4",value:"ex4"},{label:"Example 5",value:"ex5"}],mdxType:"Tabs"},Object(o.b)(l.a,{value:"ex1",mdxType:"TabItem"},Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Always display")," the module/column/row if the logged in user ",Object(o.b)("strong",{parentName:"p"},"has")," the ActiveCampaign tag named Customer:"),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"https://d1toiz2vvvafqj.cloudfront.net/docs/images/beaver_builder_extension_module_example_1.png",alt:"Beaver Builder Module/Column/Row Display Settings Example 1"})))),Object(o.b)(l.a,{value:"ex2",mdxType:"TabItem"},Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Always display")," the module/column/row if the logged in user ",Object(o.b)("strong",{parentName:"p"},"has")," the ActiveCampaign tag named Customer ",Object(o.b)("strong",{parentName:"p"},"and does not have")," the tag named Newsletter Subscriber:"),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"https://d1toiz2vvvafqj.cloudfront.net/docs/images/beaver_builder_extension_module_example_2.png",alt:"Beaver Builder Module/Column/Row Display Settings Example 2"})))),Object(o.b)(l.a,{value:"ex3",mdxType:"TabItem"},Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Always display")," the module/column/row if the logged in user ",Object(o.b)("strong",{parentName:"p"},"has")," the ActiveCampaign tag named Customer ",Object(o.b)("strong",{parentName:"p"},"and does not have")," the tag named Newsletter Subscriber ",Object(o.b)("strong",{parentName:"p"},"and")," the ActiveCampaign Country contact field is equal to United States:"),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"https://d1toiz2vvvafqj.cloudfront.net/docs/images/beaver_builder_extension_module_example_3.png",alt:"Beaver Builder Module/Column/Row Display Settings Example 3"})))),Object(o.b)(l.a,{value:"ex4",mdxType:"TabItem"},Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Never display")," the module/column/row if the visitor is viewing the home page:"),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"https://d1toiz2vvvafqj.cloudfront.net/docs/images/beaver_builder_extension_module_example_4.png",alt:"Beaver Builder Module/Column/Row Display Settings Example 4"})))),Object(o.b)(l.a,{value:"ex5",mdxType:"TabItem"},Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Always display")," the module/column/row to a logged in user ",Object(o.b)("strong",{parentName:"p"},"and")," whose ActiveCampaign Phone contact field begins with 44:"),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"https://d1toiz2vvvafqj.cloudfront.net/docs/images/beaver_builder_extension_module_example_5.png",alt:"Beaver Builder Module/Column/Row Display Settings Example 5"}))))))}m.isMDXComponent=!0},359:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),c=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=c(n),b=a,d=p["".concat(i,".").concat(b)]||p[b]||m[b]||o;return n?r.a.createElement(d,l(l({ref:t},s),{},{components:n})):r.a.createElement(d,l({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=b;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},360:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},361:function(e,t,n){"use strict";var a=n(0),r=n(362);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},362:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},363:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(361),i=n(360),l=n(47),u=n.n(l),s=37,c=39;t.a=function(e){var t=e.block,n=e.children,l=e.defaultValue,p=e.values,m=e.groupId,b=e.className,d=Object(o.a)(),v=d.tabGroupChoices,f=d.setTabGroupChoices,g=Object(a.useState)(l),y=g[0],O=g[1],x=Object(a.useState)(!1),j=x[0],w=x[1];if(null!=m){var h=v[m];null!=h&&h!==y&&p.some((function(e){return e.value===h}))&&O(h)}var C=function(e){O(e),null!=m&&f(m,e)},E=[],_=function(e){e.metaKey||e.altKey||e.ctrlKey||w(!0)},B=function(){w(!1)};return Object(a.useEffect)((function(){return window.addEventListener("keydown",_),window.addEventListener("mousedown",B),function(){window.removeEventListener("keydown",_),window.removeEventListener("mousedown",B)}}),[]),r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":t},b)},p.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":y===t,className:Object(i.a)("tabs__item",u.a.tabItem,{"tabs__item--active":y===t}),style:j?{}:{outline:"none"},key:t,ref:function(e){return E.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case c:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case s:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(E,e.target,e),_(e)},onFocus:function(){return C(t)},onClick:function(){C(t),w(!1)},onPointerDown:function(){return w(!1)}},n)}))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter((function(e){return e.props.value===y}))[0]))}},364:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){return r.a.createElement("div",null,e.children)}}}]);