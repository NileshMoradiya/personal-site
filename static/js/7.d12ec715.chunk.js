(this["webpackJsonppersonal-site"]=this["webpackJsonppersonal-site"]||[]).push([[7],{440:function(e,t,i){"use strict";var n=i(0),c=i(172),a=i(16),r=function(){var e=Object(a.e)().pathname;return Object(n.useEffect)((function(){window.scrollTo(0,0)}),[e]),null},o=i(26),s=i(1);t.a=function(e){var t=e.title,i=e.description,n=e.enableTitleTemplate,a=void 0===n||n,l=e.children;return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(r,{}),Object(s.jsxs)(c.a,{titleTemplate:a?"%s | ".concat(o.a.fullName):t,defer:!1,children:[Object(s.jsx)("title",{children:t}),Object(s.jsx)("meta",{name:"description",content:i})]}),l]})}},442:function(e,t,i){"use strict";i(0);var n=i(389),c=i(31),a=i(1);t.a=function(e){var t=e.title,i=e.children,r=e.id;return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)(n.a,{spacing:2,id:r,sx:{width:"100%"},children:["string"===typeof t&&Object(a.jsx)(c.a,{bold:!0,capitalized:!0,gutterBottom:!0,variant:"body1",spaced:!0,children:t}),"string"!==typeof t&&Object(a.jsx)(a.Fragment,{children:t}),i]})})}},471:function(e,t,i){"use strict";i.r(t);var n=i(439),c=i(117),a=i(4),r=[{name:"AZ-204: Azure Developer Associate",issuer:"Microsoft",issuedOn:"Feb 2021",verificationLink:"https://www.youracclaim.com/badges/2d74d3fe-40bc-4062-a463-a06dfac18ff9"},{name:"Azure Solutions Architect Expert",issuer:"Microsoft",issuedOn:"July 2020",verificationLink:"https://www.youracclaim.com/badges/b3be7518-85cf-4008-bd1d-ab818b9f33ad"},{name:"AZ-301: Azure Architect Design",issuer:"Microsoft",issuedOn:"July 2020",verificationLink:"https://www.youracclaim.com/badges/6118e86e-0c1f-43e3-a017-34379741dd50"},{name:"AZ-300: Azure Architect Technologies",issuer:"Microsoft",issuedOn:"July 2020",verificationLink:"https://www.youracclaim.com/badges/181b7c56-c059-4fdd-b000-e7024dcf2f7a"},{name:"Certified ScrumMaster (CSM)",issuer:"Scrum Alliance",issuedOn:"November 2019"},{name:" Developing ASP.NET MVC Web Applications",issuer:"Microsoft",issuedOn:"September 2017",verificationLink:"https://www.youracclaim.com/badges/329a885a-1802-45e3-9b6c-970ac616348e"}],o=i(389),s=i(0),l=i(118),d=i(31),b=i(450),j=i.n(b),u=i(1),p=function(e){var t=e.name,i=e.issuer,n=e.issuedOn,a=e.verificationLink;return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)(c.a,{children:[a&&Object(u.jsxs)(o.a,{direction:"row",alignItems:"center",spacing:1,children:[Object(u.jsx)(d.a,{fontVariant:"titleLight",capitalized:!0,children:t}),Object(u.jsx)(l.a,{to:a,label:t,target:"_blank",children:Object(u.jsx)(j.a,{sx:{color:"green"}})})]}),!a&&Object(u.jsx)(d.a,{fontVariant:"titleLight",capitalized:!0,children:t}),Object(u.jsx)(d.a,{fontVariant:"subtitle",variant:"overline","aria-label":"subtitle",capitalized:!0,children:"".concat(i," - ").concat(n).toUpperCase()})]})})},m=i(42),g=i(442),h=["title"],f=function(e){var t=e.title,i=Object(m.a)(e,h);return Object(u.jsx)(g.a,Object(a.a)({title:Object(u.jsxs)(u.Fragment,{children:["string"===typeof t&&Object(u.jsx)(d.a,{bold:!0,capitalized:!0,gutterBottom:!0,variant:"body1",textAlign:"center",spaced:!0,children:t}),"string"!==typeof t&&Object(u.jsx)(u.Fragment,{children:t})]})},i))},O=function(){return Object(u.jsx)(f,{title:"Certifications",children:r.map((function(e){return Object(u.jsx)(p,Object(a.a)({},e),e.name)}))})},x=[{school:"Sardar Vallabhbhai Patel Institute Of Technology",degree:"Bachelor of Engineer - Information Technology",link:"https://svitvasad.ac.in/",fromYear:2008,toYear:2012},{school:"Gujarat Secondary and Higher Secondary Education Board",degree:"Higher Secondary School - Science",link:"http://www.gsebeservice.com/",fromYear:2006,toYear:2008}],v=i(170),y=function(e){var t=e.degree,i=e.school,n=e.link,a=e.toYear;return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)(c.a,{children:[Object(u.jsx)(v.a,{gutterBottom:!1,children:t}),Object(u.jsxs)(c.a,{style:{display:"inline"},children:[Object(u.jsx)(l.a,{to:n,label:i,target:"_blank",children:Object(u.jsx)(d.a,{fontVariant:"subtitle",variant:"overline","aria-label":"subtitle",capitalized:!0,hoverEffect:!0,children:i})}),Object(u.jsxs)(d.a,{fontVariant:"subtitle",variant:"overline","aria-label":"subtitle",capitalized:!0,children:[", ",a]})]})]})})},w=function(){return Object(u.jsx)(f,{title:"Education",children:x.map((function(e){return Object(u.jsx)(y,Object(a.a)({},e),e.degree)}))})},k=i(113),S=i(15),A=i(451),C=i.n(A),D=["href"],z=function(e){var t=e.href,i=(Object(m.a)(e,D),Object(s.useState)(null!==t&&void 0!==t?t:"/")),n=Object(S.a)(i,2),c=n[0],a=n[1];return Object(s.useEffect)((function(){if(t){var e=t.startsWith("http")?t:"http://".concat(t);a(e)}}),[t]),Object(u.jsx)(l.a,{to:c,label:c})},F={target:"_blank"},L=function(e){var t=e.children,i=e.linkProps,n=void 0===i?F:i,c=Object(s.useState)(t),a=Object(S.a)(c,2),r=a[0],o=a[1];return Object(s.useEffect)((function(){if(t){var e=t.replace(/(\b(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*))/gim,'<LinkParser {...linkProps} href="$1">$1</LinkParser>');o(e)}}),[t]),Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(C.a,{bindings:{linkProps:n},components:{LinkParser:z},jsx:r,renderInWrapper:!1,autoCloseVoidElements:!0})})},W=function(e){var t=e.company,i=e.position,n=e.link,a=e.dateRange,r=e.points;return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)(c.a,{children:[Object(u.jsx)(l.a,{to:n,label:t,target:"_blank",bottomBorder:!1,children:Object(u.jsx)(d.a,{fontVariant:"titleLight",capitalized:!0,children:"".concat(t," - ").concat(i).toUpperCase()})}),Object(u.jsx)(d.a,{fontVariant:"subtitle",variant:"overline","aria-label":"subtitle",capitalized:!0,children:a}),Object(u.jsx)("ul",{style:{paddingInlineStart:16},children:r.map((function(e,i){return Object(u.jsx)("li",{children:Object(u.jsx)(v.a,{component:"span",children:Object(u.jsx)(L,{children:e})})},"".concat(t,"-point-").concat(i))}))})]})})},I=function(){return Object(u.jsx)(f,{title:"Experience",children:k.a.map((function(e,t){return Object(u.jsx)(W,Object(a.a)({},e),"".concat(e.company).concat(t))}))})},E=i(53),M=function(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)(f,{title:"Objective",children:[Object(u.jsx)(v.a,{children:"\u2022 I am a self-directed, insight-oriented, IT professional with an excellent experience in end-to-end architecting solutions and leading teams towards complex and dynamic applications including early discovery, designing, developing, analyzing, and implementing in cloud technologies like Azure/AWS with modern stacks and best practices."}),Object(u.jsx)(v.a,{children:"\u2022 I am recognized for the dedication I\u2019ve towards the work, along with demonstrating strong work ethics, critical thinking, decision-making, problem-solving, time management, multi-tasking, and communication skills."})]})})},P=i(171),T=i(440),J=function(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)(f,{title:"Professional Summary",children:[Object(u.jsx)(v.a,{children:"\u2022 Designing scalable application and integration solutions using mini-services, and design patterns in multi-cloud with PaaS, IaaS, SaaS, FaaS."}),Object(u.jsx)(v.a,{children:"\u2022 Collaborate with multiple stakeholders and project teams to develop and deliver during their cloud endeavours."}),Object(u.jsx)(v.a,{children:"\u2022 Manage and deliver projects using agile methodology with SCRUM framework along with business-driven development (BDD) and test-driven development (TDD)."}),Object(u.jsx)(v.a,{children:"\u2022 Architect and implement scalable, efficient, event-driven architectures to address present and future business goals and technical challenges."}),Object(u.jsx)(v.a,{children:"\u2022 Analyze tools and technical stack according to the application requirements from development tools to the suitable cloud."}),Object(u.jsx)(v.a,{children:"\u2022 Experience with various patterns like mini services, microservices and serverless."}),Object(u.jsx)(v.a,{children:"\u2022 Adhering to cloud principles such as scalability, performance, security, high availability, disaster recovery, operational efficiency, reliability, and cost optimization."}),Object(u.jsx)(v.a,{children:"\u2022 Providing proof of concepts (POC) with complex modules, implementing best practice framework and coding standards with supporting business continuity."}),Object(u.jsx)(v.a,{children:"\u2022 Perform evaluation of the existing applications and integration systems to provide feedback and resolve technical challenges on various application principles."}),Object(u.jsx)(v.a,{children:"\u2022 Review and generate documentation around business requirements, technical specifications, and design guidelines."}),Object(u.jsx)(v.a,{children:"\u2022 Design data warehouse and data mart solutions using distributed databases."}),Object(u.jsx)(v.a,{children:"\u2022 Modernize and migrate legacy applications with cutting-edge cloud and integration solutions with approaches like lift and shift or gradual migration."}),Object(u.jsx)(v.a,{children:"\u2022 Develop and support throughout the entire software development lifecycle (SDLC)."})]})})},V=i(58),B=function(){return Object(u.jsx)(f,{title:Object(u.jsx)(V.a,{to:"/contact",label:"Available upon request.",children:Object(u.jsx)(d.a,{bold:!0,capitalized:!0,variant:"body1",textAlign:"center",spaced:!0,hoverEffect:!0,children:"References available upon request"})}),children:Object(u.jsx)(u.Fragment,{})})},R=i(8),N=i(477),q=i(463),_=i(478),Y=i(18),Z=[{title:".NET Framework",competency:4,categories:["Web Development","Framework","C#"]},{title:".NET Core",competency:3,categories:["Web Development","Framework","C#"]},{title:"C#",competency:4,categories:["Web Development","Languages","C#","Scripting"]},{title:"SQL",competency:3,categories:["Database","Languages","Scripting"]},{title:"MS SQL",competency:3,categories:["Database"]},{title:"CosmosDB",competency:4,categories:["Database"]},{title:"DynamoDB",competency:2.5,categories:["Database"]},{title:"Javascript",competency:4,categories:["Web Development","Languages","Javascript","Scripting"]},{title:"Node.js",competency:3,categories:["Web Development","Languages","Javascript"]},{title:"Jquery",competency:4,categories:["Web Development","Javascript"]},{title:"Knockout.js",competency:4,categories:["Web Development","Javascript"]},{title:"Angular",competency:4,categories:["Web Development","Javascript","Framework"]},{title:"React",competency:3,categories:["Web Development","Javascript"]},{title:"Typescript",competency:3,categories:["Web Development","Languages","Javascript"]},{title:"Azure",competency:4,categories:["Cloud"]},{title:"AWS",competency:3,categories:["Cloud"]},{title:"ADO",competency:4,categories:["SCM"]},{title:"TFS",competency:4,categories:["SCM"]},{title:"VSTS",competency:4,categories:["SCM"]},{title:"Github",competency:3,categories:["SCM"]},{title:"Bitbucket",competency:3,categories:["SCM"]},{title:"Terraform",competency:3,categories:["IaC"]},{title:"Serverless",competency:3,categories:["IaC"]},{title:"AWS CDK",competency:3,categories:["IaC"]},{title:"Pulumi",competency:2,categories:["IaC"]},{title:"Azure Functions",competency:4,categories:["Serverless"]},{title:"AWS Lambda",competency:3,categories:["Serverless"]},{title:"Logic App",competency:3,categories:["Serverless"]},{title:"ASP.NET MVC",competency:4,categories:["Web Development","C#","Framework"]},{title:"ASP.NET Web API",competency:4,categories:["Web Development","C#","Framework"]},{title:"API Gateway",competency:4,categories:["Web Development"]},{title:"Shopify - Liquid",competency:3,categories:["Web Development","Framework"]}].map((function(e){return Object(a.a)(Object(a.a)({},e),{},{categories:e.categories.sort()})})),H=["#6968b3","#37b1f5","#40494e","#515dd4","#e47272","#cc7b94","#3896e2","#c3423f","#d75858","#747fff","#64cb7b"],G=Object(Y.a)(new Set(Z.reduce((function(e,t){var i=t.categories;return e.concat(i)}),[]))).sort().map((function(e){return{name:e,color:H[Math.floor(Math.random()*H.length)]}})),U=i(7),K=i(180),Q=i(48),$=Object(U.a)(K.a)((function(e){var t=e.theme;return{padding:"".concat(t.spacing(1)," ").concat(t.spacing(1)),borderColor:"transparent"}})),X=function(e){var t=e.label,i=e.handleClick,n=e.isActive,r=Object(Q.a)().sm;return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(c.a,{sx:{m:r?0:.5},children:Object(u.jsx)($,{onClick:function(){i(t)},sx:Object(a.a)({},n?{color:function(e){return e.palette.primary.main},borderColor:function(e){return e.palette.primary.main}}:{}),children:Object(u.jsx)(d.a,{fontVariant:"titleLight",capitalized:!0,bold:!0,children:t})})})})},ee=i(398),te=function(e){var t=e.value,i=e.color,n=e.label;return Object(u.jsxs)(c.a,{sx:{position:"relative"},children:[Object(u.jsx)(ee.a,{value:t,variant:"determinate",sx:{color:i}}),Object(u.jsx)(c.a,{sx:{top:0,left:0,bottom:0,right:0,position:"absolute",display:"flex",alignItems:"center",justifyContent:"center"},children:Object(u.jsx)(v.a,{variant:"caption",component:"div",color:"text.secondary",children:n||t})})]})},ie=function(e){var t=e.data,i=e.categories,n=t.categories,a=t.competency,r=t.title,s=i.filter((function(e){return n.includes(e.name)})).map((function(e){return e.color}))[0];return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(c.a,{sx:{p:1,border:function(e){return"1px solid ".concat(e.palette.grey[300])},borderRadius:3,height:"100%"},children:Object(u.jsxs)(o.a,{alignItems:"center",textAlign:"center",children:[Object(u.jsx)(te,{value:a/5*100,color:s,label:"".concat(a,"/5")}),Object(u.jsx)(v.a,{variant:"body2",children:r})]})})})},ne=function(){var e=Object(Q.a)(),t=e.sm,i=e.md,n=e.lg,r=t?2:i||n?3:5,l=Object(s.useState)({categories:G.map((function(e){return e.name})).reduce((function(e,t){return Object(a.a)(Object(a.a)({},e),{},Object(R.a)({},t,!1))}),{All:!0}),selectedSkill:"All"}),d=Object(S.a)(l,2),b=d[0],j=d[1],p=function(e){j((function(t){var i=Object.keys(t.categories).reduce((function(i,n){return Object(a.a)(Object(a.a)({},i),{},Object(R.a)({},n,e===n&&!t.categories[n]))}),{All:!1});return i.All=!Object.keys(t.categories).some((function(e){return i[e]})),Object(a.a)(Object(a.a)({},t),{categories:i,selectedSkill:i.All?"All":e})}))};return Object(u.jsxs)(f,{title:"Skills",children:[Object(u.jsx)(v.a,{color:"text.disabled",variant:"body2",textAlign:"center",children:"Note: I think these sections are silly, but everyone seems to have one. Here is a *mostly* honest overview of my skills."}),Object(u.jsx)(o.a,{direction:"row",justifyContent:"center",sx:{flexWrap:"wrap"},children:Object.keys(b.categories).map((function(e){return Object(u.jsx)(X,{label:e,isActive:b.selectedSkill===e,handleClick:p},e)}))}),Object(u.jsx)(_.a,{cols:r,children:function(){var e=Object.keys(b.categories).reduce((function(e,t){return b.categories[t]?t:e}),"All");return Z.sort((function(e,t){var i=0;return e.competency>t.competency?i=-1:e.competency<t.competency?i=1:e.categories[0]>t.categories[0]?i=-1:e.categories[0]<t.categories[0]||e.title>t.title?i=1:e.title<t.title&&(i=-1),i})).filter((function(t){return"All"===e||t.categories.includes(e)})).map((function(e,t){return Object(u.jsx)(N.a,{children:Object(u.jsx)(q.a,{in:!0,children:Object(u.jsx)(c.a,{children:Object(u.jsx)(ie,{categories:G,data:e})})})},"".concat(e.title).concat(t))}))}()}),Object(u.jsx)(v.a,{typography:"body2",color:"text.disabled",textAlign:"center",children:"(Skills are being refined)"})]})},ce=i(46),ae=i(169),re=[{title:"Objective",details:Object(u.jsx)(M,{})},{title:"Professional Summary",details:Object(u.jsx)(J,{})},{title:"Skills",details:Object(u.jsx)(ne,{})},{title:"Experience",details:Object(u.jsx)(I,{})},{title:"Certifications",details:Object(u.jsx)(O,{})},{title:"Education",details:Object(u.jsx)(w,{})},{title:"References",details:Object(u.jsx)(B,{})}],oe=function(){return Object(u.jsx)(E.a,{open:!0,initial:"initial",direction:"row",justifyContent:"center",sx:{flexWrap:"wrap"},children:re.map((function(e){return Object(u.jsx)(c.a,{component:ae.a.div,variants:Object(ce.a)("fadeInRight"),children:Object(u.jsx)(d.a,{bold:!0,capitalized:!0,hoverEffect:!0,variant:"overline",mr:2,onClick:function(){!function(e){var t,i,n,c=null===(t=document)||void 0===t||null===(i=t.getElementById(e.toLowerCase()))||void 0===i||null===(n=i.getBoundingClientRect())||void 0===n?void 0:n.top;c&&window.scrollTo({top:c-70,behavior:"smooth"})}(e.title)},children:e.title})},e.title)}))})};t.default=function(e){Object(n.a)(e);var t="Resume";return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(T.a,{title:t,description:t,children:Object(u.jsx)(P.b,{header:t,headerProps:{textAlign:"center"},subHeader:Object(u.jsx)(oe,{}),children:Object(u.jsx)(E.a,{open:!0,initial:"initial",spacing:2,children:re.map((function(e){return Object(u.jsx)(c.a,{component:ae.a.div,display:"flex",id:e.title.toLowerCase(),variants:Object(ce.a)("fadeInRight"),children:e.details},e.title)}))})})})})}}}]);
//# sourceMappingURL=7.d12ec715.chunk.js.map