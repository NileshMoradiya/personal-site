(this["webpackJsonppersonal-site"]=this["webpackJsonppersonal-site"]||[]).push([[6],{184:function(t,e,n){"use strict";var a=n(0),c=n(187),r=n(16),i=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_GA_TRACKING_ID:"G-QED3T3B9VY"}),s=i.NODE_ENV,j=i.REACT_APP_GA_TRACKING_ID;"production"===s&&j&&c.a.initialize(j);var u=function(){var t=Object(r.f)().pathname;return Object(a.useEffect)((function(){"production"===s&&(c.a.set({page:t}),c.a.pageview(t))}),[t]),null},l=n(83),o=function(){var t=Object(r.f)().pathname;return Object(a.useEffect)((function(){window.scrollTo(0,0)}),[t]),null},b=n(1);e.a=function(t){var e=t.title,n=t.description,a=t.children;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(u,{}),Object(b.jsx)(o,{}),Object(b.jsxs)(l.a,{titleTemplate:"%s | Nilesh Moradiya",defer:!1,children:[Object(b.jsx)("title",{children:e}),Object(b.jsx)("meta",{name:"description",content:n})]}),a]})}},188:function(t,e,n){"use strict";n(0);var a=n(135),c=n(25),r=n(1);e.a=function(t){var e=t.title,n=t.children,i=t.id;return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)(a.a,{spacing:2,id:i,children:["string"===typeof e&&Object(r.jsx)(c.a,{bold:!0,capitalized:!0,gutterBottom:!0,variant:"body1",spaced:!0,children:e}),"string"!==typeof e&&Object(r.jsx)(r.Fragment,{children:e}),n]})})}},205:function(t,e,n){"use strict";n.r(e);var a=n(185),c=n(135),r=n(108),i=n(0),s=n(63),j=n(184),u=n(14),l=n(188),o=n(1),b=function(t){return Object(o.jsx)(l.a,Object(u.a)({},t))},O=n(208),d=n(209),f=n(210),h=n(211),p=n(212),x=function(t){var e=t.label,n=t.link,a=t.value,c=t.format,r=void 0===c?function(t){return t}:c;return Object(o.jsxs)(O.a,{children:[Object(o.jsx)(d.a,{children:e}),Object(o.jsx)(d.a,{children:n?Object(o.jsx)("a",{href:n,children:r(a)}):r(a)})]})},v=function(t){var e=t.stats;return Object(o.jsx)(f.a,{children:Object(o.jsx)(h.a,{width:"600px",children:Object(o.jsx)(p.a,{children:e.map((function(t){return Object(o.jsx)(x,{format:t.format,label:t.label,link:t.link,value:t.value},t.label)}))})})})},m=n(13),_=function(t){var e=t.birthDate,n=Object(i.useState)(),a=Object(m.a)(n,2),c=a[0],r=a[1];return Object(i.useEffect)((function(){var t=setInterval((function(){return function(){var t=e.getTime();r(((Date.now()-t)/31556925190.079998).toFixed(11))}()}),25);return function(){clearInterval(t)}}),[]),Object(o.jsx)(o.Fragment,{children:c})},y=n(203),T=n(206),g=Intl.DateTimeFormat().resolvedOptions().timeZone,E=[{key:"age",label:"Current age",value:Object(o.jsx)(_,{birthDate:new Date("1990-10-21T12:05:00")})},{key:"location",label:"Current city",value:"Surat, Gujarat, India"}],S=[{label:"Last updated at",key:"pushed_at",format:function(t){return t?Object(y.a)((e=t,Object(T.a)(e,g)),"MMM do, yyyy HH:mm:ss"):t;var e}}],k=function(){return Object(o.jsx)(b,{title:"Some stats about me",children:Object(o.jsx)(v,{stats:E})})},D=n(193),C=n.n(D),w=n(195),A=function(){var t=Object(i.useState)(S),e=Object(m.a)(t,2),n=e[0],a=e[1],c=Object(i.useCallback)(Object(w.a)(C.a.mark((function t(){var e,n;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.github.com/repos/NileshMoradiya/personal-site");case 2:return e=t.sent,t.next=5,e.json();case 5:n=t.sent,a(S.map((function(t){return Object(u.a)(Object(u.a)({},t),{},{value:Object.keys(n).includes(t.key)?n[t.key]:t.value})})));case 7:case"end":return t.stop()}}),t)}))),[]);return Object(i.useEffect)((function(){c()}),[c]),Object(o.jsx)(b,{title:"Some stats about this site",children:Object(o.jsx)(v,{stats:n})})},F=[Object(o.jsx)(k,{},"personal-stats"),Object(o.jsx)(A,{},"site-stats")];e.default=function(t){Object(a.a)(t);var e="Stats";return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(j.a,{title:e,description:e,children:Object(o.jsx)(s.b,{header:e,subHeader:e,children:Object(o.jsx)(c.a,{spacing:2,children:F.map((function(t,e){return Object(o.jsx)(r.a,{display:"flex",pb:2,children:t},"stats-section-".concat(e))}))})})})})}}}]);
//# sourceMappingURL=6.501a1877.chunk.js.map