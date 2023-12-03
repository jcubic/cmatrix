/**
 * Matrix effect on a Canvas https://jcubic.github.io/cmatrix/
 *
 * Copyright (c) 2021-2023 Jakub T. Jankiewicz <https://jcubic.pl/me>
 * Released under MIT license
 *
 * The code was started at this Codepen https://codepen.io/jcubic/pen/rNeNwgB
 * And was based on code by Michael Goodman https://codepen.io/goodmanmr1/pen/jpPeRR
 *
 * Build: Sun, 03 Dec 2023 15:58:24 GMT
 */
var matrix=function(){"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var n=s(12449,12534),i=s(12353,12438),r=function(){function r(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},s=o.chars,a=void 0===s?null:s,c=o.font_size,h=void 0===c?14:c,u=o.width,l=o.height,d=o.font,v=void 0===d?"monospace":d,f=o.color,_=o.background;t(this,r),this._canvas=e,this._canvas._matrix&&(this._canvas._matrix.stop(),this._canvas._matrix.clear()),this._canvas._matrix=this,this._ctx=e.getContext("2d"),this._font_size=h,this._drops=[],this._color=f,this._background=_,this._font=v,this._chars=a||n.concat(i),this.resize(u,l)}var o,s,a;return o=r,(s=[{key:"random_char",value:function(){return(t=this._chars)[Math.floor(Math.random()*t.length)];var t}},{key:"render_char",value:function(t,e,n){this._ctx.fillText(t,e,n)}},{key:"start",value:function(){if(!this._run){var t=0;this._run=!0;var e=this;!function n(){e._run&&(t++%2==0&&e.render(),requestAnimationFrame(n))}()}}},{key:"stop",value:function(){this._run=!1}},{key:"reset",value:function(){for(var t=0;t<this._columns;t++)this._drops[t]=255}},{key:"resize",value:function(t,e){var n=this;this._width=t,this._height=e,this.clear(),this._canvas.width=t,setTimeout((function(){n._canvas.height=e,n.reset()}),0),this._columns=Math.round(t/this._font_size)}},{key:"clear",value:function(){this._ctx.fillStyle=this._background,this._ctx.fillRect(0,0,this._width,this._height),this._ctx.fillStyle=this._color,this._ctx.font=this._font_size+"px "+this._font}},{key:"fullscreen",value:function(){document.fullscreenElement?document.exitFullscreen&&document.exitFullscreen():document.documentElement.requestFullscreen()}},{key:"render",value:function(){this.clear();for(var t=0;t<this._drops.length;t++){var e=this.random_char(),n=t*this._font_size,i=this._drops[t]*this._font_size;this.render_char(e,n,i),i>this._height&&Math.random()>.975&&(this._drops[t]=0),this._drops[t]++}}}])&&e(o.prototype,s),a&&e(o,a),r}();function o(t){var e,n,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=i.chars,s=void 0===o?null:o,a=i.font_size,c=void 0===a?14:a,h=i.exit,u=void 0===h||h,l=i.font,d=void 0===l?"monospace":l,v=i.width,f=void 0===v?f():v,_=i.height,m=void 0===_?m():_,g=i.resize,w=void 0===g||g,p=i.color,k=void 0===p?"#0F0":p,x=i.mount,y=void 0===x?function(){}:x,z=i.unmount,b=void 0===z?function(){}:z,E=i.background,L=void 0===E?"rgba(0, 0,0,0.05)":E,C=new r(t,{font_size:c,chars:s,font:d,color:k,background:L,width:f,height:m});w&&(e=function(){return C.resize(f(),m())},window.addEventListener("resize",e),null!==(n=screen)&&void 0!==n&&n.orientation&&screen.orientation.addEventListener("change",e));if(t.classList.add("running"),C.start(),y(C),u)return new Promise((function(n){window.addEventListener("keydown",(function(i){var r=i.key.toLowerCase();if("q"===r||"escape"===r){var o;if(C.stop(),t.classList.remove("running"),e)window.removeEventListener("resize",e),null!==(o=screen)&&void 0!==o&&o.orientation&&screen.orientation.removeEventListener("change",e);setTimeout((function(){b(C),n()}),0)}}))}))}function s(t,e){for(var n=[],i=t;i<=e;++i)n.push(String.fromCharCode(i));return n}return o.range=s,o}();
