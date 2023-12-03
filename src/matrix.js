/**
 * Matrix effect on a Canvas https://jcubic.github.io/cmatrix/
 *
 * Copyright (c) 2021-2023 Jakub T. Jankiewicz <https://jcubic.pl/me>
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
  constructor(canvas, {
    chars = null,
    font_size = 14,
    width,
    height,
    font = 'monospace',
    color,
    background
  } = {}) {
    this._canvas = canvas;
    if (this._canvas._matrix) {
      this._canvas._matrix.stop();
      this._canvas._matrix.clear();
    }
    this._canvas._matrix = this;
    this._ctx = canvas.getContext('2d');
    this._font_size = font_size;
    this._drops = [];
    this._color = color;
    this._background = background;
    this._font = font;
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
    if (this._run) {
      return;
    }
    let frames = 0;
    this._run = true;
    const self = this;
    (function loop() {
      if (self._run) {
        if (frames++ % 2 === 0) {
          self.render(); // slower render
        }
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
    this.clear();
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
    this._ctx.font = this._font_size + "px " + this._font;
  }
  fullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
    }
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
function matrix(canvas, { chars = null,
                          font_size = 14,
                          exit = true,
                          font = 'monospace',
                          width = default_width(),
                          height = default_height(),
                          resize = true,
                          color = '#0F0',
                          mount = () => {},
                          unmount = () => {},
                          background = 'rgba(0, 0,0,0.05)'} = {}) {

  const matrix = new Matrix(canvas, {
    font_size: font_size,
    chars,
    font,
    color,
    background,
    width,
    height
  });

  let resize_handler;

  if (resize) {
    resize_handler = () => matrix.resize(width(), height());

    window.addEventListener('resize', resize_handler);

    if (screen?.orientation) {
      screen.orientation.addEventListener('change', resize_handler);
    }
  }

  canvas.classList.add('running');

  matrix.start();
  mount(matrix);

  if (exit) {
    return new Promise(function(resolve) {
      window.addEventListener('keydown', function(e) {
        var key = e.key.toLowerCase();
        if (key === 'q' || key === 'escape') {
          matrix.stop();
          canvas.classList.remove('running');
          if (resize_handler) {
            window.removeEventListener('resize', resize_handler);
            if (screen?.orientation) {
              screen.orientation.removeEventListener('change', resize_handler);
            }
          }
          setTimeout(() => {
            unmount(matrix);
            resolve();
          }, 0);
        }
      });
    });
  }
};


export default matrix;

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

matrix.range = gen_unicode;

// ---------------------------------------------------------------
function rnd(array) {
  return array[Math.floor(Math.random() * array.length)];
}

// ---------------------------------------------------------------
function default_width() {
  return window.innerWidth;
}

// ---------------------------------------------------------------
function default_height() {
  return window.innerHeight;
}
