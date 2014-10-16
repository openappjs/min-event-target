# min-event-target

a minimal browser [`EventTarget`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget) interface for node.

factored out of [Raynos/min-document](https://github.com/Raynos/min-document).

## example

```
var extend = require('xtend')

var EventTarget = require('min-event-target')

function MockWindow () {}

extend(MockWindow.prototype, EventTarget)
```

## install

```
npm install --save min-event-target
```

## contributors

- [Raynos](https://github.com/Raynos)
- [ahdinosaur](https://github.com/ahdinosaur)

## license

[MIT](./LICENSE)
