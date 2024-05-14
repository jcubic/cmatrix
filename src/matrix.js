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
                          width = null,
                          height = null,
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
    width: width ?? default_width(),
    height: height ?? default_height()
  });

  let resize_handler;

  if (resize) {
    resize_handler = () => matrix.resize(default_width(), default_height());

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

matrix.custom_chars = make_custom_chars();

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

// ---------------------------------------------------------------
function make_chars(...nums) {
  return nums.map(num => String.fromCharCode(num));
}

// ---------------------------------------------------------------
function make_custom_chars() {
  const nums = [0x25AA, 0x254C, 0x00A9, 0x00A6, 0x007C, 0x007A, 0x003E, 0x003C, 0x003A, 0x0022, 0x002A, 0x002B,0x30A2,0x30A6,0x30A8,0x30AA,0x30AB,0x30AD,0x30B1,0x30B3,0x30B5,0x30B7,0x30B9,0x30BB,0x30BD,0x30BF,0x30C4,0x30C6,0x30CA,0x30CB,0x30CC,0x30CD,0x30CF,0x30D2,0x30DB,0x30DE,0x30DF,0x30E0,0x30E1,0x30E2,0x30E4,0x30E8,0x30E9,0x30EA,0x30EF,0x30FC, 0xA78A, 0xE937];

  // '6' don't have its glyph
  const digits = matrix.range(0x0030, 0x0035).concat(matrix.range(0x0037, 0x0039));

  return digits.concat(make_chars(...nums));
}
