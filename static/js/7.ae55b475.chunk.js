(this["webpackJsonppersonal-site"]=this["webpackJsonppersonal-site"]||[]).push([[7],{437:function(e,t,n){"use strict";var a=n(0),c=n(166),r=n(16),s=function(){var e=Object(r.e)().pathname;return Object(a.useEffect)((function(){window.scrollTo(0,0)}),[e]),null},i=n(25),l=n(1);t.a=function(e){var t=e.title,n=e.description,a=e.enableTitleTemplate,r=void 0===a||a,j=e.children;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(s,{}),Object(l.jsxs)(c.a,{titleTemplate:r?"%s | ".concat(i.a.fullName):t,defer:!1,children:[Object(l.jsx)("title",{children:t}),Object(l.jsx)("meta",{name:"description",content:n})]}),j]})}},439:function(e,t,n){"use strict";n(0);var a=n(236),c=n(30),r=n(1);t.a=function(e){var t=e.title,n=e.children,s=e.id;return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)(a.a,{spacing:2,id:s,sx:{width:"100%"},children:["string"===typeof t&&Object(r.jsx)(c.a,{bold:!0,capitalized:!0,gutterBottom:!0,variant:"body1",spaced:!0,children:t}),"string"!==typeof t&&Object(r.jsx)(r.Fragment,{children:t}),n]})})}},466:function(e,t,n){"use strict";n.r(t);var a=n(436),c=n(236),r=n(238),s=n(0),i=n(165),l=n(437),j=n(4),u=n(439),o=n(1),b=function(e){return Object(o.jsx)(u.a,Object(j.a)({},e))},d=n(473),O=n(474),f=n(394),h=n(475),x=n(476),p=n(477),m=n(113),v=function(e){var t=e.label,n=e.link,a=e.value,c=e.format,r=void 0===c?function(e){return e}:c;return Object(o.jsxs)(d.a,{children:[Object(o.jsx)(O.a,{sx:{width:"50%"},children:t}),Object(o.jsx)(O.a,{sx:{width:"50%"},children:n?Object(o.jsx)(m.a,{to:n,label:r(a)||a}):r(a)||Object(o.jsx)(f.a,{size:16})})]})},y=function(e){var t=e.stats;return Object(o.jsx)(h.a,{children:Object(o.jsx)(x.a,{children:Object(o.jsx)(p.a,{children:t.map((function(e){return Object(o.jsx)(v,{format:e.format,label:e.label,link:e.link,value:e.value},e.label)}))})})})},g=n(15),k=function(e){var t=e.birthDate,n=Object(s.useState)(),a=Object(g.a)(n,2),c=a[0],r=a[1];return Object(s.useEffect)((function(){var e=setInterval((function(){return function(){var e=t.getTime();r(((Date.now()-e)/31556925190.079998).toFixed(11))}()}),25);return function(){clearInterval(e)}}),[]),Object(o.jsx)(o.Fragment,{children:c})},w=n(464),F=n(468),T=Intl.DateTimeFormat().resolvedOptions().timeZone,S=[{key:"age",label:"Current age",value:Object(o.jsx)(k,{birthDate:new Date("1990-10-21T12:05:00")})},{key:"location",label:"Current city",value:"Surat, Gujarat, India"}],D=[{label:"Last updated at",key:"pushed_at",format:function(e){return e?Object(w.a)((t=e,Object(F.a)(t,T)),"MMM do, yyyy HH:mm:ss"):e;var t}}],I=function(){return Object(o.jsx)(b,{title:"Some stats about me",children:Object(o.jsx)(y,{stats:S})})},M=n(68),C=n.n(M),E=n(90),z=function(){var e=Object(s.useState)(D),t=Object(g.a)(e,2),n=t[0],a=t[1],c=Object(s.useCallback)(Object(E.a)(C.a.mark((function e(){var t,n;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.github.com/repos/NileshMoradiya/personal-site",{cache:"reload"});case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,a(D.map((function(e){return Object(j.a)(Object(j.a)({},e),{},{value:Object.keys(n).includes(e.key)?n[e.key]:e.value})})));case 7:case"end":return e.stop()}}),e)}))),[]);return Object(s.useEffect)((function(){c()}),[c]),Object(o.jsx)(b,{title:"Some stats about this site",children:Object(o.jsx)(y,{stats:n})})},H=[Object(o.jsx)(I,{},"personal-stats"),Object(o.jsx)(z,{},"site-stats")];t.default=function(e){Object(a.a)(e);var t="Stats";return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(l.a,{title:t,description:t,children:Object(o.jsx)(i.b,{header:t,children:Object(o.jsx)(c.a,{spacing:2,children:H.map((function(e,t){return Object(o.jsx)(r.a,{display:"flex",pb:2,children:e},"stats-section-".concat(t))}))})})})})}}}]);
//# sourceMappingURL=7.ae55b475.chunk.js.map