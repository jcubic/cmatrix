# CMatrix - Matrix effect in JavaScript

[![npm](https://img.shields.io/badge/npm-0.3.1-blue.svg)](https://www.npmjs.com/package/cmatrix)
[![LICENSE MIT](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/jcubic/cmatrix/blob/master/LICENSE)

[Matrix animation effect in JavaScript using Canvas](https://jcubic.github.io/cmatrix/)

## Installation

```
npm install cmatrix
```

## Demos
* [ES Module](https://jcubic.github.io/cmatrix/demo.mjs.html) (custom characters)
* [ES5](https://jcubic.github.io/cmatrix/demo.html)
* [Matrix Font](https://jcubic.github.io/cmatrix/custom-font.html)

## Usage

You can use CDN:

```html
<script src="https://cdn.jsdelivr.net/npm/cmatrix"></script>
```

and intialize the effect.

```javascript
matrix(canvasElement, {
  chars: ['0', '1'],
  font_size: 16
}).
```

```javascript
matrix(canvasElement, {
  chars: matrix.range(0x30A1, 0x30F6).concat(matrix.range(0x0030, 0x0039)),
  font_size: 16
}).
```

The matrix function return a Promise that is resolved when exit.
By default, `q` and `ESC` exit from the effect. Use `exit: false` to disable ending the animation.

[Repo Link](https://github.com/jcubic/cmatrix)

## Options
* `chars` - array of single character strings, by default Katagana and Hiragana (Japanese characters are used).
* `exit` - by default matrix return a promise that resolves when it ends (when someone press `q` or `ESC`)
           this option when set to false will disable this and the function return undefined.
* `color` - default color - default is `#0f0`.
* `background` - by default it's set `rgba(0, 0, 0, 0.05)` alpha is required for the effect to look good.
* `font_size` - number the default is 14.
* `mount: (matrix) => void` - callback function which is executed with single argument that is instance of internal Matrix object when initializing.
* `unmount: (matrix) => void` - callback function which is executed when Matrix effect is destroyed.
* `font` - name of the font (default `monospace`).

## Matrix instance methods
* `start()` - start the animation
* `stop()` - stop the animation
* `resize(width, height)` - resize the canvas to the given width and height
* `clear()` - clear the canvas
* `reset()` - reset the internal state the effect
* `fullscreen()` - toggle fullscreen
* `render()` - render single frame using internal state

## Static methods
* `matrix.range(start_number, end_number)` - returns characters created from given range. Use `matrix.range(0x30A1, 0x30F6)` for [Katagana](https://en.wikipedia.org/wiki/Katakana) characters and `matrix.range(0x3041, 0x3096)` for [Hiragana](https://en.wikipedia.org/wiki/Hiragana), they look nice as matrix rain.

## Changelog
### 0.4.0
* add `fullscreen()` method
* add `mount` and `unmount` option and expose Matrix class instance
* fix flash of distorted rain when changing orientation on mobile

### 0.3.1
* fix clearing state on subsequent calls to matrix [#2](https://github.com/jcubic/cmatrix/issues/2)

### 0.3.0
* add support for custom font

### 0.2.0
* add `exit`/`color`/`background` options

### 0.1.1 / 0.1.0
* Initial version

## Acknowledge
* The base code and initial idea came from this [Code Pen Demo](https://codepen.io/goodmanmr1/pen/jpPeRR) by Michael Goodman.
* Custom matrix font taken from [Realistic Matrix effect](https://github.com/Rezmason/matrix).

## License
Copyright (C) 2021-2023 [Jakub T. Jankiewicz](https://jcubic.pl/me)<br/>
Released under MIT License
