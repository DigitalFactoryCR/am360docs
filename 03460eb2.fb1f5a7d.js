(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{359:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return O}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=r.a.createContext({}),s=function(e){var t=r.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},l=function(e){var t=s(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=b(e,["components","mdxType","originalType","parentName"]),l=s(a),d=n,O=l["".concat(i,".").concat(d)]||l[d]||m[d]||o;return a?r.a.createElement(O,c(c({ref:t},p),{},{components:a})):r.a.createElement(O,c({ref:t},p))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=d;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var p=2;p<o;p++)i[p]=a[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},60:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return b})),a.d(t,"default",(function(){return s}));var n=a(2),r=a(6),o=(a(0),a(359)),i={id:"block-condition-php-statement",title:"Set Gutenberg Block Display Based Upon Conditional PHP Statement",description:"How to configure Gutenberg block display conditions based upon conditional PHP statement.",sidebar_label:"Set Gutenberg Block Display Based Upon Conditional PHP Statement"},c={unversionedId:"modules/gutenberg/block-condition-php-statement",id:"modules/gutenberg/block-condition-php-statement",isDocsHomePage:!1,title:"Set Gutenberg Block Display Based Upon Conditional PHP Statement",description:"How to configure Gutenberg block display conditions based upon conditional PHP statement.",source:"@site/docs/modules/gutenberg/block-condition-php-statement.mdx",slug:"/modules/gutenberg/block-condition-php-statement",permalink:"/am360docs/modules/gutenberg/block-condition-php-statement",version:"current",sidebar_label:"Set Gutenberg Block Display Based Upon Conditional PHP Statement",sidebar:"modules",previous:{title:"Set Gutenberg Block Display Based Upon ActiveCampaign Contact Field Value",permalink:"/am360docs/modules/gutenberg/block-condition-contact-field"},next:{title:"Gutenberg Block Display Examples",permalink:"/am360docs/modules/gutenberg/examples"}},b=[],p={rightToc:b};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("figure",null,Object(o.b)("img",{alt:"Steps for specifying visibility conditions for Gutenberg block based upon conditional PHP statement",src:"https://d1toiz2vvvafqj.cloudfront.net/docs/images/gutenberg_module_block_condition_php_statement.png"}),Object(o.b)("figcaption",null,"Steps for specifying visibility conditions for Gutenberg block based upon conditional PHP statement")),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Locate the PHP Statement section in Gutenberg editor block settings, ActiveMember360.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"From the ",Object(o.b)("strong",{parentName:"p"},"Control mode")," drop down ensure ",Object(o.b)("strong",{parentName:"p"},"Individual")," is selected.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Define the PHP conditional statement."),Object(o.b)("p",{parentName:"li"},"Any valid PHP conditional function can be used."),Object(o.b)("p",{parentName:"li"},"ActiveMember360 has conditional functions that can be used:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"mbr_has_tags()\n")),Object(o.b)("p",{parentName:"li"},"Here are some examples:"),Object(o.b)("p",{parentName:"li"},"a. Statement evaluates as ",Object(o.b)("strong",{parentName:"p"},"TRUE")," if the user ",Object(o.b)("strong",{parentName:"p"},"HAS")," tag 123."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"mbr_has_tags( '123' )\n")),Object(o.b)("p",{parentName:"li"},"b. Statement evaluates as ",Object(o.b)("strong",{parentName:"p"},"TRUE")," if the user ",Object(o.b)("strong",{parentName:"p"},"HAS")," tag 123 ",Object(o.b)("strong",{parentName:"p"},"OR")," 234."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"mbr_has_tags( '123,234' )\n")),Object(o.b)("p",{parentName:"li"},"c. Statement evaluates as ",Object(o.b)("strong",{parentName:"p"},"TRUE")," if the user ",Object(o.b)("strong",{parentName:"p"},"HAS")," tag 123 ",Object(o.b)("strong",{parentName:"p"},"OR")," 234."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"mbr_has_tags( array(123,234) )\n")),Object(o.b)("p",{parentName:"li"},"d. Statement evaluates as ",Object(o.b)("strong",{parentName:"p"},"TRUE")," if the user ",Object(o.b)("strong",{parentName:"p"},"HAS")," tag 123 ",Object(o.b)("strong",{parentName:"p"},"AND")," 234."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"mbr_has_tags( '123,234', 'all' )\n")),Object(o.b)("p",{parentName:"li"},"e. Statement evaluates as ",Object(o.b)("strong",{parentName:"p"},"TRUE")," if the user ",Object(o.b)("strong",{parentName:"p"},"HAS")," tag 123 ",Object(o.b)("strong",{parentName:"p"},"AND")," 234."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"mbr_has_tags( array(123,234), 'all' )\n")),Object(o.b)("div",Object(n.a)({parentName:"li"},{className:"admonition admonition-info alert alert--info"}),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"Note")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Any function preceded with an exclamation mark ",Object(o.b)("strong",{parentName:"p"},"!")," specifies the negative use case of the function."))),Object(o.b)("p",{parentName:"li"},"f. Statement evaluates as ",Object(o.b)("strong",{parentName:"p"},"TRUE")," if the user ",Object(o.b)("strong",{parentName:"p"},"DOES NOT HAVE")," tag 123."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"!mbr_has_tags( '123' )\n")),Object(o.b)("div",Object(n.a)({parentName:"li"},{className:"admonition admonition-info alert alert--info"}),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"Note")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"It is also possible to combine conditions with ",Object(o.b)("strong",{parentName:"p"},"&&")," (representing AND) and ",Object(o.b)("strong",{parentName:"p"},"||")," (representing OR)."))),Object(o.b)("p",{parentName:"li"},"g. Statement evaluates as ",Object(o.b)("strong",{parentName:"p"},"TRUE")," if the user ",Object(o.b)("strong",{parentName:"p"},"HAS")," tag 123 ",Object(o.b)("strong",{parentName:"p"},"AND DOES NOT HAVE")," tag 234."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"mbr_has_tags( '123' ) && !mbr_has_tags( '234' )\n")),Object(o.b)("p",{parentName:"li"},"h. Statement evaluates as ",Object(o.b)("strong",{parentName:"p"},"TRUE")," if the user ",Object(o.b)("strong",{parentName:"p"},"HAS")," tag 123 ",Object(o.b)("strong",{parentName:"p"},"OR DOES NOT HAVE")," tag 234."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"mbr_has_tags( '123' ) || !mbr_has_tags( '234' )\n")),Object(o.b)("div",Object(n.a)({parentName:"li"},{className:"admonition admonition-info alert alert--info"}),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"Note")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"You can also use any conditional tags including WordPress and WooCommerce conditional tags."))),Object(o.b)("p",{parentName:"li"},"A list of WordPress Conditional Tags can be found here:"),Object(o.b)("p",{parentName:"li"},Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://codex.wordpress.org/Conditional_Tags",title:"Click to access WordPress Conditional Tags"}),"WordPress Conditional Tags")),Object(o.b)("p",{parentName:"li"},"A list of WooCommerce Conditional Tags can be found here:"),Object(o.b)("p",{parentName:"li"},Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.woocommerce.com/document/conditional-tags/",title:"Click to access WooCommerce Conditional Tags"}),"WooCommerce Conditional Tags")),Object(o.b)("p",{parentName:"li"},"i. Statement evaluates as ",Object(o.b)("strong",{parentName:"p"},"TRUE")," if this is the home page."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"is_home()\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Ensure the required block display to be used with this condition has been specified as detailed here:"),Object(o.b)("p",{parentName:"li"},Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/modules/gutenberg/block-condition-display-settings",title:"Click to learn how to set Gutenberg Block to Display Always or Never or Based Upon User Login Status"}),"Set Gutenberg Block to Display Always or Never or Based Upon User Login Status"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Once the settings have been completed ensure ",Object(o.b)("strong",{parentName:"p"},"Publish")," or ",Object(o.b)("strong",{parentName:"p"},"Update")," is clicked to save the configuration."))),Object(o.b)("p",null,"Set any additional conditions for the module/column/row display as detailed here:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/modules/gutenberg/block-condition-contact-tags",title:"Click to learn how to set Gutenberg Block Display Based Upon ActiveCampaign Contact Tag/Tags"}),"Set Gutenberg Block Display Based Upon ActiveCampaign Contact Tag/Tags")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/modules/gutenberg/block-condition-contact-field",title:"Click to learn how to set Gutenberg Block Display Based Upon ActiveCampaign Contact Field Value"}),"Set Gutenberg Block Display Based Upon ActiveCampaign Contact Field Value"))))}s.isMDXComponent=!0}}]);