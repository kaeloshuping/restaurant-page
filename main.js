(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var n=e.g.document;if(!t&&n&&(n.currentScript&&(t=n.currentScript.src),!t)){var r=n.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!t;)t=r[o--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})();const t=e.p+"1c4a0d5eaf4e68366dc6.jpeg",n=document.getElementById("content");let r=new class{constructor(e){this.container=e}get currentPage(){const e=document.createElement("div");return e.appendChild(this.container),e}set currentPage(e){this.container=e}};r.currentPage=function(){const e=document.createElement("div");e.id="home-content";const n=document.createElement("h3");n.id="home-header",n.innerHTML="Welcome To The Best Local Restaurant";const r=new Image;r.src=t;const o=document.createElement("h4");return o.id="home-footer",o.innerHTML="Click on our MENU tab for our menu and the ABOUT tab to learn more about us!",e.appendChild(n),e.appendChild(r),e.appendChild(o),e}();let o=r.currentPage;n.appendChild(function(){const e=document.createElement("div");e.id="page-header";const t=document.createElement("div");t.className="header-tabs",t.id="home";const n=document.createElement("div");n.className="header-tabs",n.id="menu";const r=document.createElement("div");return r.className="header-tabs",r.id="about",t.innerHTML="HOME",n.innerHTML="MENU",r.innerHTML="ABOUT",e.appendChild(t),e.appendChild(n),e.appendChild(r),e}()),n.appendChild(o),n.appendChild(function(){const e=document.createElement("div");return e.id="page-footer",e.innerHTML="Created by @Copasetic Demon 2023",e}()),document.querySelectorAll(".header-tabs").forEach((e=>{e.addEventListener("click",(()=>{if(console.log(e.id),"about"===e.id){console.log("About tab is Clicked!"),r.currentPage=function(){const e=document.createElement("div");e.id="about-content";const t=document.createElement("div");t.id="about-header",t.innerHTML="ABOUT US";let n=document.createElement("div");n.id="about-text",n.innerHTML="";for(let e=0;e<5;e++)n.innerHTML+="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";return e.appendChild(t),e.appendChild(n),e}();let e=r.currentPage;console.log(e.id),n.replaceChild(e,o)}}))}))})();