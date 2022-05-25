"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[3600],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return h}});var i=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=i.createContext({}),c=function(e){var t=i.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(a),h=n,m=u["".concat(s,".").concat(h)]||u[h]||p[h]||o;return a?i.createElement(m,r(r({ref:t},d),{},{components:a})):i.createElement(m,r({ref:t},d))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,r=new Array(o);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,r[1]=l;for(var c=2;c<o;c++)r[c]=a[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,a)}u.displayName="MDXCreateElement"},2965:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var i=a(7462),n=a(3366),o=(a(7294),a(3905)),r=["components"],l={title:"Accessibility",tags:["Accessibility","Compliance","Certification"]},s=void 0,c={unversionedId:"development/policies/accessibility",id:"development/policies/accessibility",title:"Accessibility",description:"Moodle is designed to provide equal functionality and information to all people. This means that there should be no barriers for people regardless of disabilities, assistive technologies that are used, different screen sizes and different input devices (for example mouse, keyboard and touchscreen).",source:"@site/general/development/policies/accessibility.md",sourceDirName:"development/policies",slug:"/development/policies/accessibility",permalink:"/devdocs/general/development/policies/accessibility",editUrl:"https://github.com/moodle/devdocs/edit/main/general/development/policies/accessibility.md",tags:[{label:"Accessibility",permalink:"/devdocs/general/tags/accessibility"},{label:"Compliance",permalink:"/devdocs/general/tags/compliance"},{label:"Certification",permalink:"/devdocs/general/tags/certification"}],version:"current",lastUpdatedBy:"Andrew Lyons",lastUpdatedAt:1653464346,formattedLastUpdatedAt:"25/05/2022",frontMatter:{title:"Accessibility",tags:["Accessibility","Compliance","Certification"]},sidebar:"policies",next:{title:"Backporting",permalink:"/devdocs/general/development/policies/backporting"}},d={},p=[{value:"Accessibility conformance",id:"accessibility-conformance",level:2},{value:"Authoring features",id:"authoring-features",level:2},{value:"Coding standards",id:"coding-standards",level:2},{value:"Colours",id:"colours",level:3},{value:"Icons",id:"icons",level:3},{value:"Solitary Icons",id:"solitary-icons",level:4},{value:"Icons and Text",id:"icons-and-text",level:4},{value:"Multiple icons",id:"multiple-icons",level:4},{value:"Keyboard Support",id:"keyboard-support",level:3},{value:"Forms",id:"forms",level:3},{value:"Presentation Only",id:"presentation-only",level:3},{value:"Landmark regions",id:"landmark-regions",level:3},{value:"Page Titles",id:"page-titles",level:3},{value:"Advanced UX Widgets",id:"advanced-ux-widgets",level:3},{value:"External Resources",id:"external-resources",level:2},{value:"Accessibility Tools",id:"accessibility-tools",level:2},{value:"International Legislation",id:"international-legislation",level:2},{value:"USA",id:"usa",level:3},{value:"UK",id:"uk",level:3},{value:"Germany",id:"germany",level:3},{value:"France",id:"france",level:3},{value:"European Union",id:"european-union",level:3}],u={toc:p};function h(e){var t=e.components,a=(0,n.Z)(e,r);return(0,o.kt)("wrapper",(0,i.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Moodle is designed to provide equal functionality and information to all people. This means that there should be no barriers for people regardless of disabilities, assistive technologies that are used, different screen sizes and different input devices (for example mouse, keyboard and touchscreen)."),(0,o.kt)("h2",{id:"accessibility-conformance"},"Accessibility conformance"),(0,o.kt)("p",null,"As part of our ongoing commitment to provide an accessible platform and to continuously improve compliance with WCAG 2.1 Level AA, Moodle has been working with an external auditor to review the platform since January 2020."),(0,o.kt)("p",null,"Key pages within Moodle, which are representative of its overall accessibility and functionality, are audited using both automated tools and user journey testing. The WCAG 2.1 Level A and Level AA issues raised from this audit were all addressed in Moodle 3.10 and Moodle 3.9.3 (both released on November 9th 2020). Many of these ",(0,o.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/browse/MDL-67688"},"accessibility improvements")," where also back-ported to Moodle 3.7.5+ and Moodle 3.8.2+, where possible."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Moodle's accreditations")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Both Moodle, and the Moodle Mobile App hold a WCAG 2.1 AA accreditation based on the successful resolution of issues identified during audits."),(0,o.kt)("p",{parentName:"div"},"These accreditations are renewed each year."),(0,o.kt)("div",{className:"container"},(0,o.kt)("div",{className:"row"},(0,o.kt)("div",{className:"col col--6"},(0,o.kt)("figure",null,(0,o.kt)("a",{href:"https://www.webkeyit.com/accessibility-services/accessibility-accreditations/moodle"},(0,o.kt)("img",{width:"400px",src:"https://www.webkeyit.com/accessibility-services/accessibility-accreditations/moodle/badge",alt:"WCAG 2.1 AA Accreditation for Moodle LMS"}),(0,o.kt)("figcaption",null,"Moodle WCAG 2.1 AA Accreditation, first issues November 10th 2020; Re-accredited on November 8th 2021")))),(0,o.kt)("div",{className:"col col--6"},(0,o.kt)("figure",null,(0,o.kt)("a",{href:"https://www.webkeyit.com/accessibility-services/accessibility-accreditations/moodle-mobile-app"},(0,o.kt)("img",{width:"400px",src:"https://www.webkeyit.com/accessibility-services/accessibility-accreditations/moodle-mobile-app/badge",alt:"WCAG 2.1 AA Accreditation for Moodle LMS"}),(0,o.kt)("figcaption",null,"WCAG 2.1 Level AA accreditation badge for the Moodle app issued on 30 June 2021")))))),(0,o.kt)("p",{parentName:"div"},"An overview of Moodle's conformance with the ",(0,o.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/WCAG21/"},"WCAG 2.1")," guidelines can be found in our ",(0,o.kt)("a",{parentName:"p",href:"https://docs.moodle.org/311/en/VPAT#Moodle%20accessibility%20conformance%20report"},"accessibility conformance report"),"."))),(0,o.kt)("h2",{id:"authoring-features"},"Authoring features"),(0,o.kt)("p",null,"One of Moodle's biggest features is its ability to create and share content to other users.\nWhere possible a range of accessibility authoring and auditing features have been added to the user interface so that content is as accessible as possible."),(0,o.kt)("p",null,'One example of this is in the "Atto text editor" which includes an "Accessibility checker" and an "Accessibility helper" which provide additional information for content authors on the accessibility of their content. One example of this is a check to ensure that content meets WCAG AA colour contrast requirements.'),(0,o.kt)("p",null,'All accessibility features of the "MathJax" content filter are enabled as standard, allowing screen readers to read math content directly.'),(0,o.kt)("h2",{id:"coding-standards"},"Coding standards"),(0,o.kt)("p",null,"All components in Moodle ",(0,o.kt)("em",{parentName:"p"},"must")," be available for use by all users. Accessibility needs to be part of the design of every new feature in Moodle."),(0,o.kt)("p",null,"For simple features with no requirement for an advanced user interface, simple adherence to standard HTML5 does provide an accessible feature. In this case, ",(0,o.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/wai-aria-practices/#no_aria_better_bad_aria"},"advice from W3C")," is not to use ARIA at all than to use it incorrectly."),(0,o.kt)("p",null,"Bootstrap and Bootstrap components ",(0,o.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/4.0/getting-started/accessibility/#color-contrast"},"do not support accessibility by default"),". All features implemented using Bootstrap components ",(0,o.kt)("em",{parentName:"p"},"must be"),' checked and enhanced where necessary. Moodle has created an "aria" JavaScript module which improves accessibility features of some default Bootstrap features, including menus.'),(0,o.kt)("h3",{id:"colours"},"Colours"),(0,o.kt)("p",null,"All text that is presented needs to be displayed in a colour with sufficient contrast to its background colour so that the text is legible for all users. The foreground and background colours should meet the ",(0,o.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html"},"WCAG requirement for contrast"),", which varies depending on the size of the text. This can be tested with the ",(0,o.kt)("a",{parentName:"p",href:"https://wave.webaim.org/"},"WebAIM Web Accessibility Evaluation Tool"),"."),(0,o.kt)("p",null,"It is worth noting that colour alone ",(0,o.kt)("strong",{parentName:"p"},"must not"),' be used to imply meaning. An example of a failure for this would be to display error messages in "red" with no other information to convey that this is an error message.'),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/WCAG21/#use-of-color"},"the W3C advice on the use of colour")," from WCAG 2.1 for more information."),(0,o.kt)("h3",{id:"icons"},"Icons"),(0,o.kt)("p",null,"Icons (Images) can be displayed in a variety of ways, and the correct use of icons will depend on the context in which they are used."),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/WCAG21/#text-alternatives"},"the WCAG 2.1 requirement for text alternatives")," for more information."),(0,o.kt)("h4",{id:"solitary-icons"},"Solitary Icons"),(0,o.kt)("p",null,"Icons displayed on their own, as part of a link or as informative content must include accessible text to convey the meaning of the icon. For an image tag, this can be the ",(0,o.kt)("inlineCode",{parentName:"p"},'"alt"')," attribute for the image tag. It can be valid to include both the ",(0,o.kt)("inlineCode",{parentName:"p"},'"alt"'),' attribute and the "title" attribute (shown when hovering with the mouse) so that all users can access the textual meaning of the icon.'),(0,o.kt)("h4",{id:"icons-and-text"},"Icons and Text"),(0,o.kt)("p",null,'When an icon is displayed immediately before or after some text that also describes the meaning of the icon, it is redundant to repeat the same text twice. In this case, it is correct to hide the icon from screen readers by setting the "role" attribute to "presentation" or hiding it with the "aria-hidden" attribute set to "true".'),(0,o.kt)("h4",{id:"multiple-icons"},"Multiple icons"),(0,o.kt)("p",null,"When multiple icons are displayed in a row as links, it is important that each icon is large enough and has sufficient space around it so the icon can be easily clicked with the mouse."),(0,o.kt)("p",null,"The minimum valid size for a link target is 44 by 44 pixels."),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/WCAG21/#target-size"},"the WCAG 2.1 requirement for target size")," for more information."),(0,o.kt)("h3",{id:"keyboard-support"},"Keyboard Support"),(0,o.kt)("p",null,"All components should be entirely operable through a keyboard-only interface."),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/WCAG21/#keyboard-accessible"},"the WCAG 2.1 requirement for keyboard accessibility")," for more information."),(0,o.kt)("p",null,"Some important things to consider is that all components should be focusable with the keyboard (available in the tab sequence), and should allow the focus to be moved away using only the keyboard."),(0,o.kt)("p",null,"The element that currently has focus should have a visual focus indicator. The W3C provide information on ",(0,o.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/wai-aria-practices-1.1/#kbd_focus_discernable_predictable"},"ARIA focus management")," as part of it's ARIA best practices."),(0,o.kt)("p",null,"In some cases, a single component can contain many smaller components. In order to not pollute the page tab sequence, the parent element can exist in the tab sequence once and should maintain focus within its smaller components with arrow key navigation (roving ",(0,o.kt)("inlineCode",{parentName:"p"},"tabindex")," or active descendant). The W3C provide information ",(0,o.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/wai-aria-practices-1.1/#kbd_general_within"},"ARIA keyboard navigation inside components")," as part of it's ARIA best practices."),(0,o.kt)("h3",{id:"forms"},"Forms"),(0,o.kt)("p",null,"Moodle forms created with the standard forms library are designed to be accessible. Any custom (for example javascript) form or custom form elements must also be accessible."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"All form elements must have a label"),(0,o.kt)("li",{parentName:"ul"},"The form must be able to be completed entirely with the keyboard"),(0,o.kt)("li",{parentName:"ul"},'Invalid entries in the form fields should be indicated with the "aria-invalid" attribute set to "true"'),(0,o.kt)("li",{parentName:"ul"},'Warning messages for invalid form fields should be associated with the invalid field using the "aria-describedby" attribute. See ',(0,o.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/WCAG21/#error-identification"},"the WCAG 2.1 success criteria for Error Identification")," for further information on this.")),(0,o.kt)("h3",{id:"presentation-only"},"Presentation Only"),(0,o.kt)("p",null,"Any component that contains no information or functionality that is not provided by other components on the page can be considered decorative only. Content that meets this description can be hidden from screen readers using a suitable technique (aria-hidden or presentation role)."),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/WCAG21/#dfn-pure-decoration"},"the WCAG 2.1 description of pure decoration")," for more information."),(0,o.kt)("h3",{id:"landmark-regions"},"Landmark regions"),(0,o.kt)("p",null,"The layout of each page of content should be separated into valid regions where each region has a unique label and the correct landmark role. This is typically done in the layout files of the theme."),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/wai-aria-practices-1.1/#aria_landmark"},"the ARIA best practice advice on landmarks")," for further information."),(0,o.kt)("h3",{id:"page-titles"},"Page Titles"),(0,o.kt)("p",null,"All pages should have a unique title that describes the current page."),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/WCAG21/#page-titled"},"the WCAG 2.1 success criteria for web page titles")," for further information."),(0,o.kt)("h3",{id:"advanced-ux-widgets"},"Advanced UX Widgets"),(0,o.kt)("p",null,'When it is determined that an advanced interface is required (typically one that relies on javascript), a minimum set of principles need to be applied to make sure that the feature "provides equal functionality and information to all people". Each use case is different, but a minimum set of things to be checked are:'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Does this component work entirely when accessed only via the keyboard?"),(0,o.kt)("li",{parentName:"ul"},"Does this component map to any widget from the ",(0,o.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/wai-aria-practices-1.1/"},"ARIA Authoring Practices"),' document and if so, does it implement all of the "Keyboard Interaction" and "WAI-ARIA Roles, States and Properties" listed for that widget?')),(0,o.kt)("h2",{id:"external-resources"},"External Resources"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.w3.org/WAI/standards-guidelines/"},"W3C Accessibility Standards Overview")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/wai-aria-1.1/"},"Accessible Rich Internet Applications (WAI-ARIA) 1.1")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/wai-aria-practices/"},"WAI-ARIA Authoring Practices 1.1")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/WCAG21/"},"Web Content Accessibility Guidelines (WCAG) 2.1")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/ATAG20/"},"Authoring Tool Accessibility Guidelines (ATAG) 2.0")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/UAAG20/"},"User Agent Accessibility Guidelines (UAAG) 2.0"))),(0,o.kt)("h2",{id:"accessibility-tools"},"Accessibility Tools"),(0,o.kt)("p",null,"Moodle officially supports the following screen reader/browser configurations:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Browsers:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Microsoft Edge, Jaws 15+ (Latest version recommended)"),(0,o.kt)("li",{parentName:"ul"},"Mozilla Firefox, NVDA 2014.1+ (Latest version recommended)"))),(0,o.kt)("li",{parentName:"ul"},"Screen readers:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.nvaccess.org/"},"NVDA Screen Reader")," (Windows)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://www.freedomscientific.com/"},"JAWS Screen Reader")," (Windows)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://www.chromevox.com/"},"Chromevox Screen Reader")," (Linux, Chrome OS, Windows, Mac OS X)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://help.gnome.org/users/orca/stable/"},"Orca Screen Reader")," (Linux)"))),(0,o.kt)("li",{parentName:"ul"},"Accessibility tools:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://wave.webaim.org/extension/"},"WebAIM Web Accessibility Evaluation Tool")," (Chrome, Firefox)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developers.google.com/web/tools/chrome-devtools/accessibility/reference"},"Chrome Accessibility Dev Tools")," (Chrome)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://www.w3.org/WAI/ER/tools/complete"},"W3C Accessibility Tool Listing"))))),(0,o.kt)("h2",{id:"international-legislation"},"International Legislation"),(0,o.kt)("p",null,"Moodle aims to comply with the following international legislation where possible."),(0,o.kt)("h3",{id:"usa"},"USA"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://www.section508.gov/"},"Section 508"))),(0,o.kt)("h3",{id:"uk"},"UK"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://www.legislation.gov.uk/ukpga/2010/15/contents"},"Equality Act 2010")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://www.equalityhumanrights.com/advice-and-guidance/public-sector-equality-duty/"},"Public sector equality duty")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://www.parliament.the-stationery-office.co.uk/pa/ld200001/ldbills/003/2001003.htm"},"SENDA - Special Educational Needs and Disability Act/Bill"))),(0,o.kt)("h3",{id:"germany"},"Germany"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://www.einfach-fuer-alle.de/artikel/bitv/"},"Barrierefreie Informationstechnik-Verordnung - BITV"))),(0,o.kt)("h3",{id:"france"},"France"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://references.modernisation.gouv.fr/rgaa-accessibilite/"},"R\xe9f\xe9rentiel G\xe9n\xe9ral d'Accessibilit\xe9 des Administrations - RGAA"))),(0,o.kt)("h3",{id:"european-union"},"European Union"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=COM:2015:0615:FIN"},"European Accessibility Act (Detailed proposal)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://ec.europa.eu/social/main.jsp?catId=1202"},"European Accessibility Act (Informational page)"))))}h.isMDXComponent=!0}}]);