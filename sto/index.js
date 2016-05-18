// Imports
const isString = require('lodash/isString');
const merge = require('lodash/merge');
const checkSeparators = require('../helpers/checkSeparators');

function stringToObject(str, _settings) {
    if (!isString(str)) {
        return str;
    }

    if (!str.length) {
        return {};
    }

    const settings = Object.assign({}, {
        keySeparator: ';',
        keyValueSeparator: '=',
        levelSeparator: '|'
    }, _settings || {});
    const k = settings.keySeparator;
    const v = settings.keyValueSeparator;
    const l = settings.levelSeparator;

    checkSeparators(k, v, l);

    const pathToObject = (path, value) => path.split(l).reduceRight((result, key, index, array) => {
        var tmp = {};
        if (index === array.length - 1) {
            tmp[key] = value;
        } else {
            tmp[key] = Object.assign({}, result);
        }
        return tmp;
    }, {});

    const converter = (str) => str.split(k).reduce((result, keyVal) => {
        const tmp = keyVal.split(v);
        if (tmp.length < 2) {
            throw new SyntaxError('Unable to parse ' + keyVal + '!');
        }

        const key = tmp[0];
        const val = tmp[1];
        const obj = pathToObject(key, val);

        return merge(result, obj);
    }, {});

    return converter(str);

}

module.exports = stringToObject;
