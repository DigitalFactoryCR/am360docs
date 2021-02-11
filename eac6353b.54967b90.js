(window.webpackJsonp=window.webpackJsonp||[]).push([[267],{328:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return i})),o.d(t,"metadata",(function(){return a})),o.d(t,"rightToc",(function(){return s})),o.d(t,"default",(function(){return l}));var r=o(2),n=(o(0),o(359));const i={id:"shortcodes-activemember360",title:"ActiveMember360 Shortcodes",description:"Gain an understanding of ActiveMember360 shortcodes.",sidebar_label:"ActiveMember360 Shortcodes"},a={unversionedId:"fundamentals/shortcodes-activemember360",id:"fundamentals/shortcodes-activemember360",isDocsHomePage:!1,title:"ActiveMember360 Shortcodes",description:"Gain an understanding of ActiveMember360 shortcodes.",source:"@site/docs/fundamentals/shortcodes-activemember360.mdx",slug:"/fundamentals/shortcodes-activemember360",permalink:"/am360docs/fundamentals/shortcodes-activemember360",version:"current",sidebar_label:"ActiveMember360 Shortcodes",sidebar:"fundamentals",previous:{title:"WordPress Shortcodes",permalink:"/am360docs/fundamentals/shortcodes-wordpress"},next:{title:"ActiveMember360 Custom Shortcodes",permalink:"/am360docs/fundamentals/shortcodes-activemember360-custom"}},s=[{value:"Display Shortcodes",id:"display-shortcodes",children:[]},{value:"Conditional Shortcodes",id:"conditional-shortcodes",children:[]},{value:"Action Shortcodes",id:"action-shortcodes",children:[]},{value:"ActiveMember360 Shortcode Nesting",id:"activemember360-shortcode-nesting",children:[]},{value:"ActiveMember360 Embedded Shortcodes",id:"activemember360-embedded-shortcodes",children:[]},{value:"Using ActiveMember360 Shortcodes with WordPress Page Builders",id:"using-activemember360-shortcodes-with-wordpress-page-builders",children:[]}],c={rightToc:s};function l({components:e,...t}){return Object(n.b)("wrapper",Object(r.a)({},c,t,{components:e,mdxType:"MDXLayout"}),Object(n.b)("p",null,"ActiveMember360 has its own comprehensive set of shortcodes that can be categorised into these types for clarity:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Display Shortcodes"),Object(n.b)("li",{parentName:"ul"},"Conditional Shortcodes"),Object(n.b)("li",{parentName:"ul"},"Action Shortcodes")),Object(n.b)("p",null,"All ActiveMember360 shortcodes are specified in lowercase, and always start with ",Object(n.b)("strong",{parentName:"p"},"mbr","_")," followed by a unique shortcode identifier e.g. ",Object(n.b)("inlineCode",{parentName:"p"},"[mbr_logout_url]")),Object(n.b)("p",null,"All ActiveMember360 shortcodes can operate with start and end tags. However, most end tags are unnecessary especially for display shortcodes."),Object(n.b)("h2",{id:"display-shortcodes"},"Display Shortcodes"),Object(n.b)("p",null,"The ActiveMember360 display shortcodes are typically of the form ",Object(n.b)("inlineCode",{parentName:"p"},"[mbr_*]")," where ",Object(n.b)("strong",{parentName:"p"},"*")," is the generic type of information to display. Most display shortcodes use parameters to define the display of specific data."),Object(n.b)("p",null,"For example:"),Object(n.b)("p",null,Object(n.b)("inlineCode",{parentName:"p"},'[mbr_contact field="email"]')),Object(n.b)("p",null,"There is a special form of display shortcode that is specifically designed to operate without the use of parameters."),Object(n.b)("p",null,"Examples of these shortcodes are:"),Object(n.b)("p",null,Object(n.b)("inlineCode",{parentName:"p"},"[mbr_db_email]")),Object(n.b)("p",null,Object(n.b)("inlineCode",{parentName:"p"},"[mbr_db_id]")),Object(n.b)("p",null,"The standard form for these being:"),Object(n.b)("p",null,Object(n.b)("inlineCode",{parentName:"p"},'[mbr_contact field="email"]')),Object(n.b)("p",null,Object(n.b)("inlineCode",{parentName:"p"},'[mbr_contact field="id"]')),Object(n.b)("p",null,"respectively."),Object(n.b)("p",null,"Whilst this provides a useful short form definition it exists primarily to allow certain shortcodes to be used with other third party plugins that normally prevent the use of shortcodes containing parameters, or special characters such as single and double quotes."),Object(n.b)("p",null,"For a full list of display shortcodes visit ActiveMember360 Display Shortcodes."),Object(n.b)("h2",{id:"conditional-shortcodes"},"Conditional Shortcodes"),Object(n.b)("p",null,"The ActiveMember360 conditional shortcodes typically perform a conditional test resulting in either a true or false result."),Object(n.b)("p",null,"To support the true/false condition, i.e. if/else, ActiveMember360 introduces an additional shortcode tag ",Object(n.b)("inlineCode",{parentName:"p"},"[ELSE_*]"),", where ",Object(n.b)("strong",{parentName:"p"},"*")," is the shortcode identifier. This supports what is called shortcode branching."),Object(n.b)("p",null,"Conditional shortcodes allow you to either control the display of specific content on the post/page or the execution of other shortcodes depending upon the result of a conditional test."),Object(n.b)("p",null,"They are normally of the form ",Object(n.b)("inlineCode",{parentName:"p"},"[mbr_is_*]")," or ",Object(n.b)("inlineCode",{parentName:"p"},"[mbr_not_*]"),"."),Object(n.b)("p",null,"However please note that not all ",Object(n.b)("inlineCode",{parentName:"p"},"[mbr_is_*]")," have the logical opposite e.g. ",Object(n.b)("inlineCode",{parentName:"p"},"[mbr_not_*]")),Object(n.b)("p",null,"Most ActiveMember360 conditional shortcodes can be used in three different ways:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"If the test is true i.e. the logged in contact has the primary CRM tag with id 123 display \u2018Content only for those with tag 123\u2019."),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",Object(r.a)({parentName:"pre"},{}),'[mbr_is_for tags="123"]\n<p>Content only for those with tag 123</p>\n[/mbr_is_for]\n'))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"If the test is false i.e. the logged in contact does not have the primary CRM tag with id 123 display \u2018Content only for those without tag 123\u2019."),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",Object(r.a)({parentName:"pre"},{}),'[mbr_is_for tags="123"]\n[ELSE_is_tag]\n<p>Content only for those without tag 123</p>\n[/mbr_is_for]\n'))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"If the test is true i.e. the logged in contact has the primary CRM tag with id 123 display \u2018Content only for those with tag 123\u2019, else if the test is false i.e. the logged in contact does not have the primary CRM tag with id 123 display \u2018Content only for those without tag 123\u2019."),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",Object(r.a)({parentName:"pre"},{}),'[mbr_is_for tags="123"]\n<p>Content only for those with tag 123</p>\n[ELSE_is_tag]\n<p>Content only for those without tag 123</p>\n[/mbr_is_for]\n')))),Object(n.b)("p",null,"For a full list of conditional shortcodes visit ActiveMember360 Conditional Shortcodes."),Object(n.b)("h2",{id:"action-shortcodes"},"Action Shortcodes"),Object(n.b)("p",null,"The ActiveMember360 action shortcodes typically perform an action on your website."),Object(n.b)("p",null,"For example ",Object(n.b)("inlineCode",{parentName:"p"},'[mbr_update_contact assign_tags="123"]'),". This will apply tag 123 to the current logged in contact."),Object(n.b)("p",null,"The action shortcodes are named by an action."),Object(n.b)("p",null,"So they may be of the form for example:"),Object(n.b)("p",null,Object(n.b)("inlineCode",{parentName:"p"},"[mbr_redirect]")),Object(n.b)("p",null,Object(n.b)("inlineCode",{parentName:"p"},"[mbr_automation]")),Object(n.b)("p",null,"For a full list of action shortcodes visit ActiveMember360 Action Shortcodes."),Object(n.b)("h2",{id:"activemember360-shortcode-nesting"},"ActiveMember360 Shortcode Nesting"),Object(n.b)("p",null,"Sometimes for example when using the ActiveMember360 conditional shortcodes you need to run multiple conditional tests to decide which content to display. This often requires placing one shortcode inside of another i.e. between the other shortcode\u2019s start and end tag. This is called shortcode nesting."),Object(n.b)("p",null,"To nest a shortcode simply add a number to the end of the shortcode name. Similarly, for the ELSE","_"," and the closing shortcode tag."),Object(n.b)("p",null,"ActiveMember360 supports nesting up to 19 levels deep."),Object(n.b)("p",null,"If a subsequent test commences after the previous test completes you don\u2019t need to use the nesting ability."),Object(n.b)("p",null,"An example of nesting:"),Object(n.b)("pre",null,Object(n.b)("code",Object(r.a)({parentName:"pre"},{}),'[mbr_is_for tags="123"]\n<p>Content only for those with tag 123</p>\n[ELSE_is_tag]\n[mbr_is_for1 tags="456"]\n<p>Content only for those with tag 456 but without tag 123</p>\n[ELSE_is_tag1]\n[mbr_is_for2 tags="789"]\n<p>Content only for those with tag 789 but without tags 123 and 456</p>\n[ELSE_is_tag2]\n<p>Content only for those without tags 123, 456 and 789</p>\n[/mbr_is_for2]\n[/mbr_is_for1]\n[/mbr_is_for]\n')),Object(n.b)("p",null,"An example of multiple tests where nesting is not required:"),Object(n.b)("pre",null,Object(n.b)("code",Object(r.a)({parentName:"pre"},{}),'[mbr_is_for tags="123"]\n<p>Content only for those with tag 123</p>\n[/mbr_is_for]\n[mbr_is_for tags="456"]\n<p>Content only for those with tag 456</p>\n[/mbr_is_for]\n')),Object(n.b)("h2",{id:"activemember360-embedded-shortcodes"},"ActiveMember360 Embedded Shortcodes"),Object(n.b)("p",null,"The ActiveMember360 shortcode processor uniquely supports the use of embedded shortcodes."),Object(n.b)("p",null,"Embedded shortcodes differ from nestable shortcodes."),Object(n.b)("p",null,"An embedded shortcode is one specified within the attribute/parameter of another shortcode."),Object(n.b)("p",null,"As an example:"),Object(n.b)("pre",null,Object(n.b)("code",Object(r.a)({parentName:"pre"},{}),'[mbr_compare value1="[mbr_contact field=\'numberofvisits\']" cmp="GT" value2="1"]\n<p>Welcome back.</p>\n[/mbr_compare]\n')),Object(n.b)("p",null,"When embedding shortcodes that have their own parameters you must take care to ensure the parameter delimiters are matched using the single and double quotes."),Object(n.b)("p",null,"Again the example:"),Object(n.b)("pre",null,Object(n.b)("code",Object(r.a)({parentName:"pre"},{}),'[mbr_compare value1="[mbr_contact field=\'numberofvisits\']" cmp="GT" value2="1"]\n<p>Welcome back.</p>\n[/mbr_compare]\n')),Object(n.b)("p",null,"would be correct."),Object(n.b)("p",null,"However:"),Object(n.b)("pre",null,Object(n.b)("code",Object(r.a)({parentName:"pre"},{}),'[mbr_compare value1="[mbr_contact field="numberofvisits"]" cmp="GT" value2="1"]\n<p>Welcome back.</p>\n[/mbr_compare]\n')),Object(n.b)("p",null,"would be incorrect and fail."),Object(n.b)("p",null,"When using ActiveMember360 shortcodes in an embedded scenario there is often a requirement that the shortcodes are evaluated in a specific order."),Object(n.b)("p",null,"To control the order of shortcode processing ActiveMember360 uses two types of shortcode delimiters."),Object(n.b)("p",null,"In addition to the standard set of square brackets ",Object(n.b)("strong",{parentName:"p"},"[ ]")," ActiveMember360 also uses a set of bracket and pipe symbols ",Object(n.b)("strong",{parentName:"p"},"(| |)")),Object(n.b)("p",null,"For ActiveMember360 ",Object(n.b)("strong",{parentName:"p"},"(| |)")," delimited shortcodes will be evaluated before ",Object(n.b)("strong",{parentName:"p"},"[ ]")," delimited shortcodes."),Object(n.b)("p",null,"An example of this would be:"),Object(n.b)("pre",null,Object(n.b)("code",Object(r.a)({parentName:"pre"},{}),"[mbr_redirect url= \"(|mbr_permalink post_id='123'|)\"]\n")),Object(n.b)("p",null,"The power of supporting embedded shortcode processing should not be underestimated."),Object(n.b)("h2",{id:"using-activemember360-shortcodes-with-wordpress-page-builders"},"Using ActiveMember360 Shortcodes with WordPress Page Builders"))}l.isMDXComponent=!0},359:function(e,t,o){"use strict";o.d(t,"a",(function(){return d})),o.d(t,"b",(function(){return h}));var r=o(0),n=o.n(r);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=n.a.createContext({}),b=function(e){var t=n.a.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},d=function(e){var t=b(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=b(o),m=r,h=d["".concat(a,".").concat(m)]||d[m]||p[m]||i;return o?n.a.createElement(h,s(s({ref:t},l),{},{components:o})):n.a.createElement(h,s({ref:t},l))}));function h(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,a=new Array(i);a[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var l=2;l<i;l++)a[l]=o[l];return n.a.createElement.apply(null,a)}return n.a.createElement.apply(null,o)}m.displayName="MDXCreateElement"}}]);