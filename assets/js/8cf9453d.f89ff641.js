"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[6139],{3905:function(e,a,n){n.d(a,{Zo:function(){return c},kt:function(){return d}});var t=n(7294);function o(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){o(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function l(e,a){if(null==e)return{};var n,t,o=function(e,a){if(null==e)return{};var n,t,o={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||(o[n]=e[n]);return o}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=t.createContext({}),p=function(e){var a=t.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):i(i({},a),e)),n},c=function(e){var a=p(e.components);return t.createElement(s.Provider,{value:a},e.children)},g={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},u=t.forwardRef((function(e,a){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=o,m=u["".concat(s,".").concat(d)]||u[d]||g[d]||r;return n?t.createElement(m,i(i({ref:a},c),{},{components:n})):t.createElement(m,i({ref:a},c))}));function d(e,a){var n=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4909:function(e,a,n){n.r(a),n.d(a,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return g}});var t=n(7462),o=n(3366),r=(n(7294),n(3905)),i=["components"],l={title:"Starting a new language pack",sidebar_label:"Language pack",sidebar_position:4,tags:["Processes","Translation","Language"]},s=void 0,p={unversionedId:"development/process/translation/langpack/index",id:"development/process/translation/langpack/index",title:"Starting a new language pack",description:"If Moodle is not yet translated into your language and you would like to help, please  create an account on the Translation site and contact our Moodle translation coordinator through translation@moodle.org.",source:"@site/general/development/process/translation/langpack/index.md",sourceDirName:"development/process/translation/langpack",slug:"/development/process/translation/langpack/",permalink:"/devdocs/general/development/process/translation/langpack/",editUrl:"https://github.com/moodle/devdocs/edit/main/general/development/process/translation/langpack/index.md",tags:[{label:"Processes",permalink:"/devdocs/general/tags/processes"},{label:"Translation",permalink:"/devdocs/general/tags/translation"},{label:"Language",permalink:"/devdocs/general/tags/language"}],version:"current",lastUpdatedBy:"Andrew Lyons",lastUpdatedAt:1653464346,formattedLastUpdatedAt:"25/05/2022",sidebarPosition:4,frontMatter:{title:"Starting a new language pack",sidebar_label:"Language pack",sidebar_position:4,tags:["Processes","Translation","Language"]},sidebar:"process",previous:{title:"AMOS manual",permalink:"/devdocs/general/development/process/translation/amos"},next:{title:"Langconfig",permalink:"/devdocs/general/development/process/translation/langpack/langconfig"}},c={},g=[{value:"Starting a child language of an existing language pack",id:"starting-a-child-language-of-an-existing-language-pack",level:2},{value:"Defining the language code",id:"defining-the-language-code",level:2}],u={toc:g};function d(e){var a=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,t.Z)({},u,n,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"If Moodle is not yet translated into your language and you would like to help, please  ",(0,r.kt)("a",{parentName:"p",href:"http://lang.moodle.org/login/signup.php"},"create an account on the Translation site")," and contact our Moodle translation coordinator through ",(0,r.kt)("a",{parentName:"p",href:"mailto:translation@moodle.org"},"translation@moodle.org"),"."),(0,r.kt)("p",null,"Once your language pack has been set up, you can follow the instructions provided in ",(0,r.kt)("a",{parentName:"p",href:"/general/development/process/translation/maintaining"},"Maintaining a language pack"),"."),(0,r.kt)("p",null,"First:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Make sure ",(0,r.kt)("a",{parentName:"strong",href:"./langpack/langconfig"},"langconfig")," is properly set up"),". It would be a very good idea to ask for other translators to double-check your translation of this extremely important file by posting a request in the ",(0,r.kt)("a",{parentName:"li",href:"https://lang.moodle.org/mod/forum/view.php?id=5"},"Translating Moodle forum"),"."),(0,r.kt)("li",{parentName:"ul"},"Take a look at ",(0,r.kt)("a",{parentName:"li",href:"./langpack/priority"},"Translation priority"),". All files have a rating according to how urgent they need translating.")),(0,r.kt)("p",null,"If you have any questions about using AMOS, please post in the ",(0,r.kt)("a",{parentName:"p",href:"http://lang.moodle.org/mod/forum/view.php?id=5"},"Using AMOS forum"),"."),(0,r.kt)("h2",{id:"starting-a-child-language-of-an-existing-language-pack"},"Starting a child language of an existing language pack"),(0,r.kt)("p",null,"If your country uses a variation of an existing language, that has a few (or many) differences from an ",(0,r.kt)("a",{parentName:"p",href:"./langpack/langconfig"},"existing parent language")," (for example, Canadian French is a variation of French, or US English has some spelling differences from UK English), a child language might be a good solution, as only the strings that need changes have to be uploaded to AMOS."),(0,r.kt)("p",null,"Some examples of existing child languages and the changes from the parent language for Moodle 4.0 are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Catal\xe0 (Valenci\xe0) , 5465 changes from ca"),(0,r.kt)("li",{parentName:"ul"},"Dansk (kursus) , 22 changes from da"),(0,r.kt)("li",{parentName:"ul"},"Dansk Rum , 857 changes from da"),(0,r.kt)("li",{parentName:"ul"},"Davvis\xe1megiella , 7235 changes from no"),(0,r.kt)("li",{parentName:"ul"},"Deutsch community , 246 changes from de_du"),(0,r.kt)("li",{parentName:"ul"},"Deutsch - Du , 1051 changes from de"),(0,r.kt)("li",{parentName:"ul"},"Deutsch - Kids , 273 changes from de_du"),(0,r.kt)("li",{parentName:"ul"},"English - Pirate , 1545 changes from en"),(0,r.kt)("li",{parentName:"ul"},"English for kids , 75 changes from en"),(0,r.kt)("li",{parentName:"ul"},"English - United States , 705 changes from en"),(0,r.kt)("li",{parentName:"ul"},"Espa\xf1ol de M\xe9xico para ni\xf1os , 140 changes from es_mx"),(0,r.kt)("li",{parentName:"ul"},"Espa\xf1ol Venezuela , 157 changes from es"),(0,r.kt)("li",{parentName:"ul"},"Filipino , 945 changes from tl"),(0,r.kt)("li",{parentName:"ul"},"Finlandssvenska , 3049 changes from sv"),(0,r.kt)("li",{parentName:"ul"},"Fran\xe7ais - Canada , 973 changes from fr"),(0,r.kt)("li",{parentName:"ul"},"Hebrew kids , 1284 changes from he"),(0,r.kt)("li",{parentName:"ul"},"Japanese kids ,  117 changes from ja."),(0,r.kt)("li",{parentName:"ul"},"Kalaallisut , 561 changes from da"),(0,r.kt)("li",{parentName:"ul"},"Lithuanian (university) , 13414 changes from lt"),(0,r.kt)("li",{parentName:"ul"},"Lulesamisk , 8 changes from no"),(0,r.kt)("li",{parentName:"ul"},"Norsk , 798 changes from no"),(0,r.kt)("li",{parentName:"ul"},"Norsk - nynorsk , 3608 changes from no"),(0,r.kt)("li",{parentName:"ul"},"S\xf8rsamisk , 8 changes from no"),(0,r.kt)("li",{parentName:"ul"},"Suomi+ , 983 changes from fi"),(0,r.kt)("li",{parentName:"ul"},"Wolof , 203 changes from fr")),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If your local language only has a few differences from an existing language, it still qualifies as a different language for Moodle, and it can have its own language pack (if someone is willing to create and maintain it)."))),(0,r.kt)("h2",{id:"defining-the-language-code"},"Defining the language code"),(0,r.kt)("p",null,"For historical reasons Moodle uses the ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes"},"ISO-639-1")," code for the representation of the language. If that doesn't exist, Moodle uses the ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/List_of_ISO_639-3_codes"},"ISO639-3 code")," (for example, Moroccan Tamazight)."),(0,r.kt)("p",null,"In some exceptional cases, like the Occitan languages, Moodle combines the ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes"},"ISO 639-1")," code with the ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/List_of_ISO_639-6_codes"},"ISO 639-6")," code, for example, ",(0,r.kt)("inlineCode",{parentName:"p"},"oc_gsc")," (keep in mind that the ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/List_of_ISO_639-6_codes"},"ISO 639-6")," standard is ",(0,r.kt)("a",{parentName:"p",href:"http://www.iso.org/iso/catalogue_detail?csnumber=43380"},"withdrawn"),")."),(0,r.kt)("p",null,"Other exceptions includes the ",(0,r.kt)("inlineCode",{parentName:"p"},"_kids")," addition for language packs for very young children and some other exceptions. These exceptions should be kept to a minimum."))}d.isMDXComponent=!0}}]);