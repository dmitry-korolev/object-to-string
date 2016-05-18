# Object-to-string

Small utility to convert an object into a string (`{a: 'foo', b: {c: 'bar'}}` -> `'a=foo;b|c=bar'`) and vice versa.

## Import
Require:
```js
var ots = require('objekto');
var objectToString = ots.objectToString;
var stringToObject = ots.stringToObject;
```
```js
var objectToString = require('objekto/ots');
var stringToObject = require('objekto/sto');
```

ES6:
```js
import { objectToString, stringToObject } from 'objekto';
```
```js
import objectToString from 'objekto/ots';
import stringToObject from 'objekto/sto';
```

## Usage
```js
var str0 = objectToString({a: 'foo'}); // === 'a=foo';
var str1 = objectToString({a: 'foo', b: 'bar'}); // === 'a=foo;b=bar';
var str2 = objectToString({
    a: 'foo',
    b: 'bar',
    c: {
        d: 'foobar'
    }
}); // === 'a=foo;b=bar;c|d=foobar';
```
See [tests](https://github.com/dmitry-korolev/objekto/blob/master/__tests__/index.js) for other examples and options usage.

## Tests
```
npm test
```

## License
[MIT](https://github.com/dmitry-korolev/objekto/blob/master/LICENSE.md)

## P.S.
"Objekto" is an esperanto word for 'object' (which is obvious, I guess).
