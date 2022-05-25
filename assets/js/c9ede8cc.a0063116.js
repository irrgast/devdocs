"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[2177],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,g=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(g,s(s({ref:t},c),{},{components:n})):r.createElement(g,s({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=u;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var p=2;p<i;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3137:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return a},metadata:function(){return p},toc:function(){return d}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),s=["components"],a={title:"Testing instructions guide",tags:["Processes"]},l=void 0,p={unversionedId:"development/process/testing/guide",id:"development/process/testing/guide",title:"Testing instructions guide",description:"This page has suggestions for developers on how to write good testing instructions for the weekly testing of integrated issues.",source:"@site/general/development/process/testing/guide.md",sourceDirName:"development/process/testing",slug:"/development/process/testing/guide",permalink:"/devdocs/general/development/process/testing/guide",editUrl:"https://github.com/moodle/devdocs/edit/main/general/development/process/testing/guide.md",tags:[{label:"Processes",permalink:"/devdocs/general/tags/processes"}],version:"current",lastUpdatedBy:"Andrew Lyons",lastUpdatedAt:1653464346,formattedLastUpdatedAt:"25/05/2022",frontMatter:{title:"Testing instructions guide",tags:["Processes"]},sidebar:"process",previous:{title:"Testing",permalink:"/devdocs/general/development/process/testing"},next:{title:"Testing of integrated issues",permalink:"/devdocs/general/development/process/testing/integrated-issues"}},c={},d=[],u={toc:d};function m(e){var t=e.components,n=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This page has suggestions for developers on how to write good testing instructions for the weekly ",(0,i.kt)("a",{parentName:"p",href:"./integrated-issues"},"testing of integrated issues"),"."),(0,i.kt)("p",null,"We recommend that you:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Number the steps in your test, and make use of sub-lists."),(0,i.kt)("li",{parentName:"ol"},"Only put one action (preparation or validation) on each line - A step should only define a unique operation."),(0,i.kt)("li",{parentName:"ol"},"Promote test validations - ",(0,i.kt)("strong",{parentName:"li"},"Confirm"),", ",(0,i.kt)("strong",{parentName:"li"},"Verify")," or ",(0,i.kt)("strong",{parentName:"li"},"Ensure")," - should be in ",(0,i.kt)("strong",{parentName:"li"},"bold")," so that they are easily identifiable."),(0,i.kt)("li",{parentName:"ol"},"Make use of the ",(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/secure/WikiRendererHelpAction.jspa?section=all"},"Jira Markdown formatting"),".")),(0,i.kt)("p",null,"In addition, the following items may be included:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Setup requirements. If so, explain them with detailed information and/or provide a link to the documentation, for example ",(0,i.kt)("a",{parentName:"li",href:"https://docs.moodle.org/en/OAuth_2_services"},"https://docs.moodle.org/en/OAuth_2_services"),"."),(0,i.kt)("li",{parentName:"ol"},"Whether testing involves git/shell interaction, SQL operations or commands in general, don't assume the tester knows how to perform that stuff. Instead, add them explicitly to the instructions."),(0,i.kt)("li",{parentName:"ol"},"Whether multiple themes (for example boost, or classic) should be used."),(0,i.kt)("li",{parentName:"ol"},"Whether more than one browser should be used."),(0,i.kt)("li",{parentName:"ol"},"Whether extra testing around the issue is required.")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Information for testers")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"You should specify which themes and browsers have tested, and attach some screenshots."))))}m.isMDXComponent=!0}}]);