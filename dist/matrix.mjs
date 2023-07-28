/**
 * Matrix effect on a Canvas https://jcubic.github.io/cmatrix/
 *
 * Copyright (c) 2021-2023 Jakub T. Jankiewicz <https://jcubic.pl/me>
 * Released under MIT license
 *
 * The code was started at this Codepen https://codepen.io/jcubic/pen/rNeNwgB
 * And was based on code by Michael Goodman https://codepen.io/goodmanmr1/pen/jpPeRR
 *
 * Build: Fri, 28 Jul 2023 17:00:09 GMT
 */
var t=n(12449,12534),s=n(12353,12438);class i{constructor(i,{chars:r=null,font_size:n=14,width:e,height:h,font:o="monospace",color:a,background:_}={}){this._canvas=i,this._canvas._matrix&&(this._canvas._matrix.stop(),this._canvas._matrix.clear()),this._canvas._matrix=this,this._ctx=i.getContext("2d"),this._font_size=n,this._drops=[],this._color=a,this._background=_,this._font=o,this._chars=r||t.concat(s),this.resize(e,h)}random_char(){return(t=this._chars)[Math.floor(Math.random()*t.length)];var t}render_char(t,s,i){this._ctx.fillText(t,s,i)}start(){let t=0;this._run=!0;const s=this;!function i(){s._run&&(t++%2==0&&s.render(),requestAnimationFrame(i))}()}stop(){this._run=!1}reset(){for(let t=0;t<this._columns;t++)this._drops[t]=255}resize(t,s){this._width=t,this._height=s,this._canvas.width=t,setTimeout((()=>{this._canvas.height=s,this.reset()}),0),this._columns=Math.round(t/this._font_size)}clear(){this._ctx.fillStyle=this._background,this._ctx.fillRect(0,0,this._width,this._height),this._ctx.fillStyle=this._color,this._ctx.font=this._font_size+"px "+this._font}render(){this.clear();for(let t=0;t<this._drops.length;t++){const s=this.random_char(),i=t*this._font_size,r=this._drops[t]*this._font_size;this.render_char(s,i,r),r>this._height&&Math.random()>.975&&(this._drops[t]=0),this._drops[t]++}}}function r(t,{chars:s=null,font_size:r=14,exit:n=!0,font:o="monospace",color:a="#0F0",background:_="rgba(0, 0,0,0.05)"}={}){const c=new i(t,{font_size:r,chars:s,font:o,color:a,background:_,width:e(),height:h()});if(window.addEventListener("resize",(t=>{c.resize(e(),h())})),t.classList.add("running"),c.start(),n)return new Promise((s=>{window.addEventListener("keydown",(i=>{var r=i.key.toLowerCase();"q"!==r&&"escape"!==r||(c.stop(),t.classList.remove("running"),setTimeout(s,0))}))}))}function n(t,s){for(var i=[],r=t;r<=s;++r)i.push(String.fromCharCode(r));return i}function e(){return window.innerWidth}function h(){return window.innerHeight}r.range=n;export{r as default};
