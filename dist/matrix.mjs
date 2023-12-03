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
var t=n(12449,12534),e=n(12353,12438);class s{constructor(s,{chars:i=null,font_size:n=14,width:r,height:o,font:h="monospace",color:a,background:c}={}){this._canvas=s,this._canvas._matrix&&(this._canvas._matrix.stop(),this._canvas._matrix.clear()),this._canvas._matrix=this,this._ctx=s.getContext("2d"),this._font_size=n,this._drops=[],this._color=a,this._background=c,this._font=h,this._chars=i||t.concat(e),this.resize(r,o)}random_char(){return(t=this._chars)[Math.floor(Math.random()*t.length)];var t}render_char(t,e,s){this._ctx.fillText(t,e,s)}start(){if(this._run)return;let t=0;this._run=!0;const e=this;!function s(){e._run&&(t++%2==0&&e.render(),requestAnimationFrame(s))}()}stop(){this._run=!1}reset(){for(let t=0;t<this._columns;t++)this._drops[t]=255}resize(t,e){this._width=t,this._height=e,this.clear(),this._canvas.width=t,setTimeout((()=>{this._canvas.height=e,this.reset()}),0),this._columns=Math.round(t/this._font_size)}clear(){this._ctx.fillStyle=this._background,this._ctx.fillRect(0,0,this._width,this._height),this._ctx.fillStyle=this._color,this._ctx.font=this._font_size+"px "+this._font}fullscreen(){document.fullscreenElement?document.exitFullscreen&&document.exitFullscreen():document.documentElement.requestFullscreen()}render(){this.clear();for(let t=0;t<this._drops.length;t++){const e=this.random_char(),s=t*this._font_size,i=this._drops[t]*this._font_size;this.render_char(e,s,i),i>this._height&&Math.random()>.975&&(this._drops[t]=0),this._drops[t]++}}}function i(t,{chars:e=null,font_size:i=14,exit:n=!0,font:r="monospace",width:o=o(),height:h=h(),resize:a=!0,color:c="#0F0",mount:_=(()=>{}),unmount:l=(()=>{}),background:d="rgba(0, 0,0,0.05)"}={}){const u=new s(t,{font_size:i,chars:e,font:r,color:c,background:d,width:o,height:h});let f;if(a&&(f=()=>u.resize(o(),h()),window.addEventListener("resize",f),screen?.orientation&&screen.orientation.addEventListener("change",f)),t.classList.add("running"),u.start(),_(u),n)return new Promise((e=>{window.addEventListener("keydown",(s=>{var i=s.key.toLowerCase();"q"!==i&&"escape"!==i||(u.stop(),t.classList.remove("running"),f&&(window.removeEventListener("resize",f),screen?.orientation&&screen.orientation.removeEventListener("change",f)),setTimeout((()=>{l(u),e()}),0))}))}))}function n(t,e){for(var s=[],i=t;i<=e;++i)s.push(String.fromCharCode(i));return s}i.range=n;export{i as default};
