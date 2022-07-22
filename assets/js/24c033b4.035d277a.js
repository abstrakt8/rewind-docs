"use strict";(self.webpackChunkrewind_docs=self.webpackChunkrewind_docs||[]).push([[87],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var a=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var o=a.createContext({}),u=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(r),m=i,h=d["".concat(o,".").concat(m)]||d[m]||c[m]||n;return r?a.createElement(h,s(s({ref:t},p),{},{components:r})):a.createElement(h,s({ref:t},p))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,s=new Array(n);s[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:i,s[1]=l;for(var u=2;u<n;u++)s[u]=r[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7552:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>c,frontMatter:()=>n,metadata:()=>l,toc:()=>u});var a=r(7462),i=(r(7294),r(3905));const n={sidebar_position:4},s="Analysis Features",l={unversionedId:"analysis-features",id:"analysis-features",title:"Analysis Features",description:"Analysis Cursor",source:"@site/docs/analysis-features.md",sourceDirName:".",slug:"/analysis-features",permalink:"/docs/analysis-features",draft:!1,editUrl:"https://github.com/abstrakt8/rewind-docs/tree/main/packages/create-docusaurus/templates/shared/docs/analysis-features.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Setup",permalink:"/docs/setup"},next:{title:"Loading a Replay",permalink:"/docs/loading_replay"}},o={},u=[{value:"Analysis Cursor",id:"analysis-cursor",level:2},{value:"Slider Dev Mode",id:"slider-dev-mode",level:2},{value:"Playbar",id:"playbar",level:2},{value:"Statistics",id:"statistics",level:2}],p={toc:u};function c(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"analysis-features"},"Analysis Features"),(0,i.kt)("h2",{id:"analysis-cursor"},"Analysis Cursor"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/6eqoMFn.png",alt:"Analysis Cursor"})),(0,i.kt)("p",null,"Each grey cross ",(0,i.kt)("inlineCode",{parentName:"p"},"x"),' stands for one recorded "replay frame". Usually osu! tries to record around ~60FPS, so you will see a cross around every ~17ms.'),(0,i.kt)("p",null,"Certain frames are interesting and are therefore highlighted (enlarged + color):"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Orange: left click (z)"),(0,i.kt)("li",{parentName:"ul"},"Green: right click (x)"),(0,i.kt)("li",{parentName:"ul"},"Cyan: both clicks at the same time")),(0,i.kt)("p",null,"Technically speaking we don\u2019t know the true positions of the cursor between two recorded frames, that\u2019s why Rewind tries to predict them via interpolation to give a smooth feeling."),(0,i.kt)("h2",{id:"slider-dev-mode"},"Slider Dev Mode"),(0,i.kt)("p",null,"Gives you a better idea of why you missed a slider end or a slider tick:"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/6sjB8VJ.png",alt:"Slider dev mode"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The red circle indicates the true size of the slider follow circle since every skin has different follow circle sizes (",(0,i.kt)("inlineCode",{parentName:"li"},"sliderfollowcircle.png"),")."),(0,i.kt)("li",{parentName:"ul"},"The green dot is the current position of the slider ball."),(0,i.kt)("li",{parentName:"ul"},'The red dot at the end of the slider is the "true sliderend".')),(0,i.kt)("p",null,'The "true sliderend" is just another invisible slider tick that is placed 36ms before the slider ends. That\u2019s why it is possible to hit the slider ends of fast and short sliders with barely any movement (see the sliders in ',(0,i.kt)("a",{parentName:"p",href:"https://youtu.be/_pcTtBoBGqE?t=28"},"The Big Black"),")."),(0,i.kt)("p",null,"There are some tech maps that have very weird slider shapes where you can't even remotely gauge where the slider end is:"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/AGsjGGs.png",alt:"slider dev mode 2"})),(0,i.kt)("h2",{id:"playbar"},"Playbar"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/vksB6Gg.png",alt:"playbar"})),(0,i.kt)("p",null,"The graph that looks like a mountain is the difficulty graph and it is an estimation of how difficult that part is (can be disabled in the settings)"),(0,i.kt)("p",null,"The small colored ticks are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Red: miss"),(0,i.kt)("li",{parentName:"ul"},"Orange: slider break"),(0,i.kt)("li",{parentName:"ul"},"Yellow: 50"),(0,i.kt)("li",{parentName:"ul"},"Green: 100")),(0,i.kt)("h2",{id:"statistics"},"Statistics"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/jR93eL9.png",alt:"statistics"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Misses, 300, 100, 50: number of 300, 100, 50s, misses so far")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"MaxCombo: max combo so far (the number you would see in the leaderboard)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"UR (Unstable Rate) is the standard deviation of your hit errors multiplied by 10. In other words, it indicates how precise your hits were.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Mean is the average of your hit errors. If you are experienced enough, you can take this number to adjust your local offset accordingly (if you have no idea what I said, don't do it).")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Global means every hit error so far will be considered.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Local (experimental) means that only the hit errors of the last second is considered. This might give you a better idea of how precise you have played in certain sections (streams, jump patterns, etc.)."))))}c.isMDXComponent=!0}}]);