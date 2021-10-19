import{S as q,i as V,s as W,e as h,t as L,a as g,b as r,c as M,d as o,n as A,f as G,g as j}from"./vendor.c9ddb9cc.js";const K=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const c of i)if(c.type==="childList")for(const p of c.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&s(p)}).observe(document,{childList:!0,subtree:!0});function t(i){const c={};return i.integrity&&(c.integrity=i.integrity),i.referrerpolicy&&(c.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?c.credentials="include":i.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(i){if(i.ep)return;i.ep=!0;const c=t(i);fetch(i.href,c)}};K();const H=[{name:"SoftX",description:"A soft and comfy feel for Discord.",bd_download:515,new:!0},{name:"Slate",description:"An optimized, consistent, and functional theme for Discord based on GitHub's design language.",bd_download:1},{name:"Frosted Glass",description:"Display your picture of choice with adjustable blur and brightness.",bd_download:40},{name:"MinimalCord",description:"Changes Discord enough to give it a fresh feel while also making it darker.",bd_download:125},{name:"iPadOS",description:"Discord redesigned to be simplified. Design by jacktompsett on Behance.",bd_download:402},{name:"SimplyDark",description:"A sharp and simple theme for Discord.",bd_download:394},{name:"RadialStatus",description:"Changes the status icons to wrap around the avatar.",bd_download:32},{name:"Horizontal Server List",description:"Moves the server list from the left to the top of Discord.",bd_download:124}],P=[{name:"BetterDiscord Theme Editor",description:"Customize BetterDiscord Themes with an easy to use interface.",href:"https://github.com/Gibbu/BDThemeEditor"},{name:"BDThemeTemplate",description:"Quick template to create BetterDiscord themes using SCSS.",href:"https://github.com/Gibbu/BDThemeTemplate"},{name:"BetterDiscordLibrary",description:"A website to view all available themes and plugins for BetterDiscord.",href:"https://github.com/Gibbu/BetterDiscordLibrary",archived:!0}],E=[{title:"GitHub",text:"All my l33t codes.",href:"https://github.com/Gibbu"},{title:"Twitter",text:"@Gibbu_",href:"https://twitter.com/Gibbu_"},{title:"YouTube",text:"All my poggers videos.",href:"https://www.youtube.com/channel/UCtaIPbqgwFCFPaAm9fRdh5g"},{title:"Twitch",text:"Watch me never.",href:"https://twitch.tv/Gibbu"},{title:"PayPal",text:"Donate to the Gibbu fundraiser.",href:"https://paypal.me/IanRGibson"}];function z(a,e,t){const s=a.slice();return s[0]=e[t],s}function I(a,e,t){const s=a.slice();return s[3]=e[t],s}function O(a,e,t){const s=a.slice();return s[6]=e[t],s}function Q(a){let e;return{c(){e=h("span"),e.textContent="NEW",r(e,"class","svelte-mxe4wl")},m(t,s){M(t,e,s)},d(t){t&&G(e)}}}function F(a){var D;let e,t,s,i=a[6].name+"",c,p,b,m,x=a[6].description+"",k,y,f,d=((D=a[6])==null?void 0:D.new)&&Q();return{c(){e=h("li"),t=h("a"),s=h("h4"),c=L(i),p=g(),d&&d.c(),b=g(),m=h("p"),k=L(x),f=g(),r(s,"class","svelte-mxe4wl"),r(m,"class","svelte-mxe4wl"),r(t,"href",y="https://github.com/DiscordStyles/"+a[6].name),r(t,"target","_blank"),r(t,"rel","noreferrer"),r(t,"class","svelte-mxe4wl"),r(e,"class","svelte-mxe4wl")},m(v,u){M(v,e,u),o(e,t),o(t,s),o(s,c),o(s,p),d&&d.m(s,null),o(t,b),o(t,m),o(m,k),o(e,f)},p:A,d(v){v&&G(e),d&&d.d()}}}function U(a){let e;return{c(){e=h("small"),e.textContent="ARCHIVED",r(e,"class","svelte-mxe4wl")},m(t,s){M(t,e,s)},d(t){t&&G(e)}}}function N(a){var D;let e,t,s,i=a[3].name+"",c,p,b,m,x=a[3].description+"",k,y,f,d=((D=a[3])==null?void 0:D.archived)&&U();return{c(){e=h("li"),t=h("a"),s=h("h4"),c=L(i),p=g(),d&&d.c(),b=g(),m=h("p"),k=L(x),f=g(),r(s,"class","svelte-mxe4wl"),r(m,"class","svelte-mxe4wl"),r(t,"href",y=a[3].href),r(t,"target","_blank"),r(t,"rel","noreferrer"),r(t,"class","svelte-mxe4wl"),r(e,"class","svelte-mxe4wl")},m(v,u){M(v,e,u),o(e,t),o(t,s),o(s,c),o(s,p),d&&d.m(s,null),o(t,b),o(t,m),o(m,k),o(e,f)},p:A,d(v){v&&G(e),d&&d.d()}}}function R(a){let e,t,s,i=a[0].title+"",c,p,b,m=a[0].text+"",x,k,y;return{c(){e=h("li"),t=h("a"),s=h("h4"),c=L(i),p=g(),b=h("p"),x=L(m),y=g(),r(s,"class","svelte-mxe4wl"),r(b,"class","svelte-mxe4wl"),r(t,"href",k=a[0].href),r(t,"target","_blank"),r(t,"rel","noreferrer"),r(t,"class","svelte-mxe4wl"),r(e,"class","svelte-mxe4wl")},m(f,d){M(f,e,d),o(e,t),o(t,s),o(s,c),o(t,p),o(t,b),o(b,x),o(e,y)},p:A,d(f){f&&G(e)}}}function X(a){let e,t,s,i,c,p,b,m,x,k,y,f,d,D,v=H,u=[];for(let n=0;n<v.length;n+=1)u[n]=F(O(a,v,n));let B=P,w=[];for(let n=0;n<B.length;n+=1)w[n]=N(I(a,B,n));let S=E,_=[];for(let n=0;n<S.length;n+=1)_[n]=R(z(a,S,n));return{c(){e=h("main"),t=h("h1"),t.innerHTML='Creator of the <span class="svelte-mxe4wl">BEST</span> Discord themes.',s=g(),i=h("ul"),c=h("li"),c.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="svelte-mxe4wl"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path></svg> 
        <h3 class="svelte-mxe4wl">Discord Themes</h3>`,p=g();for(let n=0;n<u.length;n+=1)u[n].c();b=g(),m=h("ul"),x=h("li"),x.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="svelte-mxe4wl"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg> 
        <h3 class="svelte-mxe4wl">Projects</h3>`,k=g();for(let n=0;n<w.length;n+=1)w[n].c();y=g(),f=h("ul"),d=h("li"),d.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="svelte-mxe4wl"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path></svg> 
        <h4 class="svelte-mxe4wl">Links</h4>`,D=g();for(let n=0;n<_.length;n+=1)_[n].c();r(t,"class","svelte-mxe4wl"),r(c,"class","svelte-mxe4wl"),r(i,"class","svelte-mxe4wl"),r(x,"class","svelte-mxe4wl"),r(m,"class","svelte-mxe4wl"),r(d,"class","svelte-mxe4wl"),r(f,"class","svelte-mxe4wl"),r(e,"class","svelte-mxe4wl")},m(n,C){M(n,e,C),o(e,t),o(e,s),o(e,i),o(i,c),o(i,p);for(let l=0;l<u.length;l+=1)u[l].m(i,null);o(e,b),o(e,m),o(m,x),o(m,k);for(let l=0;l<w.length;l+=1)w[l].m(m,null);o(e,y),o(e,f),o(f,d),o(f,D);for(let l=0;l<_.length;l+=1)_[l].m(f,null)},p(n,[C]){if(C&0){v=H;let l;for(l=0;l<v.length;l+=1){const T=O(n,v,l);u[l]?u[l].p(T,C):(u[l]=F(T),u[l].c(),u[l].m(i,null))}for(;l<u.length;l+=1)u[l].d(1);u.length=v.length}if(C&0){B=P;let l;for(l=0;l<B.length;l+=1){const T=I(n,B,l);w[l]?w[l].p(T,C):(w[l]=N(T),w[l].c(),w[l].m(m,null))}for(;l<w.length;l+=1)w[l].d(1);w.length=B.length}if(C&0){S=E;let l;for(l=0;l<S.length;l+=1){const T=z(n,S,l);_[l]?_[l].p(T,C):(_[l]=R(T),_[l].c(),_[l].m(f,null))}for(;l<_.length;l+=1)_[l].d(1);_.length=S.length}},i:A,o:A,d(n){n&&G(e),j(u,n),j(w,n),j(_,n)}}}class Y extends q{constructor(e){super();V(this,e,null,X,W,{})}}new Y({target:document.getElementById("app")});
