(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{359:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return v}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var m=i.a.createContext({}),d=function(e){var t=i.a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=d(e.components);return i.a.createElement(m.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),l=d(n),b=a,v=l["".concat(r,".").concat(b)]||l[b]||p[b]||o;return n?i.a.createElement(v,c(c({ref:t},m),{},{components:n})):i.a.createElement(v,c({ref:t},m))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var m=2;m<o;m++)r[m]=n[m];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},69:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return d}));var a=n(2),i=n(6),o=(n(0),n(359)),r={id:"jvzoo",title:"Add/Remove ActiveCampaign Tag/Tags, Set Contact Field When Achievement Earned",description:"How to configure ActiveCampaign actions when a GamiPress achievement is earned.",sidebar_label:"Add/Remove ActiveCampaign Tag/Tags, Set Contact Field When Achievement Earned"},c={unversionedId:"modules/autologin/jvzoo",id:"modules/autologin/jvzoo",isDocsHomePage:!1,title:"Add/Remove ActiveCampaign Tag/Tags, Set Contact Field When Achievement Earned",description:"How to configure ActiveCampaign actions when a GamiPress achievement is earned.",source:"@site/docs/modules/autologin/jvzoo.mdx",slug:"/modules/autologin/jvzoo",permalink:"/am360docs/modules/autologin/jvzoo",version:"current",sidebar_label:"Add/Remove ActiveCampaign Tag/Tags, Set Contact Field When Achievement Earned",sidebar:"modules",previous:{title:"Add/Remove ActiveCampaign Tag/Tags, Set Contact Field When Achievement Earned",permalink:"/am360docs/modules/autologin/clickbank"},next:{title:"Automatic Webhooks",permalink:"/am360docs/modules/automatic-webhooks"}},s=[],m={rightToc:s};function d(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("div",{className:"admonition admonition-danger alert alert--danger"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"Important")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Be aware that these ActiveCampaign actions are only applied when the achievement is earned. If the achievement is revoked in any way the actions are not reversed."))),Object(o.b)("figure",null,Object(o.b)("img",{alt:"Configuring Actions When Achievement Earned",src:"https://d1toiz2vvvafqj.cloudfront.net/docs/images/gamipress_extension_achievement_earned.png"}),Object(o.b)("figcaption",null,"Configuring Actions When Achievement Earned")),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"When editing an individual achievement within the ",Object(o.b)("strong",{parentName:"li"},"Achievement Data")," panel in the ",Object(o.b)("strong",{parentName:"li"},"ActiveMember360 Add Tags")," dropdown select the ActiveCampaign tag(s) to be added when the achievement is earned."),Object(o.b)("li",{parentName:"ol"},"In the ",Object(o.b)("strong",{parentName:"li"},"ActiveMember360 Remove Tags")," dropdown select the ActiveCampaign tag(s) to be removed when the achievement is earned.",Object(o.b)("div",Object(a.a)({parentName:"li"},{className:"admonition admonition-info alert alert--info"}),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"Note")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Remove tags are processed before add tags to ensure any ActiveCampaign automations can be triggered appropriately.")))),Object(o.b)("li",{parentName:"ol"},"In the ",Object(o.b)("strong",{parentName:"li"},"ActiveMember360 Set Contact Field")," dropdown select the ActiveCampaign field to set to the value specified in step 4.",Object(o.b)("div",Object(a.a)({parentName:"li"},{className:"admonition admonition-info alert alert--info"}),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"Note")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Only ActiveCampaign text and text area fields are supported and shown for selection.")))),Object(o.b)("li",{parentName:"ol"},"Specify the value to be set for the contact field."),Object(o.b)("li",{parentName:"ol"},"Ensure to click ",Object(o.b)("strong",{parentName:"li"},"Update")," to save the achievement changes.")))}d.isMDXComponent=!0}}]);