(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var n=e.g.document;if(!t&&n&&(n.currentScript&&(t=n.currentScript.src),!t)){var c=n.getElementsByTagName("script");if(c.length)for(var a=c.length-1;a>-1&&!t;)t=c[a--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})();const t=e.p+"1c4a0d5eaf4e68366dc6.jpeg";function n(){const e=document.createElement("div");e.id="home-content";const n=document.createElement("h3");n.id="home-header",n.innerHTML="Welcome To The Best Local Restaurant";const c=new Image;c.src=t;const a=document.createElement("h4");return a.id="home-footer",a.innerHTML="Click on our MENU tab for our menu and the ABOUT tab to learn more about us!",e.appendChild(n),e.appendChild(c),e.appendChild(a),e}const c=e.p+"1c4a0d5eaf4e68366dc6.jpeg",a=e.p+"cd776fd4558f4419dbe9.jpeg",r=e.p+"391381404be4aff1c6a1.jpeg",i=e.p+"3ceaf3ba923568a0a5f7.jpeg",o=e.p+"b62bdb57c120470764e4.jpeg",d=e.p+"5d2b59e96bec6c4fa812.jpeg",m=e.p+"87ea2fdff58d8ce5caad.jpeg";function s(e,t){e.appendChild(t)}const l=document.getElementById("content");let u=new class{constructor(e){this.container=e}get currentPage(){const e=document.createElement("div");return e.appendChild(this.container),e}set currentPage(e){this.container=e}};u.currentPage=n();let p=u.currentPage;l.appendChild(function(){const e=document.createElement("div");e.id="page-header";const t=document.createElement("div");t.className="header-tabs",t.id="home";const n=document.createElement("div");n.className="header-tabs",n.id="menu";const c=document.createElement("div");return c.className="header-tabs",c.id="about",t.innerHTML="HOME",n.innerHTML="MENU",c.innerHTML="ABOUT",e.appendChild(t),e.appendChild(n),e.appendChild(c),e}()),l.appendChild(u.currentPage),l.appendChild(function(){const e=document.createElement("div");return e.id="page-footer",e.innerHTML="Created by @Copasetic Demon 2023",e}()),document.querySelectorAll(".header-tabs").forEach((e=>{e.addEventListener("click",(()=>{if("about"===e.id){u.currentPage=function(){const e=document.createElement("div");e.id="about-content";const t=document.createElement("div");t.id="about-header",t.innerHTML="ABOUT US";let n=document.createElement("div");n.id="about-text",n.innerHTML="";for(let e=0;e<5;e++)n.innerHTML+="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";return e.appendChild(t),e.appendChild(n),e}();let e=u.currentPage;console.log(l.children[1].id),l.children[1].remove(),l.insertBefore(e,l.children[1])}else if("home"===e.id)u.currentPage=n(),p=u.currentPage,console.log(l.children[1].id),l.children[1].remove(),l.insertBefore(p,l.children[1]);else if("menu"===e.id){u.currentPage=function(){const e=document.createElement("div");e.id="menu-content-container";const t=new Image;t.src=c,t.className="menu-img";const n=document.createElement("div");n.className="menu-item",n.id="braai-plate";const l=document.createElement("div");l.innerHTML="BRAAI PLATE",l.id="braai-plate-text",s(n,l),s(n,t);const u=new Image;u.src=a,u.className="menu-img";const p=document.createElement("div");p.className="menu-item",p.id="braai-platter";const g=document.createElement("div");g.innerHTML="BRAAI PLATTER",g.id="braai-platter-text",s(p,g),s(p,u);const h=new Image;h.src=r,h.className="menu-img";const E=document.createElement("div");E.className="menu-item",E.id="bunny-chow";const f=document.createElement("div");f.innerHTML="BUNNY CHOW",f.id="bunny-chow-text",s(E,f),s(E,h);const v=new Image;v.src=i,v.className="menu-img";const b=document.createElement("div");b.className="menu-item",b.id="potjie-stew";const T=document.createElement("div");T.innerHTML="BEEF STEW POTJIE",T.id="potjie-stew-text",s(b,T),s(b,v);const N=new Image;N.src=o,N.className="menu-img";const L=document.createElement("div");L.className="menu-item",L.id="vetkoek-mince";const w=document.createElement("div");w.innerHTML="VETKOEK & MINCE",w.id="vetkoek-mince-text",s(L,w),s(L,N);const M=new Image;M.src=d,M.className="menu-img";const C=document.createElement("div");C.className="menu-item",C.id="koeksisters";const H=document.createElement("div");H.innerHTML="KOEKSISTERS",H.id="koeksister-text",s(C,H),s(C,M);const P=new Image;P.src=m,P.className="menu-img";const I=document.createElement("div");I.className="menu-item",I.id="malva-pudding";const A=document.createElement("div");return A.innerHTML="MALVA PUDDING",A.id="malva-pudding-text",s(I,A),s(I,P),s(e,n),s(e,p),s(e,E),s(e,b),s(e,L),s(e,C),s(e,I),e}();let e=u.currentPage;console.log(l.children[1].id),l.children[1].remove(),l.insertBefore(e,l.children[1])}}))}))})();