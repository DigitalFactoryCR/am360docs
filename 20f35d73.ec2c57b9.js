(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{291:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),b=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=b(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=b(n),u=a,m=d["".concat(r,".").concat(u)]||d[u]||p[u]||o;return n?i.a.createElement(m,c(c({ref:t},l),{},{components:n})):i.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var l=2;l<o;l++)r[l]=n[l];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},292:function(e,t,n){"use strict";function a(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}t.a=function(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(i&&(i+=" "),i+=t);return i}},293:function(e,t,n){"use strict";var a=n(0),i=n(294);t.a=function(){var e=Object(a.useContext)(i.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},294:function(e,t,n){"use strict";var a=n(0),i=Object(a.createContext)(void 0);t.a=i},295:function(e,t,n){"use strict";var a=n(0),i=n.n(a),o=n(293),r=n(292),c=n(47),s=n.n(c),l=37,b=39;t.a=function(e){var t=e.block,n=e.children,c=e.defaultValue,d=e.values,p=e.groupId,u=e.className,m=Object(o.a)(),O=m.tabGroupChoices,f=m.setTabGroupChoices,h=Object(a.useState)(c),j=h[0],v=h[1],g=Object(a.useState)(!1),y=g[0],_=g[1];if(null!=p){var N=O[p];null!=N&&N!==j&&d.some((function(e){return e.value===N}))&&v(N)}var w=function(e){v(e),null!=p&&f(p,e)},E=[],x=function(e){e.metaKey||e.altKey||e.ctrlKey||_(!0)},T=function(){_(!1)};return Object(a.useEffect)((function(){return window.addEventListener("keydown",x),window.addEventListener("mousedown",T),function(){window.removeEventListener("keydown",x),window.removeEventListener("mousedown",T)}}),[]),i.a.createElement("div",null,i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(r.a)("tabs",{"tabs--block":t},u)},d.map((function(e){var t=e.value,n=e.label;return i.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":j===t,className:Object(r.a)("tabs__item",s.a.tabItem,{"tabs__item--active":j===t}),style:y?{}:{outline:"none"},key:t,ref:function(e){return E.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case b:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(E,e.target,e),x(e)},onFocus:function(){return w(t)},onClick:function(){w(t),_(!1)},onPointerDown:function(){return _(!1)}},n)}))),i.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter((function(e){return e.props.value===j}))[0]))}},296:function(e,t,n){"use strict";var a=n(0),i=n.n(a);t.a=function(e){return i.a.createElement("div",null,e.children)}},85:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return p}));var a=n(2),i=n(6),o=(n(0),n(291)),r=n(295),c=n(296),s={id:"mbr_is_conditional",title:"mbr_is_conditional",description:"This shortcode determines the content to be included based upon the evaluation of a conditional.",sidebar_label:"mbr_is_conditional"},l={unversionedId:"shortcodes/mbr_is_conditional",id:"shortcodes/mbr_is_conditional",isDocsHomePage:!1,title:"mbr_is_conditional",description:"This shortcode determines the content to be included based upon the evaluation of a conditional.",source:"@site/docs/shortcodes/mbr_is_conditional.mdx",slug:"/shortcodes/mbr_is_conditional",permalink:"/am360docs/shortcodes/mbr_is_conditional",version:"current",sidebar_label:"mbr_is_conditional",sidebar:"shortcodes",previous:{title:"mbr_is_bot",permalink:"/am360docs/shortcodes/mbr_is_bot"},next:{title:"mbr_is_contact",permalink:"/am360docs/shortcodes/mbr_is_contact"}},b=[{value:"Usage",id:"usage",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Validity",id:"validity",children:[]},{value:"Conditional Branching",id:"conditional-branching",children:[]},{value:"Nesting",id:"nesting",children:[]},{value:"Examples",id:"examples",children:[]},{value:"API",id:"api",children:[]}],d={rightToc:b};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"usage"},"Usage"),Object(o.b)("p",null,"This shortcode determines the content to be included based upon the evaluation of a ",Object(o.b)("strong",{parentName:"p"},"conditional"),"."),Object(o.b)("p",null,"The purpose, definition, and use of ",Object(o.b)("strong",{parentName:"p"},"conditionals "),"is explained in detail here:"),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://activemember360.com/docs/conditionals"}),"Conditionals")),Object(o.b)("h2",{id:"parameters"},"Parameters"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Parameters"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"field"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"The conditional id to be evaluated.",Object(o.b)("br",null),Object(o.b)("strong",{parentName:"td"},"Default:")," none.",Object(o.b)("br",null),Object(o.b)("strong",{parentName:"td"},"Required:")," yes.")))),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"Note")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"To ensure compatibility with the various page builders we recommend that no quote delimiters are used to specify the id parameter."),Object(o.b)("p",{parentName:"div"},"Quotes are not needed for this shortcode as there can never be any spaces in the id."))),Object(o.b)("h2",{id:"validity"},"Validity"),Object(o.b)("p",null,"This shortcode is evaluated for ",Object(o.b)("strong",{parentName:"p"},"any type of visitor"),"."),Object(o.b)("div",{className:"admonition admonition-danger alert alert--danger"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"Beware")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Please be aware that if the conditional specified by the id is not published/active this shortcode will not be evaluated and will not display/include any content."))),Object(o.b)("h2",{id:"conditional-branching"},"Conditional Branching"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"[ELSE_is_conditional]")," conditional branching is supported."),Object(o.b)("h2",{id:"nesting"},"Nesting"),Object(o.b)("p",null,"Shortcode nesting is supported:"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"[mbr_is_conditional1]")," thru ",Object(o.b)("strong",{parentName:"p"},"[mbr_is_conditional19]"),Object(o.b)("br",null),"\n",Object(o.b)("strong",{parentName:"p"},"[ELSE_is_conditional1]")," thru ",Object(o.b)("strong",{parentName:"p"},"[ELSE_is_conditional19]"),Object(o.b)("br",null),"\n",Object(o.b)("strong",{parentName:"p"},"[/mbr_is_conditional1]")," thru ",Object(o.b)("strong",{parentName:"p"},"[/mbr_is_conditional19]")),Object(o.b)("h2",{id:"examples"},"Examples"),Object(o.b)(r.a,{groupId:"examples",defaultValue:"ex1",values:[{label:"Example 1",value:"ex1"},{label:"Example 2",value:"ex2"},{label:"Example 3",value:"ex3"},{label:"Example 4",value:"ex4"}],mdxType:"Tabs"},Object(o.b)(c.a,{value:"ex1",mdxType:"TabItem"},Object(o.b)("p",null,'Display "Message 1" if the conditional with id 123 evaluates to ',Object(o.b)("strong",{parentName:"p"},"TRUE"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"[mbr_is_conditional id=123]\nMessage 1\n[/mbr_is_conditional]\n"))),Object(o.b)(c.a,{value:"ex2",mdxType:"TabItem"},Object(o.b)("p",null,'Display "Message 1" if the conditional with id 123 evaluates to ',Object(o.b)("strong",{parentName:"p"},"TRUE"),'. Otherwise display "Message 2":'),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"[mbr_is_conditional id=123]\nMessage 1\n[ELSE_is_conditional]\nMessage 2\n[/mbr_is_conditional]\n"))),Object(o.b)(c.a,{value:"ex3",mdxType:"TabItem"},Object(o.b)("p",null,'Display in this order of priority "Message 1" if the conditional with id 123 evaluates to ',Object(o.b)("strong",{parentName:"p"},"TRUE"),'. Else display "Message 2" if the conditional with id 456 evaluates to ',Object(o.b)("strong",{parentName:"p"},"TRUE"),'. Else display "Message 3" if the conditional with id 456 evaluates to ',Object(o.b)("strong",{parentName:"p"},"FALSE"),'. Else display "Message 4" if the conditional with id 123 evaluates to ',Object(o.b)("strong",{parentName:"p"},"FALSE"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"[mbr_is_conditional id=123]\nMessage 1\n    [mbr_is_conditional1 id=456]\n    Message 2\n    [ELSE_is_conditional1]\n    Message 3\n    [/mbr_is_conditional1]\n[ELSE_is_conditional]\nMessage 4\n[/mbr_is_conditional]\n"))),Object(o.b)(c.a,{value:"ex4",mdxType:"TabItem"},Object(o.b)("p",null,'Display in this order of priority "Message 1" if the conditional with id 123 evaluates to ',Object(o.b)("strong",{parentName:"p"},"TRUE"),'. Else display "Message 2" if the conditional with id 456 evaluates to ',Object(o.b)("strong",{parentName:"p"},"TRUE"),'. Else display "Message 3" if the conditional with id 123 evaluates to ',Object(o.b)("strong",{parentName:"p"},"FALSE"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"[mbr_is_conditional1 id=123]\nMessage 1\n    [mbr_is_conditional2 id=456]\n    Message 2\n    [/mbr_is_conditional2]\n[ELSE_is_conditional1]\nMessage 3\n[/mbr_is_conditional1]\n")))),Object(o.b)("h2",{id:"api"},"API"),Object(o.b)("p",null,"The PHP API function equivalent for this shortcode is:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"mbr_is_conditional( id )\n")),Object(o.b)("p",null,"where id is an integer and the post_id of the conditional custom post."))}p.isMDXComponent=!0}}]);