(window.webpackJsonp=window.webpackJsonp||[]).push([[207],{265:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return a})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return p}));var r=n(2),o=(n(0),n(359));const s={id:"content-access-options",title:"Content Access Options",description:"How to configure the ActiveMember360 Content Access Options.",sidebar_label:"Content Access Options"},a={unversionedId:"settings/content-access-options",id:"settings/content-access-options",isDocsHomePage:!1,title:"Content Access Options",description:"How to configure the ActiveMember360 Content Access Options.",source:"@site/docs/settings/content-access-options.mdx",slug:"/settings/content-access-options",permalink:"/am360docs/settings/content-access-options",version:"current",sidebar_label:"Content Access Options",sidebar:"settings",previous:{title:"Comment Options",permalink:"/am360docs/settings/comment-options"},next:{title:"Cache Options",permalink:"/am360docs/settings/cache-options"}},i=[{value:"Enable access to WP dashboard for capability",id:"enable-access-to-wp-dashboard-for-capability",children:[]},{value:"Suppress user &quot;WP tool bar&quot;",id:"suppress-user-wp-tool-bar",children:[]}],c={rightToc:i};function p({components:e,...t}){return Object(o.b)("wrapper",Object(r.a)({},c,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"enable-access-to-wp-dashboard-for-capability"},"Enable access to WP dashboard for capability"),Object(o.b)("p",null,"There are many third party plugins that require users to access the WordPress dashboard. These are mainly those that wish to give users access to their WordPress user profile."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"ActiveMember360")," controls access to the WordPress dashboard and will only give access and display the dashboard to logged in users whose WordPress 'capability' matches the one selected from the drop-down list."),Object(o.b)("p",null,"To review the relationship between user roles and capabilities in WordPress, please review ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://wordpress.org/support/article/roles-and-capabilities/",title:"Click to access detailed information about WordPress Roles & Capabilities"}),"WordPress Roles & Capabilities"),"."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Default: activate_plugins")," (this is effectively an administrator user)"),Object(o.b)("h2",{id:"suppress-user-wp-tool-bar"},'Suppress user "WP tool bar"'),Object(o.b)("p",null,"WordPress can display an admin bar for logged in users which docks itself to the top of page."),Object(o.b)("p",null,"Using this setting you can choose to suppress it (default) or allow it to be displayed."),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"Note")),Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"The admin bar will always be shown for WordPress administrator users irrespective of this setting."))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Default: Yes")))}p.isMDXComponent=!0},359:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),l=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=l(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,a=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),b=l(n),u=r,m=b["".concat(a,".").concat(u)]||b[u]||d[u]||s;return n?o.a.createElement(m,i(i({ref:t},p),{},{components:n})):o.a.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,a=new Array(s);a[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var p=2;p<s;p++)a[p]=n[p];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);