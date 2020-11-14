/*! For license information please see 3.87dd30d6.chunk.js.LICENSE.txt */
(this["webpackJsonppwa-playlist"]=this["webpackJsonppwa-playlist"]||[]).push([[3],{33:function(e,t,r){"use strict";var a=r(2),n=r(3),i=r(6),o=r(5),c=r(1),s=r(0),l=(r(34),function(e){Object(i.a)(r,e);var t=Object(o.a)(r);function r(){return Object(a.a)(this,r),t.apply(this,arguments)}return Object(n.a)(r,[{key:"shouldComponentUpdate",value:function(e){return e.percent!==this.props.percent}},{key:"render",value:function(){return Object(c.jsxs)("div",{className:"progress-bar",children:[Object(c.jsx)("div",{className:"progress-bar__mask",style:{transform:"scale(".concat(this.props.percent,", 1)")},children:Object(c.jsx)("div",{className:"progress-bar__progress"})}),Object(c.jsx)("div",{className:"progress-bar__bg"})]})}}]),r}(s.Component));t.a=l},34:function(e,t,r){},38:function(e,t,r){e.exports=function(){"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function r(e,r,a){return r&&t(e.prototype,r),a&&t(e,a),e}function a(e,t,r){for(var a=0;a<r.length;a++){var n=r[a];if(e[t]===n[0]&&e[t+1]===n[1]&&e[t+2]===n[2]&&e[t+3]===n[3])return!0}return!1}function n(e,t,r){for(var n={},i=24,o=r.ignoredColor,c=0;c<t;c+=r.step){var s=e[c],l=e[c+1],u=e[c+2],h=e[c+3];if(!o||!a(e,c,o)){var p=Math.round(s/i)+","+Math.round(l/i)+","+Math.round(u/i);n[p]?n[p]=[n[p][0]+s*h,n[p][1]+l*h,n[p][2]+u*h,n[p][3]+h,n[p][4]+1]:n[p]=[s*h,l*h,u*h,h,1]}}var d=Object.keys(n).map((function(e){return n[e]})).sort((function(e,t){var r=e[4],a=t[4];return r>a?-1:r===a?0:1}))[0],v=d[0],f=d[1],m=d[2],b=d[3],g=d[4];return b?[Math.round(v/b),Math.round(f/b),Math.round(m/b),Math.round(b/g)]:r.defaultColor}function i(e,t,r){for(var n=0,i=0,o=0,c=0,s=0,l=r.ignoredColor,u=0;u<t;u+=r.step){var h=e[u+3],p=e[u]*h,d=e[u+1]*h,v=e[u+2]*h;l&&a(e,u,l)||(n+=p,i+=d,o+=v,c+=h,s++)}return c?[Math.round(n/c),Math.round(i/c),Math.round(o/c),Math.round(c/s)]:r.defaultColor}function o(e,t,r){for(var n=0,i=0,o=0,c=0,s=0,l=r.ignoredColor,u=0;u<t;u+=r.step){var h=e[u],p=e[u+1],d=e[u+2],v=e[u+3];l&&a(e,u,l)||(n+=h*h*v,i+=p*p*v,o+=d*d*v,c+=v,s++)}return c?[Math.round(Math.sqrt(n/c)),Math.round(Math.sqrt(i/c)),Math.round(Math.sqrt(o/c)),Math.round(c/s)]:r.defaultColor}var c="FastAverageColor: ";return function(){function t(){e(this,t)}return r(t,[{key:"getColorAsync",value:function(e,t){if(!e)return Promise.reject(Error("".concat(c,"call .getColorAsync() without resource.")));if("string"===typeof e){var r=new Image;return r.crossOrigin="",r.src=e,this._bindImageEvents(r,t)}if(e.complete){var a=this.getColor(e,t);return a.error?Promise.reject(a.error):Promise.resolve(a)}return this._bindImageEvents(e,t)}},{key:"getColor",value:function(e,t){t=t||{};var r=this._getDefaultColor(t);if(!e)return this._outputError(t,"call .getColor(null) without resource."),this.prepareResult(r);var a=this._getOriginalSize(e),n=this._prepareSizeAndPosition(a,t);if(!n.srcWidth||!n.srcHeight||!n.destWidth||!n.destHeight)return this._outputError(t,'incorrect sizes for resource "'.concat(e.src,'".')),this.prepareResult(r);if(!this._ctx&&(this._canvas=this._makeCanvas(),this._ctx=this._canvas.getContext&&this._canvas.getContext("2d"),!this._ctx))return this._outputError(t,"Canvas Context 2D is not supported in this browser."),this.prepareResult(r);this._canvas.width=n.destWidth,this._canvas.height=n.destHeight;var i=r;try{this._ctx.clearRect(0,0,n.destWidth,n.destHeight),this._ctx.drawImage(e,n.srcLeft,n.srcTop,n.srcWidth,n.srcHeight,0,0,n.destWidth,n.destHeight);var o=this._ctx.getImageData(0,0,n.destWidth,n.destHeight).data;i=this.getColorFromArray4(o,t)}catch(c){this._outputError(t,"security error (CORS) for resource ".concat(e.src,".\nDetails: https://developer.mozilla.org/en/docs/Web/HTML/CORS_enabled_image"),c)}return this.prepareResult(i)}},{key:"getColorFromArray4",value:function(e,t){t=t||{};var r=4,a=e.length,s=this._getDefaultColor(t);if(a<r)return s;var l,u=a-a%r,h=(t.step||1)*r;switch(t.algorithm||"sqrt"){case"simple":l=i;break;case"sqrt":l=o;break;case"dominant":l=n;break;default:throw Error("".concat(c).concat(t.algorithm," is unknown algorithm."))}return l(e,u,{defaultColor:s,ignoredColor:this._prepareIgnoredColor(t.ignoredColor),step:h})}},{key:"prepareResult",value:function(e){var t=e.slice(0,3),r=[].concat(t,e[3]/255),a=this._isDark(e);return{value:e,rgb:"rgb("+t.join(",")+")",rgba:"rgba("+r.join(",")+")",hex:this._arrayToHex(t),hexa:this._arrayToHex(e),isDark:a,isLight:!a}}},{key:"_prepareIgnoredColor",value:function(e){return Array.isArray(e)&&!Array.isArray(e[0])?[[].concat(e)]:e}},{key:"destroy",value:function(){delete this._canvas,delete this._ctx}},{key:"_getDefaultColor",value:function(e){return this._getOption(e,"defaultColor",[0,0,0,0])}},{key:"_getOption",value:function(e,t,r){return"undefined"===typeof e[t]?r:e[t]}},{key:"_prepareSizeAndPosition",value:function(e,t){var r=this._getOption(t,"left",0),a=this._getOption(t,"top",0),n=this._getOption(t,"width",e.width),i=this._getOption(t,"height",e.height),o=n,c=i;if("precision"===t.mode)return{srcLeft:r,srcTop:a,srcWidth:n,srcHeight:i,destWidth:o,destHeight:c};var s,l=100,u=10;return n>i?(s=n/i,o=l,c=Math.round(o/s)):(s=i/n,c=l,o=Math.round(c/s)),(o>n||c>i||o<u||c<u)&&(o=n,c=i),{srcLeft:r,srcTop:a,srcWidth:n,srcHeight:i,destWidth:o,destHeight:c}}},{key:"_bindImageEvents",value:function(e,t){var r=this;return new Promise((function(a,n){var i=function(){l();var i=r.getColor(e,t);i.error?n(i.error):a(i)},o=function(){l(),n(Error("".concat(c,"Error loading image ").concat(e.src,".")))},s=function(){l(),n(Error("".concat(c,'Image "').concat(e.src,'" loading aborted.')))},l=function(){e.removeEventListener("load",i),e.removeEventListener("error",o),e.removeEventListener("abort",s)};e.addEventListener("load",i),e.addEventListener("error",o),e.addEventListener("abort",s)}))}},{key:"_getOriginalSize",value:function(e){return e instanceof HTMLImageElement?{width:e.naturalWidth,height:e.naturalHeight}:e instanceof HTMLVideoElement?{width:e.videoWidth,height:e.videoHeight}:{width:e.width,height:e.height}}},{key:"_toHex",value:function(e){var t=e.toString(16);return 1===t.length?"0"+t:t}},{key:"_arrayToHex",value:function(e){return"#"+e.map(this._toHex).join("")}},{key:"_isDark",value:function(e){return(299*e[0]+587*e[1]+114*e[2])/1e3<128}},{key:"_makeCanvas",value:function(){return"undefined"===typeof window?new OffscreenCanvas(1,1):document.createElement("canvas")}},{key:"_outputError",value:function(e,t,r){e.silent||(console.error("".concat(c).concat(t)),r&&console.error(r))}}]),t}()}()},39:function(e,t,r){},40:function(e,t,r){},42:function(e,t,r){"use strict";r.r(t);var a=r(2),n=r(3),i=r(6),o=r(5),c=r(1),s=r(0),l=r.n(s),u=r(33),h=r(14),p=r(8),d=r.n(p),v=r(9),f=r(12),m=r(38),b=r.n(m),g=r(11);function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}function j(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var O=s.createElement("path",{d:"M57 6H1a1 1 0 0 0-1 1v44a1 1 0 0 0 1 1h56a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1zm-1 44H2V8h54v42z"}),_=s.createElement("path",{d:"M16 28.138a5.575 5.575 0 0 0 5.569-5.568c0-3.072-2.498-5.57-5.569-5.57s-5.569 2.498-5.569 5.569A5.575 5.575 0 0 0 16 28.138zM16 19c1.968 0 3.569 1.602 3.569 3.569S17.968 26.138 16 26.138s-3.569-1.601-3.569-3.568S14.032 19 16 19zM7 46c.234 0 .47-.082.66-.249l16.313-14.362L34.275 41.69a.999.999 0 1 0 1.414-1.414l-4.807-4.807 9.181-10.054 11.261 10.323a1 1 0 0 0 1.351-1.475l-12-11a1.031 1.031 0 0 0-.72-.262 1.002 1.002 0 0 0-.694.325l-9.794 10.727-4.743-4.743a1 1 0 0 0-1.368-.044L6.339 44.249A1 1 0 0 0 7 46z"});function k(e,t){var r=e.title,a=e.titleId,n=j(e,["title","titleId"]);return s.createElement("svg",y({viewBox:"0 0 58 58",ref:t,"aria-labelledby":a},n),r?s.createElement("title",{id:a},r):null,O,_)}var x=s.forwardRef(k),w=(r.p,r(39),function(e){Object(i.a)(r,e);var t=Object(o.a)(r);function r(e){var n;return Object(a.a)(this,r),(n=t.call(this,e)).onLoadImage=function(){var e=Object(v.a)(d.a.mark((function e(t){var r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.fac.getColor(t.target,{algorithm:"simple"}),e.next=3,Object(g.a)(200);case 3:requestAnimationFrame((function(){n._hideLoader(),n._setAlbumShadowColor(r),n._displayAlbumCover()}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.loader=l.a.createRef(),n.image=l.a.createRef(),n.view=l.a.createRef(),n.fac=new b.a,n._onLoadDummyImage=n._onLoadDummyImage.bind(Object(f.a)(n)),n}return Object(n.a)(r,[{key:"_onLoadDummyImage",value:function(){var e=Object(v.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(g.a)(200);case 2:this.image.current.src=this.props.src,this.image.current.classList.remove("album-cover__image--loaded"),this.icon.classList.remove("album-cover__icon--active");case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"_displayLoadingCover",value:function(){var e=this;this.imageDummy.src=this.props.src,this.image.current.classList.add("album-cover__image--loaded"),requestAnimationFrame((function(){e.view.current.style.boxShadow="rgba(107, 179, 237, .5) 0px 24px 35px -16px",e.loader.current.classList.remove("hide"),e.loader.current.classList.add("show"),e.icon.classList.add("album-cover__icon--active")}))}},{key:"_setAlbumShadowColor",value:function(e){var t=e.hex.replace("#","").match(/[A-Za-z0-9]{2}/g).map((function(e){return parseInt(e,16)}));this.view.current.style.boxShadow="0 24px 35px -16px rgba(".concat(t[0],", ").concat(t[1],", ").concat(t[2],", 0.7)")}},{key:"_displayAlbumCover",value:function(){var e=Object(v.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.image.current.classList.add("album-cover__image--loaded");case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"_hideLoader",value:function(){this.loader.current.classList.add("hide")}},{key:"componentDidMount",value:function(){this.icon=document.querySelector(".album-cover__icon"),this.imageDummy=new Image,this.imageDummy.onload=this._onLoadDummyImage}},{key:"componentDidUpdate",value:function(e){e.src!==this.props.src&&this._displayLoadingCover()}},{key:"render",value:function(){return Object(c.jsxs)("div",{ref:this.view,className:"album-cover",children:[Object(c.jsx)(x,{className:"album-cover__icon"}),Object(c.jsx)("div",{ref:this.loader,className:"album-cover__loader"}),Object(c.jsx)("img",{ref:this.image,className:"album-cover__image",crossOrigin:"",onLoad:this.onLoadImage,alt:this.props.alt})]})}}]),r}(s.PureComponent)),C=function(e){var t=parseInt(e,10),r=Math.floor(t/3600),a=Math.floor((t-3600*r)/60),n=t-3600*r-60*a;return a<10&&(a="0"+a),n<10&&(n="0"+n),"".concat(a,":").concat(n)},E=r(10),L=r(15);function M(){return(M=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}function I(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var P=s.createElement("path",{d:"M15.5 0c-1.103 0-2 .897-2 2v40c0 1.103.897 2 2 2s2-.897 2-2V2c0-1.103-.897-2-2-2zM28.5 0c-1.103 0-2 .897-2 2v40c0 1.103.897 2 2 2s2-.897 2-2V2c0-1.103-.897-2-2-2z"});function N(e,t){var r=e.title,a=e.titleId,n=I(e,["title","titleId"]);return s.createElement("svg",M({viewBox:"0 0 44 44",ref:t,"aria-labelledby":a},n),r?s.createElement("title",{id:a},r):null,P)}var H=s.forwardRef(N);r.p;function S(){return(S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}function A(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var z=s.createElement("path",{d:"M23.491 144.032c0-28.762 23.399-52.155 52.161-52.155h185.706l-46.874 46.874 14.31 14.305 71.301-71.295L228.8 10.47l-14.3 14.31 46.863 46.868H75.657c-39.912 0-72.389 32.477-72.389 72.389v7.419h20.228v-7.424h-.005z"}),D=s.createElement("path",{d:"M276.604 156.058c0 28.762-23.404 52.155-52.166 52.155H38.726l46.879-46.874L71.29 147.04 0 218.335l71.295 71.29 14.299-14.31-46.874-46.868h185.711c39.917 0 72.394-32.471 72.394-72.388v-7.419h-20.228v7.419h.007z"});function R(e,t){var r=e.title,a=e.titleId,n=A(e,["title","titleId"]);return s.createElement("svg",S({viewBox:"0 0 300.095 300.095",ref:t,"aria-labelledby":a},n),r?s.createElement("title",{id:a},r):null,z,D)}var W=s.forwardRef(R);r.p;function T(){return(T=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}function q(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var F=s.createElement("path",{d:"M312.453 199.601a116.167 116.167 0 0 0-20.053-16.128 119.472 119.472 0 0 0-64.427-18.859 118.952 118.952 0 0 0-84.48 34.987L34.949 308.23a119.466 119.466 0 0 0-34.91 84.318c-.042 65.98 53.41 119.501 119.39 119.543a118.7 118.7 0 0 0 84.395-34.816l89.6-89.6a8.534 8.534 0 0 0-6.059-14.592h-3.413a143.626 143.626 0 0 1-54.613-10.581 8.533 8.533 0 0 0-9.301 1.877l-64.427 64.512c-20.006 20.006-52.442 20.006-72.448 0-20.006-20.006-20.006-52.442 0-72.448l108.971-108.885c19.99-19.965 52.373-19.965 72.363 0 13.472 12.679 34.486 12.679 47.957 0a34.134 34.134 0 0 0 9.899-21.675 34.137 34.137 0 0 0-9.9-26.282z"}),V=s.createElement("path",{d:"M477.061 34.993c-46.657-46.657-122.303-46.657-168.96 0l-89.515 89.429a8.533 8.533 0 0 0-1.792 9.387 8.532 8.532 0 0 0 8.021 5.205h3.157a143.357 143.357 0 0 1 54.528 10.667 8.533 8.533 0 0 0 9.301-1.877l64.256-64.171c20.006-20.006 52.442-20.006 72.448 0 20.006 20.006 20.006 52.442 0 72.448l-80.043 79.957-.683.768-27.989 27.819c-19.99 19.965-52.373 19.965-72.363 0-13.472-12.679-34.486-12.679-47.957 0a34.139 34.139 0 0 0-9.899 21.845 34.137 34.137 0 0 0 9.899 26.283 118.447 118.447 0 0 0 34.133 23.893c1.792.853 3.584 1.536 5.376 2.304 1.792.768 3.669 1.365 5.461 2.048a67.799 67.799 0 0 0 5.461 1.792l5.035 1.365c3.413.853 6.827 1.536 10.325 2.133 4.214.626 8.458 1.025 12.715 1.195H284.461l5.12-.597c1.877-.085 3.84-.512 6.059-.512h2.901l5.888-.853 2.731-.512 4.949-1.024h.939a119.456 119.456 0 0 0 55.381-31.403l108.629-108.629c46.66-46.657 46.66-122.303.003-168.96z"});function B(e,t){var r=e.title,a=e.titleId,n=q(e,["title","titleId"]);return s.createElement("svg",T({viewBox:"0 0 512.092 512.092",ref:t,"aria-labelledby":a},n),r?s.createElement("title",{id:a},r):null,F,V)}var J=s.forwardRef(B),U=(r.p,r(40),function(e){Object(i.a)(r,e);var t=Object(o.a)(r);function r(){var e;Object(a.a)(this,r);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).onPlayClick=function(){e.props.onPlayClick(e.props.track)},e.onPauseClick=function(){e.props.onPauseClick(e.props.track)},e.onLinkClick=function(){window.open(e.props.track.permalink_url)},e}return Object(n.a)(r,[{key:"render",value:function(){return Object(c.jsx)(s.Fragment,{children:Object(c.jsxs)("div",{className:"detail__track","aria-live":"polite","aria-atomic":"false",children:[Object(c.jsx)(w,{hide:!this.props.active,src:this.props.track.artwork_url.replace("t50x50","t300x300"),alt:"album artwork from track ".concat(this.props.track.title)}),Object(c.jsxs)("div",{className:"detail__controls",children:[Object(c.jsxs)("div",{className:"detail__info",children:[Object(c.jsx)("h3",{className:"title",children:this.props.track.title}),Object(c.jsx)("p",{className:"artist",children:this.props.track.artist})]}),Object(c.jsx)(u.a,{percent:this.props.track.percentage}),Object(c.jsxs)("div",{className:"detail__timing",children:[Object(c.jsx)("time",{className:"time",children:C(this.props.track.currentTime)}),Object(c.jsx)("time",{className:"time",children:C(this.props.track.duration/1e3)})]}),Object(c.jsxs)("div",{className:"detail__buttons",children:[Object(c.jsx)(E.a,{label:"repeat song",tabEnabled:this.props.active,className:"icon-button ".concat(this.props.repeat?"icon-button--high-light":""),onClick:this.props.onRepeatClick,icon:Object(c.jsx)(W,{className:"icon icon--back",width:16})}),Object(c.jsxs)("button",{name:"previous song",tabIndex:this.props.active?"0":"-1",className:"prev-button",onClick:this.props.onPlayPrev,children:[Object(c.jsx)("div",{className:"divider"}),Object(c.jsx)(L.a,{width:16})]}),Object(c.jsx)(h.a,{name:"pause button",className:"pause",tabEnabled:this.props.active,active:this.props.track.playing&&!this.props.track.paused,onClick:this.onPauseClick,icon:Object(c.jsx)(H,{width:24})}),Object(c.jsx)(h.a,{name:"play button",className:"play",tabEnabled:this.props.active,active:!this.props.track.playing&&this.props.track.paused,onClick:this.onPlayClick,icon:Object(c.jsx)(L.a,{width:24})}),Object(c.jsxs)("button",{name:"next song button",tabIndex:this.props.active?"0":"-1",className:"next-button",onClick:this.props.onPlayNext,children:[Object(c.jsx)(L.a,{width:16}),Object(c.jsx)("div",{className:"divider"})]}),Object(c.jsx)(E.a,{label:"song link",tabEnabled:this.props.active,className:"icon-button",onClick:this.onLinkClick,icon:Object(c.jsx)(J,{className:"icon icon--back",width:16})})]})]})]})})}}]),r}(s.PureComponent));t.default=U}}]);
//# sourceMappingURL=3.87dd30d6.chunk.js.map