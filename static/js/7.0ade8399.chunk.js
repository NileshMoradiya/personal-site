(this["webpackJsonppersonal-site"]=this["webpackJsonppersonal-site"]||[]).push([[7],{432:function(e,n,t){"use strict";function r(e){if(null==e)throw new TypeError("Cannot destructure undefined")}t.d(n,"a",(function(){return r}))},433:function(e,n,t){"use strict";var r=t(0),a=t(158),o=t(16),i=function(){var e=Object(o.f)().pathname;return Object(r.useEffect)((function(){window.scrollTo(0,0)}),[e]),null},c=t(24),l=t(1);n.a=function(e){var n=e.title,t=e.description,r=e.enableTitleTemplate,o=void 0===r||r,u=e.children;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(i,{}),Object(l.jsxs)(a.a,{titleTemplate:o?"%s | ".concat(c.a.fullName):n,defer:!1,children:[Object(l.jsx)("title",{children:n}),Object(l.jsx)("meta",{name:"description",content:t})]}),u]})}},450:function(e,n,t){"use strict";t.r(n);var r=t(432),a=t(13),o=t(235),i=t(157),c=t(0),l=t.n(c);function u(){return(u=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var s=/[\'\"]/,d={accesskey:"accessKey",allowfullscreen:"allowFullScreen",allowtransparency:"allowTransparency",autocomplete:"autoComplete",autofocus:"autoFocus",autoplay:"autoPlay",cellpadding:"cellPadding",cellspacing:"cellSpacing",charset:"charSet",class:"className",classid:"classId",colspan:"colSpan",contenteditable:"contentEditable",contextmenu:"contextMenu",crossorigin:"crossOrigin",enctype:"encType",for:"htmlFor",formaction:"formAction",formenctype:"formEncType",formmethod:"formMethod",formnovalidate:"formNoValidate",formtarget:"formTarget",frameborder:"frameBorder",hreflang:"hrefLang",inputmode:"inputMode",keyparams:"keyParams",keytype:"keyType",marginheight:"marginHeight",marginwidth:"marginWidth",maxlength:"maxLength",mediagroup:"mediaGroup",minlength:"minLength",novalidate:"noValidate",radiogroup:"radioGroup",readonly:"readOnly",rowspan:"rowSpan",spellcheck:"spellCheck",srcdoc:"srcDoc",srclang:"srcLang",srcset:"srcSet",tabindex:"tabIndex",usemap:"useMap"},p={amp:"&",apos:"'",gt:">",lt:"<",nbsp:"\xa0",quot:"\u201c"},f=["style","script"],h=/([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi,m=/mailto:/i,g=/\n{2,}$/,y=/^( *>[^\n]+(\n[^\n]+)*\n*)+\n{2,}/,v=/^ *> ?/gm,k=/^ {2,}\n/,b=/^(?:( *[-*_]) *){3,}(?:\n *)+\n/,I=/^\s*(`{3,}|~{3,}) *(\S+)? *\n([\s\S]+?)\s*\1 *(?:\n *)+\n?/,x=/^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/,j=/^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,w=/^(?:\n *)*\n/,O=/\r\n?/g,A=/^\[\^([^\]]+)](:.*)\n/,H=/^\[\^([^\]]+)]/,S=/\f/g,M=/^\s*?\[(x|\s)\]/,T=/^ *(#{1,6}) *([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,C=/^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/,E=/^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?([^>]*)\/{0}>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1)[\s\S])*?)<\/\1>\n*/i,G=/&([a-z]+);/g,L=/^<!--[\s\S]*?(?:-->)/,$=/^(data|aria|x)-[a-z_][a-z\d_.-]*$/,B=/^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i,z=/^\{.*\}$/,R=/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,W=/^<([^ >]+@[^ >]+)>/,X=/^<([^ >]+:\/[^ >]+)>/,N=/ *\n+$/,_=/(?:^|\n)( *)$/,D=/-([a-z])?/gi,P=/^(.*\|?.*)\n *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*)\n?/,U=/^((?:[^\n]|\n(?! *\n))+)(?:\n *)+\n/,F=/^\[([^\]]*)\]:\s*(\S+)\s*("([^"]*)")?/,V=/^!\[([^\]]*)\] ?\[([^\]]*)\]/,J=/^\[([^\]]*)\] ?\[([^\]]*)\]/,Z=/(\[|\])/g,q=/(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/,K=/\t/g,Q=/^ *\| */,Y=/(^ *\||\| *$)/g,ee=/ *$/,ne=/^ *:-+: *$/,te=/^ *:-+ *$/,re=/^ *-+: *$/,ae=/^([*_])\1((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1\1(?!\1)/,oe=/^([*_])((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1(?!\1|\w)/,ie=/^~~((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)~~/,ce=/^\\([^0-9A-Za-z\s])/,le=/^[\s\S]+?(?=[^0-9A-Z\s\u00c0-\uffff&;.()'"]|\d+\.|\n\n| {2,}\n|\w+:\S|$)/i,ue=/(^\n+|\n+$|\s+$)/g,se=/^([ \t]*)/,de=/\\([^0-9A-Z\s])/gi,pe=new RegExp("^( *)((?:[*+-]|\\d+\\.)) +"),fe=new RegExp("( *)((?:[*+-]|\\d+\\.)) +[^\\n]*(?:\\n(?!\\1(?:[*+-]|\\d+\\.) )[^\\n]*)*(\\n|$)","gm"),he=new RegExp("^( *)((?:[*+-]|\\d+\\.)) [\\s\\S]+?(?:\\n{2,}(?! )(?!\\1(?:[*+-]|\\d+\\.) (?!(?:[*+-]|\\d+\\.) ))\\n*|\\s*\\n*$)"),me="(?:\\[[^\\]]*\\]|[^\\[\\]]|\\](?=[^\\[]*\\]))*",ge=new RegExp("^\\[("+me+")\\]\\(\\s*<?((?:[^\\s\\\\]|\\\\.)*?)>?(?:\\s+['\"]([\\s\\S]*?)['\"])?\\s*\\)"),ye=new RegExp("^!\\[("+me+")\\]\\(\\s*<?((?:[^\\s\\\\]|\\\\.)*?)>?(?:\\s+['\"]([\\s\\S]*?)['\"])?\\s*\\)"),ve=[y,x,I,T,C,E,L,B,fe,he,P,U];function ke(e){return e.replace(/[\xc0\xc1\xc2\xc3\xc4\xc5\xe0\xe1\xe2\xe3\xe4\xe5\xe6\xc6]/g,"a").replace(/[\xe7\xc7]/g,"c").replace(/[\xf0\xd0]/g,"d").replace(/[\xc8\xc9\xca\xcb\xe9\xe8\xea\xeb]/g,"e").replace(/[\xcf\xef\xce\xee\xcd\xed\xcc\xec]/g,"i").replace(/[\xd1\xf1]/g,"n").replace(/[\xf8\xd8\u0153\u0152\xd5\xf5\xd4\xf4\xd3\xf3\xd2\xf2]/g,"o").replace(/[\xdc\xfc\xdb\xfb\xda\xfa\xd9\xf9]/g,"u").replace(/[\u0178\xff\xdd\xfd]/g,"y").replace(/[^a-z0-9- ]/gi,"").replace(/ /gi,"-").toLowerCase()}function be(e){return re.test(e)?"right":ne.test(e)?"center":te.test(e)?"left":null}function Ie(e,n,t){var r=t.inTable;t.inTable=!0;var a=n(e.trim(),t);t.inTable=r;var o=[[]];return a.forEach((function(e,n){"tableSeparator"===e.type?0!==n&&n!==a.length-1&&o.push([]):("text"!==e.type||null!=a[n+1]&&"tableSeparator"!==a[n+1].type||(e.content=e.content.replace(ee,"")),o[o.length-1].push(e))})),o}function xe(e,n,t){t.inline=!0;var r=Ie(e[1],n,t),a=e[2].replace(Y,"").split("|").map(be),o=function(e,n,t){return e.trim().split("\n").map((function(e){return Ie(e,n,t)}))}(e[3],n,t);return t.inline=!1,{align:a,cells:o,header:r,type:"table"}}function je(e,n){return null==e.align[n]?{}:{textAlign:e.align[n]}}function we(e){return function(n,t){return t.inline?e.exec(n):null}}function Oe(e){return function(n,t){return t.inline||t.simple?e.exec(n):null}}function Ae(e){return function(n,t){return t.inline||t.simple?null:e.exec(n)}}function He(e){return function(n){return e.exec(n)}}function Se(e){try{if(decodeURIComponent(e).replace(/[^A-Za-z0-9/:]/g,"").match(/^\s*(javascript|vbscript|data):/i))return null}catch(e){return null}return e}function Me(e){return e.replace(de,"$1")}function Te(e,n,t){var r=t.inline||!1,a=t.simple||!1;t.inline=!0,t.simple=!0;var o=e(n,t);return t.inline=r,t.simple=a,o}function Ce(e,n,t){var r=t.inline||!1,a=t.simple||!1;t.inline=!1,t.simple=!0;var o=e(n,t);return t.inline=r,t.simple=a,o}function Ee(e,n,t){return t.inline=!1,e(n+"\n\n",t)}var Ge,Le,$e=function(e,n,t){return{content:Te(n,e[1],t)}};function Be(){return{}}function ze(){return null}function Re(){return[].slice.call(arguments).filter(Boolean).join(" ")}function We(e,n,t){for(var r=e,a=n.split(".");a.length&&void 0!==(r=r[a[0]]);)a.shift();return r||t}function Xe(e,n){var t=We(n,e);return t?"function"==typeof t||"object"==typeof t&&"render"in t?t:We(n,e+".component",e):e}(Le=Ge||(Ge={}))[Le.MAX=0]="MAX",Le[Le.HIGH=1]="HIGH",Le[Le.MED=2]="MED",Le[Le.LOW=3]="LOW",Le[Le.MIN=4]="MIN";var Ne=function(e){var n=e.children,t=e.options,r=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n.indexOf(t=o[r])>=0||(a[t]=e[t]);return a}(e,["children","options"]);return l.a.cloneElement(function(e,n){void 0===n&&(n={}),n.overrides=n.overrides||{},n.slugify=n.slugify||ke,n.namedCodesToUnicode=n.namedCodesToUnicode?u({},p,n.namedCodesToUnicode):p;var t=n.createElement||l.a.createElement;function r(e,r){var a=We(n.overrides,e+".props",{});return t.apply(void 0,[Xe(e,n.overrides),u({},r,a,{className:Re(null==r?void 0:r.className,a.className)||void 0})].concat([].slice.call(arguments,2)))}function a(e){var t=!1;n.forceInline?t=!0:n.forceBlock||(t=!1===q.test(e));var a=re(te(t?e:e.replace(ue,"")+"\n\n",{inline:t}));if(null===n.wrapper)return a;var o,i=n.wrapper||(t?"span":"div");if(a.length>1||n.forceWrapper)o=a;else{if(1===a.length)return"string"==typeof(o=a[0])?r("span",{key:"outer"},o):o;o=null}return l.a.createElement(i,{key:"outer"},o)}function o(e){var n=e.match(h);return n?n.reduce((function(e,n,t){var r,o=n.indexOf("=");if(-1!==o){var i=(r=n.slice(0,o),-1!==r.indexOf("-")&&null===r.match($)&&(r=r.replace(D,(function(e,n){return n.toUpperCase()}))),r).trim(),c=function(e){return e?(s.test(e.charAt(0))&&(e=e.substr(1)),s.test(e.charAt(e.length-1))&&(e=e.substr(0,e.length-1)),e):""}(n.slice(o+1).trim()),u=d[i]||i,p=e[u]=function(e,n){return"style"===e?n.split(/;\s?/).reduce((function(e,n){var t=n.slice(0,n.indexOf(":"));return e[t.replace(/(-[a-z])/g,(function(e){return e[1].toUpperCase()}))]=n.slice(t.length+1).trim(),e}),{}):"href"===e?Se(n):(n.match(z)&&(n=n.slice(1,n.length-1)),"true"===n||"false"!==n&&n)}(i,c);"string"==typeof p&&(E.test(p)||B.test(p))&&(e[u]=l.a.cloneElement(a(p.trim()),{key:t}))}else"style"!==n&&(e[d[n]||n]=!0);return e}),{}):void 0}var i=[],c={},Y={blockQuote:{match:Ae(y),order:Ge.HIGH,parse:function(e,n,t){return{content:n(e[0].replace(v,""),t)}},react:function(e,n,t){return r("blockquote",{key:t.key},n(e.content,t))}},breakLine:{match:He(k),order:Ge.HIGH,parse:Be,react:function(e,n,t){return r("br",{key:t.key})}},breakThematic:{match:Ae(b),order:Ge.HIGH,parse:Be,react:function(e,n,t){return r("hr",{key:t.key})}},codeBlock:{match:Ae(x),order:Ge.MAX,parse:function(e){return{content:e[0].replace(/^ {4}/gm,"").replace(/\n+$/,""),lang:void 0}},react:function(e,n,t){return r("pre",{key:t.key},r("code",{className:e.lang?"lang-"+e.lang:""},e.content))}},codeFenced:{match:Ae(I),order:Ge.MAX,parse:function(e){return{content:e[3],lang:e[2]||void 0,type:"codeBlock"}}},codeInline:{match:Oe(j),order:Ge.LOW,parse:function(e){return{content:e[2]}},react:function(e,n,t){return r("code",{key:t.key},e.content)}},footnote:{match:Ae(A),order:Ge.MAX,parse:function(e){return i.push({footnote:e[2],identifier:e[1]}),{}},react:ze},footnoteReference:{match:we(H),order:Ge.HIGH,parse:function(e){return{content:e[1],target:"#"+n.slugify(e[1])}},react:function(e,n,t){return r("a",{key:t.key,href:Se(e.target)},r("sup",{key:t.key},e.content))}},gfmTask:{match:we(M),order:Ge.HIGH,parse:function(e){return{completed:"x"===e[1].toLowerCase()}},react:function(e,n,t){return r("input",{checked:e.completed,key:t.key,readOnly:!0,type:"checkbox"})}},heading:{match:Ae(T),order:Ge.HIGH,parse:function(e,t,r){return{content:Te(t,e[2],r),id:n.slugify(e[2]),level:e[1].length}},react:function(e,n,t){return e.tag="h"+e.level,r(e.tag,{id:e.id,key:t.key},n(e.content,t))}},headingSetext:{match:Ae(C),order:Ge.MAX,parse:function(e,n,t){return{content:Te(n,e[1],t),level:"="===e[2]?1:2,type:"heading"}}},htmlComment:{match:He(L),order:Ge.HIGH,parse:function(){return{}},react:ze},image:{match:Oe(ye),order:Ge.HIGH,parse:function(e){return{alt:e[1],target:Me(e[2]),title:e[3]}},react:function(e,n,t){return r("img",{key:t.key,alt:e.alt||void 0,title:e.title||void 0,src:Se(e.target)})}},link:{match:we(ge),order:Ge.LOW,parse:function(e,n,t){return{content:Ce(n,e[1],t),target:Me(e[2]),title:e[3]}},react:function(e,n,t){return r("a",{key:t.key,href:Se(e.target),title:e.title},n(e.content,t))}},linkAngleBraceStyleDetector:{match:we(X),order:Ge.MAX,parse:function(e){return{content:[{content:e[1],type:"text"}],target:e[1],type:"link"}}},linkBareUrlDetector:{match:function(e,n){return n.inAnchor?null:we(R)(e,n)},order:Ge.MAX,parse:function(e){return{content:[{content:e[1],type:"text"}],target:e[1],title:void 0,type:"link"}}},linkMailtoDetector:{match:we(W),order:Ge.MAX,parse:function(e){var n=e[1],t=e[1];return m.test(t)||(t="mailto:"+t),{content:[{content:n.replace("mailto:",""),type:"text"}],target:t,type:"link"}}},list:{match:function(e,n,t){var r=_.exec(t);return!r||!n._list&&n.inline?null:he.exec(e=r[1]+e)},order:Ge.HIGH,parse:function(e,n,t){var r=e[2],a=r.length>1,o=a?+r:void 0,i=e[0].replace(g,"\n").match(fe),c=!1;return{items:i.map((function(e,r){var a=pe.exec(e)[0].length,o=new RegExp("^ {1,"+a+"}","gm"),l=e.replace(o,"").replace(pe,""),u=r===i.length-1,s=-1!==l.indexOf("\n\n")||u&&c;c=s;var d,p=t.inline,f=t._list;t._list=!0,s?(t.inline=!1,d=l.replace(N,"\n\n")):(t.inline=!0,d=l.replace(N,""));var h=n(d,t);return t.inline=p,t._list=f,h})),ordered:a,start:o}},react:function(e,n,t){return r(e.ordered?"ol":"ul",{key:t.key,start:e.start},e.items.map((function(e,a){return r("li",{key:a},n(e,t))})))}},newlineCoalescer:{match:Ae(w),order:Ge.LOW,parse:Be,react:function(){return"\n"}},paragraph:{match:Ae(U),order:Ge.LOW,parse:$e,react:function(e,n,t){return r("p",{key:t.key},n(e.content,t))}},ref:{match:we(F),order:Ge.MAX,parse:function(e){return c[e[1]]={target:e[2],title:e[4]},{}},react:ze},refImage:{match:Oe(V),order:Ge.MAX,parse:function(e){return{alt:e[1]||void 0,ref:e[2]}},react:function(e,n,t){return r("img",{key:t.key,alt:e.alt,src:Se(c[e.ref].target),title:c[e.ref].title})}},refLink:{match:we(J),order:Ge.MAX,parse:function(e,n,t){return{content:n(e[1],t),fallbackContent:n(e[0].replace(Z,"\\$1"),t),ref:e[2]}},react:function(e,n,t){return c[e.ref]?r("a",{key:t.key,href:Se(c[e.ref].target),title:c[e.ref].title},n(e.content,t)):r("span",{key:t.key},n(e.fallbackContent,t))}},table:{match:Ae(P),order:Ge.HIGH,parse:xe,react:function(e,n,t){return r("table",{key:t.key},r("thead",null,r("tr",null,e.header.map((function(a,o){return r("th",{key:o,style:je(e,o)},n(a,t))})))),r("tbody",null,e.cells.map((function(a,o){return r("tr",{key:o},a.map((function(a,o){return r("td",{key:o,style:je(e,o)},n(a,t))})))}))))}},tableSeparator:{match:function(e,n){return n.inTable?Q.exec(e):null},order:Ge.HIGH,parse:function(){return{type:"tableSeparator"}},react:function(){return" | "}},text:{match:He(le),order:Ge.MIN,parse:function(e){return{content:e[0].replace(G,(function(e,t){return n.namedCodesToUnicode[t]?n.namedCodesToUnicode[t]:e}))}},react:function(e){return e.content}},textBolded:{match:Oe(ae),order:Ge.MED,parse:function(e,n,t){return{content:n(e[2],t)}},react:function(e,n,t){return r("strong",{key:t.key},n(e.content,t))}},textEmphasized:{match:Oe(oe),order:Ge.LOW,parse:function(e,n,t){return{content:n(e[2],t)}},react:function(e,n,t){return r("em",{key:t.key},n(e.content,t))}},textEscaped:{match:Oe(ce),order:Ge.HIGH,parse:function(e){return{content:e[1],type:"text"}}},textStrikethroughed:{match:Oe(ie),order:Ge.LOW,parse:$e,react:function(e,n,t){return r("del",{key:t.key},n(e.content,t))}}};!0!==n.disableParsingRawHTML&&(Y.htmlBlock={match:He(E),order:Ge.HIGH,parse:function(e,n,t){var r,a=e[3].match(se),i=new RegExp("^"+a[1],"gm"),c=e[3].replace(i,""),l=(r=c,ve.some((function(e){return e.test(r)}))?Ee:Te),u=e[1].toLowerCase(),s=-1!==f.indexOf(u);t.inAnchor=t.inAnchor||"a"===u;var d=s?e[3]:l(n,c,t);return t.inAnchor=!1,{attrs:o(e[2]),content:d,noInnerParse:s,tag:s?u:e[1]}},react:function(e,n,t){return r(e.tag,Object.assign({key:t.key},e.attrs),e.noInnerParse?e.content:n(e.content,t))}},Y.htmlSelfClosing={match:He(B),order:Ge.HIGH,parse:function(e){return{attrs:o(e[2]||""),tag:e[1]}},react:function(e,n,t){return r(e.tag,Object.assign({},e.attrs,{key:t.key}))}});var ee,ne,te=function(e){var n=Object.keys(e);function t(r,a){for(var o=[],i="";r;)for(var c=0;c<n.length;){var l=n[c],u=e[l],s=u.match(r,a,i);if(s){var d=s[0];r=r.substring(d.length);var p=u.parse(s,t,a);null==p.type&&(p.type=l),o.push(p),i=d;break}c++}return o}return n.sort((function(n,t){var r=e[n].order,a=e[t].order;return r!==a?r-a:n<t?-1:1})),function(e,n){return t(function(e){return e.replace(O,"\n").replace(S,"").replace(K,"    ")}(e),n)}}(Y),re=(ne=Y,ee=function(e,n,t){return ne[e.type].react(e,n,t)},function e(n,t){if(void 0===t&&(t={}),Array.isArray(n)){for(var r=t.key,a=[],o=!1,i=0;i<n.length;i++){t.key=i;var c=e(n[i],t),l="string"==typeof c;l&&o?a[a.length-1]+=c:a.push(c),o=l}return t.key=r,a}return ee(n,e,t)}),de=a(e);return i.length&&de.props.children.push(r("footer",{key:"footer"},i.map((function(e){return r("div",{id:n.slugify(e.identifier),key:e.identifier},e.identifier,re(te(e.footnote,{inline:!0})))})))),de}(n,t),r)},_e=t(108),De=t(29),Pe=t(1);var Ue={overrides:{h1:{component:function(e){var n;return Object(Pe.jsx)(Pe.Fragment,{children:Object(Pe.jsx)(De.a,{fontVariant:"titleLight",bold:!0,capitalized:!0,gutterBottom:!0,sx:{pb:2},children:null===(n=l.a.Children.toArray(e.children))||void 0===n?void 0:n.join(", ")},e.id)})}},h2:{component:function(e){return Object(Pe.jsx)(i.a,{variant:"h2",children:e.children})}},h3:{component:function(e){return Object(Pe.jsx)(i.a,{variant:"h3",children:e.children})}},h4:{component:function(e){return Object(Pe.jsx)(i.a,{variant:"h4",children:e.children})}},h5:{component:function(e){return Object(Pe.jsx)(i.a,{variant:"h5",children:e.children})}},h6:{component:function(e){return Object(Pe.jsx)(i.a,{variant:"h6",children:e.children})}},p:{component:function(e){return Object(Pe.jsx)(i.a,{paragraph:!0,gutterBottom:!0,sx:{pb:2},children:e.children})}},a:{component:function(e){var n,t,r;return Object(Pe.jsx)(_e.a,{to:null!==(n=e.href)&&void 0!==n?n:"/",label:null!==(t=e.title)&&void 0!==t?t:null===(r=l.a.Children.toArray(e.children))||void 0===r?void 0:r.join(", "),target:"_blank"})}},ul:{component:function(e){return Object(Pe.jsx)(o.a,Object(a.a)({component:"ul",sx:{marginBottom:4}},e))}},li:{component:function(e){return Object(Pe.jsx)(o.a,{component:"li",sx:{mt:1},children:Object(Pe.jsx)(i.a,Object(a.a)({variant:"body1"},e))})}}}};function Fe(e){return Object(Pe.jsx)(Ne,Object(a.a)({options:Ue},e))}var Ve=t(159),Je=t(433),Ze="# Intro\r\n\r\nI am a technical architect/software engineer, tech buff and sportsperson. I am particularly interested in works that touch cutting edge technology and actively looking to participate in projects that contribute to health and safety. If you think I can be helpful to you or would like to catch up, please feel free to get in touch.\r\n\r\n# Currently\r\n\r\nCurrently, I work at [IMRIEL](https://imriel.com) where we build and provide services to various but primarily to the real estate industry for clients such as [CBRE](https://cbre.com), [Cushman & Wakefield](www.cushmanwakefield.com) and actively expanding the portfolio. At IMRIEL, I have learned how to build teams, manage people, shape culture and develop relationships with customers.\r\n\r\n# Some history\r\n\r\n- My parents were farmers and lived mostly in the rural part of [Gujarat, India](https://www.google.com/maps/place/Gujarat,+India). They've taken the bold decision to put me in a school in a nearby town [Bhavnagar](https://www.google.com/maps/place/Bhavnagar,+Gujarat,+India) which is located 75 km from home when I was 3.\r\n- At 16, we moved to Surat city and where I completed my higher secondary study in the Science stream.\r\n- At 18, I moved to a small village called [Vasad](https://www.google.com/maps/place/Vasad,+Gujarat,+India) and started my Bachelor's of Engineering in Information & Technology stream at [SVIT](http://svitvasad.ac.in/).\r\n- At 19, I've got my first computer and my passion for programming begun.\r\n- At 22, I graduated and started my career with [PROMACT](https://promactinfo.com/).\r\n\r\nAsk me in person for other stories that I'm afraid to share with the internet.\r\n\r\n# I like\r\n\r\n- Running\r\n- Cold weather\r\n- MTB\r\n- Driving anything and everything\r\n- Travelling and Networking\r\n- Comics(specially multiverse)\r\n- Space & ET\r\n\r\n# Travel / Geography\r\n\r\n- I've been to many places, some of which I have forgotten, and many of which I would like to revisit.\r\n- In 2012, I visited: Agra, Dharamshala.\r\n- In 2014, I visited: Jodhpur and Jaisalmer.\r\n- In 2015, I visited: Mumbai, Pune, Hyderabad and Bangalore.\r\n- In 2016, I visited: Goa, Udaipur, Jaipur, Delhi, Punjab.\r\n- In 2017, I visited: London, Alappuzha, Kochi.\r\n- In 2018, I visited: Gangtok.\r\n- In 2019, I visited: Ooty.\r\n- In 2020, I barely travelled. mostly I stayed at home at Surat.\r\n- In 2021, I hope to start travelling again.\r\n\r\n# Fun facts\r\n\r\n- I can't locate every country on a map.\r\n- I can bring my locked hands from back to front.\r\n\r\n# I dream of\r\n\r\n- always finding inspiration.\r\n- enabling a brighter future.\r\n- doing better.\r\n- you not checking the commit history for earlier drafts of this file.\r\n- green and carbon-free cities.\r\n",qe=Ze.split(/\s+/).map((function(e){return e.replace(/\W/g,"")})).filter((function(e){return e.length})).length;n.default=function(e){return Object(r.a)(e),Object(Pe.jsx)(Pe.Fragment,{children:Object(Pe.jsx)(Je.a,{title:"About",description:"About",children:Object(Pe.jsxs)(Ve.b,{header:"About",subHeader:"(in about ".concat(qe," words)"),children:[Object(Pe.jsx)(Fe,{children:Ze}),Object(Pe.jsx)(i.a,{color:"text.disabled",variant:"body2",children:"And more..."})]})})})}}}]);
//# sourceMappingURL=7.0ade8399.chunk.js.map