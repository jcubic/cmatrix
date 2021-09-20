# CMatrix - Matrix effect in JavaScript

[Matrix animation effect in JavaScript using Canvas](https://jcubic.github.io/cmatrix/)

## Installation

```
npm install cmatrix
```

## Demo
* [ES Module](https://jcubic.github.io/cmatrix/demo.mjs.html) (custom characters)
* [ES5](https://jcubic.github.io/cmatrix/demo.html)

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

The matrix function return a Promise that is resolved when exit.
By default, `q` and `ESC` exit from the effect.

[Repo Link](https://github.com/jcubic/cmatrix)

## Options
* `chars` - array of single character strings, by default Katagana and Hiragana (Japanese characters are used).
* `exit` - by default matrix return a promise that resolves when it ends (when someone press `q` or `ESC`)
           this option when set to false will disable this and the function return undefined.
* `color` - default color - default is `#0f0`.
* `background` - by default it's set `rgba(0, 0, 0, 0.05)` alpha is used for nice fade out effect.
* `font_size` - number the default is 14.

## Changelog
### 0.2.0
* add `exit`/`color`/`background` options

### 0.1.1 / 0.1.0
* Initial version

## Acknowledge
* The base code and initial idea came from this [Code Pen Demo](https://codepen.io/goodmanmr1/pen/jpPeRR) by Michael Goodman.

## License
Copyright (C) 2021 [Jakub T. Jankiewicz](https://jcubic.pl/me)<br/>
Released under MIT License
