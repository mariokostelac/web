(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{73:function(e,t,a){"use strict";a.r(t);var n=a(2),l=a(0),s=a.n(l),r=a(76),o=a(85),c=a(86);function i({title:e,children:t,language:a}){return s.a.createElement("div",{className:"code-with-header"},s.a.createElement("div",{className:"code-header"},e),s.a.createElement(c.a,{className:a},t))}a(68);var m=()=>s.a.createElement("form",{className:"email-signup-form",action:"https://gmail.us4.list-manage.com/subscribe/post?u=8139c7de74df98aa17054b235&id=f0c6ba5f1d",method:"post"},s.a.createElement("input",{"aria-label":"Email address",name:"EMAIL",type:"email",required:!0,className:"input",placeholder:"Enter your email"}),s.a.createElement("div",{className:""},s.a.createElement("button",{className:"button button--primary",type:"submit"},"Subscribe"))),p=a(78),u=a(74),d=a(77),g=a(69),h=a.n(g);const y=[{title:"Quick start",description:s.a.createElement(s.a.Fragment,null,"Create a production-ready web app from scratch with only a few lines of concise, declarative code.")},{title:"Flexible",description:s.a.createElement(s.a.Fragment,null,"Move fast using high-level constructs provided by Wasp or drop down to ",s.a.createElement("code",null,"js/html/css...")," when you require more control.")},{title:"No lock-in",description:s.a.createElement(s.a.Fragment,null,"If Wasp becomes too limiting for you, simply eject and continue with the human-readable source code following industry best-practices.")}];function E({imageUrl:e,title:t,description:a}){const n=Object(d.a)(e);return s.a.createElement("div",{className:Object(r.a)("col col--4",h.a.feature)},n&&s.a.createElement("div",{className:"text--center"},s.a.createElement("img",{className:h.a.featureImage,src:n,alt:t})),s.a.createElement("h2",null,t),s.a.createElement("p",null,a))}function f(){return s.a.createElement("section",{className:"section-lg"},s.a.createElement("div",{className:"container",style:{textAlign:"center"}},s.a.createElement("img",{className:"logo",src:"img/eqpar-separator.png"})))}function b(){return s.a.createElement(i,{title:"todoApp.wasp",language:"css"},'app todoApp {\n  title: "ToDo App" /* visible in browser tab */\n}\n\n/* full-stack auth out-of-the-box */\nauth {\n  userEntity: User,\n  methods: [ EmailAndPassword ]\n}\n\nroute "/" -> page Main\npage Main {\n  component: import Main from "@ext/Main" /* import React code */\n}\n')}function v(){const e=Object.freeze({NEW_APP:"Create a new app",DEFINE_ENTITY:"Define and query a data model",ADD_AUTH:"Add authentication"}),[t,a]=Object(l.useState)(e.NEW_APP);function n(){if(t===e.NEW_APP){const e='app todoApp {\n  title: "ToDo App"\n}\n\nroute "/" -> page Main\npage Main {\n  component: import Main from "@ext/Main"\n}\n',t="import React from 'react'\n\nexport default () => <span> Hello World! </span>\n";return s.a.createElement("div",{className:"codeExampleFiles"},s.a.createElement(i,{title:"todoApp.wasp",language:"css"},e),s.a.createElement(i,{title:"ext/Main.js",language:"jsx"},t),s.a.createElement("div",null,"That's it, this is the whole app! Run ",s.a.createElement("code",null,"wasp start")," and check it out at ",s.a.createElement("code",null,"http://localhost:3000"),"!"))}if(t===e.ADD_AUTH){const e='app todoApp {\n  title: "ToDo App"\n}\n\nroute "/" -> page Main\npage Main {\n  component: import Main from "@ext/Main"\n}\n\nauth {\n  userEntity: User,\n  methods: [ EmailAndPassword ]\n}\n\nentity User {=psl\n    id          Int     @id @default(autoincrement())\n    email       String  @unique\n    password    String\npsl=}\n',t="import React from 'react'\nimport { Link } from 'react-router-dom'\nimport useAuth from '@wasp/auth/useAuth.js'\nimport Todo from './Todo.js'\n\nexport default () => {\n  const { data: user } = useAuth()\n\n  if (!user) {\n    return <span>\n             Please login or signup <Link to='/login'>here</Link>.\n           </span>\n  } else {\n    return <Todo/>\n  }\n}\n";return s.a.createElement("div",{className:"codeExampleFiles"},s.a.createElement(i,{title:"todoApp.wasp",language:"css"},e),s.a.createElement(i,{title:"ext/Main.js",language:"jsx"},t),s.a.createElement("div",null,"To learn more about authentication & authorization in Wasp, check the ",s.a.createElement(p.a,{to:Object(d.a)("/docs/language/basic-elements#authentication--authorization")},"docs"),"."))}if(t===e.DEFINE_ENTITY){const e='//...\n\nentity Task {=psl\n    id          Int     @id @default(autoincrement())\n    description String\n    isDone      Boolean @default(false)\npsl=}\n\nquery getTasks {\n  fn: import { getTasks } from "@ext/queries.js",\n  entities: [Task] // A list of entities this query uses.\n}\n',t="export const getTasks = async (args, context) => {\n  return context.entities.Task.findMany()\n}\n",a="import React from 'react'\nimport { useQuery } from '@wasp/queries'\nimport getTasks from '@wasp/queries/getTasks.js'\n\nexport default () => {\n  const { data: tasks } = useQuery(getTasks)\n  return <Tasks tasks={tasks}/>\n}\n";return s.a.createElement("div",{className:"codeExampleFiles"},s.a.createElement(i,{title:"todoApp.wasp",language:"css"},e),s.a.createElement(i,{title:"ext/queries.js",language:"jsx"},t),s.a.createElement(i,{title:"ext/Todo.js",language:"jsx"},a),s.a.createElement("div",null,"To learn more about working with data in Wasp, check the ",s.a.createElement(p.a,{to:Object(d.a)("/docs/language/language/basic-elements#entity")},"docs"),"."))}return console.log("this should never happen."),null}function o(){function n({codeExampleKey:n}){return s.a.createElement("button",{className:Object(r.a)("button","info",t===e[n]&&"is-active","button--secondary"),onClick:()=>a(e[n])},e[n])}return Object.keys(e).map((e=>s.a.createElement(n,{codeExampleKey:e})))}return s.a.createElement("div",{className:"row CodeExamples"},s.a.createElement("div",{className:"ButtonTabs col col--3"},s.a.createElement("div",null,s.a.createElement(o,null))),s.a.createElement("div",{className:"col col--9"},s.a.createElement(n,null)))}function N(){return s.a.createElement("iframe",{src:"https://ghbtns.com/github-btn.html?user=wasp-lang&repo=wasp&type=star&count=true&size=large",frameborder:"0",scrolling:"0",width:"160px",height:"30px"})}function k(){return s.a.createElement("section",{className:"section-lg",id:"signup"},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:Object(r.a)("row",h.a.responsiveCentered)},s.a.createElement("div",{className:"col col--10 col--offset-1"},s.a.createElement("h2",null,"Stay up to date"),s.a.createElement("h3",null,s.a.createElement("p",null,"Join our mailing list and be the first to know when we ship new features and updates!")))),s.a.createElement("div",{className:Object(r.a)("row",h.a.responsiveCentered),style:{paddingTop:"1rem"}},s.a.createElement("div",{className:"col col--8 col--offset-2"},s.a.createElement(m,null))),s.a.createElement("div",{className:Object(r.a)("row",h.a.responsiveCentered,"section-text")},s.a.createElement("div",{className:"col col--10 col--offset-1"},s.a.createElement("h3",null,s.a.createElement("p",null,"Also, make sure to check out ",s.a.createElement(p.a,{to:"https://github.com/wasp-lang/wasp"},"Wasp repo on Github")," and express your support by giving us a star!")))),s.a.createElement("div",{className:Object(r.a)("row",h.a.responsiveCentered),style:{paddingTop:"1rem"}},s.a.createElement("div",{className:"col"},s.a.createElement(N,null)))))}t.default=function(){const e=Object(u.a)(),{siteConfig:t={}}=e,a=Object(d.a)("docs/tutorials/todo-app");return s.a.createElement(o.a,{title:""+t.title,description:"Description will go into a meta tag in <head />"},s.a.createElement("header",{className:Object(r.a)("hero",h.a.heroBanner)},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col col--5"},s.a.createElement("h1",{className:"hero-title"},"Web App Specification Language"),s.a.createElement("p",{className:"hero-subtitle"},t.tagline),s.a.createElement("div",{className:h.a.buttons},s.a.createElement(p.a,{className:Object(r.a)("button button--outline button--secondary button--lg",h.a.heroButton),to:Object(d.a)("docs/tutorials/getting-started")},"Get Started"),s.a.createElement(p.a,{className:Object(r.a)("button button--secondary button--lg",h.a.heroButton),to:a},"Take the Tutorial")),s.a.createElement(N,null))," ",s.a.createElement("div",{className:"col col--7"},s.a.createElement(b,null)))," ")),s.a.createElement("main",null,s.a.createElement("section",{className:"section-lg"},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:Object(r.a)("row",h.a.responsiveCentered)},s.a.createElement("div",{className:"col col--10 col--offset-1"},s.a.createElement("h3",{className:"title"},"Made for devs who want to ",s.a.createElement("span",{className:"title-strong"},"use modern web dev stack")," (React, Node.js, Prisma)\xa0",s.a.createElement("br",null),s.a.createElement("span",{className:"title-strong"},"without writing boilerplate"),"."),s.a.createElement("h3",null,s.a.createElement("p",null,"Front-end, back-end and deployment - all within one concise DSL.")))))),s.a.createElement(f,null),s.a.createElement("section",{className:"section-lg",id:"how-it-works"},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:Object(r.a)("row",h.a.responsiveCentered)},s.a.createElement("div",{className:"col col--10 col--offset-1"},s.a.createElement("h2",null,"How it works"),s.a.createElement("h3",null,s.a.createElement("p",null,"Given ",s.a.createElement("code",null,".wasp")," files as an input, Wasp compiler\xa0",s.a.createElement("span",{className:"title-strong"},"generates the full source code of your web app")," - front-end, back-end and deployment."),s.a.createElement("p",null,"Wasp also ",s.a.createElement("span",{className:"title-strong"},"integrates with the modern web dev technologies")," - React, Node.js, CSS, ...")))),s.a.createElement("div",{className:Object(r.a)("row",h.a.responsiveCentered),style:{paddingTop:"2rem"}},s.a.createElement("div",{className:"col"},s.a.createElement("img",{className:"wasp-diagram",src:"img/wasp-compilation.png",alt:"Wasp compilation"}))))),s.a.createElement(f,null),y&&y.length>0&&s.a.createElement("section",{className:h.a.features},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row"},y.map(((e,t)=>s.a.createElement(E,Object(n.a)({key:t},e))))))),s.a.createElement(f,null),s.a.createElement("section",{className:"section-lg",id:"the-language"},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:Object(r.a)("row",h.a.responsiveCentered)},s.a.createElement("div",{className:"col col--10 col--offset-1"},s.a.createElement("h2",null,"The Language"),s.a.createElement("h3",null,s.a.createElement("p",null,"Concepts such as ",s.a.createElement("em",null,"app"),", ",s.a.createElement("em",null,"page"),", ",s.a.createElement("em",null,"route"),", ",s.a.createElement("em",null,"auth"),"\xa0 etc. are baked into Wasp, providing the higher level of expressiveness.")))),s.a.createElement(v,null))),s.a.createElement("section",{className:"section-lg"},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:Object(r.a)("row",h.a.responsiveCentered)},s.a.createElement("div",{className:"col col--10 col--offset-1"},s.a.createElement("h2",null,"Take the tutorial"),s.a.createElement("h3",null,s.a.createElement("p",null,"Take ",s.a.createElement(p.a,{to:a},"our tutorial")," and build a full-fledged Todo app in Wasp! You can find it ",s.a.createElement(p.a,{to:a},"here"),".")))),s.a.createElement("div",{className:Object(r.a)("row",h.a.responsiveCentered),style:{paddingTop:"2rem"}},s.a.createElement("div",{className:"col"},s.a.createElement("img",{alt:"How Todo App will work once it is done",src:Object(d.a)("img/todo-app-tutorial-intro.gif"),style:{border:"1px solid black"}}))))),s.a.createElement("div",{id:"join-the-list"},s.a.createElement(k,null))))}},86:function(e,t,a){"use strict";var n=a(2),l=a(0),s=a.n(l),r=a(76),o={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},c={Prism:a(19).a,theme:o};function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var p=/\r\n|\r|\n/,u=function(e){0===e.length?e.push({types:["plain"],content:"",empty:!0}):1===e.length&&""===e[0].content&&(e[0].empty=!0)},d=function(e,t){var a=e.length;return a>0&&e[a-1]===t?e:e.concat(t)},g=function(e,t){var a=e.plain,n=Object.create(null),l=e.styles.reduce((function(e,a){var n=a.languages,l=a.style;return n&&!n.includes(t)||a.types.forEach((function(t){var a=m({},e[t],l);e[t]=a})),e}),n);return l.root=a,l.plain=m({},a,{backgroundColor:null}),l};function h(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(a[n]=e[n]);return a}var y=function(e){function t(){for(var t=this,a=[],n=arguments.length;n--;)a[n]=arguments[n];e.apply(this,a),i(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var a=e.theme?g(e.theme,e.language):void 0;return t.themeDict=a})),i(this,"getLineProps",(function(e){var a=e.key,n=e.className,l=e.style,s=m({},h(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),r=t.getThemeDict(t.props);return void 0!==r&&(s.style=r.plain),void 0!==l&&(s.style=void 0!==s.style?m({},s.style,l):l),void 0!==a&&(s.key=a),n&&(s.className+=" "+n),s})),i(this,"getStyleForToken",(function(e){var a=e.types,n=e.empty,l=a.length,s=t.getThemeDict(t.props);if(void 0!==s){if(1===l&&"plain"===a[0])return n?{display:"inline-block"}:void 0;if(1===l&&!n)return s[a[0]];var r=n?{display:"inline-block"}:{},o=a.map((function(e){return s[e]}));return Object.assign.apply(Object,[r].concat(o))}})),i(this,"getTokenProps",(function(e){var a=e.key,n=e.className,l=e.style,s=e.token,r=m({},h(e,["key","className","style","token"]),{className:"token "+s.types.join(" "),children:s.content,style:t.getStyleForToken(s),key:void 0});return void 0!==l&&(r.style=void 0!==r.style?m({},r.style,l):l),void 0!==a&&(r.key=a),n&&(r.className+=" "+n),r}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,a=e.language,n=e.code,l=e.children,s=this.getThemeDict(this.props),r=t.languages[a];return l({tokens:function(e){for(var t=[[]],a=[e],n=[0],l=[e.length],s=0,r=0,o=[],c=[o];r>-1;){for(;(s=n[r]++)<l[r];){var i=void 0,m=t[r],g=a[r][s];if("string"==typeof g?(m=r>0?m:["plain"],i=g):(m=d(m,g.type),g.alias&&(m=d(m,g.alias)),i=g.content),"string"==typeof i){var h=i.split(p),y=h.length;o.push({types:m,content:h[0]});for(var E=1;E<y;E++)u(o),c.push(o=[]),o.push({types:m,content:h[E]})}else r++,t.push(m),a.push(i),n.push(0),l.push(i.length)}r--,t.pop(),a.pop(),n.pop(),l.pop()}return u(o),c}(void 0!==r?t.tokenize(n,r,a):[n]),className:"prism-code language-"+a,style:void 0!==s?s.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(l.Component),E=a(88),f=a.n(E),b=a(89),v=a.n(b),N=a(74),k={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},j=a(82);var w=()=>{const{siteConfig:{themeConfig:{prism:e={}}}}=Object(N.a)(),{isDarkTheme:t}=Object(j.a)(),a=e.theme||k,n=e.darkTheme||a;return t?n:a},T=a(46),x=a.n(T);const O=/{([\d,-]+)}/,A=(e=["js","jsBlock","jsx","python","html"])=>{const t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},a=["highlight-next-line","highlight-start","highlight-end"].join("|"),n=e.map((e=>`(?:${t[e].start}\\s*(${a})\\s*${t[e].end})`)).join("|");return new RegExp(`^\\s*(?:${n})\\s*$`)},C=/title=".*"/;t.a=({children:e,className:t,metastring:a})=>{const{siteConfig:{themeConfig:{prism:o={}}}}=Object(N.a)(),[i,m]=Object(l.useState)(!1),[p,u]=Object(l.useState)(!1);Object(l.useEffect)((()=>{u(!0)}),[]);const d=Object(l.useRef)(null);let g=[],h="";const E=w();if(a&&O.test(a)){const e=a.match(O)[1];g=v.a.parse(e).filter((e=>e>0))}a&&C.test(a)&&(h=a.match(C)[0].split("title=")[1].replace(/"+/g,""));let b=t&&t.replace(/language-/,"");!b&&o.defaultLanguage&&(b=o.defaultLanguage);let k=e.replace(/\n$/,"");if(0===g.length&&void 0!==b){let t="";const a=(e=>{switch(e){case"js":case"javascript":case"ts":case"typescript":return A(["js","jsBlock"]);case"jsx":case"tsx":return A(["js","jsBlock","jsx"]);case"html":return A(["js","jsBlock","html"]);case"python":case"py":return A(["python"]);default:return A()}})(b),n=e.replace(/\n$/,"").split("\n");let l;for(let e=0;e<n.length;){const s=e+1,r=n[e].match(a);if(null!==r){switch(r.slice(1).reduce(((e,t)=>e||t),void 0)){case"highlight-next-line":t+=s+",";break;case"highlight-start":l=s;break;case"highlight-end":t+=`${l}-${s-1},`}n.splice(e,1)}else e+=1}g=v.a.parse(t),k=n.join("\n")}const j=()=>{f()(k),m(!0),setTimeout((()=>m(!1)),2e3)};return s.a.createElement(y,Object(n.a)({},c,{key:String(p),theme:E,code:k,language:b}),(({className:e,style:t,tokens:a,getLineProps:l,getTokenProps:o})=>s.a.createElement(s.a.Fragment,null,h&&s.a.createElement("div",{style:t,className:x.a.codeBlockTitle},h),s.a.createElement("div",{className:x.a.codeBlockContent},s.a.createElement("button",{ref:d,type:"button","aria-label":"Copy code to clipboard",className:Object(r.a)(x.a.copyButton,{[x.a.copyButtonWithTitle]:h}),onClick:j},i?"Copied":"Copy"),s.a.createElement("div",{tabIndex:0,className:Object(r.a)(e,x.a.codeBlock,{[x.a.codeBlockWithTitle]:h})},s.a.createElement("div",{className:x.a.codeBlockLines,style:t},a.map(((e,t)=>{1===e.length&&""===e[0].content&&(e[0].content="\n");const a=l({line:e,key:t});return g.includes(t+1)&&(a.className=a.className+" docusaurus-highlight-code-line"),s.a.createElement("div",Object(n.a)({key:t},a),e.map(((e,t)=>s.a.createElement("span",Object(n.a)({key:t},o({token:e,key:t}))))))}))))))))}},88:function(e,t,a){"use strict";const n=(e,{target:t=document.body}={})=>{const a=document.createElement("textarea"),n=document.activeElement;a.value=e,a.setAttribute("readonly",""),a.style.contain="strict",a.style.position="absolute",a.style.left="-9999px",a.style.fontSize="12pt";const l=document.getSelection();let s=!1;l.rangeCount>0&&(s=l.getRangeAt(0)),t.append(a),a.select(),a.selectionStart=0,a.selectionEnd=e.length;let r=!1;try{r=document.execCommand("copy")}catch(o){}return a.remove(),s&&(l.removeAllRanges(),l.addRange(s)),n&&n.focus(),r};e.exports=n,e.exports.default=n},89:function(e,t){e.exports.parse=function(e){var t=e.split(",").map((function(e){return function(e){if(/^-?\d+$/.test(e))return parseInt(e,10);var t;if(t=e.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){var a=t[1],n=t[2],l=t[3];if(a&&l){var s=[],r=(a=parseInt(a))<(l=parseInt(l))?1:-1;"-"!=n&&".."!=n&&"\u2025"!=n||(l+=r);for(var o=a;o!=l;o+=r)s.push(o);return s}}return[]}(e)}));return 0===t.length?[]:1===t.length?Array.isArray(t[0])?t[0]:t:t.reduce((function(e,t){return Array.isArray(e)||(e=[e]),Array.isArray(t)||(t=[t]),e.concat(t)}))}}}]);