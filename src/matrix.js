/**
 * Matrix effect on a Canvas https://jcubic.github.io/cmatrix/
 *
 * Copyright (c) 2021 Jakub T. Jankiewicz <https://jcubic.pl/me>
 * Released under MIT license
 *
 * The code was started at this Codepen https://codepen.io/jcubic/pen/rNeNwgB
 * And was based on code by Michael Goodman https://codepen.io/goodmanmr1/pen/jpPeRR
 *
 */
var katagana = gen_unicode(0x30A1, 0x30F6);
var hiragana = gen_unicode(0x3041, 0x3096);

// ---------------------------------------------------------------
class Matrix {
  constructor(canvas, { chars = null, font_size = 14, width, height, color, background } = {}) {
    this._canvas = canvas;
    this._ctx = canvas.getContext('2d');
    this._font_size = font_size;
    this._drops = [];
    this._color = color;
    this._background = background;
    this._chars = chars ? chars : katagana.concat(hiragana);
    this.resize(width, height);
  }
  random_char() {
    return rnd(this._chars);
  }
  render_char(char, x, y) {
    this._ctx.fillText(char, x, y);
  }
  start() {
    let frames = 0;
    this._run = true;
    const self = this;
    (function loop() {
      if (frames++ % 2 === 0) {
        self.render(); // slower render
      }
      if (self._run) {
        requestAnimationFrame(loop);
      }
    })();
  }
  stop() {
    this._run = false;
  }
  reset() {
    for (let x = 0; x < this._columns; x++) {
      this._drops[x] = 255;
    }
  }
  resize(width, height) {
    this._width = width;
    this._height = height;
    this._canvas.width = width;
    setTimeout(() => {
      this._canvas.height = height;
      this.reset();
    }, 0);
    this._columns = Math.round(width / this._font_size);
  }
  clear() {
    this._ctx.fillStyle = this._background;
    this._ctx.fillRect(0, 0, this._width, this._height);
    this._ctx.fillStyle = this._color;
    this._ctx.font = this._font_size + "px monospace";
  }
  render() {
    this.clear();
    for (let col = 0; col < this._drops.length; col++) {
      const char = this.random_char();
      const x = col * this._font_size;
      const y = this._drops[col] * this._font_size;
      this.render_char(char, x, y);
      if (y > this._height && Math.random() > .975) {
        this._drops[col] = 0;
      }
      this._drops[col]++;
    }
  }
}

// ---------------------------------------------------------------
// :: Init code
// ---------------------------------------------------------------
export default function matrix(canvas, { chars = null,
                                         font_size = 14,
                                         exit = true,
                                         color = '#0F0',
                                         background = 'rgba(0, 0,0,0.05)'} = {}) {

  const matrix = new Matrix(canvas, {
    font_size: font_size,
    chars,
    color,
    background,
    width: width(),
    height: height()
  });

  window.addEventListener('resize', e => {
    matrix.resize(width(), height());
  });

  canvas.classList.add('running');
  matrix.start();

  if (exit) {
    return new Promise(function(resolve) {
      window.addEventListener('keydown', function(e) {
        var key = e.key.toLowerCase();
        if (key === 'q' || key === 'escape') {
          matrix.stop();
          canvas.classList.remove('running');
          setTimeout(resolve, 0);
        }
      });
    });
  }
};

// ---------------------------------------------------------------
// :: Utils
// ---------------------------------------------------------------
function gen_unicode(start, end) {
  var chars = [];
  for (var i = start; i <= end; ++i) {
    chars.push(String.fromCharCode(i));
  }
  return chars;
}

// ---------------------------------------------------------------
function rnd(array) {
  return array[Math.floor(Math.random() * array.length)];
}

// ---------------------------------------------------------------
function width() {
  return window.innerWidth;
}

// ---------------------------------------------------------------
function height() {
  return window.innerHeight;
}
