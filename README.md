# Objekto

[Objekto](https://www.npmjs.com/package/objekto) is a small utility to convert an object into a string (`{a: 'foo', b: {c: 'bar'}}` to `'a=foo;b|c=bar'`) and vice versa.
```bash
npm install --save objekto
```

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
Convert an object into a string or vice versa:
```js
var obj0 = {a: 'foo'};
var str0 = 'a=foo';
console.log(objectToString(obj0) === str0); // -> true
console.log(_.isEqual(stringToObject(str0), obj0)); // -> true

var obj1 = {a: 'foo', b: 'bar'};
var str1 = 'a=foo;b=bar';
console.log(objectToString(obj1) === str1); // -> true
console.log(_.isEqual(stringToObject(str1), obj1)); // -> true

var obj2 = {
   a: 'foo',
   b: 'bar',
   c: {
       d: 'foobar'
   }
};
var str2 = 'a=foo;b=bar;c|d=foobar';
console.log(objectToString(obj2) === str2); // -> true
console.log(_.isEqual(stringToObject(str2), obj2)); // -> true
```
Options:
```js
var object = {
    a: 'foo',
    b: {
        c: 'bar'
    }
};

var string = 'a~foo||b.c~bar';

var options = {
    keySeparator: '||',
    keyValueSeparator: '~',
    levelSeparator: '.'
};

console.log(objectToString(object, options) === string); // -> true
console.log(_.isEqual(stringToObject(string, options), object)); // -> true

```
See [test cases](https://github.com/dmitry-korolev/objekto/blob/master/__tests__/index.js) for other examples.

## Tests
```bash
npm test
```

## Notice on performance
You should note that on large and complex objects objectToString is about three times slower than JSON.stringify, stringToObject is about 10 times slower than JSON.parse. Use this utils only in case you really can't use native JSON methods.

## Changelog
* 1.1.1: Removed lodash dependency.
* 1.1.0: Performance improvements.
* 1.0.0: Initial release

## License
[MIT](https://github.com/dmitry-korolev/objekto/blob/master/LICENSE.md) @ [Dmitry Korolev](http://korolev.dk)

## P.S.
"Objekto" is an esperanto word for 'object' (which is pretty obvious, I guess).
