!function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:i})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t,n){"use strict";window.addEventListener("load",function(){var e=document.getElementById("container"),t=new THREE.Scene,n=window.innerWidth,i=window.innerHeight,r=n/i,o=new THREE.PerspectiveCamera(60,r,1,500);o.position.set(0,0,50);var a=(new THREE.TextureLoader).load("/images/three/triangle.png"),s=(new THREE.TextureLoader).load("/images/three/square.png"),c=(new THREE.TextureLoader).load("/images/three/circle.png"),l={triangle:{size:10,color:16777113,map:a,blending:THREE.NoBlending,transparent:!0,alphaTest:.9},square:{size:10,color:15138815,map:s,blending:THREE.NoBlending,transparent:!0,alphaTest:.9},circle:{size:10,color:16250871,map:c,blending:THREE.NoBlending,transparent:!0,alphaTest:.9}},u=y(500),d=new THREE.PointsMaterial(l.square),g=new THREE.Points(u,d),f=y(1e3),p=new THREE.PointsMaterial(l.triangle),m=new THREE.Points(f,p),w=y(300),E=new THREE.PointsMaterial(l.circle),b=new THREE.Points(w,E);t.add(g,m,b);var h=new THREE.WebGLRenderer({antialias:!1,alpha:!0});function y(e){for(var t=new THREE.Geometry,n=0;n<e;n++){var i=1e3*Math.random()-500,r=1e3*Math.random()-500,o=1e3*Math.random()-500,a=new THREE.Vector3(i,r,o);a.velocity=new THREE.Vector3(0,-Math.random(),0),t.vertices.push(a)}return t}h.setSize(n,i),h.setClearColor(16777215,0),h.setPixelRatio(window.devicePixelRatio),e.appendChild(h.domElement),function e(){requestAnimationFrame(e),m.rotation.x+=.001,m.rotation.y+=3e-4,m.rotation.z+=1e-4,g.rotation.x-=1e-4,g.rotation.y-=2e-4,g.rotation.z-=.001,b.rotation.x-=5e-4,b.rotation.y-=2e-4,b.rotation.z-=.001,h.render(t,o)}(),window.addEventListener("resize",function(){o.updateProjectionMatrix(),h.setSize(window.innerWidth,window.innerHeight)},!1)},!1)},function(e,t,n){"use strict";
/*! npm.im/object-fit-images 3.2.3 */!function(){function e(e,t,n){var i=function(e,t){return"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='"+e+"' height='"+t+"'%3E%3C/svg%3E"}(t||1,n||0);g.call(e,"src")!==i&&f.call(e,"src",i)}function t(e,n){e.naturalWidth?n(e):setTimeout(t,100,e,n)}function n(n){var r=function(e){for(var t,n=getComputedStyle(e).fontFamily,i={};null!==(t=a.exec(n));)i[t[1]]=t[2];return i}(n),s=n[o];if(r["object-fit"]=r["object-fit"]||"fill",!s.img){if("fill"===r["object-fit"])return;if(!s.skipTest&&c&&!r["object-position"])return}if(!s.img){s.img=new Image(n.width,n.height),s.img.srcset=g.call(n,"data-ofi-srcset")||n.srcset,s.img.src=g.call(n,"data-ofi-src")||n.src,f.call(n,"data-ofi-src",n.src),n.srcset&&f.call(n,"data-ofi-srcset",n.srcset),e(n,n.naturalWidth||n.width,n.naturalHeight||n.height),n.srcset&&(n.srcset="");try{i(n)}catch(n){window.console&&console.warn("https://bit.ly/ofi-old-browser")}}(function(e){if(e.srcset&&!d&&window.picturefill){var t=window.picturefill._;e[t.ns]&&e[t.ns].evaled||t.fillImg(e,{reselect:!0}),e[t.ns].curSrc||(e[t.ns].supported=!1,t.fillImg(e,{reselect:!0})),e.currentSrc=e[t.ns].curSrc||e.src}})(s.img),n.style.backgroundImage='url("'+(s.img.currentSrc||s.img.src).replace(/"/g,'\\"')+'")',n.style.backgroundPosition=r["object-position"]||"center",n.style.backgroundRepeat="no-repeat",n.style.backgroundOrigin="content-box",/scale-down/.test(r["object-fit"])?t(s.img,function(){s.img.naturalWidth>n.width||s.img.naturalHeight>n.height?n.style.backgroundSize="contain":n.style.backgroundSize="auto"}):n.style.backgroundSize=r["object-fit"].replace("none","auto").replace("fill","100% 100%"),t(s.img,function(t){e(n,t.naturalWidth,t.naturalHeight)})}function i(e){var t={get:function(t){return e[o].img[t||"src"]},set:function(t,i){return e[o].img[i||"src"]=t,f.call(e,"data-ofi-"+i,t),n(e),t}};Object.defineProperty(e,"src",t),Object.defineProperty(e,"currentSrc",{get:function(){return t.get("currentSrc")}}),Object.defineProperty(e,"srcset",{get:function(){return t.get("srcset")},set:function(e){return t.set(e,"srcset")}})}function r(e,t){var i=!p&&!e;if(t=t||{},e=e||"img",l&&!t.skipTest||!u)return!1;"img"===e?e=document.getElementsByTagName("img"):"string"==typeof e?e=document.querySelectorAll(e):"length"in e||(e=[e]);for(var a=0;a<e.length;a++)e[a][o]=e[a][o]||{skipTest:t.skipTest},n(e[a]);i&&(document.body.addEventListener("load",function(e){"IMG"===e.target.tagName&&r(e.target,{skipTest:t.skipTest})},!0),p=!0,e="img"),t.watchMQ&&window.addEventListener("resize",r.bind(null,e,{skipTest:t.skipTest}))}var o="bfred-it:object-fit-images",a=/(object-fit|object-position)\s*:\s*([-\w\s%]+)/g,s="undefined"==typeof Image?{style:{"object-position":1}}:new Image,c="object-fit"in s.style,l="object-position"in s.style,u="background-size"in s.style,d="string"==typeof s.currentSrc,g=s.getAttribute,f=s.setAttribute,p=!1;r.supportsObjectFit=c,r.supportsObjectPosition=l,function(){function e(e,t){return e[o]&&e[o].img&&("src"===t||"srcset"===t)?e[o].img:e}l||(HTMLImageElement.prototype.getAttribute=function(t){return g.call(e(this,t),t)},HTMLImageElement.prototype.setAttribute=function(t,n){return f.call(e(this,t),t,String(n))})}()}()},function(e,t,n){"use strict";/*@cc_on!@*/$(function(){objectFitImages("img.ofi")})},function(e,t,n){n(2),n(1),e.exports=n(0)}]);