(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{137:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return d}));var s=r(2),a=r(6),n=(r(0),r(359)),o={id:"creating-wordpress-users",title:"Creating WordPress Users",description:"Gain an understanding of the various ways WordPress Users can be created when using ActiveMember360.",sidebar_label:"Creating WordPress Users"},i={unversionedId:"fundamentals/creating-wordpress-users",id:"fundamentals/creating-wordpress-users",isDocsHomePage:!1,title:"Creating WordPress Users",description:"Gain an understanding of the various ways WordPress Users can be created when using ActiveMember360.",source:"@site/docs/fundamentals/creating-wordpress-users.mdx",slug:"/fundamentals/creating-wordpress-users",permalink:"/am360docs/fundamentals/creating-wordpress-users",version:"current",sidebar_label:"Creating WordPress Users",sidebar:"fundamentals",previous:{title:"WordPress Users & ActiveCampaign Contacts",permalink:"/am360docs/fundamentals/wordpress-users-activecampaign-contacts"},next:{title:"Creating ActiveCampaign Contacts",permalink:"/am360docs/fundamentals/creating-activecampaign-contacts"}},l=[],c={rightToc:l};function d(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(n.b)("wrapper",Object(s.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"WordPress users can be created in many ways; using only WordPress, MembersPlus or by other third party plugins."),Object(n.b)("p",null,"MembersPlus provides some alternative methods to create a WordPress user. However these all use the standard WordPress user and password creation processes."),Object(n.b)("p",null,"MemberPlus does not control in any way the generation of the WordPress password. So, the length, characters permitted for the password, and password strength are all controlled directly by WordPress."),Object(n.b)("p",null,"The main options for creating a WordPress user are:\nUsing the MembersPlus webhook \u2013 Add a WordPress User"),Object(n.b)("p",null,"It is most likely that you do not want to add a WordPress user until that person subscribes to an email list, requests a lead magnet, or purchases a product or subscription from you."),Object(n.b)("p",null,"MembersPlus provides a webhook that can be triggered by a HTTP POST sent from your primary CRM to your WordPress site running MembersPlus that will create a WordPress user."),Object(n.b)("p",null,"This is the MembersPlus Add a WordPress User webhook."),Object(n.b)("p",null,"This webhook can be used multiple times to create WordPress users on any MembersPlus powered site once the contact exists within the primary CRM."),Object(n.b)("p",null,"The user will be created with a username matching that of their email address and the WordPress role as specified in WordPress, Settings, General, New User Default Role. If the MembersPlus, Module, User Registration is enabled the settings there will also apply, to add specific primary CRM tags and set a contact field."),Object(n.b)("p",null,"Details of how to implement this webhook are available at MembersPlus, Webhooks, Add a WordPress User.\nUsing the MembersPlus module \u2013 Auto-Login"),Object(n.b)("p",null,"MembersPlus provides a auto-login capability that can be used to automatically login a visitor to your WordPress MembersPlus site."),Object(n.b)("p",null,"This can be used to autologin a user; after a primary CRM form submission, between different WordPress MembersPlus sites or if you are using an external cart (i.e. one not hosted in WordPress) MembersPlus provides a module that allows validated purchasers to autologin to the WordPress MembersPlus site using an autologin URL as the Success or Thank You Page URL for the purchase."),Object(n.b)("p",null,"This is the MembersPlus Auto-Login module."),Object(n.b)("p",null,"The Auto-Login module when used in conjunction with an external cart such as; ThriveCart, Digistore24, ClickBank or JVZoo will automatically create a contact in if the order credentials passed to MembersPlus validate successfully and the corresponding user does not already exist."),Object(n.b)("p",null,"The user will be created with a username matching that of their email address and the WordPress role as specified in WordPress, Settings, General, New User Default Role."),Object(n.b)("p",null,"Also when using this module with a contact in your primary CRM if the corresponding contact, i.e. a contact with a matching email address, does not already exist."),Object(n.b)("p",null,"If the MembersPlus, Module, User Registration is enabled the settings there will also apply, to add specific primary CRM tags and set a contact field."),Object(n.b)("p",null,"Details of how to implement this webhook are available at MembersPlus, Modules, Auto-Login.\nUsing the MembersPlus shortcode \u2013 ","[mbr_form_register]"),Object(n.b)("p",null,"MembersPlus provides the shortcode ","[mbr_form_register]"," which can be used on any post/page to allow a visitor to register on the WordPress site."),Object(n.b)("p",null,"The user will be created with a username matching that of their email address, and the WordPress role as specified in WordPress, Settings, General, New User Default Role."),Object(n.b)("p",null,"When using this shortcode the user is always created as a contact in your primary CRM if the corresponding contact, i.e. a contact with a matching email address, does not already exist."),Object(n.b)("p",null,"If the MembersPlus, Module, User Registration is enabled the settings there will also apply, to add specific primary CRM tags and set a contact field."),Object(n.b)("p",null,"Details of how to use this form are available at MembersPlus Shortcode ","[mbr_form_register]",".\nWordPress Administrator User Functions"),Object(n.b)("p",null,"A WordPress Administrator can manually create WordPress users using the WordPress administrator function WordPress, Users, Add New."),Object(n.b)("p",null,"When users are created using this method they can be added as contacts to, or updated within, the primary CRM with the addition of specified tags if the MembersPlus, Module, User Registration is enabled and the settings there apply.\nWordPress Registration"),Object(n.b)("p",null,"WordPress comes with built-in functionality to allow site visitors to register as WordPress users."),Object(n.b)("p",null,"This is controlled by the setting WordPress, Settings, General, Anyone can register."),Object(n.b)("p",null,"When this is enabled there will be a register link shown on the standard WordPress login page."),Object(n.b)("p",null,"When users are created using this method they can also be added as contacts to, or updated within, the primary CRM with the addition of specified tags and the setting of a contact field if the MembersPlus, Module, User Registration is enabled and the settings there apply.\nThird Party WordPress Plugins"),Object(n.b)("p",null,"Many other third party WordPress plugins also include features to create WordPress users."),Object(n.b)("p",null,"Any of these can be used to create your WordPress user."),Object(n.b)("p",null,"If the user is created using standard WordPress functions they can be added as contacts to, or updated within, the primary CRM with the addition of specified tags and the setting of a contact field if the MembersPlus, Module, User Registration is enabled and the settings there apply.\nWooCommerce"),Object(n.b)("p",null,"A notable example of a third party WordPress plugin that can create WordPress user is WooCommerce."),Object(n.b)("p",null,"When using WooCommerce users can be created in WordPress using the WooCommerce, Settings, Accounts & Privacy, Account Creation features."),Object(n.b)("p",null,"Users created by WooCommerce will be given by default the custom WordPress user role of Customer."),Object(n.b)("p",null,"When users are created using this method they can be added as contacts to, or updated within, the primary CRM with the addition of specified tags and the setting of a contact field if the MembersPlus, Module, User Registration is enabled and the settings there apply."),Object(n.b)("p",null,"Also, if using the MembersPlus WooCommerce Extension that can also control the creation or update of a contact within the primary CRM with the addition of specified tags etc dependent upon the visitors actions within WooCommerce.\nImport"),Object(n.b)("p",null,"There may be situations where you wish to bulk create users in your WordPress site."),Object(n.b)("p",null,"MembersPlus does not provide a facility to bulk create users."),Object(n.b)("p",null,"However, there are many third party plugins that can do this for you. Typically, these work with a CSV (Comma Separated Values) file."),Object(n.b)("p",null,'An example of such a plugin is Import Export WordPress Users.\nhref="',Object(n.b)("a",Object(s.a)({parentName:"p"},{href:"https://wordpress.org/plugins/users-customers-import-export-for-wp-woocommerce/%22%3EImport"}),'https://wordpress.org/plugins/users-customers-import-export-for-wp-woocommerce/">Import')," Export WordPress Users"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(s.a)({parentName:"li"},{href:"creating-wordpress-users",title:"Click to learn how to create WordPress Users"}),"Creating WordPress Users")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(s.a)({parentName:"li"},{href:"creating-activecampaign-contacts",title:"Click to learn how to create ActiveCampaign Contacts"}),"Creating ActiveCampaign Contacts")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(s.a)({parentName:"li"},{href:"changing-wordpress-activecampaign-password",title:"Click to learn how to Changing WordPress User & ActiveCampaign Contact Passwords"}),"Changing WordPress User & ActiveCampaign Contact Passwords")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(s.a)({parentName:"li"},{href:"changing-wordpress-activecampaign-email",title:"Click to learn how to Changing WordPress User & ActiveCampaign Contact Email Addresses"}),"Changing WordPress User & ActiveCampaign Contact Email Addresses"))))}d.isMDXComponent=!0},359:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return h}));var s=r(0),a=r.n(s);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,s,a=function(e,t){if(null==e)return{};var r,s,a={},n=Object.keys(e);for(s=0;s<n.length;s++)r=n[s],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(s=0;s<n.length;s++)r=n[s],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=a.a.createContext({}),d=function(e){var t=a.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=d(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,s=e.mdxType,n=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(r),b=s,h=u["".concat(o,".").concat(b)]||u[b]||p[b]||n;return r?a.a.createElement(h,i(i({ref:t},c),{},{components:r})):a.a.createElement(h,i({ref:t},c))}));function h(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var n=r.length,o=new Array(n);o[0]=b;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:s,o[1]=i;for(var c=2;c<n;c++)o[c]=r[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);