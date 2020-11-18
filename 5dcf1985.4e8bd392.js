(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{128:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return b})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return s}));var n=r(2),a=r(6),o=(r(0),r(291)),c=r(295),l=r(296),b={id:"mbr_product_regular_plan_trial_period",title:"mbr_product_regular_plan_trial_period",description:"This shortcode returns the permalink (URL) of the current or specified page, post or custom post type.",sidebar_label:"mbr_product_regular_plan_trial_period"},i={unversionedId:"shortcodes/mbr_product_regular_plan_trial_period",id:"shortcodes/mbr_product_regular_plan_trial_period",isDocsHomePage:!1,title:"mbr_product_regular_plan_trial_period",description:"This shortcode returns the permalink (URL) of the current or specified page, post or custom post type.",source:"@site/docs/shortcodes/mbr_product_regular_plan_trial_period.mdx",slug:"/shortcodes/mbr_product_regular_plan_trial_period",permalink:"/am360docs/shortcodes/mbr_product_regular_plan_trial_period",version:"current",sidebar_label:"mbr_product_regular_plan_trial_period",sidebar:"shortcodes",previous:{title:"mbr_product_regular_plan_name",permalink:"/am360docs/shortcodes/mbr_product_regular_plan_name"},next:{title:"mbr_product_regular_price",permalink:"/am360docs/shortcodes/mbr_product_regular_price"}},p=[{value:"Usage",id:"usage",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Validity",id:"validity",children:[]},{value:"Conditional Branching",id:"conditional-branching",children:[]},{value:"Nesting",id:"nesting",children:[]},{value:"Examples",id:"examples",children:[]},{value:"API",id:"api",children:[]}],d={rightToc:p};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},d,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"usage"},"Usage"),Object(o.b)("p",null,"This shortcode returns the permalink (URL) of the current or specified page, post or custom post type."),Object(o.b)("h2",{id:"parameters"},"Parameters"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Parameters"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"field"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Specifies the name of an ActiveCampaign contact record field to display. See screenshot above, how to deal with custom fields. Standard fields can be: id, email, first_name, last_name, phone.",Object(o.b)("br",null),Object(o.b)("strong",{parentName:"td"},"Default:")," none.",Object(o.b)("br",null),Object(o.b)("strong",{parentName:"td"},"Required:")," yes.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"type"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"If your ordered field needs a special treatment, e.g. date, number or currency choose from date, number or currency.",Object(o.b)("br",null),Object(o.b)("strong",{parentName:"td"},"Default:")," none.",Object(o.b)("br",null),Object(o.b)("strong",{parentName:"td"},"Required:")," no.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"format"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The desired format for the ordered field e.g. \u201c%i\u201d for type currency or \u201c%A\u201d for type date.",Object(o.b)("br",null),Object(o.b)("strong",{parentName:"td"},"Default:")," 0.",Object(o.b)("br",null),Object(o.b)("strong",{parentName:"td"},"Required:")," no. Optional if type is set to date or currency.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"default"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The default value to display if the ordered field has no value in the ActiveCampaign contact record of the logged in contact.",Object(o.b)("br",null),Object(o.b)("strong",{parentName:"td"},"Default:")," none.",Object(o.b)("br",null),Object(o.b)("strong",{parentName:"td"},"Required:")," no.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"callback"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Callback function to be called to process the value of the field provided in the \u2018field\u2019 parameter.",Object(o.b)("br",null),Object(o.b)("strong",{parentName:"td"},"Default:")," none.",Object(o.b)("br",null),Object(o.b)("strong",{parentName:"td"},"Required:")," no.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"decimals"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"How many decimals do you want to display. Only if type is set to number.",Object(o.b)("br",null),Object(o.b)("strong",{parentName:"td"},"Default:")," 0.",Object(o.b)("br",null),Object(o.b)("strong",{parentName:"td"},"Required:")," no.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"dec_point"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Decimal sign. Only if type is set to number.",Object(o.b)("br",null),Object(o.b)("strong",{parentName:"td"},"Default:")," . (DOT).",Object(o.b)("br",null),Object(o.b)("strong",{parentName:"td"},"Required:")," no.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"thousands_sep"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Thousands separator. Only if type is set to number.",Object(o.b)("br",null),Object(o.b)("strong",{parentName:"td"},"Default:")," , (COMMA).",Object(o.b)("br",null),Object(o.b)("strong",{parentName:"td"},"Required:")," no.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"locale"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Set your locale e.g. en_US, en_UK, de_DE to set the moneytary locale to display fields of type currency.",Object(o.b)("br",null),Object(o.b)("strong",{parentName:"td"},"Default:")," Your WordPress locale based on your blog settings e.g. en_US.",Object(o.b)("br",null),Object(o.b)("strong",{parentName:"td"},"Required:")," no.")))),Object(o.b)("h2",{id:"validity"},"Validity"),Object(o.b)("p",null,"This shortcode is only evaluated for ",Object(o.b)("strong",{parentName:"p"},"logged in users who also exist as contacts")," within ActiveCampaign."),Object(o.b)("p",null,"In all other cases, including WordPress users with the ",Object(o.b)("strong",{parentName:"p"},"Administrator")," role nothing will be returned."),Object(o.b)("p",null,"This shortcode is evaluated for ",Object(o.b)("strong",{parentName:"p"},"any type of visitor"),"."),Object(o.b)("h2",{id:"conditional-branching"},"Conditional Branching"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"[ELSE_is_http_get]")," conditional branching is supported."),Object(o.b)("p",null,"This shortcode does ",Object(o.b)("strong",{parentName:"p"},"NOT")," support conditional branching with ",Object(o.b)("strong",{parentName:"p"},"[ELSE_contact]"),"."),Object(o.b)("h2",{id:"nesting"},"Nesting"),Object(o.b)("p",null,"Shortcode nesting is supported:"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"[mbr_is_http_get1]")," through ",Object(o.b)("inlineCode",{parentName:"p"},"[mbr_is_http_get19]")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"[ELSE_is_http_get1]")," through ",Object(o.b)("inlineCode",{parentName:"p"},"[ELSE_is_http_get19]")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"[/_is_http_get1]")," through ",Object(o.b)("inlineCode",{parentName:"p"},"[/_is_http_get19]")),Object(o.b)("p",null,"Shortcode nesting within is ",Object(o.b)("strong",{parentName:"p"},"NOT")," supported."),Object(o.b)("h2",{id:"examples"},"Examples"),Object(o.b)(c.a,{groupId:"examples",defaultValue:"ex1",values:[{label:"Example 1",value:"ex1"},{label:"Example 2",value:"ex2"},{label:"Example 3",value:"ex3"},{label:"Example 4",value:"ex4"},{label:"Example 5",value:"ex5"},{label:"Example 6",value:"ex6"}],mdxType:"Tabs"},Object(o.b)(l.a,{value:"ex1",mdxType:"TabItem"},Object(o.b)("p",null,"Display the contact field ",Object(o.b)("inlineCode",{parentName:"p"},"email")," for the logged in user:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"[mbr_contact field='email']\n"))),Object(o.b)(l.a,{value:"ex2",mdxType:"TabItem"},Object(o.b)("p",null,"Display the contact field ",Object(o.b)("inlineCode",{parentName:"p"},"my_contact_field")," for the logged in user:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"[mbr_contact field='my_contact_field']\n"))),Object(o.b)(l.a,{value:"ex3",mdxType:"TabItem"},Object(o.b)("p",null,"Display the contact field ",Object(o.b)("inlineCode",{parentName:"p"},"contact_id")," for the logged in user:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"[mbr_contact field='contact_id']\n"))),Object(o.b)(l.a,{value:"ex4",mdxType:"TabItem"},Object(o.b)("p",null,"Display the contact field ",Object(o.b)("inlineCode",{parentName:"p"},"first_name")," for the logged in user:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"[mbr_contact field='first_name']\n"))),Object(o.b)(l.a,{value:"ex5",mdxType:"TabItem"},Object(o.b)("p",null,"Display the contact field ",Object(o.b)("inlineCode",{parentName:"p"},"last_name")," for the logged in user:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"[mbr_contact field='last_name']\n"))),Object(o.b)(l.a,{value:"ex6",mdxType:"TabItem"},Object(o.b)("p",null,"Display the date contact field ",Object(o.b)("inlineCode",{parentName:"p"},"birthday")," formatted as Y-m-d for the logged in user:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"[mbr_contact field='birthday' format='Y-m-d']\n")))),Object(o.b)("h2",{id:"api"},"API"),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"There is currently no ActiveMember360 API function equivalent for this shortcode."))))}s.isMDXComponent=!0},291:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function b(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=a.a.createContext({}),p=function(e){var t=a.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=p(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,i=b(e,["components","mdxType","originalType","parentName"]),d=p(r),u=n,m=d["".concat(c,".").concat(u)]||d[u]||s[u]||o;return r?a.a.createElement(m,l(l({ref:t},i),{},{components:r})):a.a.createElement(m,l({ref:t},i))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=u;var l={};for(var b in t)hasOwnProperty.call(t,b)&&(l[b]=t[b]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var i=2;i<o;i++)c[i]=r[i];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},292:function(e,t,r){"use strict";function n(e){var t,r,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(a&&(a+=" "),a+=r);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,r=0,a="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(a&&(a+=" "),a+=t);return a}},293:function(e,t,r){"use strict";var n=r(0),a=r(294);t.a=function(){var e=Object(n.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},294:function(e,t,r){"use strict";var n=r(0),a=Object(n.createContext)(void 0);t.a=a},295:function(e,t,r){"use strict";var n=r(0),a=r.n(n),o=r(293),c=r(292),l=r(47),b=r.n(l),i=37,p=39;t.a=function(e){var t=e.block,r=e.children,l=e.defaultValue,d=e.values,s=e.groupId,u=e.className,m=Object(o.a)(),O=m.tabGroupChoices,f=m.setTabGroupChoices,j=Object(n.useState)(l),g=j[0],h=j[1],y=Object(n.useState)(!1),_=y[0],v=y[1];if(null!=s){var N=O[s];null!=N&&N!==g&&d.some((function(e){return e.value===N}))&&h(N)}var w=function(e){h(e),null!=s&&f(s,e)},x=[],E=function(e){e.metaKey||e.altKey||e.ctrlKey||v(!0)},T=function(){v(!1)};return Object(n.useEffect)((function(){return window.addEventListener("keydown",E),window.addEventListener("mousedown",T),function(){window.removeEventListener("keydown",E),window.removeEventListener("mousedown",T)}}),[]),a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":t},u)},d.map((function(e){var t=e.value,r=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":g===t,className:Object(c.a)("tabs__item",b.a.tabItem,{"tabs__item--active":g===t}),style:_?{}:{outline:"none"},key:t,ref:function(e){return x.push(e)},onKeyDown:function(e){!function(e,t,r){switch(r.keyCode){case p:!function(e,t){var r=e.indexOf(t)+1;e[r]?e[r].focus():e[0].focus()}(e,t);break;case i:!function(e,t){var r=e.indexOf(t)-1;e[r]?e[r].focus():e[e.length-1].focus()}(e,t)}}(x,e.target,e),E(e)},onFocus:function(){return w(t)},onClick:function(){w(t),v(!1)},onPointerDown:function(){return v(!1)}},r)}))),a.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},n.Children.toArray(r).filter((function(e){return e.props.value===g}))[0]))}},296:function(e,t,r){"use strict";var n=r(0),a=r.n(n);t.a=function(e){return a.a.createElement("div",null,e.children)}}}]);