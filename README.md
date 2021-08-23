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

## License
Copyright (C) [Jakub T. Jankiewicz](https://jcubic.pl/me)<br/>
Released under MIT License
