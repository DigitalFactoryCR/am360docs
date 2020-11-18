(window.webpackJsonp=window.webpackJsonp||[]).push([[153],{211:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return c}));var n=r(2),o=r(6),a=(r(0),r(291)),i={id:"role-tag-mapping",title:"Role To Tags Mapping",description:null,sidebar_label:"Role To Tags Mapping"},s={unversionedId:"settings/role-tag-mapping",id:"settings/role-tag-mapping",isDocsHomePage:!1,title:"Role To Tags Mapping",description:"We don't have any documentation for that, it really is self explanatory.",source:"@site/docs/settings/role-tag-mapping.mdx",slug:"/settings/role-tag-mapping",permalink:"/am360docs/settings/role-tag-mapping",version:"current",sidebar_label:"Role To Tags Mapping",sidebar:"settings",previous:{title:"Webhooks",permalink:"/am360docs/settings/webhooks"},next:{title:"Templates",permalink:"/am360docs/settings/templates"}},l=[],p={rightToc:l};function c(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"We don't have any documentation for that, it really is self explanatory."),Object(a.b)("p",null,"Go to ActiveMember360, Role to Tag Mapping"),Object(a.b)("p",null,"There is a description there."),Object(a.b)("p",null,"Basically select the role and then the tag/tags that will give the logged in user that role and save the setting. You can define as many mappings as you wish."),Object(a.b)("p",null,"If the user has the tag /tags on login the role is added to their user profile, if they do not have the tag the roll is removed from their user profile."),Object(a.b)("p",null,"You cannot add/remove the default WordPress roles for the user."),Object(a.b)("p",null,"Regarding your example, Role to Tags Mapping is hooked in to WordPress to run immediately after a user has logged in. It cannot be triggered from a webhook in ActiveCampaign or similar. So it is designed to add and remove roles to/from a user after they have logged in to a site."),Object(a.b)("p",null,"Role to Tag Mapping allows roles to be added and removed to a user"),Object(a.b)("p",null,"You will find a description within ActiveMember360, Role to Tag Mapping."),Object(a.b)("p",null,"Basically select the role and then the tag/tags that will give the logged in user that role and save the setting. You can define as many mappings as you wish."),Object(a.b)("p",null,"ActiveMember360 does not define any user roles. That is done by other plugins such as BuddyPress, bbPress, LearnDash etc."),Object(a.b)("p",null,"Using Role to Tag Mapping you cannot add/remove the default WordPress roles for the user."),Object(a.b)("p",null,"If the user has the tag/tags upon login the role is added to their user profile, if they do not have the tag the user role is removed from their user profile."),Object(a.b)("p",null,"Role to Tags Mapping is hooked in to WordPress to run immediately after a user has logged in. It cannot be triggered from a webhook in ActiveCampaign or similar. So it is designed to add and remove roles to/from a user after they have logged in to a site."),Object(a.b)("p",null,"We do not want a situation where the user can accidentally, or otherwise, remove all of the WordPress standard roles."),Object(a.b)("p",null,"Also because a user can only ever have one of the standard WordPress rules we do not want to provide a priority system for the mappings."),Object(a.b)("p",null,"Then there is the security issue surrounding the admin or super admin role."),Object(a.b)("p",null,"So we choose to protect standard WordPress role assignment and do not allow Role to Tag Mapping to add or remove those roles based upon tags."))}c.isMDXComponent=!0},291:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return h}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=o.a.createContext({}),c=function(e){var t=o.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=c(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},g=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),g=n,h=u["".concat(i,".").concat(g)]||u[g]||d[g]||a;return r?o.a.createElement(h,s(s({ref:t},p),{},{components:r})):o.a.createElement(h,s({ref:t},p))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}g.displayName="MDXCreateElement"}}]);