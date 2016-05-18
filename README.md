# Object-to-string

Small utility to convert an object into a string (`{a: 'foo', b: {c: 'bar'}}` -> `'a=foo;b|c=bar'`) and vice versa.

## Usage
Require:
```js
var objectToString = require('object-to-string');
var ots = objectToString.ots;
var sto = objectToString.sto;
```
```js
var ots = require('object-to-string/ots');
var sto = require('object-to-string/sto');
```

ES6:
```js
import { ots, sto } from 'object-to-string';
```
```js
import ots from 'object-to-string/ots';
import sto from 'object-to-string/sto';
```

## Tests
```
npm test
```

## License
[MIT](https://github.com/dmitry-korolev/object-to-string/blob/master/LICENSE.md)
