(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var n=e.g.document;if(!t&&n&&(n.currentScript&&(t=n.currentScript.src),!t)){var c=n.getElementsByTagName("script");if(c.length)for(var r=c.length-1;r>-1&&!t;)t=c[r--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})();const t=e.p+"1c4a0d5eaf4e68366dc6.jpeg";function n(){const e=document.createElement("div");e.id="home-content";const n=document.createElement("h3");n.id="home-header",n.innerHTML="Welcome To The Best Local Restaurant";const c=new Image;c.src=t;const r=document.createElement("h4");return r.id="home-footer",r.innerHTML="Click on our MENU tab for our menu and the ABOUT tab to learn more about us!",e.appendChild(n),e.appendChild(c),e.appendChild(r),e}const c=e.p+"1c4a0d5eaf4e68366dc6.jpeg",r=e.p+"cd776fd4558f4419dbe9.jpeg",i=e.p+"391381404be4aff1c6a1.jpeg",a=e.p+"3ceaf3ba923568a0a5f7.jpeg",o=e.p+"b62bdb57c120470764e4.jpeg",d=e.p+"5d2b59e96bec6c4fa812.jpeg",m=e.p+"87ea2fdff58d8ce5caad.jpeg";function s(e,t){e.appendChild(t)}const l=document.getElementById("content");let u=new class{constructor(e){this.container=e}get currentPage(){const e=document.createElement("div");return e.appendChild(this.container),e}set currentPage(e){this.container=e}};u.currentPage=n();let p=u.currentPage;l.appendChild(function(){const e=document.createElement("div");e.id="page-header";const t=document.createElement("div");t.className="header-tabs",t.id="home";const n=document.createElement("div");n.className="header-tabs",n.id="menu";const c=document.createElement("div");return c.className="header-tabs",c.id="about",t.innerHTML="HOME",n.innerHTML="MENU",c.innerHTML="ABOUT",e.appendChild(t),e.appendChild(n),e.appendChild(c),e}()),l.appendChild(u.currentPage),l.appendChild(function(){const e=document.createElement("div");return e.id="page-footer",e.innerHTML="Created by @Copasetic Demon 2023",e}()),document.querySelectorAll(".header-tabs").forEach((e=>{e.addEventListener("click",(()=>{if("about"===e.id){u.currentPage=function(){const e=document.createElement("div");e.id="about-content";const t=document.createElement("div");t.id="about-header",t.innerHTML="ABOUT US";let n=document.createElement("div");n.id="about-text",n.innerHTML="";for(let e=0;e<5;e++)n.innerHTML+="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";return e.appendChild(t),e.appendChild(n),e}();let e=u.currentPage;console.log(l.children[1].id),l.children[1].remove(),l.insertBefore(e,l.children[1])}else if("home"===e.id)u.currentPage=n(),p=u.currentPage,console.log(l.children[1].id),l.children[1].remove(),l.insertBefore(p,l.children[1]);else if("menu"===e.id){u.currentPage=function(){const e=document.createElement("div");e.id="menu-content-container";const t=new Image;t.src=c;const n=document.createElement("div");n.className="menu-item",n.id="braai-plate";const l=document.createElement("div");l.innerHTML="BRAAI PLATE",l.id="braai-plate-text",s(n,l),s(n,t);const u=new Image;u.src=r;const p=document.createElement("div");p.className="menu-item",p.id="braai-platter";const h=document.createElement("div");h.innerHTML="BRAAI PLATTER",h.id="braai-platter-text",s(p,h),s(p,u);const g=new Image;g.src=i;const E=document.createElement("div");E.className="menu-item",E.id="bunny-chow";const f=document.createElement("div");f.innerHTML="BUNNY CHOW",f.id="bunny-chow-text",s(E,f),s(E,g);const v=new Image;v.src=a;const b=document.createElement("div");b.className="menu-item",b.id="potjie-stew";const T=document.createElement("div");T.innerHTML="BEEF STEW POTJIE",T.id="potjie-stew-text",s(b,T),s(b,v);const L=new Image;L.src=o;const w=document.createElement("div");w.className="menu-item",w.id="vetkoek-mince";const M=document.createElement("div");M.innerHTML="VETKOEK & MINCE",M.id="vetkoek-mince-text",s(w,M),s(w,L);const C=new Image;C.src=d;const H=document.createElement("div");H.className="menu-item",H.id="koeksisters";const N=document.createElement("div");N.innerHTML="KOEKSISTERS",N.id="koeksister-text",s(H,N),s(H,C);const P=new Image;P.src=m;const I=document.createElement("div");I.className="menu-item",I.id="malva-pudding";const A=document.createElement("div");return A.innerHTML="MALVA PUDDING",A.id="malva-pudding-text",s(I,A),s(I,P),s(e,n),s(e,p),s(e,E),s(e,b),s(e,w),s(e,H),s(e,I),e}();let e=u.currentPage;console.log(l.children[1].id),l.children[1].remove(),l.insertBefore(e,l.children[1])}}))}))})();