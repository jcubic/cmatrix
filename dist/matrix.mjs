/**
 * Matrix effect on a Canvas https://jcubic.github.io/cmatrix/
 *
 * Copyright (c) 2021-2022 Jakub T. Jankiewicz <https://jcubic.pl/me>
 * Released under MIT license
 *
 * The code was started at this Codepen https://codepen.io/jcubic/pen/rNeNwgB
 * And was based on code by Michael Goodman https://codepen.io/goodmanmr1/pen/jpPeRR
 *
 * Build: Sun, 06 Nov 2022 14:22:34 GMT
 */
var t=r(12449,12534),s=r(12353,12438);class i{constructor(i,{chars:n=null,font_size:r=14,width:e,height:o,font:h="monospace",color:a,background:c}={}){this._canvas=i,this._ctx=i.getContext("2d"),this._font_size=r,this._drops=[],this._color=a,this._background=c,this._font=h,this._chars=n||t.concat(s),this.resize(e,o)}random_char(){return(t=this._chars)[Math.floor(Math.random()*t.length)];var t}render_char(t,s,i){this._ctx.fillText(t,s,i)}start(){let t=0;this._run=!0;const s=this;!function i(){t++%2==0&&s.render(),s._run&&requestAnimationFrame(i)}()}stop(){this._run=!1}reset(){for(let t=0;t<this._columns;t++)this._drops[t]=255}resize(t,s){this._width=t,this._height=s,this._canvas.width=t,setTimeout((()=>{this._canvas.height=s,this.reset()}),0),this._columns=Math.round(t/this._font_size)}clear(){this._ctx.fillStyle=this._background,this._ctx.fillRect(0,0,this._width,this._height),this._ctx.fillStyle=this._color,this._ctx.font=this._font_size+"px "+this._font}render(){this.clear();for(let t=0;t<this._drops.length;t++){const s=this.random_char(),i=t*this._font_size,n=this._drops[t]*this._font_size;this.render_char(s,i,n),n>this._height&&Math.random()>.975&&(this._drops[t]=0),this._drops[t]++}}}function n(t,{chars:s=null,font_size:n=14,exit:r=!0,font:h="monospace",color:a="#0F0",background:c="rgba(0, 0,0,0.05)"}={}){const _=new i(t,{font_size:n,chars:s,font:h,color:a,background:c,width:e(),height:o()});if(window.addEventListener("resize",(t=>{_.resize(e(),o())})),t.classList.add("running"),_.start(),r)return new Promise((s=>{window.addEventListener("keydown",(i=>{var n=i.key.toLowerCase();"q"!==n&&"escape"!==n||(_.stop(),t.classList.remove("running"),setTimeout(s,0))}))}))}function r(t,s){for(var i=[],n=t;n<=s;++n)i.push(String.fromCharCode(n));return i}function e(){return window.innerWidth}function o(){return window.innerHeight}n.range=r;export{n as default};
