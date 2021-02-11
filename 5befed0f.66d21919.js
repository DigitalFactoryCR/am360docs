(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{146:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return d}));var a=n(2),r=(n(0),n(359)),o=n(363),c=n(364);const b={id:"mbr_is_logged_in",title:"mbr_is_logged_in",description:"This shortcode returns the permalink (URL) of the current or specified page, post or custom post type.",sidebar_label:"mbr_is_logged_in"},i={unversionedId:"shortcodes/mbr_is_logged_in",id:"shortcodes/mbr_is_logged_in",isDocsHomePage:!1,title:"mbr_is_logged_in",description:"This shortcode returns the permalink (URL) of the current or specified page, post or custom post type.",source:"@site/docs/shortcodes/mbr_is_logged_in.mdx",slug:"/shortcodes/mbr_is_logged_in",permalink:"/am360docs/shortcodes/mbr_is_logged_in",version:"current",sidebar_label:"mbr_is_logged_in",sidebar:"shortcodes",previous:{title:"mbr_is_in_list",permalink:"/am360docs/shortcodes/mbr_is_in_list"},next:{title:"mbr_is_member",permalink:"/am360docs/shortcodes/mbr_is_member"}},l=[{value:"Usage",id:"usage",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Validity",id:"validity",children:[]},{value:"Conditional Branching",id:"conditional-branching",children:[]},{value:"Nesting",id:"nesting",children:[]},{value:"Examples",id:"examples",children:[]},{value:"API",id:"api",children:[]}],s={rightToc:l};function d({components:e,...t}){return Object(r.b)("wrapper",Object(a.a)({},s,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"usage"},"Usage"),Object(r.b)("p",null,"This shortcode returns the permalink (URL) of the current or specified page, post or custom post type."),Object(r.b)("h2",{id:"parameters"},"Parameters"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Parameters"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"field"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Specifies the name of an ActiveCampaign contact record field to display. See screenshot above, how to deal with custom fields. Standard fields can be: id, email, first_name, last_name, phone.",Object(r.b)("br",null),Object(r.b)("strong",{parentName:"td"},"Default:")," none.",Object(r.b)("br",null),Object(r.b)("strong",{parentName:"td"},"Required:")," yes.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"type"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"If your ordered field needs a special treatment, e.g. date, number or currency choose from date, number or currency.",Object(r.b)("br",null),Object(r.b)("strong",{parentName:"td"},"Default:")," none.",Object(r.b)("br",null),Object(r.b)("strong",{parentName:"td"},"Required:")," no.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"format"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"The desired format for the ordered field e.g. \u201c%i\u201d for type currency or \u201c%A\u201d for type date.",Object(r.b)("br",null),Object(r.b)("strong",{parentName:"td"},"Default:")," 0.",Object(r.b)("br",null),Object(r.b)("strong",{parentName:"td"},"Required:")," no. Optional if type is set to date or currency.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"default"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"The default value to display if the ordered field has no value in the ActiveCampaign contact record of the logged in contact.",Object(r.b)("br",null),Object(r.b)("strong",{parentName:"td"},"Default:")," none.",Object(r.b)("br",null),Object(r.b)("strong",{parentName:"td"},"Required:")," no.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"callback"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Callback function to be called to process the value of the field provided in the \u2018field\u2019 parameter.",Object(r.b)("br",null),Object(r.b)("strong",{parentName:"td"},"Default:")," none.",Object(r.b)("br",null),Object(r.b)("strong",{parentName:"td"},"Required:")," no.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"decimals"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"How many decimals do you want to display. Only if type is set to number.",Object(r.b)("br",null),Object(r.b)("strong",{parentName:"td"},"Default:")," 0.",Object(r.b)("br",null),Object(r.b)("strong",{parentName:"td"},"Required:")," no.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"dec_point"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Decimal sign. Only if type is set to number.",Object(r.b)("br",null),Object(r.b)("strong",{parentName:"td"},"Default:")," . (DOT).",Object(r.b)("br",null),Object(r.b)("strong",{parentName:"td"},"Required:")," no.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"thousands_sep"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Thousands separator. Only if type is set to number.",Object(r.b)("br",null),Object(r.b)("strong",{parentName:"td"},"Default:")," , (COMMA).",Object(r.b)("br",null),Object(r.b)("strong",{parentName:"td"},"Required:")," no.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"locale"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Set your locale e.g. en_US, en_UK, de_DE to set the moneytary locale to display fields of type currency.",Object(r.b)("br",null),Object(r.b)("strong",{parentName:"td"},"Default:")," Your WordPress locale based on your blog settings e.g. en_US.",Object(r.b)("br",null),Object(r.b)("strong",{parentName:"td"},"Required:")," no.")))),Object(r.b)("h2",{id:"validity"},"Validity"),Object(r.b)("p",null,"This shortcode is only evaluated for ",Object(r.b)("strong",{parentName:"p"},"logged in users who also exist as contacts")," within ActiveCampaign."),Object(r.b)("p",null,"In all other cases, including WordPress users with the ",Object(r.b)("strong",{parentName:"p"},"Administrator")," role nothing will be returned."),Object(r.b)("p",null,"This shortcode is evaluated for ",Object(r.b)("strong",{parentName:"p"},"any type of visitor"),"."),Object(r.b)("h2",{id:"conditional-branching"},"Conditional Branching"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"[ELSE_is_http_get]")," conditional branching is supported."),Object(r.b)("p",null,"This shortcode does ",Object(r.b)("strong",{parentName:"p"},"NOT")," support conditional branching with ",Object(r.b)("strong",{parentName:"p"},"[ELSE_contact]"),"."),Object(r.b)("h2",{id:"nesting"},"Nesting"),Object(r.b)("p",null,"Shortcode nesting is supported:"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"[mbr_is_http_get1]")," through ",Object(r.b)("inlineCode",{parentName:"p"},"[mbr_is_http_get19]")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"[ELSE_is_http_get1]")," through ",Object(r.b)("inlineCode",{parentName:"p"},"[ELSE_is_http_get19]")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"[/_is_http_get1]")," through ",Object(r.b)("inlineCode",{parentName:"p"},"[/_is_http_get19]")),Object(r.b)("p",null,"Shortcode nesting within is ",Object(r.b)("strong",{parentName:"p"},"NOT")," supported."),Object(r.b)("h2",{id:"examples"},"Examples"),Object(r.b)(o.a,{groupId:"examples",defaultValue:"ex1",values:[{label:"Example 1",value:"ex1"},{label:"Example 2",value:"ex2"},{label:"Example 3",value:"ex3"},{label:"Example 4",value:"ex4"},{label:"Example 5",value:"ex5"},{label:"Example 6",value:"ex6"}],mdxType:"Tabs"},Object(r.b)(c.a,{value:"ex1",mdxType:"TabItem"},Object(r.b)("p",null,"Display the contact field ",Object(r.b)("inlineCode",{parentName:"p"},"email")," for the logged in user:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"[mbr_contact field='email']\n"))),Object(r.b)(c.a,{value:"ex2",mdxType:"TabItem"},Object(r.b)("p",null,"Display the contact field ",Object(r.b)("inlineCode",{parentName:"p"},"my_contact_field")," for the logged in user:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"[mbr_contact field='my_contact_field']\n"))),Object(r.b)(c.a,{value:"ex3",mdxType:"TabItem"},Object(r.b)("p",null,"Display the contact field ",Object(r.b)("inlineCode",{parentName:"p"},"contact_id")," for the logged in user:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"[mbr_contact field='contact_id']\n"))),Object(r.b)(c.a,{value:"ex4",mdxType:"TabItem"},Object(r.b)("p",null,"Display the contact field ",Object(r.b)("inlineCode",{parentName:"p"},"first_name")," for the logged in user:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"[mbr_contact field='first_name']\n"))),Object(r.b)(c.a,{value:"ex5",mdxType:"TabItem"},Object(r.b)("p",null,"Display the contact field ",Object(r.b)("inlineCode",{parentName:"p"},"last_name")," for the logged in user:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"[mbr_contact field='last_name']\n"))),Object(r.b)(c.a,{value:"ex6",mdxType:"TabItem"},Object(r.b)("p",null,"Display the date contact field ",Object(r.b)("inlineCode",{parentName:"p"},"birthday")," formatted as Y-m-d for the logged in user:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"[mbr_contact field='birthday' format='Y-m-d']\n")))),Object(r.b)("h2",{id:"api"},"API"),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"There is currently no ActiveMember360 API function equivalent for this shortcode."))))}d.isMDXComponent=!0},359:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),s=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},d=function(e){var t=s(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=s(n),u=a,m=d["".concat(c,".").concat(u)]||d[u]||p[u]||o;return n?r.a.createElement(m,b(b({ref:t},l),{},{components:n})):r.a.createElement(m,b({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=u;var b={};for(var i in t)hasOwnProperty.call(t,i)&&(b[i]=t[i]);b.originalType=e,b.mdxType="string"==typeof e?e:a,c[1]=b;for(var l=2;l<o;l++)c[l]=n[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},360:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},361:function(e,t,n){"use strict";var a=n(0),r=n(362);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},362:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},363:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(361),c=n(360),b=n(47),i=n.n(b),l=37,s=39;t.a=function(e){var t=e.block,n=e.children,b=e.defaultValue,d=e.values,p=e.groupId,u=e.className,m=Object(o.a)(),O=m.tabGroupChoices,f=m.setTabGroupChoices,j=Object(a.useState)(b),g=j[0],h=j[1],y=Object(a.useState)(!1),v=y[0],N=y[1];if(null!=p){var _=O[p];null!=_&&_!==g&&d.some((function(e){return e.value===_}))&&h(_)}var w=function(e){h(e),null!=p&&f(p,e)},x=[],E=function(e){e.metaKey||e.altKey||e.ctrlKey||N(!0)},T=function(){N(!1)};return Object(a.useEffect)((function(){return window.addEventListener("keydown",E),window.addEventListener("mousedown",T),function(){window.removeEventListener("keydown",E),window.removeEventListener("mousedown",T)}}),[]),r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":t},u)},d.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":g===t,className:Object(c.a)("tabs__item",i.a.tabItem,{"tabs__item--active":g===t}),style:v?{}:{outline:"none"},key:t,ref:function(e){return x.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case s:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(x,e.target,e),E(e)},onFocus:function(){return w(t)},onClick:function(){w(t),N(!1)},onPointerDown:function(){return N(!1)}},n)}))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter((function(e){return e.props.value===g}))[0]))}},364:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){return r.a.createElement("div",null,e.children)}}}]);