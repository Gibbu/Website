import{S as e,i as t,s as a,k as i,f as l,d as o,n as r,K as s,c as n,a as u,L as p,u as c,o as v,H as d,m as h}from"./index-d6d64123.js";import{w as m}from"./index-9f1656b7.js";function b(e,t,a){const i=e.slice();return i[4]=t[a],i}function g(e,t,a){const i=e.slice();return i[4]=t[a],i}function y(e){let t;function a(e,t){return e[2]?k:f}let r=a(e),s=r(e);return{c(){s.c(),t=i()},l(e){s.l(e),t=i()},m(e,a){s.m(e,a),l(e,t,a)},p(e,i){r===(r=a(e))&&s?s.p(e,i):(s.d(1),s=r(e),s&&(s.c(),s.m(t.parentNode,t)))},d(e){s.d(e),e&&o(t)}}}function f(e){var t;let a,i,r=null!=(t=e[1][1])?t:[],p=[];for(let l=0;l<r.length;l+=1)p[l]=B(b(e,r,l));return{c(){a=s("svg");for(let e=0;e<p.length;e+=1)p[e].c();this.h()},l(e){a=n(e,"svg",{xmlns:!0,fill:!0,viewBox:!0,stroke:!0,class:!0,width:!0,height:!0},1);var t=u(a);for(let a=0;a<p.length;a+=1)p[a].l(t);t.forEach(o),this.h()},h(){v(a,"xmlns","http://www.w3.org/2000/svg"),v(a,"fill","none"),v(a,"viewBox","0 0 24 24"),v(a,"stroke","currentColor"),v(a,"class",i="heroicon outline "+e[3]),v(a,"width",e[0]),v(a,"height",e[0])},m(e,t){l(e,a,t);for(let i=0;i<p.length;i+=1)p[i].m(a,null)},p(e,t){var l;if(2&t){let i;for(r=null!=(l=e[1][1])?l:[],i=0;i<r.length;i+=1){const l=b(e,r,i);p[i]?p[i].p(l,t):(p[i]=B(l),p[i].c(),p[i].m(a,null))}for(;i<p.length;i+=1)p[i].d(1);p.length=r.length}8&t&&i!==(i="heroicon outline "+e[3])&&v(a,"class",i),1&t&&v(a,"width",e[0]),1&t&&v(a,"height",e[0])},d(e){e&&o(a),d(p,e)}}}function k(e){var t;let a,i,r=null!=(t=e[1][0])?t:[],p=[];for(let l=0;l<r.length;l+=1)p[l]=x(g(e,r,l));return{c(){a=s("svg");for(let e=0;e<p.length;e+=1)p[e].c();this.h()},l(e){a=n(e,"svg",{xmlns:!0,viewBox:!0,fill:!0,class:!0,width:!0,height:!0},1);var t=u(a);for(let a=0;a<p.length;a+=1)p[a].l(t);t.forEach(o),this.h()},h(){v(a,"xmlns","http://www.w3.org/2000/svg"),v(a,"viewBox","0 0 20 20"),v(a,"fill","currentColor"),v(a,"class",i="heroicon solid "+e[3]),v(a,"width",e[0]),v(a,"height",e[0])},m(e,t){l(e,a,t);for(let i=0;i<p.length;i+=1)p[i].m(a,null)},p(e,t){var l;if(2&t){let i;for(r=null!=(l=e[1][0])?l:[],i=0;i<r.length;i+=1){const l=g(e,r,i);p[i]?p[i].p(l,t):(p[i]=x(l),p[i].c(),p[i].m(a,null))}for(;i<p.length;i+=1)p[i].d(1);p.length=r.length}8&t&&i!==(i="heroicon solid "+e[3])&&v(a,"class",i),1&t&&v(a,"width",e[0]),1&t&&v(a,"height",e[0])},d(e){e&&o(a),d(p,e)}}}function B(e){let t,a=[e[4]],i={};for(let l=0;l<a.length;l+=1)i=h(i,a[l]);return{c(){t=s("path"),this.h()},l(e){t=n(e,"path",{},1),u(t).forEach(o),this.h()},h(){p(t,i)},m(e,a){l(e,t,a)},p(e,l){p(t,i=c(a,[2&l&&e[4]]))},d(e){e&&o(t)}}}function x(e){let t,a=[e[4]],i={};for(let l=0;l<a.length;l+=1)i=h(i,a[l]);return{c(){t=s("path"),this.h()},l(e){t=n(e,"path",{},1),u(t).forEach(o),this.h()},h(){p(t,i)},m(e,a){l(e,t,a)},p(e,l){p(t,i=c(a,[2&l&&e[4]]))},d(e){e&&o(t)}}}function C(e){let t,a=e[1]&&e[1]!=[]&&y(e);return{c(){a&&a.c(),t=i()},l(e){a&&a.l(e),t=i()},m(e,i){a&&a.m(e,i),l(e,t,i)},p(e,[i]){e[1]&&e[1]!=[]?a?a.p(e,i):(a=y(e),a.c(),a.m(t.parentNode,t)):a&&(a.d(1),a=null)},i:r,o:r,d(e){a&&a.d(e),e&&o(t)}}}function w(e,t,a){let{src:i=[]}=t,{size:l="100%"}=t,{solid:o=!1}=t,{class:r=""}=t;if("100%"!==l&&"x"!=l.slice(-1)&&"m"!=l.slice(-1)&&"%"!=l.slice(-1))try{l=parseInt(l)+"px"}catch(s){l="100%"}return e.$$set=e=>{"src"in e&&a(1,i=e.src),"size"in e&&a(0,l=e.size),"solid"in e&&a(2,o=e.solid),"class"in e&&a(3,r=e.class)},[l,i,o,r]}class T extends e{constructor(e){super(),t(this,e,w,C,a,{src:1,size:0,solid:2,class:3})}}const G=m(!1),z=m(null),A=m({name:"",developers:[],fonts:[],imports:[],meta:{name:"",author:"",description:"",source:"",version:""},hiddenVars:[],variables:[],addons:[]});const R={name:"Gibbu",tag:1211,github:"Gibbu",paypal:"https://paypal.me/IanRGibson"},S={name:"DevilBro",tag:4401,github:"mwittrien",paypal:"https://paypal.me/MircoWittrien"},H={name:"Monster",tag:3557,github:"monstrousdev",paypal:"https://goo.gl/9S8VGb"};var M=[{name:"Frosted Glass",preview:"https://discordstyles.github.io/FrostedGlass/FrostedGlass.theme.css",image:"https://i.imgur.com/Gr8JJAv.jpg",developers:[R],features:["background","addons","homebtn","font"],meta:{name:"Frosted Glass",author:"Gibbu#1211",version:"2.0.0",description:"Display your picture of choice with adjustable blur and brightness. Dark theme is required",source:"https://github.com/DiscordStyles/FrostedGlass",invite:"ZHthyCw",donate:"https://paypal.me/IanRGibson",website:"https://gibbu.me",authorId:0x26d41d90e420000},imports:["https://discordstyles.github.io/FrostedGlass/base.css","https://discordstyles.github.io/Addons/windows-titlebar.css"],fonts:[],variables:[{title:"Main background",icon:"Photograph",inputs:[{type:"image",details:{variable:"background-image",start:"https://i.imgur.com/kYW2H5C.jpg",value:"",title:"Background image"}},{type:"slider",details:{variable:"background-image-blur",value:5,max:30,step:1,unit:"px",title:"Blur"}},{type:"options",details:{variable:"background-image-size",value:"cover",options:[{title:"Cover",value:"cover"},{title:"Contain",value:"contain"},{title:"Auto",value:"auto"},{title:"100%",value:"100%"},{title:"150%",value:"150%"},{title:"200%",value:"200%"}],title:"Size"}},{type:"options",details:{variable:"background-image-position",value:"center",options:[{title:"Top left",value:"top left"},{title:"Top centre",value:"top center"},{title:"Top right",value:"top right"},{title:"Centre left",value:"center left"},{title:"Centre",value:"center"},{title:"Centre right",value:"center right"},{title:"Bottom left",value:"Bottom left"},{title:"Bottom centre",value:"Bottom center"},{title:"Bottom right",value:"bottom right"}],title:"Position"}}]},{title:"Popout/Modal",icon:"Photograph",inputs:[{type:"image",details:{variable:"popout-modal-image",start:"var(--background-image)",value:"",title:"Popout modal image"}},{type:"slider",details:{variable:"popout-modal-blur",value:5,max:30,step:1,unit:"px",title:"Blur"}},{type:"options",details:{variable:"popout-modal-size",value:"cover",options:[{title:"Cover",value:"cover"},{title:"Contain",value:"contain"},{title:"Auto",value:"auto"},{title:"100%",value:"100%"},{title:"150%",value:"150%"},{title:"200%",value:"200%"}],title:"Size"}},{type:"options",details:{variable:"popout-modal-position",value:"center",options:[{title:"Top left",value:"top left"},{title:"Top centre",value:"top center"},{title:"Top right",value:"top right"},{title:"Centre left",value:"center left"},{title:"Centre",value:"center"},{title:"Centre right",value:"center right"},{title:"Bottom left",value:"Bottom left"},{title:"Bottom centre",value:"Bottom center"},{title:"Bottom right",value:"bottom right"}],title:"Position"}}]},{title:"Home button",icon:"Home",inputs:[{type:"image",details:{variable:"home-button-image",start:"https://gibbu.github.io/BetterDiscord-Themes/FrostedGlass/assets/discord.svg",value:"",title:"Home button image"}},{type:"options",details:{variable:"home-button-size",value:"cover",options:[{title:"Cover",value:"cover"},{title:"Contain",value:"contain"},{title:"Auto",value:"auto"},{title:"100%",value:"100%"},{title:"150%",value:"150%"},{title:"200%",value:"200%"}],title:"Image size"}},{type:"options",details:{variable:"home-button-position",value:"center",options:[{title:"Top left",value:"top left"},{title:"Top centre",value:"top center"},{title:"Top right",value:"top right"},{title:"Centre left",value:"center left"},{title:"Centre",value:"center"},{title:"Centre right",value:"center right"},{title:"Bottom left",value:"Bottom left"},{title:"Bottom centre",value:"Bottom center"},{title:"Bottom right",value:"bottom right"}],title:"Image position"}}]},{title:"Brightness",icon:"Sun",inputs:[{type:"slider",details:{variable:"serverlist-brightness",value:.8,max:1,step:.02,title:"Server list brightness"}},{type:"slider",details:{variable:"left-brightness",value:.8,max:1,step:.02,title:"Channels and DM list"}},{type:"slider",details:{variable:"middle-brightness",value:.6,max:1,step:.02,title:"Middle brightness",hint:"Chat and Settings"}},{type:"slider",details:{variable:"right-brightness",value:0,max:1,step:.02,title:"Right brightness",hint:"Members and Now Playing"}},{type:"slider",details:{variable:"popout-modal-brightness",value:.75,max:1,step:.02,title:"Popout/Modal brightness"}}]},{title:"Colours",icon:"ColorSwatch",inputs:[{type:"colour",details:{variable:"gradient-primary",value:"103,58,183",type:"RGB",title:"Gradient primary"}},{type:"colour",details:{variable:"gradient-secondary",value:"63,81,181",type:"RGB",title:"Gradient secondary"}},{type:"colour",details:{variable:"link-colour",value:"#00b0f4",type:"HEX",title:"Link colour"}},{type:"colour",details:{variable:"scrollbar-colour",value:"rgba(255,255,255,0.05)",type:"RGB",alpha:!0,rule:!0,title:"Scrollbar colour"}},{type:"slider",details:{variable:"gradient-direction",value:320,unit:"deg",max:360,step:1,title:"Gradient Direction"}}]},{title:"Backgrount tint",icon:"Cog",inputs:[{type:"colour",details:{variable:"tint-colour",value:"255,51,159",type:"RGB",title:"Tint colour"}},{type:"slider",details:{variable:"tint-brightness",value:0,max:1,step:.02,title:"Tint brightness"}}]},{title:"Custom font",icon:"MenuAlt1",inputs:[{type:"font",details:{variable:"font",index:0,value:"Whitney",title:"App font"}}]},{title:"Others",icon:"Cog",inputs:[{type:"slider",details:{variable:"window-padding",value:20,max:100,unit:"px",step:1,title:"Window padding",hint:"Spacing around Discord"}},{type:"slider",details:{variable:"window-roundness",value:10,max:100,unit:"px",step:1,title:"Window rounded",hint:"Roundness of Discord"}},{type:"options",details:{variable:"show-gift-gif-buttons",value:"none",options:[{title:"True",value:"block"},{title:"False",value:"none"}],title:"Show Gift and Gif buttons",customValue:!1}}]}],addons:["rs","columns","hsl"]},{name:"BasicBackground",preview:"https://mwittrien.github.io/BetterDiscordAddons/Themes/BasicBackground/BasicBackground.theme.css",image:"https://i.imgur.com/XORsntg.jpg",developers:[S],features:["background","addons","font"],meta:{name:"BasicBackground",author:"DevilBro",version:"1.0.5",description:"Allows you to use a background image without greatly altering the basic look of Discord",source:"https://raw.githubusercontent.com/mwittrien/BetterDiscordAddons/master/Themes/BasicBackground/BasicBackground.theme.css",invite:"Jx3TjNS",donate:"https://www.paypal.me/MircoWittrien",patreon:"https://www.patreon.com/MircoWittrien",website:"https://github.com/mwittrien/BetterDiscordAddons/tree/master/Themes/BasicBackground",authorId:0x3dd95e7a2420000,updateUrl:"https://raw.githubusercontent.com/mwittrien/BetterDiscordAddons/master/Themes/BasicBackground/BasicBackground.theme.css"},imports:["https://mwittrien.github.io/BetterDiscordAddons/Themes/BasicBackground/BasicBackground.css"],fonts:[],variables:[{title:"Background Image",icon:"Photograph",inputs:[{type:"image",details:{variable:"background",start:"https://mwittrien.github.io/BetterDiscordAddons/Themes/BasicBackground/_res/background.jpg",value:"",title:"Background Image"}},{type:"select",details:{variable:"backgroundsize",value:"cover",options:[{title:"Cover",value:"cover"},{title:"Contain",value:"contain"},{title:"Auto",value:"auto"},{title:"100%",value:"100%"},{title:"150%",value:"150%"},{title:"200%",value:"200%"}],title:"Size"}},{type:"slider",details:{variable:"backgroundblur",value:0,unit:"px",max:25,step:1,title:"Background image blur"}}]},{title:"Popout image",icon:"Photograph",inputs:[{type:"image",details:{variable:"popout",start:"var(--background)",value:"",title:"Popout background Image"}},{type:"select",details:{variable:"popoutsize",value:"var(--backgroundsize)",options:[{title:"Cover",value:"cover"},{title:"Contain",value:"contain"},{title:"Auto",value:"auto"},{title:"100%",value:"100%"},{title:"150%",value:"150%"},{title:"200%",value:"200%"}],title:"Size"}},{type:"slider",details:{variable:"popoutblur",value:0,unit:"px",max:25,step:1,title:"Popout image blur"}}]},{title:"Colours",icon:"ColorSwatch",inputs:[{type:"colour",details:{variable:"transparencycolor",value:"0,0,0",type:"RGB",title:"Transparency colour"}},{type:"colour",details:{variable:"accentcolor",value:"190,78,180",type:"RGB",title:"Accent colour"}},{type:"colour",details:{variable:"backdrop",value:"rgba(0,0,0,0.85)",alpha:!0,rule:!0,type:"RGB",title:"Backdrop colour",hint:"Backdrop = viewing profile/notification settings"}},{type:"colour",details:{variable:"textshadow",value:"transparent",alpha:!0,rule:!0,type:"RGB",title:"Text shadow colour",hint:"Text shadow for accent colour areas"}}]},{title:"Brightness",icon:"Sun",inputs:[{type:"slider",details:{variable:"transparencyalpha",value:.15,max:1,step:.02,title:"Transparency brightness",hint:"General darkness of the app"}},{type:"slider",details:{variable:"messagetransparency",value:.5,max:1,step:.02,title:"Message brightness"}},{type:"slider",details:{variable:"guildchanneltransparency",value:.15,max:1,step:.02,title:"Guild/Channel list brightness"}},{type:"slider",details:{variable:"memberlisttransparency",value:0,max:1,step:.02,title:"Members list brightness"}}]},{title:"Custom Font",icon:"MenuAlt1",inputs:[{type:"font",details:{variable:"font",index:0,value:"Whitney",title:"App font"}}]}],hiddenVars:[{variable:"backdropsize",value:"var(--background-size)"},{variable:"backdropblur",value:"0px"},{variable:"version1_0_5",value:"none"}],addons:["rs","columns","hsl"]},{name:"Clear Vision",preview:"https://clearvision.github.io/ClearVision-v6/ClearVision_v6.theme.css",image:"https://raw.githubusercontent.com/ClearVision/ClearVision-v6/master/screenshots/6-stable.4.7.9.png",developers:[{name:"ClearVision Team",github:"ClearVision"}],features:["background","addons","homebtn","font"],meta:{name:"ClearVision",author:"ClearVision Team",version:"6",description:"Highly customizable and beautiful theme for BetterDiscord",source:"https://github.com/ClearVision/ClearVision-v6",website:"https://clearvision.gitlab.io",invite:"2fKpjAR"},imports:["https://clearvision.gitlab.io/v6/main.css"],fonts:[],variables:[{title:"Colours",icon:"ColorSwatch",inputs:[{type:"colour",details:{variable:"main-color",value:"#2780e6",type:"HEX",title:"Main accent colour"}},{type:"colour",details:{variable:"hover-color",value:"#1e63b3",type:"HEX",title:"Hover accent color",hint:"Usually darker than Main accent colour"}},{type:"colour",details:{variable:"success-color",value:"#43b581",type:"HEX",title:"Success accent colour"}},{type:"colour",details:{variable:"danger-color",value:"#982929",type:"HEX",title:"Danger accent colour"}},{type:"colour",details:{variable:"url-color",value:"var(--main-color)",type:"HEX",title:"Url link colour"}}]},{title:"App background",icon:"Photograph",inputs:[{type:"image",details:{variable:"background-image",start:"https://clearvision.gitlab.io/images/sapphire.jpg",value:"",title:"App background image"}},{type:"slider",details:{variable:"background-shading",value:100,unit:"%",max:100,step:1,title:"Shading"}},{type:"select",details:{variable:"background-position",value:"center",options:[{title:"Top left",value:"top left"},{title:"Top centre",value:"top center"},{title:"Top right",value:"top right"},{title:"Centre left",value:"center left"},{title:"Centre",value:"center"},{title:"Centre right",value:"center right"},{title:"Bottom left",value:"Bottom left"},{title:"Bottom centre",value:"Bottom center"},{title:"Bottom right",value:"bottom right"}],title:"Position"}},{type:"select",details:{variable:"background-size",value:"cover",options:[{title:"Cover",value:"cover"},{title:"Contain",value:"contain"},{title:"Auto",value:"auto"},{title:"100%",value:"100%"},{title:"150%",value:"150%"},{title:"200%",value:"200%"}],title:"Size"}},{type:"select",details:{variable:"background-repeat",customValue:!1,value:"no-repeat",options:[{title:"True",value:"repeat"},{title:"False",value:"no-repeat"}],title:"Repeat"}},{type:"select",details:{variable:"background-attachment",customValue:!1,value:"fixed",options:[{title:"True",value:"fixed"},{title:"False",value:"scroll"}],title:"Fixed attachment"}},{type:"slider",details:{variable:"background-brightness",value:100,unit:"%",min:0,max:300,step:1,title:"Brightness"}},{type:"slider",details:{variable:"background-contrast",value:100,unit:"%",min:100,max:300,step:1,title:"Constrast"}},{type:"slider",details:{variable:"background-saturation",value:100,unit:"%",min:100,max:300,step:1,title:"Saturation"}},{type:"slider",details:{variable:"background-grayscale",value:0,unit:"%",max:100,step:1,title:"Grayscale"}},{type:"slider",details:{variable:"background-invert",value:0,unit:"%",max:100,step:1,title:"Invert"}},{type:"slider",details:{variable:"background-blur",value:0,unit:"px",max:25,step:1,title:"Blur"}},{type:"colour",details:{variable:"background-overlay",value:"rgba(0,0,0,0.6)",type:"RGB",alpha:!0,rule:!0,title:"Overlay colour"}}]},{title:"User popout",icon:"Photograph",inputs:[{type:"image",details:{variable:"user-popout-image",start:"https://clearvision.gitlab.io/images/sapphire.jpg",value:"",title:"User popout image"}},{type:"select",details:{variable:"user-popout-position",value:"center",options:[{title:"Top left",value:"top left"},{title:"Top centre",value:"top center"},{title:"Top right",value:"top right"},{title:"Centre left",value:"center left"},{title:"Centre",value:"center"},{title:"Centre right",value:"center right"},{title:"Bottom left",value:"Bottom left"},{title:"Bottom centre",value:"Bottom center"},{title:"Bottom right",value:"bottom right"}],title:"Position"}},{type:"select",details:{variable:"user-popout-size",value:"cover",options:[{title:"Cover",value:"cover"},{title:"Contain",value:"contain"},{title:"Auto",value:"auto"},{title:"100%",value:"100%"},{title:"150%",value:"150%"},{title:"200%",value:"200%"}],title:"Size"}},{type:"select",details:{variable:"user-popout-repeat",customValue:!1,value:"no-repeat",options:[{title:"True",value:"repeat"},{title:"False",value:"no-repeat"}],title:"Repeat"}},{type:"select",details:{variable:"user-popout-attachment",customValue:!1,value:"fixed",options:[{title:"True",value:"fixed"},{title:"False",value:"scroll"}],title:"Fixed attachment"}},{type:"slider",details:{variable:"user-popout-brightness",value:100,unit:"%",min:0,max:300,step:1,title:"Brightness"}},{type:"slider",details:{variable:"user-popout-contrast",value:100,unit:"%",min:100,max:300,step:1,title:"Constrast"}},{type:"slider",details:{variable:"user-popout-saturation",value:100,unit:"%",min:100,max:300,step:1,title:"Saturation"}},{type:"slider",details:{variable:"user-popout-grayscale",value:0,unit:"%",max:100,step:1,title:"Grayscale"}},{type:"slider",details:{variable:"user-popout-invert",value:0,unit:"%",max:100,step:1,title:"Invert"}},{type:"slider",details:{variable:"user-popout-blur",value:3,unit:"px",max:25,step:1,title:"Blur"}}]},{title:"User profile",icon:"User",modal:!0,inputs:[{type:"image",details:{variable:"user-modal-image",start:"https://clearvision.gitlab.io/images/sapphire.jpg",value:"",title:"User profile image"}},{type:"select",details:{variable:"user-modal-position",value:"center",options:[{title:"Top left",value:"top left"},{title:"Top centre",value:"top center"},{title:"Top right",value:"top right"},{title:"Centre left",value:"center left"},{title:"Centre",value:"center"},{title:"Centre right",value:"center right"},{title:"Bottom left",value:"Bottom left"},{title:"Bottom centre",value:"Bottom center"},{title:"Bottom right",value:"bottom right"}],title:"Position"}},{type:"select",details:{variable:"user-modal-size",value:"cover",options:[{title:"Cover",value:"cover"},{title:"Contain",value:"contain"},{title:"Auto",value:"auto"},{title:"100%",value:"100%"},{title:"150%",value:"150%"},{title:"200%",value:"200%"}],title:"Size"}},{type:"select",details:{variable:"user-modal-repeat",customValue:!1,value:"no-repeat",options:[{title:"True",value:"repeat"},{title:"False",value:"no-repeat"}],title:"Repeat"}},{type:"select",details:{variable:"user-modal-attachment",customValue:!1,value:"fixed",options:[{title:"True",value:"fixed"},{title:"False",value:"scroll"}],title:"Fixed attachment"}},{type:"slider",details:{variable:"user-modal-brightness",value:100,unit:"%",min:0,max:300,step:1,title:"Brightness"}},{type:"slider",details:{variable:"user-modal-contrast",value:100,unit:"%",min:100,max:300,step:1,title:"Constrast"}},{type:"slider",details:{variable:"user-modal-saturation",value:100,unit:"%",min:100,max:300,step:1,title:"Saturation"}},{type:"slider",details:{variable:"user-modal-grayscale",value:0,unit:"%",max:100,step:1,title:"Grayscale"}},{type:"slider",details:{variable:"user-modal-invert",value:0,unit:"%",max:100,step:1,title:"Invert"}},{type:"slider",details:{variable:"user-modal-blur",value:3,unit:"px",max:25,step:1,title:"Blur"}}]},{title:"Home button icon",icon:"Home",inputs:[{type:"image",details:{variable:"home-icon",start:"https://clearvision.gitlab.io/icons/discord.svg",value:"",title:"Home button image"}},{type:"select",details:{variable:"home-position",value:"center",options:[{title:"Top left",value:"top left"},{title:"Top centre",value:"top center"},{title:"Top right",value:"top right"},{title:"Centre",value:"center"},{title:"Bottom right",value:"bottom right"},{title:"Bottom centre",value:"bottom center"},{title:"Bottom left",value:"bottom left"}],title:"Position"}},{type:"number",details:{variable:"home-size",value:40,unit:"px",title:"Size"}}]},{title:"Channel colours",icon:"Server",inputs:[{type:"colour",details:{variable:"channel-unread",value:"var(--main-color)",type:"HEX",title:"Unread channel colour"}},{type:"colour",details:{variable:"channel-color",value:"rgba(255,255,255,0.3)",type:"RGB",rule:!0,alpha:!0,title:"Channel colour"}},{type:"colour",details:{variable:"channel-color",value:"rgba(255,255,255,0.1)",type:"RGB",rule:!0,alpha:!0,title:"Muted colour"}}]},{title:"Status colours",icon:"Globe",inputs:[{type:"colour",details:{variable:"online-color",value:"#43b581",type:"HEX",title:"Online status color"}},{type:"colour",details:{variable:"idle-color",value:"#faa61a",type:"HEX",title:"Idle status color"}},{type:"colour",details:{variable:"dnd-color",value:"#982929",type:"HEX",title:"Do not Disturb status color"}},{type:"colour",details:{variable:"streaming-color",value:"#593695",type:"HEX",title:"Streaming status color"}},{type:"colour",details:{variable:"offline-color",value:"#808080",type:"HEX",title:"Offline status color"}}]},{title:"Custom fonts",icon:"MenuAlt1",inputs:[{type:"font",details:{variable:"main-font",value:"Whitney",index:0,title:"Main font"}},{type:"font",details:{variable:"code-font",value:"Consolas",index:1,title:"Code font"}}]},{title:"Others",icon:"Cog",inputs:[{type:"number",details:{variable:"channels-width",value:220,unit:"px",title:"Channels width"}},{type:"number",details:{variable:"members-width",value:240,unit:"px",title:"Members list width"}}]}],hiddenVars:[{variable:"backdrop-overlay",value:"rgba(0,0,0,0.8)"},{variable:"backdrop-image",value:"var(--background-image)"},{variable:"backdrop-position",value:"var(--background-position)"},{variable:"backdrop-size",value:"var(--background-size)"},{variable:"backdrop-repeat",value:"var(--background-repeat)"},{variable:"backdrop-attachment",value:"var(--background-attachment)"},{variable:"backdrop-brightness",value:"var(--background-brightness)"},{variable:"backdrop-contrast",value:"var(--background-contrast)"},{variable:"backdrop-saturation",value:"var(--background-saturation)"},{variable:"backdrop-invert",value:"var(--background-invert)"},{variable:"backdrop-grayscale",value:"var(--background-grayscale)"},{variable:"backdrop-sepia",value:"var(--background-sepia)"},{variable:"backdrop-blur",value:"var(--background-blur)"},{variable:"bd-blue",value:"var(--main-color)"},{variable:"bd-blue-hover",value:"var(--hover-color)"},{variable:"bd-blue-active",value:"var(--hover-color)"}],addons:["rs","columns","hsl"]},{name:"NotAnotherAnimeTheme",preview:"https://puckzxz.github.io/NotAnotherAnimeTheme/NotAnotherAnimeThemeSCSL.theme.css",image:"https://raw.githubusercontent.com/puckzxz/NotAnotherAnimeTheme/master/image/header.jpg",developers:[{name:"Puckzxz",tag:2080,github:"Puckzxz",paypal:"https://www.paypal.me/ChrisBock"}],features:["background","addons","homebtn","font"],meta:{name:"NotAnotherAnimeTheme",author:"puckzxz#2080",version:"2.2",description:"An easily customizable and automatically updating theme",invite:"FdZhbjY",source:"https://github.com/puckzxz/NotAnotherAnimeTheme"},imports:["https://puckzxz.github.io/NotAnotherAnimeTheme/css/scsl.css"],fonts:[],variables:[{title:"Background Image",icon:"Photograph",inputs:[{type:"image",details:{variable:"background-image",start:"https://i.imgur.com/kYW2H5C.jpg",value:"",title:"Background Image"}}]},{title:"Home button image",icon:"Home",inputs:[{type:"image",details:{variable:"friends-icon",start:"https://i.imgur.com/kYW2H5C.jpg",value:"",title:"Home button image"}},{type:"slider",details:{variable:"friends-icon-zoom",value:100,unit:"%",max:200,step:1,title:"Zoom"}},{type:"select",details:{variable:"friends-icon-position",value:"center",options:[{title:"Top left",value:"top left"},{title:"Top centre",value:"top center"},{title:"Top right",value:"top right"},{title:"Centre left",value:"center left"},{title:"Centre",value:"center"},{title:"Centre right",value:"center right"},{title:"Bottom left",value:"Bottom left"},{title:"Bottom centre",value:"Bottom center"},{title:"Bottom right",value:"bottom right"}],title:"Image position"}}]},{title:"Colours",icon:"ColorSwatch",inputs:[{type:"colour",details:{variable:"main-color",value:"rgb(67,181,129)",rule:!0,type:"RGB",title:"Main"}},{type:"colour",details:{variable:"main-transparency",value:"rgba(0, 0, 0, 0.8)",alpha:!0,rule:!0,type:"RGB",title:"Main transparency"}},{type:"colour",details:{variable:"hover-list-bg-color",value:"rgba(0,0,0,0.15)",alpha:!0,rule:!0,type:"RGB",title:"Friends and members list background"}},{type:"colour",details:{variable:"border-lines-color",value:"rgba(0,0,0,0.1)",alpha:!0,rule:!0,type:"RGB",title:"Message divider"}},{type:"colour",details:{variable:"scroll-bar-color",value:"rgba(255,255,255,.15)",alpha:!0,rule:!0,type:"RGB",title:"Scrollbar"}},{type:"colour",details:{variable:"selected-text-voice-color",value:"#f6f6f7",type:"HEX",title:"Selected channel"}},{type:"colour",details:{variable:"channel-hover-text-color",value:"rgba(255, 255, 255, 0.75)",alpha:!0,rule:!0,type:"RGB",title:"Hovered channel"}},{type:"colour",details:{variable:"unread-text-color",value:"67,181,129",alpha:!0,rule:!0,type:"RGB",title:"Unread text"}},{type:"colour",details:{variable:"user-popup-background",value:"rgba(0,0,0,0.8)",alpha:!0,rule:!0,type:"RGB",title:"User popup background"}}]},{title:"Others",icon:"Cog",inputs:[{type:"number",details:{variable:"font-size",value:16,unit:"px",title:"Chat font size"}},{type:"text",details:{variable:"unread-server-animation",value:"rainbow",title:"Unread server animation",hint:'Replace it with "none" in order to remove any animations and use the main color instead'}}]}],addons:["rs","columns","hsl"]},{name:"Reborn",preview:"https://monstrousdev.github.io/themes/theme-files/Reborn.theme.css",image:"https://camo.githubusercontent.com/737a92652884703c623bf8093f8bdf5121741375/68747470733a2f2f692e696d6775722e636f6d2f303943635242462e6a7067",developers:[H],features:["background"],meta:{name:"Reborn",author:"MonsterDev",version:"1.5",description:"Phoenix Theme Bundle: Transparent, fully customizable theme with multiple addons",invite:"TeRQEPb",authorId:0x59528ec33c20000,source:"https://github.com/monstrousdev/themes/theme-files/Reborn.theme.css"},imports:["https://monstrousdev.github.io/themes/phoenix-bundle/reborn.css"],fonts:[],variables:[{title:"Background image",icon:"Photograph",inputs:[{type:"image",details:{variable:"background-image",start:"https://s-media-cache-ak0.pinimg.com/originals/60/c4/bb/60c4bb55215c989b15b0fe144c73cf82.jpg",value:"",title:"Background image"}},{type:"image",details:{variable:"popup-background",start:"https://s-media-cache-ak0.pinimg.com/originals/60/c4/bb/60c4bb55215c989b15b0fe144c73cf82.jpg",value:"",title:"Popout image"}},{type:"slider",details:{variable:"background-blur",value:0,unit:"px",max:25,step:1,title:"Background image blur"}},{type:"slider",details:{variable:"background-darkness",value:.75,max:1,step:.01,title:"Background image darkness"}}]},{title:"Colours",icon:"ColorSwatch",inputs:[{type:"colour",details:{variable:"main-color",value:"#007dbd",type:"HEX",title:"Main colour"}},{type:"colour",details:{variable:"hover-color",value:"#03679b",type:"HEX",title:"Hover colour",hint:"Usually darker than Main colour"}}]},{title:"Others",icon:"Cog",inputs:[{type:"slider",details:{variable:"roundness",value:50,unit:"px",max:50,step:1,title:"Roundness"}},{type:"colour",details:{variable:"shadow",value:"rgba(0,0,0,.4)",alpha:!0,rule:!0,type:"RGB",title:"Shadow colour"}}]}]},{name:"Tranquil",preview:"https://monstrousdev.github.io/themes/theme-files/Tranquil.theme.css",image:"https://camo.githubusercontent.com/99be7dd5541e0d05b5161054bc5a526bee786055029c693a13f7e71fa3200109/68747470733a2f2f692e696d6775722e636f6d2f344576764463382e706e67",developers:[H],features:[],meta:{name:"Tranquil",author:"MonsterDev",version:"1.5",description:"Phoenix Theme Bundle: Primarily dark theme that's easy on the eyes [Also supports light theme which is less easy on the eyes]",invite:"TeRQEPb",authorId:0x59528ec33c20000,source:"https://github.com/monstrousdev/themes/blob/master/theme-files/Tranquil.theme.css"},imports:["https://monstrousdev.github.io/themes/phoenix-bundle/tranquil.css"],fonts:[],variables:[{title:"Colours",icon:"ColorSwatch",inputs:[{type:"colour",details:{variable:"main-color",value:"#8d2036",type:"HEX",title:"Main colour"}},{type:"colour",details:{variable:"hover-color",value:"#6f182a",type:"HEX",title:"Hover colour",hint:"Usually darker than Main colour"}},{type:"colour",details:{variable:"home-color",value:"#eee",type:"HEX",title:"Home button colour"}}]},{title:"Others",icon:"Cog",inputs:[{type:"slider",details:{variable:"roundness",value:50,unit:"px",max:50,step:1,title:"Roundness"}},{type:"colour",details:{variable:"shadow",value:"rgba(0,0,0,.4)",alpha:!0,rule:!0,type:"RGB",title:"Shadow colour"}}]}]},{name:"MinimalCord",preview:"https://discordstyles.github.io/MinimalCord/MinimalCord.theme.css",image:"https://camo.githubusercontent.com/e9a46ff5510743194cef44df2f4ba72978d690f327d0eb039cef092833b99f7a/68747470733a2f2f692e696d6775722e636f6d2f57333364674d4a2e706e67",developers:[R],features:[],meta:{name:"MinimalCord",author:"Gibbu#1211",version:"2.0.0",description:"Changes Discord enough to give it a fresh feel while also making it darker. Supports both Light and Dark themes",invite:"ZHthyCw",authorId:0x26d41d90e420000,donate:"https://paypal.me/IanRGibson",website:"https://github.com/Gibbu/BetterDiscord-Themes/tree/master/MinimalCord",source:"https://github.com/monstrousdev/themes/theme-files/Reborn.theme.css"},imports:["https://discordstyles.github.io/MinimalCord/base.css"],fonts:[],variables:[{title:"Colours",icon:"ColorSwatch",inputs:[{type:"colour",details:{variable:"accent",value:"50,131,207",type:"RGB",title:"Accent colour"}}]},{title:"Chat messages",icon:"Chat",inputs:[{type:"slider",details:{variable:"message-padding",value:10,unit:"px",max:35,title:"Message padding"}},{type:"slider",details:{variable:"message-spacing",value:10,unit:"px",max:35,title:"Message spacing"}}]}],addons:["hsl","columns","radialstatus"]}];export{T as I,A as T,S as a,R as d,G as l,z as p,M as t};
