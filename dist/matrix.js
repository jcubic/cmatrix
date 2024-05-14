/**
 * Matrix effect on a Canvas https://jcubic.github.io/cmatrix/
 *
 * Copyright (c) 2021-2023 Jakub T. Jankiewicz <https://jcubic.pl/me>
 * Released under MIT license
 *
 * The code was started at this Codepen https://codepen.io/jcubic/pen/rNeNwgB
 * And was based on code by Michael Goodman https://codepen.io/goodmanmr1/pen/jpPeRR
 *
 * Build: Tue, 14 May 2024 23:09:03 GMT
 */
var matrix=function(){"use strict";function t(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function n(t,n){for(var e=0;e<n.length;e++){var i=n[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var e=s(12449,12534),i=s(12353,12438),r=function(){function r(n){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},s=o.chars,a=void 0===s?null:s,c=o.font_size,h=void 0===c?14:c,u=o.width,l=o.height,d=o.font,f=void 0===d?"monospace":d,v=o.color,_=o.background;t(this,r),this._canvas=n,this._canvas._matrix&&(this._canvas._matrix.stop(),this._canvas._matrix.clear()),this._canvas._matrix=this,this._ctx=n.getContext("2d"),this._font_size=h,this._drops=[],this._color=v,this._background=_,this._font=f,this._chars=a||e.concat(i),this.resize(u,l)}var o,s,a;return o=r,(s=[{key:"random_char",value:function(){return(t=this._chars)[Math.floor(Math.random()*t.length)];var t}},{key:"render_char",value:function(t,n,e){this._ctx.fillText(t,n,e)}},{key:"start",value:function(){if(!this._run){var t=0;this._run=!0;var n=this;!function e(){n._run&&(t++%2==0&&n.render(),requestAnimationFrame(e))}()}}},{key:"stop",value:function(){this._run=!1}},{key:"reset",value:function(){for(var t=0;t<this._columns;t++)this._drops[t]=255}},{key:"resize",value:function(t,n){var e=this;this._width=t,this._height=n,this.clear(),this._canvas.width=t,setTimeout((function(){e._canvas.height=n,e.reset()}),0),this._columns=Math.round(t/this._font_size)}},{key:"clear",value:function(){this._ctx.fillStyle=this._background,this._ctx.fillRect(0,0,this._width,this._height),this._ctx.fillStyle=this._color,this._ctx.font=this._font_size+"px "+this._font}},{key:"fullscreen",value:function(){document.fullscreenElement?document.exitFullscreen&&document.exitFullscreen():document.documentElement.requestFullscreen()}},{key:"render",value:function(){this.clear();for(var t=0;t<this._drops.length;t++){var n=this.random_char(),e=t*this._font_size,i=this._drops[t]*this._font_size;this.render_char(n,e,i),i>this._height&&Math.random()>.975&&(this._drops[t]=0),this._drops[t]++}}}])&&n(o.prototype,s),a&&n(o,a),r}();function o(t){var n,e,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=i.chars,s=void 0===o?null:o,h=i.font_size,u=void 0===h?14:h,l=i.exit,d=void 0===l||l,f=i.font,v=void 0===f?"monospace":f,_=i.width,m=void 0===_?null:_,g=i.height,w=void 0===g?null:g,p=i.resize,y=void 0===p||p,k=i.color,x=void 0===k?"#0F0":k,z=i.mount,b=void 0===z?function(){}:z,E=i.unmount,L=void 0===E?function(){}:E,C=i.background,F=void 0===C?"rgba(0, 0,0,0.05)":C,M=new r(t,{font_size:u,chars:s,font:v,color:x,background:F,width:null!=m?m:a(),height:null!=w?w:c()});y&&(n=function(){return M.resize(a(),c())},window.addEventListener("resize",n),null!==(e=screen)&&void 0!==e&&e.orientation&&screen.orientation.addEventListener("change",n));if(t.classList.add("running"),M.start(),b(M),d)return new Promise((function(e){window.addEventListener("keydown",(function(i){var r=i.key.toLowerCase();if("q"===r||"escape"===r){var o;if(M.stop(),t.classList.remove("running"),n)window.removeEventListener("resize",n),null!==(o=screen)&&void 0!==o&&o.orientation&&screen.orientation.removeEventListener("change",n);setTimeout((function(){L(M),e()}),0)}}))}))}function s(t,n){for(var e=[],i=t;i<=n;++i)e.push(String.fromCharCode(i));return e}function a(){return window.innerWidth}function c(){return window.innerHeight}function h(){for(var t=arguments.length,n=new Array(t),e=0;e<t;e++)n[e]=arguments[e];return n.map((function(t){return String.fromCharCode(t)}))}return o.range=s,o.custom_chars=o.range(48,53).concat(o.range(55,57)).concat(h.apply(void 0,[9642,9548,169,166,124,122,62,60,58,34,42,43,12450,12454,12456,12458,12459,12461,12465,12467,12469,12471,12473,12475,12477,12479,12484,12486,12490,12491,12492,12493,12495,12498,12507,12510,12511,12512,12513,12514,12516,12520,12521,12522,12527,12540,42890,59703])),o}();
//# sourceMappingURL=matrix.js.map
