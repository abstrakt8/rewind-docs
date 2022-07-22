"use strict";(self.webpackChunkrewind_docs=self.webpackChunkrewind_docs||[]).push([[836],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=u(n),h=o,m=p["".concat(l,".").concat(h)]||p[h]||c[h]||r;return n?a.createElement(m,i(i({ref:t},d),{},{components:n})):a.createElement(m,i({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3584:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var a=n(7462),o=(n(7294),n(3905));const r={sidebar_position:10},i="FAQ",s={unversionedId:"faq",id:"faq",title:"FAQ",description:"Stuck at the loading screen",source:"@site/docs/faq.md",sourceDirName:".",slug:"/faq",permalink:"/docs/faq",draft:!1,editUrl:"https://github.com/abstrakt8/rewind-docs/tree/main/packages/create-docusaurus/templates/shared/docs/faq.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Loading a Replay",permalink:"/docs/loading_replay"}},l={},u=[{value:"Stuck at the loading screen",id:"stuck-at-the-loading-screen",level:3},{value:"Beatmaps folder not located in <code>osu!/Songs</code>",id:"beatmaps-folder-not-located-in-osusongs",level:3},{value:"How to change the osu! Folder location?",id:"how-to-change-the-osu-folder-location",level:3},{value:"The replay does not load",id:"the-replay-does-not-load",level:3},{value:"The audio is really out of sync after seeking",id:"the-audio-is-really-out-of-sync-after-seeking",level:3},{value:"Different number of misses / 100s / 50s are calculated!",id:"different-number-of-misses--100s--50s-are-calculated",level:3},{value:"I can&#39;t hear any hit sounds?",id:"i-cant-hear-any-hit-sounds",level:3},{value:"osu! is sometimes lagging when Rewind is in the background",id:"osu-is-sometimes-lagging-when-rewind-is-in-the-background",level:3},{value:"I have another question!",id:"i-have-another-question",level:3}],d={toc:u};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"faq"},"FAQ"),(0,o.kt)("h3",{id:"stuck-at-the-loading-screen"},"Stuck at the loading screen"),(0,o.kt)("p",null,"Try running it as admin and when the Windows Firewall asks for permissions, enable them."),(0,o.kt)("h3",{id:"beatmaps-folder-not-located-in-osusongs"},"Beatmaps folder not located in ",(0,o.kt)("inlineCode",{parentName:"h3"},"osu!/Songs")),(0,o.kt)("p",null,"If your beatmap folder is not named Songs then create a symbolic link named Songs to your beatmaps folder (let's say Beatmaps). Run a console as an admin and execute:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"mklink /D Songs Beatmaps\n")),(0,o.kt)("p",null,"By default there is already an empty Songs folder, so might you have to delete/move that folder beforehand since you don't use that anyways"),(0,o.kt)("p",null,'Another example using absolute paths (replace the second argument with the path of your actual "osu! Songs" folder):'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"mklink /D C:\\Users\\User\\Documents\\osu!\\Songs D:\\OsuSongs\n")),(0,o.kt)("h3",{id:"how-to-change-the-osu-folder-location"},"How to change the osu! Folder location?"),(0,o.kt)("p",null,'As of now edit the path of the "rewind.cfg" file or just delete it.'),(0,o.kt)("h3",{id:"the-replay-does-not-load"},"The replay does not load"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Make sure that you own the beatmap"),(0,o.kt)("li",{parentName:"ul"},"Very old beatmaps (with ",(0,o.kt)("inlineCode",{parentName:"li"},"beatmapVersion < 6"),") are not supported yet"),(0,o.kt)("li",{parentName:"ul"},"Some 2B beatmaps can also not be loaded")),(0,o.kt)("h3",{id:"the-audio-is-really-out-of-sync-after-seeking"},"The audio is really out of sync after seeking"),(0,o.kt)("p",null,"Yes, this often happens with ",(0,o.kt)("inlineCode",{parentName:"p"},".mp3")," files with variable bit rate. As of now use something like Audacity to convert the ",(0,o.kt)("inlineCode",{parentName:"p"},".mp3")," to have a constant bit rate."),(0,o.kt)("h3",{id:"different-number-of-misses--100s--50s-are-calculated"},"Different number of misses / 100s / 50s are calculated!"),(0,o.kt)("p",null,"Unfortunately osu! stable gameplay can not be matched with 100% accuracy since I do not have access to the osu! stable source code. I will try to improve the gameplay simulation as best as I can."),(0,o.kt)("h3",{id:"i-cant-hear-any-hit-sounds"},"I can't hear any hit sounds?"),(0,o.kt)("p",null,"They have not been implemented yet, but will be soon."),(0,o.kt)("h3",{id:"osu-is-sometimes-lagging-when-rewind-is-in-the-background"},"osu! is sometimes lagging when Rewind is in the background"),(0,o.kt)("p",null,'Short answer: close the replay by clicking on the "x" button in the top right corner.'),(0,o.kt)("p",null,"Long answer:\nRewind uses the ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Page_Visibility_API"},"Page Visibility API"),' to determine whether the screen is visible or not and then goes into "energy saving mode". However, the page visibility API does not always work when the application is minimized with "Alt Tab". Therefore it\'s better to just close the replay to be 100% sure that we go into energy saving mode. Alternatively you can also go the the overview page.'),(0,o.kt)("h3",{id:"i-have-another-question"},"I have another question!"),(0,o.kt)("p",null,"Please join the ",(0,o.kt)("a",{parentName:"p",href:"https://discord.com/invite/QubdHdnBVg"},"osu! University Discord")," and ask us there! Provide us as much information as possible, e.g., operating system, app version, log files, screenshots..."))}c.isMDXComponent=!0}}]);