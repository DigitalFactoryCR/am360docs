(window.webpackJsonp=window.webpackJsonp||[]).push([[144],{202:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return s}));var n=r(2),a=r(6),c=(r(0),r(291)),o=r(295),b=r(296),l={id:"mbr_product_regular_price",title:"mbr_product_regular_price",description:"This shortcode returns the permalink (URL) of the current or specified page, post or custom post type.",sidebar_label:"mbr_product_regular_price"},i={unversionedId:"shortcodes/mbr_product_regular_price",id:"shortcodes/mbr_product_regular_price",isDocsHomePage:!1,title:"mbr_product_regular_price",description:"This shortcode returns the permalink (URL) of the current or specified page, post or custom post type.",source:"@site/docs/shortcodes/mbr_product_regular_price.mdx",slug:"/shortcodes/mbr_product_regular_price",permalink:"/am360docs/shortcodes/mbr_product_regular_price",version:"current",sidebar_label:"mbr_product_regular_price",sidebar:"shortcodes",previous:{title:"mbr_product_regular_plan_trial_period",permalink:"/am360docs/shortcodes/mbr_product_regular_plan_trial_period"},next:{title:"mbr_product_sale_plan_interval_count",permalink:"/am360docs/shortcodes/mbr_product_sale_plan_interval_count"}},p=[{value:"Usage",id:"usage",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Validity",id:"validity",children:[]},{value:"Conditional Branching",id:"conditional-branching",children:[]},{value:"Nesting",id:"nesting",children:[]},{value:"Examples",id:"examples",children:[]},{value:"API",id:"api",children:[]}],d={rightToc:p};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},d,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"usage"},"Usage"),Object(c.b)("p",null,"This shortcode returns the permalink (URL) of the current or specified page, post or custom post type."),Object(c.b)("h2",{id:"parameters"},"Parameters"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Parameters"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"field"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Specifies the name of an ActiveCampaign contact record field to display. See screenshot above, how to deal with custom fields. Standard fields can be: id, email, first_name, last_name, phone.",Object(c.b)("br",null),Object(c.b)("strong",{parentName:"td"},"Default:")," none.",Object(c.b)("br",null),Object(c.b)("strong",{parentName:"td"},"Required:")," yes.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"type"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"If your ordered field needs a special treatment, e.g. date, number or currency choose from date, number or currency.",Object(c.b)("br",null),Object(c.b)("strong",{parentName:"td"},"Default:")," none.",Object(c.b)("br",null),Object(c.b)("strong",{parentName:"td"},"Required:")," no.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"format"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The desired format for the ordered field e.g. \u201c%i\u201d for type currency or \u201c%A\u201d for type date.",Object(c.b)("br",null),Object(c.b)("strong",{parentName:"td"},"Default:")," 0.",Object(c.b)("br",null),Object(c.b)("strong",{parentName:"td"},"Required:")," no. Optional if type is set to date or currency.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"default"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The default value to display if the ordered field has no value in the ActiveCampaign contact record of the logged in contact.",Object(c.b)("br",null),Object(c.b)("strong",{parentName:"td"},"Default:")," none.",Object(c.b)("br",null),Object(c.b)("strong",{parentName:"td"},"Required:")," no.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"callback"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Callback function to be called to process the value of the field provided in the \u2018field\u2019 parameter.",Object(c.b)("br",null),Object(c.b)("strong",{parentName:"td"},"Default:")," none.",Object(c.b)("br",null),Object(c.b)("strong",{parentName:"td"},"Required:")," no.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"decimals"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"How many decimals do you want to display. Only if type is set to number.",Object(c.b)("br",null),Object(c.b)("strong",{parentName:"td"},"Default:")," 0.",Object(c.b)("br",null),Object(c.b)("strong",{parentName:"td"},"Required:")," no.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"dec_point"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Decimal sign. Only if type is set to number.",Object(c.b)("br",null),Object(c.b)("strong",{parentName:"td"},"Default:")," . (DOT).",Object(c.b)("br",null),Object(c.b)("strong",{parentName:"td"},"Required:")," no.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"thousands_sep"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Thousands separator. Only if type is set to number.",Object(c.b)("br",null),Object(c.b)("strong",{parentName:"td"},"Default:")," , (COMMA).",Object(c.b)("br",null),Object(c.b)("strong",{parentName:"td"},"Required:")," no.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"locale"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Set your locale e.g. en_US, en_UK, de_DE to set the moneytary locale to display fields of type currency.",Object(c.b)("br",null),Object(c.b)("strong",{parentName:"td"},"Default:")," Your WordPress locale based on your blog settings e.g. en_US.",Object(c.b)("br",null),Object(c.b)("strong",{parentName:"td"},"Required:")," no.")))),Object(c.b)("h2",{id:"validity"},"Validity"),Object(c.b)("p",null,"This shortcode is only evaluated for ",Object(c.b)("strong",{parentName:"p"},"logged in users who also exist as contacts")," within ActiveCampaign."),Object(c.b)("p",null,"In all other cases, including WordPress users with the ",Object(c.b)("strong",{parentName:"p"},"Administrator")," role nothing will be returned."),Object(c.b)("p",null,"This shortcode is evaluated for ",Object(c.b)("strong",{parentName:"p"},"any type of visitor"),"."),Object(c.b)("h2",{id:"conditional-branching"},"Conditional Branching"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"[ELSE_is_http_get]")," conditional branching is supported."),Object(c.b)("p",null,"This shortcode does ",Object(c.b)("strong",{parentName:"p"},"NOT")," support conditional branching with ",Object(c.b)("strong",{parentName:"p"},"[ELSE_contact]"),"."),Object(c.b)("h2",{id:"nesting"},"Nesting"),Object(c.b)("p",null,"Shortcode nesting is supported:"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"[mbr_is_http_get1]")," through ",Object(c.b)("inlineCode",{parentName:"p"},"[mbr_is_http_get19]")),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"[ELSE_is_http_get1]")," through ",Object(c.b)("inlineCode",{parentName:"p"},"[ELSE_is_http_get19]")),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"[/_is_http_get1]")," through ",Object(c.b)("inlineCode",{parentName:"p"},"[/_is_http_get19]")),Object(c.b)("p",null,"Shortcode nesting within is ",Object(c.b)("strong",{parentName:"p"},"NOT")," supported."),Object(c.b)("h2",{id:"examples"},"Examples"),Object(c.b)(o.a,{groupId:"examples",defaultValue:"ex1",values:[{label:"Example 1",value:"ex1"},{label:"Example 2",value:"ex2"},{label:"Example 3",value:"ex3"},{label:"Example 4",value:"ex4"},{label:"Example 5",value:"ex5"},{label:"Example 6",value:"ex6"}],mdxType:"Tabs"},Object(c.b)(b.a,{value:"ex1",mdxType:"TabItem"},Object(c.b)("p",null,"Display the contact field ",Object(c.b)("inlineCode",{parentName:"p"},"email")," for the logged in user:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),"[mbr_contact field='email']\n"))),Object(c.b)(b.a,{value:"ex2",mdxType:"TabItem"},Object(c.b)("p",null,"Display the contact field ",Object(c.b)("inlineCode",{parentName:"p"},"my_contact_field")," for the logged in user:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),"[mbr_contact field='my_contact_field']\n"))),Object(c.b)(b.a,{value:"ex3",mdxType:"TabItem"},Object(c.b)("p",null,"Display the contact field ",Object(c.b)("inlineCode",{parentName:"p"},"contact_id")," for the logged in user:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),"[mbr_contact field='contact_id']\n"))),Object(c.b)(b.a,{value:"ex4",mdxType:"TabItem"},Object(c.b)("p",null,"Display the contact field ",Object(c.b)("inlineCode",{parentName:"p"},"first_name")," for the logged in user:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),"[mbr_contact field='first_name']\n"))),Object(c.b)(b.a,{value:"ex5",mdxType:"TabItem"},Object(c.b)("p",null,"Display the contact field ",Object(c.b)("inlineCode",{parentName:"p"},"last_name")," for the logged in user:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),"[mbr_contact field='last_name']\n"))),Object(c.b)(b.a,{value:"ex6",mdxType:"TabItem"},Object(c.b)("p",null,"Display the date contact field ",Object(c.b)("inlineCode",{parentName:"p"},"birthday")," formatted as Y-m-d for the logged in user:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),"[mbr_contact field='birthday' format='Y-m-d']\n")))),Object(c.b)("h2",{id:"api"},"API"),Object(c.b)("div",{className:"admonition admonition-info alert alert--info"},Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"There is currently no ActiveMember360 API function equivalent for this shortcode."))))}s.isMDXComponent=!0},291:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=a.a.createContext({}),p=function(e){var t=a.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):b(b({},t),e)),r},d=function(e){var t=p(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),d=p(r),u=n,m=d["".concat(o,".").concat(u)]||d[u]||s[u]||c;return r?a.a.createElement(m,b(b({ref:t},i),{},{components:r})):a.a.createElement(m,b({ref:t},i))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,o=new Array(c);o[0]=u;var b={};for(var l in t)hasOwnProperty.call(t,l)&&(b[l]=t[l]);b.originalType=e,b.mdxType="string"==typeof e?e:n,o[1]=b;for(var i=2;i<c;i++)o[i]=r[i];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},292:function(e,t,r){"use strict";function n(e){var t,r,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(a&&(a+=" "),a+=r);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,r=0,a="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(a&&(a+=" "),a+=t);return a}},293:function(e,t,r){"use strict";var n=r(0),a=r(294);t.a=function(){var e=Object(n.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},294:function(e,t,r){"use strict";var n=r(0),a=Object(n.createContext)(void 0);t.a=a},295:function(e,t,r){"use strict";var n=r(0),a=r.n(n),c=r(293),o=r(292),b=r(47),l=r.n(b),i=37,p=39;t.a=function(e){var t=e.block,r=e.children,b=e.defaultValue,d=e.values,s=e.groupId,u=e.className,m=Object(c.a)(),O=m.tabGroupChoices,f=m.setTabGroupChoices,j=Object(n.useState)(b),g=j[0],h=j[1],y=Object(n.useState)(!1),v=y[0],_=y[1];if(null!=s){var N=O[s];null!=N&&N!==g&&d.some((function(e){return e.value===N}))&&h(N)}var w=function(e){h(e),null!=s&&f(s,e)},x=[],E=function(e){e.metaKey||e.altKey||e.ctrlKey||_(!0)},T=function(){_(!1)};return Object(n.useEffect)((function(){return window.addEventListener("keydown",E),window.addEventListener("mousedown",T),function(){window.removeEventListener("keydown",E),window.removeEventListener("mousedown",T)}}),[]),a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":t},u)},d.map((function(e){var t=e.value,r=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":g===t,className:Object(o.a)("tabs__item",l.a.tabItem,{"tabs__item--active":g===t}),style:v?{}:{outline:"none"},key:t,ref:function(e){return x.push(e)},onKeyDown:function(e){!function(e,t,r){switch(r.keyCode){case p:!function(e,t){var r=e.indexOf(t)+1;e[r]?e[r].focus():e[0].focus()}(e,t);break;case i:!function(e,t){var r=e.indexOf(t)-1;e[r]?e[r].focus():e[e.length-1].focus()}(e,t)}}(x,e.target,e),E(e)},onFocus:function(){return w(t)},onClick:function(){w(t),_(!1)},onPointerDown:function(){return _(!1)}},r)}))),a.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},n.Children.toArray(r).filter((function(e){return e.props.value===g}))[0]))}},296:function(e,t,r){"use strict";var n=r(0),a=r.n(n);t.a=function(e){return a.a.createElement("div",null,e.children)}}}]);