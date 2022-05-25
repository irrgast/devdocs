"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[9368],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,h=p["".concat(s,".").concat(m)]||p[m]||u[m]||i;return n?o.createElement(h,a(a({ref:t},d),{},{components:n})):o.createElement(h,a({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8416:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var o=n(7462),r=n(3366),i=(n(7294),n(3905)),a=["components"],l={title:"Insecure configuration management",sidebar_label:"Insecure configuration",sidebar_position:13,tags:["Coding guidelines","Policies","Security"]},s=void 0,c={unversionedId:"development/policies/security/insecure-config",id:"development/policies/security/insecure-config",title:"Insecure configuration management",description:"This page forms part of the Moodle security guidelines.",source:"@site/general/development/policies/security/insecure-config.md",sourceDirName:"development/policies/security",slug:"/development/policies/security/insecure-config",permalink:"/devdocs/general/development/policies/security/insecure-config",editUrl:"https://github.com/moodle/devdocs/edit/main/general/development/policies/security/insecure-config.md",tags:[{label:"Coding guidelines",permalink:"/devdocs/general/tags/coding-guidelines"},{label:"Policies",permalink:"/devdocs/general/tags/policies"},{label:"Security",permalink:"/devdocs/general/tags/security"}],version:"current",lastUpdatedBy:"Andrew Lyons",lastUpdatedAt:1653464346,formattedLastUpdatedAt:"25/05/2022",sidebarPosition:13,frontMatter:{title:"Insecure configuration management",sidebar_label:"Insecure configuration",sidebar_position:13,tags:["Coding guidelines","Policies","Security"]},sidebar:"policies",previous:{title:"Brute-forcing login",permalink:"/devdocs/general/development/policies/security/bruteforcing-login"},next:{title:"Buffer overruns",permalink:"/devdocs/general/development/policies/security/bufferoverruns"}},d={},u=[{value:"What is the danger?",id:"what-is-the-danger",level:2},{value:"How Moodle avoids this problem",id:"how-moodle-avoids-this-problem",level:2},{value:"What you need to do in your code",id:"what-you-need-to-do-in-your-code",level:2},{value:"What you need to do as an administrator",id:"what-you-need-to-do-as-an-administrator",level:2},{value:"See also",id:"see-also",level:2}],p={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This page forms part of the ",(0,i.kt)("a",{parentName:"p",href:"../security"},"Moodle security guidelines"),"."))),(0,i.kt)("h2",{id:"what-is-the-danger"},"What is the danger?"),(0,i.kt)("p",null,"Evil Hacker somehow gets access to your server some time and installs some nasty code. For example, they could add some code to the login page that records every username and password entered, and sends it back to ",(0,i.kt)("inlineCode",{parentName:"p"},"evel-hacker.com"),"."),(0,i.kt)("p",null,"Unfortunately, you have no procedures in place for detecting that this is happening."),(0,i.kt)("p",null,"Another problem is not updating to the latest Moodle release, which means that you will be running a version of Moodle with know security holes."),(0,i.kt)("h2",{id:"how-moodle-avoids-this-problem"},"How Moodle avoids this problem"),(0,i.kt)("p",null,"This is not really a problem that can be solved from within Moodle code. However, any Moodle code that does install other PHP code (for example, ",(0,i.kt)("inlineCode",{parentName:"p"},"admin/langimport.php"),") must be written with extreme care."),(0,i.kt)("h2",{id:"what-you-need-to-do-in-your-code"},"What you need to do in your code"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If you are writing code like ",(0,i.kt)("inlineCode",{parentName:"li"},"admin/langimport.php"),", make sure you know what you are doing.")),(0,i.kt)("h2",{id:"what-you-need-to-do-as-an-administrator"},"What you need to do as an administrator"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Keep up-to-date with the latest Moodle release from whichever branch you are using.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Register your Moodle site, so you get notified of security problems before the general public."))),(0,i.kt)("li",{parentName:"ul"},"Think about how you deploy the Moodle code to your server. For example, if you ",(0,i.kt)("a",{parentName:"li",href:"https://docs.moodle.org//en/Git_for_Administrators"},"use git"),", then ",(0,i.kt)("inlineCode",{parentName:"li"},"git status")," will tell you which files have been edited.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Alternatively, if you upload the Moodle code manually, delete all the old code except ",(0,i.kt)("inlineCode",{parentName:"li"},"config.php")," before you upload a new version."))),(0,i.kt)("li",{parentName:"ul"},"Be very careful who can access your servers.")),(0,i.kt)("h2",{id:"see-also"},"See also"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../security"},"Security")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Coding"},"Coding"))))}m.isMDXComponent=!0}}]);