(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{291:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=r.a.createContext({}),d=function(e){var t=r.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=d(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,b=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),s=d(a),u=n,m=s["".concat(b,".").concat(u)]||s[u]||p[u]||c;return a?r.a.createElement(m,o(o({ref:t},i),{},{components:a})):r.a.createElement(m,o({ref:t},i))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,b=new Array(c);b[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,b[1]=o;for(var i=2;i<c;i++)b[i]=a[i];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},292:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}},293:function(e,t,a){"use strict";var n=a(0),r=a(294);t.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},294:function(e,t,a){"use strict";var n=a(0),r=Object(n.createContext)(void 0);t.a=r},295:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(293),b=a(292),o=a(47),l=a.n(o),i=37,d=39;t.a=function(e){var t=e.block,a=e.children,o=e.defaultValue,s=e.values,p=e.groupId,u=e.className,m=Object(c.a)(),O=m.tabGroupChoices,f=m.setTabGroupChoices,j=Object(n.useState)(o),h=j[0],g=j[1],y=Object(n.useState)(!1),v=y[0],N=y[1];if(null!=p){var x=O[p];null!=x&&x!==h&&s.some((function(e){return e.value===x}))&&g(x)}var _=function(e){g(e),null!=p&&f(p,e)},w=[],T=function(e){e.metaKey||e.altKey||e.ctrlKey||N(!0)},E=function(){N(!1)};return Object(n.useEffect)((function(){return window.addEventListener("keydown",T),window.addEventListener("mousedown",E),function(){window.removeEventListener("keydown",T),window.removeEventListener("mousedown",E)}}),[]),r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(b.a)("tabs",{"tabs--block":t},u)},s.map((function(e){var t=e.value,a=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":h===t,className:Object(b.a)("tabs__item",l.a.tabItem,{"tabs__item--active":h===t}),style:v?{}:{outline:"none"},key:t,ref:function(e){return w.push(e)},onKeyDown:function(e){!function(e,t,a){switch(a.keyCode){case d:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case i:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(w,e.target,e),T(e)},onFocus:function(){return _(t)},onClick:function(){_(t),N(!1)},onPointerDown:function(){return N(!1)}},a)}))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},n.Children.toArray(a).filter((function(e){return e.props.value===h}))[0]))}},296:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){return r.a.createElement("div",null,e.children)}},65:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return d})),a.d(t,"default",(function(){return p}));var n=a(2),r=a(6),c=(a(0),a(291)),b=a(295),o=a(296),l={id:"mbr_contact",title:"mbr_contact",description:"This shortcode returns the contents of the specified ActiveCampaign contact field for the current logged in or specified contact.",sidebar_label:"mbr_contact"},i={unversionedId:"shortcodes/mbr_contact",id:"shortcodes/mbr_contact",isDocsHomePage:!1,title:"mbr_contact",description:"This shortcode returns the contents of the specified ActiveCampaign contact field for the current logged in or specified contact.",source:"@site/docs/shortcodes/mbr_contact.mdx",slug:"/shortcodes/mbr_contact",permalink:"/am360docs/shortcodes/mbr_contact",version:"current",sidebar_label:"mbr_contact",sidebar:"shortcodes",previous:{title:"mbr_avatar",permalink:"/am360docs/shortcodes/mbr_avatar"},next:{title:"mbr_contact_count",permalink:"/am360docs/shortcodes/mbr_contact_count"}},d=[{value:"Usage",id:"usage",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Validity",id:"validity",children:[]},{value:"Conditional Branching",id:"conditional-branching",children:[]},{value:"Nesting",id:"nesting",children:[]},{value:"Examples",id:"examples",children:[]},{value:"API",id:"api",children:[]}],s={rightToc:d};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"usage"},"Usage"),Object(c.b)("p",null,"This shortcode returns the contents of the specified ActiveCampaign contact field for the current logged in or specified contact."),Object(c.b)("h2",{id:"parameters"},"Parameters"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Parameters"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"field"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Specifies the name of an ActiveCampaign contact record field to display. See screenshot above, how to deal with custom fields. Standard fields can be: id, email, first_name, last_name, phone.",Object(c.b)("br",null),Object(c.b)("strong",{parentName:"td"},"Default:")," none.",Object(c.b)("br",null),Object(c.b)("strong",{parentName:"td"},"Required:")," yes.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"type"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"If your ordered field needs a special treatment, e.g. date, number or currency choose from date, number or currency.",Object(c.b)("br",null),Object(c.b)("strong",{parentName:"td"},"Default:")," none.",Object(c.b)("br",null),Object(c.b)("strong",{parentName:"td"},"Required:")," no.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"format"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The desired format for the ordered field e.g. \u201c%i\u201d for type currency or \u201c%A\u201d for type date.",Object(c.b)("br",null),Object(c.b)("strong",{parentName:"td"},"Default:")," 0.",Object(c.b)("br",null),Object(c.b)("strong",{parentName:"td"},"Required:")," no. Optional if type is set to date or currency.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"default"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The default value to display if the ordered field has no value in the ActiveCampaign contact record of the logged in contact.",Object(c.b)("br",null),Object(c.b)("strong",{parentName:"td"},"Default:")," none.",Object(c.b)("br",null),Object(c.b)("strong",{parentName:"td"},"Required:")," no.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"callback"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Callback function to be called to process the value of the field provided in the \u2018field\u2019 parameter.",Object(c.b)("br",null),Object(c.b)("strong",{parentName:"td"},"Default:")," none.",Object(c.b)("br",null),Object(c.b)("strong",{parentName:"td"},"Required:")," no.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"decimals"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"How many decimals do you want to display. Only if type is set to number.",Object(c.b)("br",null),Object(c.b)("strong",{parentName:"td"},"Default:")," 0.",Object(c.b)("br",null),Object(c.b)("strong",{parentName:"td"},"Required:")," no.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"dec_point"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Decimal sign. Only if type is set to number.",Object(c.b)("br",null),Object(c.b)("strong",{parentName:"td"},"Default:")," . (DOT).",Object(c.b)("br",null),Object(c.b)("strong",{parentName:"td"},"Required:")," no.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"thousands_sep"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Thousands separator. Only if type is set to number.",Object(c.b)("br",null),Object(c.b)("strong",{parentName:"td"},"Default:")," , (COMMA).",Object(c.b)("br",null),Object(c.b)("strong",{parentName:"td"},"Required:")," no.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"locale"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Set your locale e.g. en_US, en_UK, de_DE to set the moneytary locale to display fields of type currency.",Object(c.b)("br",null),Object(c.b)("strong",{parentName:"td"},"Default:")," Your WordPress locale based on your blog settings e.g. en_US.",Object(c.b)("br",null),Object(c.b)("strong",{parentName:"td"},"Required:")," no.")))),Object(c.b)("h2",{id:"validity"},"Validity"),Object(c.b)("p",null,"This shortcode is only evaluated for ",Object(c.b)("strong",{parentName:"p"},"logged in users who also exist as contacts")," within ActiveCampaign."),Object(c.b)("p",null,"In all other cases, including WordPress users with the ",Object(c.b)("strong",{parentName:"p"},"Administrator")," role nothing will be returned."),Object(c.b)("h2",{id:"conditional-branching"},"Conditional Branching"),Object(c.b)("p",null,"This shortcode does ",Object(c.b)("strong",{parentName:"p"},"NOT")," support conditional branching with ",Object(c.b)("strong",{parentName:"p"},"[ELSE_contact]"),"."),Object(c.b)("h2",{id:"nesting"},"Nesting"),Object(c.b)("p",null,"Shortcode nesting is ",Object(c.b)("strong",{parentName:"p"},"NOT")," supported."),Object(c.b)("h2",{id:"examples"},"Examples"),Object(c.b)(b.a,{groupId:"examples",defaultValue:"ex1",values:[{label:"Example 1",value:"ex1"},{label:"Example 2",value:"ex2"},{label:"Example 3",value:"ex3"},{label:"Example 4",value:"ex4"},{label:"Example 5",value:"ex5"},{label:"Example 6",value:"ex6"}],mdxType:"Tabs"},Object(c.b)(o.a,{value:"ex1",mdxType:"TabItem"},Object(c.b)("p",null,"Display the contact field ",Object(c.b)("inlineCode",{parentName:"p"},"email")," for the logged in user:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),"[mbr_contact field='email']\n"))),Object(c.b)(o.a,{value:"ex2",mdxType:"TabItem"},Object(c.b)("p",null,"Display the contact field ",Object(c.b)("inlineCode",{parentName:"p"},"my_contact_field")," for the logged in user:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),"[mbr_contact field='my_contact_field']\n"))),Object(c.b)(o.a,{value:"ex3",mdxType:"TabItem"},Object(c.b)("p",null,"Display the contact field ",Object(c.b)("inlineCode",{parentName:"p"},"contact_id")," for the logged in user:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),"[mbr_contact field='contact_id']\n"))),Object(c.b)(o.a,{value:"ex4",mdxType:"TabItem"},Object(c.b)("p",null,"Display the contact field ",Object(c.b)("inlineCode",{parentName:"p"},"first_name")," for the logged in user:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),"[mbr_contact field='first_name']\n"))),Object(c.b)(o.a,{value:"ex5",mdxType:"TabItem"},Object(c.b)("p",null,"Display the contact field ",Object(c.b)("inlineCode",{parentName:"p"},"last_name")," for the logged in user:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),"[mbr_contact field='last_name']\n"))),Object(c.b)(o.a,{value:"ex6",mdxType:"TabItem"},Object(c.b)("p",null,"Display the date contact field ",Object(c.b)("inlineCode",{parentName:"p"},"birthday")," formatted as Y-m-d for the logged in user:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),"[mbr_contact field='birthday' format='Y-m-d']\n")))),Object(c.b)("p",null,"Alternatively, this shortcode can be used in a shorter form:"),Object(c.b)(b.a,{groupId:"examples",defaultValue:"ex-1",values:[{label:"Example 1",value:"ex1"},{label:"Example 2",value:"ex2"},{label:"Example 3",value:"ex3"},{label:"Example 4",value:"ex4"},{label:"Example 5",value:"ex5"},{label:"Example 6",value:"ex6"}],mdxType:"Tabs"},Object(c.b)(o.a,{value:"ex1",mdxType:"TabItem"},Object(c.b)("p",null,"Display the contact field ",Object(c.b)("inlineCode",{parentName:"p"},"email")," for the logged in user:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),"[mbr_db_email]\n"))),Object(c.b)(o.a,{value:"ex2",mdxType:"TabItem"},Object(c.b)("p",null,"Display the contact field ",Object(c.b)("inlineCode",{parentName:"p"},"my_contact_field")," for the logged in user:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),"[mbr_db_my_contact_field]\n"))),Object(c.b)(o.a,{value:"ex3",mdxType:"TabItem"},Object(c.b)("p",null,"Display the contact field ",Object(c.b)("inlineCode",{parentName:"p"},"contact_id")," for the logged in user:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),"[mbr_db_contact_id]\n"))),Object(c.b)(o.a,{value:"ex4",mdxType:"TabItem"},Object(c.b)("p",null,"Display the contact field ",Object(c.b)("inlineCode",{parentName:"p"},"first_name")," for the logged in user:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),"[mbr_db_first_name]\n"))),Object(c.b)(o.a,{value:"ex5",mdxType:"TabItem"},Object(c.b)("p",null,"Display the contact field ",Object(c.b)("inlineCode",{parentName:"p"},"last_name")," for the logged in user:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),"[mbr_db_last_name]\n"))),Object(c.b)(o.a,{value:"ex6",mdxType:"TabItem"},Object(c.b)("p",null,"There is no short form of this shortcode when using any parameters other than the contact field."))),Object(c.b)("h2",{id:"api"},"API"),Object(c.b)("div",{className:"admonition admonition-info alert alert--info"},Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"There is currently no ActiveMember360 API function equivalent for this shortcode."))))}p.isMDXComponent=!0}}]);