_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[13],{XCPh:function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSG",(function(){return o}));var c=n("nKUr"),a=n("4n/W"),r=n("PFpD"),i=n("YAif"),o=!0;t.default=function(e){var t=e.fileList;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(r.a,{seoTitle:"\uac1c\uc778\uc801\uc778 \uc815\ub9ac\ub178\ud2b8",title:"\uc815\ub9ac\ub178\ud2b8"}),Object(c.jsx)(a.a,{title:"\uc815\ub9ac\ub178\ud2b8",description:"\uacf5\ubd80\ud55c \uac83\ub4e4 \uc815\ub9ac\ud55c \ud3f4\ub354"}),Object(c.jsx)(i.a,{title:"\uc815\ub9ac\ub178\ud2b8",fileList:t,backPath:"/",backTitle:"Home"})]})}},YAif:function(e,t,n){"use strict";var c=n("nKUr"),a=n("nFZA"),r=n.n(a),i=n("ODXe"),o=n("YFqc"),s=n.n(o),l=n("7Cbv"),u=n("wHSu"),f=n("IP2g"),d=n("nOHt"),h=n("8tEE"),p=n("BYQw"),j=n.n(p),b=function(e){var t=e.filename,n=e.title,a=Object(d.useRouter)(),r=t.split("."),o=Object(i.a)(r,2),l=o[0],p=o[1];return Object(c.jsx)("li",{children:Object(c.jsx)(s.a,{href:"".concat(a.asPath,"/").concat(l),children:Object(c.jsxs)("a",{className:j.a.link,children:[Object(c.jsx)(f.a,{icon:p?h.f:u.d,className:j.a.icon}),Object(c.jsx)("span",{className:j.a.title,children:n})]})})})},v=n("8sXj"),O=n.n(v),m=function(e){var t=e.fileList,n=e.backPath,a=e.backTitle;return Object(c.jsxs)("ul",{className:O.a.container,children:[Object(c.jsx)("li",{children:Object(c.jsx)(s.a,{href:n,children:Object(c.jsxs)("a",{className:j.a.link,children:[Object(c.jsx)(f.a,{icon:u.e,className:j.a.icon}),Object(c.jsx)("span",{className:j.a.title,children:a})]})})}),t.map((function(e){var t=Object(i.a)(e,2),n=t[0],a=t[1];return Object(c.jsx)(b,{filename:n,title:a},Object(l.a)())}))]})},x=function(e){var t=e.title,n=e.fileList,a=e.backPath,i=e.backTitle;return Object(c.jsx)("section",{className:r.a.container,children:Object(c.jsxs)("div",{className:r.a.front,children:[Object(c.jsx)("h2",{className:r.a.hide,children:t}),Object(c.jsx)(m,{fileList:n,backPath:a,backTitle:i})]})})};t.a=x},YFqc:function(e,t,n){e.exports=n("cTJO")},Zttu:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts",function(){return n("XCPh")}])},cTJO:function(e,t,n){"use strict";var c=n("zoAU"),a=n("7KCV");t.__esModule=!0,t.default=void 0;var r,i=a(n("q1tI")),o=n("elyg"),s=n("nOHt"),l=new Map,u=window.IntersectionObserver,f={};var d=function(e,t){var n=r||(u?r=new u((function(e){e.forEach((function(e){if(l.has(e.target)){var t=l.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),l.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return n?(n.observe(e),l.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}l.delete(e)}):function(){}};function h(e,t,n,c){(0,o.isLocalURL)(t)&&(e.prefetch(t,n,c).catch((function(e){0})),f[t+"%"+n]=!0)}var p=function(e){var t=!1!==e.prefetch,n=(0,s.useRouter)(),a=n&&n.pathname||"/",r=i.default.useMemo((function(){var t=(0,o.resolveHref)(a,e.href,!0),n=c(t,2),r=n[0],i=n[1];return{href:r,as:e.as?(0,o.resolveHref)(a,e.as):i||r}}),[a,e.href,e.as]),l=r.href,p=r.as,j=e.children,b=e.replace,v=e.shallow,O=e.scroll,m=e.locale;"string"===typeof j&&(j=i.default.createElement("a",null,j));var x=i.Children.only(j),w=x&&"object"===typeof x&&x.ref,y=i.default.useRef(),N={ref:i.default.useCallback((function(e){(y.current&&(y.current(),y.current=void 0),t&&u&&e&&e.tagName&&(0,o.isLocalURL)(l))&&(f[l+"%"+p]||(y.current=d(e,(function(){h(n,l,p,{locale:"undefined"!==typeof m?m:n&&n.locale})}))));w&&("function"===typeof w?w(e):"object"===typeof w&&(w.current=e))}),[t,w,l,p,n,m]),onClick:function(e){x.props&&"function"===typeof x.props.onClick&&x.props.onClick(e),e.defaultPrevented||function(e,t,n,c,a,r,i,s){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,o.isLocalURL)(n))&&(e.preventDefault(),null==i&&(i=c.indexOf("#")<0),t[a?"replace":"push"](n,c,{shallow:r,locale:s}).then((function(e){e&&i&&(window.scrollTo(0,0),document.body.focus())})))}(e,n,l,p,b,v,O,m)}};return t&&(N.onMouseEnter=function(e){(0,o.isLocalURL)(l)&&(x.props&&"function"===typeof x.props.onMouseEnter&&x.props.onMouseEnter(e),h(n,l,p,{priority:!0}))}),(e.passHref||"a"===x.type&&!("href"in x.props))&&(N.href=(0,o.addBasePath)((0,o.addLocale)(p,"undefined"!==typeof m?m:n&&n.locale,n&&n.defaultLocale))),i.default.cloneElement(x,N)};t.default=p}},[["Zttu",0,1,5,8,7,2,3,6,4]]]);