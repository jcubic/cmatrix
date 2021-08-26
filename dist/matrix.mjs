/**
 * Matrix effect on a Canvas https://jcubic.github.io/cmatrix/
 *
 * Copyright (c) Jakub T. Jankiewicz <https://jcubic.pl/me>
 * Released under MIT license
 *
 * The code was started at this Codepen https://codepen.io/jcubic/pen/rNeNwgB
 * And was based on code by Michael Goodman https://codepen.io/goodmanmr1/pen/jpPeRR
 *
 * Build: Thu, 26 Aug 2021 16:06:20 GMT
 */
var t=e(12449,12534),s=e(12353,12438);class i{constructor(i,{chars:r=null,font_size:e=14,width:n,height:h,color:o,background:a}={}){this._canvas=i,this._ctx=i.getContext("2d"),this._font_size=e,this._drops=[],this._color=o,this._background=a,this._chars=r||t.concat(s),this.resize(n,h)}random_char(){return(t=this._chars)[Math.floor(Math.random()*t.length)];var t}render_char(t,s,i){this._ctx.fillText(t,s,i)}start(){let t=0;this._run=!0;const s=this;!function i(){t++%2==0&&s.render(),s._run&&requestAnimationFrame(i)}()}stop(){this._run=!1}reset(){for(let t=0;t<this._columns;t++)this._drops[t]=255}resize(t,s){this._width=t,this._height=s,this._canvas.width=t,setTimeout((()=>{this._canvas.height=s,this.reset()}),0),this._columns=Math.round(t/this._font_size)}clear(){this._ctx.fillStyle=this._background,this._ctx.fillRect(0,0,this._width,this._height),this._ctx.fillStyle=this._color,this._ctx.font=this._font_size+"px monospace"}render(){this.clear();for(let t=0;t<this._drops.length;t++){const s=this.random_char(),i=t*this._font_size,r=this._drops[t]*this._font_size;this.render_char(s,i,r),r>this._height&&Math.random()>.975&&(this._drops[t]=0),this._drops[t]++}}}function r(t,{chars:s=null,font_size:r=14,exit:e=!0,color:o="#0F0",background:a="rgba(0, 0,0,0.05)"}={}){const c=new i(t,{font_size:r,chars:s,color:o,background:a,width:n(),height:h()});if(window.addEventListener("resize",(t=>{c.resize(n(),h())})),t.classList.add("running"),c.start(),e)return new Promise((s=>{window.addEventListener("keydown",(i=>{var r=i.key.toLowerCase();"q"!==r&&"escape"!==r||(c.stop(),t.classList.remove("running"),setTimeout(s,0))}))}))}function e(t,s){for(var i=[],r=t;r<=s;++r)i.push(String.fromCharCode(r));return i}function n(){return window.innerWidth}function h(){return window.innerHeight}export{r as default};
