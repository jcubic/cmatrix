/**
 * Matrix effect on a Canvas https://jcubic.github.io/cmatrix/
 *
 * Copyright (c) Jakub T. Jankiewicz <https://jcubic.pl/me>
 * Released under MIT license
 *
 * The code was started at this Codepen https://codepen.io/jcubic/pen/rNeNwgB
 * And was based on code by Michael Goodman https://codepen.io/goodmanmr1/pen/jpPeRR
 *
 * Build: Mon, 23 Aug 2021 10:58:17 GMT
 */
var t=r(12449,12534),s=r(12353,12438);class i{constructor(i,{chars:e=null,font_size:r=14,width:n,height:h}={}){this._canvas=i,this._ctx=i.getContext("2d"),this._font_size=r,this._drops=[],this._chars=e||t.concat(s),this.resize(n,h)}random_char(){return(t=this._chars)[Math.floor(Math.random()*t.length)];var t}render_char(t,s,i){this._ctx.fillText(t,s,i)}start(){let t=0;this._run=!0;const s=this;!function i(){t++%2==0&&s.render(),s._run&&requestAnimationFrame(i)}()}stop(){this._run=!1}reset(){for(let t=0;t<this._columns;t++)this._drops[t]=255}resize(t,s){this._width=t,this._height=s,this._canvas.width=t,setTimeout((()=>{this._canvas.height=s,this.reset()}),0),this._columns=Math.round(t/this._font_size)}clear(){this._ctx.fillStyle="rgba(0, 0,0,0.05)",this._ctx.fillRect(0,0,this._width,this._height),this._ctx.fillStyle="#0F0",this._ctx.font=this._font_size+"px monospace"}render(){this.clear();for(let t=0;t<this._drops.length;t++){const s=this.random_char(),i=t*this._font_size,e=this._drops[t]*this._font_size;this.render_char(s,i,e),e>this._height&&Math.random()>.975&&(this._drops[t]=0),this._drops[t]++}}}function e(t,{chars:s=null,font_size:e=14}={}){const r=new i(t,{font_size:e,chars:s,width:n(),height:h()});return window.addEventListener("resize",(t=>{r.resize(n(),h())})),new Promise((s=>{window.addEventListener("keydown",(i=>{var e=i.key.toLowerCase();"q"!==e&&"escape"!==e||(r.stop(),t.classList.remove("running"),setTimeout(s,0))})),t.classList.add("running"),r.start()}))}function r(t,s){for(var i=[],e=t;e<=s;++e)i.push(String.fromCharCode(e));return i}function n(){return window.innerWidth}function h(){return window.innerHeight}export{e as default};
