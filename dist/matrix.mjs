/**
 * Matrix effect on a Canvas https://jcubic.github.io/cmatrix/
 *
 * Copyright (c) 2021-2023 Jakub T. Jankiewicz <https://jcubic.pl/me>
 * Released under MIT license
 *
 * The code was started at this Codepen https://codepen.io/jcubic/pen/rNeNwgB
 * And was based on code by Michael Goodman https://codepen.io/goodmanmr1/pen/jpPeRR
 *
 * Build: Tue, 19 Sep 2023 16:02:25 GMT
 */
var t=i(12449,12534),e=i(12353,12438);class s{constructor(s,{chars:n=null,font_size:i=14,width:r,height:o,font:h="monospace",color:a,background:c}={}){this._canvas=s,this._canvas._matrix&&(this._canvas._matrix.stop(),this._canvas._matrix.clear()),this._canvas._matrix=this,this._ctx=s.getContext("2d"),this._font_size=i,this._drops=[],this._color=a,this._background=c,this._font=h,this._chars=n||t.concat(e),this.resize(r,o)}random_char(){return(t=this._chars)[Math.floor(Math.random()*t.length)];var t}render_char(t,e,s){this._ctx.fillText(t,e,s)}start(){let t=0;this._run=!0;const e=this;!function s(){e._run&&(t++%2==0&&e.render(),requestAnimationFrame(s))}()}stop(){this._run=!1}reset(){for(let t=0;t<this._columns;t++)this._drops[t]=255}resize(t,e){this._width=t,this._height=e,this.clear(),this._canvas.width=t,setTimeout((()=>{this._canvas.height=e,this.reset()}),0),this._columns=Math.round(t/this._font_size)}clear(){this._ctx.fillStyle=this._background,this._ctx.fillRect(0,0,this._width,this._height),this._ctx.fillStyle=this._color,this._ctx.font=this._font_size+"px "+this._font}fullscreen(){document.fullscreenElement?document.exitFullscreen&&document.exitFullscreen():document.documentElement.requestFullscreen()}render(){this.clear();for(let t=0;t<this._drops.length;t++){const e=this.random_char(),s=t*this._font_size,n=this._drops[t]*this._font_size;this.render_char(e,s,n),n>this._height&&Math.random()>.975&&(this._drops[t]=0),this._drops[t]++}}}function n(t,{chars:e=null,font_size:n=14,exit:i=!0,font:h="monospace",color:a="#0F0",init:c=(()=>{}),background:_="rgba(0, 0,0,0.05)"}={}){const d=new s(t,{font_size:n,chars:e,font:h,color:a,background:_,width:r(),height:o()}),l=()=>d.resize(r(),o());if(window.addEventListener("resize",l),screen?.orientation&&screen.orientation.addEventListener("change",l),t.classList.add("running"),d.start(),c(d),i)return new Promise((e=>{window.addEventListener("keydown",(s=>{var n=s.key.toLowerCase();"q"!==n&&"escape"!==n||(d.stop(),t.classList.remove("running"),window.removeEventListener("resize",l),resizeObserver.unobserve(t),screen?.orientation&&screen.orientation.removeEventListener("change",l),setTimeout(e,0))}))}))}function i(t,e){for(var s=[],n=t;n<=e;++n)s.push(String.fromCharCode(n));return s}function r(){return window.innerWidth}function o(){return window.innerHeight}n.range=i;export{n as default};
