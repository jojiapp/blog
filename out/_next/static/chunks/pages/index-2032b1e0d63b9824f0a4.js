_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[12],{"/EDR":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("23aj")}])},"/GRZ":function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},"23aj":function(e,t,n){"use strict";n.r(t);var c=n("nKUr"),a=n("PFpD"),s=n("4n/W"),r=n("q1tI"),i=n("7Cbv"),o=n("gjfX"),l=n.n(o),j=n("ODXe"),u=n("IP2g"),b=n("2Cs0"),f=n("8tEE"),d=n("Aofc"),p=n.n(d),h=function(e){var t=e.lang,n=Object(r.useCallback)((function(e){switch(e){case"HTML":return[f.c,"#f6ad55"];case"CSS":return[f.a,"#4299e1"];case"Javascript":return[f.e,"#f6e05e"];case"React":return[f.h,"#90cdf4"];case"Java":return[f.d,"#805ad5"];case"Python":return[f.g,"#f6e05e"];default:return[b.faEyeSlash,"#1a1a1a"]}}),[])(t),a=Object(j.a)(n,2),s=a[0],i=a[1];return Object(c.jsxs)("li",{className:p.a.container,children:[Object(c.jsx)(u.a,{icon:s,className:p.a.icon,style:{color:i}}),Object(c.jsx)("span",{className:p.a.lang,children:t})]})},O=new Map;O.set("front-end",["HTML","CSS","Javascript","React","NextJS"]),O.set("back-end",["Java","Python"]);var x=function(){var e=Object(r.useState)("Back-end"),t=e[0],n=e[1],a=Object(r.useState)(O.get("back-end")),s=a[0],o=a[1],j=Object(r.useCallback)((function(e){var t=e.target.innerText;n(t);var c=O.get(t.toLowerCase());o(c)}),[]);return Object(c.jsx)("section",{className:l.a.container,children:Object(c.jsxs)("div",{className:l.a.front,children:[Object(c.jsxs)("div",{className:l.a.info,children:[Object(c.jsx)("h2",{className:l.a.title,children:"About"}),Object(c.jsx)("p",{className:l.a.description,children:"\uc77c\ub2e8 \uc5ec\uae30\uc5d0 \ub098\ub97c \uc18c\uac1c\ud558\uae34 \ud560\uac74\ub370. \uadf8\uac8c \uc544\uc9c1\uc740 \uc544\ub2c8\uc57c"})]}),Object(c.jsxs)("div",{className:l.a.programming,children:[Object(c.jsxs)("ul",{className:l.a.menuList,children:[Object(c.jsx)("li",{children:Object(c.jsx)("button",{onClick:j,children:"Front-end"})}),Object(c.jsx)("li",{children:Object(c.jsx)("button",{onClick:j,children:"Back-end"})})]}),Object(c.jsx)("h3",{className:l.a.title,children:t}),Object(c.jsx)("ul",{className:l.a.programmingList,children:s.map((function(e){return Object(c.jsx)(h,{lang:e},Object(i.a)())}))})]})]})})},m=n("lNuq"),N=n.n(m),v=function(e){var t=e.title,n=e.onClick;return Object(c.jsx)("li",{className:N.a.portfolioItem,children:Object(c.jsx)("button",{onClick:n,children:t})})},g=n("iWdK"),y=n.n(g),C=new Map;C.set("D",{title:"D",description:"\uc5ec\uae30\uc5d0 D\uc758 \ud504\ub85c\uc81d\ud2b8 \uc124\uba85\uc774 \ub4e4\uc5b4\uac00\uaca0\uc9c0",githubUrl:"#",siteUrl:"#"}),C.set("E",{title:"E",description:"\uc5ec\uae30\uc5d0 E\uc758 \ud504\ub85c\uc81d\ud2b8 \uc124\uba85\uc774 \ub4e4\uc5b4\uac00\uaca0\uc9c0",githubUrl:"#",siteUrl:"#"}),C.set("M",{title:"M",description:"\uc5ec\uae30\uc5d0 M \ud504\ub85c\uc81d\ud2b8 \uc124\uba85\uc774 \ub4e4\uc5b4\uac00\uaca0\uc9c0",githubUrl:"#",siteUrl:"#"}),C.set("O",{title:"O",description:"\uc5ec\uae30\uc5d0 O\uc758 \ud504\ub85c\uc81d\ud2b8 \uc124\uba85\uc774 \ub4e4\uc5b4\uac00\uaca0\uc9c0",githubUrl:"#",siteUrl:"#"});var k=function(){var e=Object(r.useState)(C.get("D")),t=e[0],n=e[1],a=Object(r.useCallback)((function(e){var t=e.target.innerText;n(C.get(t))}),[]);return Object(c.jsx)("section",{className:y.a.container,children:Object(c.jsxs)("div",{className:y.a.front,children:[Object(c.jsxs)("div",{className:y.a.portfolioListInfo,children:[Object(c.jsx)("h2",{className:y.a.title,children:"Portfolio"}),Object(c.jsx)("ul",{className:y.a.portfolioList,children:Array.from(C.keys()).map((function(e){return Object(c.jsx)(v,{title:e,onClick:a},Object(i.a)())}))})]}),Object(c.jsxs)("div",{className:y.a.portfolio,children:[Object(c.jsxs)("div",{className:y.a.info,children:[Object(c.jsx)("h3",{className:y.a.title,children:t.title}),Object(c.jsx)("p",{className:y.a.description,children:t.description})]}),Object(c.jsx)("div",{className:y.a.linkWrap,children:Object(c.jsxs)("div",{className:y.a.linkBox,children:[Object(c.jsx)("a",{href:t.siteUrl,className:y.a.site,children:Object(c.jsxs)("span",{children:["Go to ",t.title]})}),Object(c.jsxs)("a",{href:t.githubUrl,className:y.a.github,children:[Object(c.jsx)(u.a,{icon:f.b,className:y.a.icon}),Object(c.jsx)("span",{children:"Github"})]})]})})]})]})})};t.default=function(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(a.a,{seoTitle:"\uc6f9 \ud504\ub85c\uadf8\ub798\uba38 \uc900\ube44\uc0dd\uc758 \uac1c\uc778\ube14\ub85c\uadf8",title:"Home"}),Object(c.jsx)(s.a,{title:"Simple is Best",description:"\uc2e0\uc774 \uc788\ub294\uc9c0 \uc5c6\ub294\uc9c0\ub294 \uc54c \uc218 \uc5c6\uc9c0\ub9cc, \uc2e0\uc774 \uc5c6\ub2e4\uace0 \ubbff\ub294 \uc0ac\ub78c\uc5d0\uac8c \uc2e0\uc774 \uc5c6\ub294 \uac83\uc740 \ud655\uc2e4\ud558\ub2e4."}),Object(c.jsx)(x,{}),Object(c.jsx)(k,{})]})}},"2Cs0":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var c=[],a="M634 471L36 3.51A16 16 0 0 0 13.51 6l-10 12.49A16 16 0 0 0 6 41l598 467.49a16 16 0 0 0 22.49-2.49l10-12.49A16 16 0 0 0 634 471zM296.79 146.47l134.79 105.38C429.36 191.91 380.48 144 320 144a112.26 112.26 0 0 0-23.21 2.47zm46.42 219.07L208.42 260.16C210.65 320.09 259.53 368 320 368a113 113 0 0 0 23.21-2.46zM320 112c98.65 0 189.09 55 237.93 144a285.53 285.53 0 0 1-44 60.2l37.74 29.5a333.7 333.7 0 0 0 52.9-75.11 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64c-36.7 0-71.71 7-104.63 18.81l46.41 36.29c18.94-4.3 38.34-7.1 58.22-7.1zm0 288c-98.65 0-189.08-55-237.93-144a285.47 285.47 0 0 1 44.05-60.19l-37.74-29.5a333.6 333.6 0 0 0-52.89 75.1 32.35 32.35 0 0 0 0 29.19C89.72 376.41 197.08 448 320 448c36.7 0 71.71-7.05 104.63-18.81l-46.41-36.28C359.28 397.2 339.89 400 320 400z";t.definition={prefix:"far",iconName:"eye-slash",icon:[640,512,c,"f070",a]},t.faEyeSlash=t.definition,t.prefix="far",t.iconName="eye-slash",t.width=640,t.height=512,t.ligatures=c,t.unicode="f070",t.svgPathData=a},"7eYB":function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,c=new Array(t);n<t;n++)c[n]=e[n];return c}},"C+bE":function(e,t){function n(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},KckH:function(e,t,n){var c=n("7eYB");e.exports=function(e,t){if(e){if("string"===typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(e,t):void 0}}},Qetd:function(e,t,n){"use strict";var c=Object.assign.bind(Object);e.exports=c,e.exports.default=e.exports},i2R6:function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var c=t[n];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(e,c.key,c)}}e.exports=function(e,t,c){return t&&n(e.prototype,t),c&&n(e,c),e}},qhzo:function(e,t){function n(t,c){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,c)}e.exports=n}},[["/EDR",0,1,5,7,3,6,4]]]);