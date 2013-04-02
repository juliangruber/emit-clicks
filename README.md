
# emit-clicks

Make internal links emit events instead of leading away. Super useful with
[single-page](https://github.com/substack/single-page).

## Usage

With this DOM:

```html
<div id="my-dom">
  <a href="/foo/bar">Click me!</a>
</div>
```

This JavaScript - bundled with
[browserify](https://github.com/substack/browserify) - emits a `click` event
when someone clicks on the given link:

```js
var emit = require('emit-clicks');
var dom = document.querySelector('#my-dom');

emit(dom).on('click', function (href) {
  console.log('clicked: ' + href);
  // => /foo/bar
});
```

## API

### emit(dom)

Returns an `EventEmitter` that emits `click` events whenever a relative URL is clicked.

## Installation

With [npm](http://npmjs.org) do

```bash
$ npm install emit-clicks
```

## License

(MIT)

Copyright (c) 2013 Julian Gruber &lt;julian@juliangruber.com&gt;

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
