(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{130:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return i})),r.d(t,"default",(function(){return l}));var o=r(2),n=r(6),a=(r(0),r(359)),s={id:"shortcodes-wordpress",title:"WordPress Shortcodes",description:"Gain an understanding of WordPress shortcodes.",sidebar_label:"WordPress Shortcodes"},c={unversionedId:"fundamentals/shortcodes-wordpress",id:"fundamentals/shortcodes-wordpress",isDocsHomePage:!1,title:"WordPress Shortcodes",description:"Gain an understanding of WordPress shortcodes.",source:"@site/docs/fundamentals/shortcodes-wordpress.mdx",slug:"/fundamentals/shortcodes-wordpress",permalink:"/am360docs/fundamentals/shortcodes-wordpress",version:"current",sidebar_label:"WordPress Shortcodes",sidebar:"fundamentals",previous:{title:"WordPress Excerpts",permalink:"/am360docs/fundamentals/excerpts"},next:{title:"ActiveMember360 Shortcodes",permalink:"/am360docs/fundamentals/shortcodes-activemember360"}},i=[{value:"What Are Shortcodes?",id:"what-are-shortcodes",children:[]},{value:"Format of Shortcodes",id:"format-of-shortcodes",children:[]},{value:"Shortcodes using attributes (parameters)",id:"shortcodes-using-attributes-parameters",children:[]},{value:"Shortcodes using start and end tags",id:"shortcodes-using-start-and-end-tags",children:[]}],d={rightToc:i};function l(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},d,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"what-are-shortcodes"},"What Are Shortcodes?"),Object(a.b)("p",null,"Shortcodes simplify the addition of features and functions within your WordPress site."),Object(a.b)("p",null,'To quote WordPress "Think of a shortcode as a shortcut to add features to your website that would normally require lots of complicated computer code and technical ability."'),Object(a.b)("p",null,"WordPress comes with a set of built-in shortcodes, and many themes and plugins when activated also add their own shortcodes."),Object(a.b)("h2",{id:"format-of-shortcodes"},"Format of Shortcodes"),Object(a.b)("p",null,"WordPress shortcodes consist of a phrase enclosed in a set of square brackets ","[ ]","."),Object(a.b)("p",null,"As an example, the WordPress shortcode for a gallery looks like this:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{}),"[gallery]\n")),Object(a.b)("h2",{id:"shortcodes-using-attributes-parameters"},"Shortcodes using attributes (parameters)"),Object(a.b)("p",null,"Shortcodes can also be used with additional attributes or parameters."),Object(a.b)("p",null,"Shortcode attributes allow information to be passed to the shortcode processor. This information is required for many shortcodes to operate as desired."),Object(a.b)("p",null,"Shortcode attributes are often referred to as parameters. This is the nomenclature that MembersPlus uses i.e. shortcode parameters."),Object(a.b)("p",null,"The order of parameters is not relevant to the operation of shortcodes."),Object(a.b)("p",null,"An example of a WordPress shortcode with parameters is:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{}),'[gallery id="123" size="medium"]\n')),Object(a.b)("p",null,"You can use single quotes, or double quotes to delimit the parameter values. If the parameter value contains no spaces the quotes are not strictly needed. When using quotes ensure they are \u2018straight\u2019 not \u2018curly\u2019 quotes."),Object(a.b)("p",null,"So, all the following would be valid syntax:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{}),"[gallery id=123 size=medium]\n")),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{}),"[gallery id='123' size='medium']\n")),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{}),'[gallery id="123" size="medium"]\n')),Object(a.b)("p",null,"However, for the following the only valid options would be:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{}),"[gallery columns='5' orderby='title DESC, ID ASC']\n")),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{}),'[gallery columns="5" orderby="title DESC, ID ASC"]\n')),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{}),"[gallery columns=5 orderby='title DESC, ID ASC']\n")),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{}),'[gallery columns=5 orderby="title DESC, ID ASC"]\n')),Object(a.b)("h2",{id:"shortcodes-using-start-and-end-tags"},"Shortcodes using start and end tags"),Object(a.b)("p",null,"Another form of shortcode can use start and end tags. The WordPress shortcode named caption uses this definition:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{}),'[caption]<img src="http://www.mysite.com/image.png">My image caption[/caption]\n')))}l.isMDXComponent=!0},359:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var o=r(0),n=r.n(o);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var d=n.a.createContext({}),l=function(e){var t=n.a.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=l(e.components);return n.a.createElement(d.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},p=n.a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=l(r),p=o,m=u["".concat(s,".").concat(p)]||u[p]||b[p]||a;return r?n.a.createElement(m,c(c({ref:t},d),{},{components:r})):n.a.createElement(m,c({ref:t},d))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=p;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,s[1]=c;for(var d=2;d<a;d++)s[d]=r[d];return n.a.createElement.apply(null,s)}return n.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"}}]);