(()=>{"use strict";var e={208:(e,n,t)=>{t.d(n,{A:()=>m});var o=t(601),r=t.n(o),a=t(314),i=t.n(a),c=t(417),s=t.n(c),d=new URL(t(655),t.b),u=i()(r()),l=s()(d);u.push([e.id,`/*\nJosh's Custom CSS Reset\nhttps://www.joshwcomeau.com/css/custom-css-reset/\n*/\n\n*, *::before, *::after {\nbox-sizing: border-box;\n}\n* {\nmargin: 0;\n} \nbody {\nline-height: 1.5;\n-webkit-font-smoothing: antialiased;\nheight: 100%;\n}\n\nimg, picture, video, canvas, svg {\ndisplay: block;\nmax-width: 100%;\n}\ninput, button, textarea, select {\nfont: inherit;\n}\np, h1, h2, h3, h4, h5, h6 {\noverflow-wrap: break-word;\n}\n\nhtml\n{\n    -ms-overflow-style: none;  /* IE and Edge */\n    -ms-overflow-style: none;  /* IE and Edge */\n    scrollbar-width: none;\n}\n\nbody\n{\n    height: 100vh;\n    background-image: url(${l});\n    background-size:cover;\n}\n\nnav\n{\n    padding: 1rem;\n    display: flex;\n    justify-content: space-around;\n}\n\n.home-heading\n{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    \n    color: white;\n    font-weight: 900;\n    font-size: 6rem;\n    background:rgb(9, 6, 6,0.65);\n    padding: 1rem;\n    margin:30vh 0;\n}\n\n.about-us-text,.contact-us\n{\n    color: white;\n    font-size: 1.5rem;\n    display: grid;\n    justify-content: center;\n    grid-template-columns: 1fr minmax(auto,50vw) 1fr;\n    text-align: justify;\n    margin:20vh 0;\n}\n.about-us-item,.email,.number,.address\n{\n    grid-column: 2/3;\n    background:rgb(9, 6, 6,0.7);\n    padding: 1rem;\n}\n.email,.number,.address\n{\n    text-align: center;\n    font-size: 2rem;\n}\n.email:hover,.number:hover,.address:hover,.about-us-item:hover\n{\n    transform: scale(1.2);\n}\n.menu-container\n{\n    display: grid;\n    padding: 1rem;\n    /* grid-template-columns: 1fr 1fr 1fr; */\n    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n    justify-items: center;\n    background:rgb(9, 6, 6,0.7);    \n    gap: 5rem;\n    margin-top: 3rem;\n}\nimg\n{\n    width: 250px;\n    height: 150px;\n}\n.menu-items\n{\n    font-size: 2rem;\n    color: white;\n    background-color: black;\n    border: solid 5px white;\n    text-align: center;\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n\n}\n\n.menu-items:hover\n{\n    transform: scale(1.2);\n}\n\nbutton\n{\n    margin: 0;\n    padding: 1rem 2rem;\n    background-color: peachpuff;\n    border-radius: 8px;\n}`,""]);const m=u},314:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<e.length;d++){var u=[].concat(e[d]);o&&i[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),t&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=t):u[2]=t),r&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=r):u[4]="".concat(r)),n.push(u))}},n}},417:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],d=o.base?s[0]+o.base:s[0],u=a[d]||0,l="".concat(d," ").concat(u);a[d]=u+1;var m=t(l),p={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==m)n[m].references++,n[m].updater(p);else{var h=r(p,o);o.byIndex=c,n.splice(c,0,{identifier:l,updater:h,references:1})}i.push(l)}return i}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=t(a[i]);n[c].references--}for(var s=o(e,r),d=0;d<a.length;d++){var u=t(a[d]);0===n[u].references&&(n[u].updater(),n.splice(u,1))}a=s}}},659:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},540:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},56:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},113:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},655:(e,n,t)=>{e.exports=t.p+"ad43cd4fead0348d2557.jpg"}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var a=n[o]={id:o,exports:{}};return e[o](a,a.exports,t),a.exports}function o(){const e=document.querySelector("#content");e.textContent="";const n=document.createElement("h1");n.textContent="Welcome To Foodies Club",n.classList.add("home-heading"),e.appendChild(n)}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var o=n.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&(!e||!/^http(s?):/.test(e));)e=o[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0;var r=t(72),a=t.n(r),i=t(825),c=t.n(i),s=t(659),d=t.n(s),u=t(56),l=t.n(u),m=t(540),p=t.n(m),h=t(113),f=t.n(h),g=t(208),v={};function b(e){switch(e.target.id){case"home":console.log(e.target.id),o();break;case"menu":console.log(e.target.id),function(){const e=document.querySelector("#content");e.textContent="";const n=document.createElement("div");n.classList.add("menu-container"),[{name:"Beef Burger",price:"$2.50",image:"./src/burger.jpg"},{name:"Chicken Sandwich",price:"$3.00",image:"../src/chickensand.jpg"},{name:"Veggie Pizza",price:"$4.00",image:"../src/veggie_pizza.jpg"}].forEach((e=>{const t=document.createElement("div");t.classList.add("menu-items");const o=document.createElement("div");o.classList.add("menu-name"),o.textContent=e.name;const r=document.createElement("div");r.classList.add("menu-price"),r.textContent=e.price;const a=document.createElement("img");a.classList.add("menu-image"),a.src=e.image,t.appendChild(o),t.appendChild(a),t.appendChild(r),n.appendChild(t)})),e.appendChild(n)}();break;case"about":console.log(e.target.id),function(){const e=document.querySelector("#content");e.textContent="";const n=document.createElement("div");n.classList.add("about-us-text"),e.appendChild(n);const t=document.createElement("div");t.classList.add("about-us-item"),t.textContent="Foodies Club was founded in 2005 by a group of culinary enthusiasts who wanted to create a dining experience like no other. Our mission has always been to bring people together through a shared love of food and culture.",n.appendChild(t);const o=document.createElement("div");o.classList.add("about-us-item"),o.textContent="At Foodies Club, we believe that food is more than just sustenance. It's an experience that should be savored and shared. We are committed to using the freshest ingredients and time-honored cooking techniques to create dishes that are both innovative and comforting.",n.appendChild(o);const r=document.createElement("div");r.classList.add("about-us-item"),r.textContent="Whether you're here for a special occasion or just a casual meal, we invite you to join us at Foodies Club. Come experience our passion for food, our commitment to quality, and our love for bringing people together.",n.appendChild(r)}();break;case"contact":console.log(e.target.id),function(){const e=document.querySelector("#content");e.textContent="";const n=document.createElement("div");n.classList.add("contact-us"),e.appendChild(n);const t=document.createElement("div");t.classList.add("address"),t.textContent="Visit Our Branch at Random Location Anywhere";const o=document.createElement("div");o.classList.add("email"),o.textContent="Email Us at foodies@gmail.com";const r=document.createElement("div");r.classList.add("number"),r.textContent="Call us at 0300-0101010",n.appendChild(t),n.appendChild(o),n.appendChild(r)}()}}v.styleTagTransform=f(),v.setAttributes=l(),v.insert=d().bind(null,"head"),v.domAPI=c(),v.insertStyleElement=p(),a()(g.A,v),g.A&&g.A.locals&&g.A.locals,document.querySelector("#content"),document.querySelectorAll("button").forEach((e=>{e.addEventListener("click",b)})),o()})();