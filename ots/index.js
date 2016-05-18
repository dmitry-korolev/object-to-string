// Imports
const isPlainObject = require('lodash/isPlainObject');
const toString = require('lodash/toString');

function _objectToString(obj, _settings) {
    if (!isPlainObject(obj)) {
        return toString(obj);
    }

    const settings = Object.assign({}, {
        keySeparator: ';',
        keyValueSeparator: '=',
        levelSeparator: '|'
    }, _settings || {});
    const k = settings.keySeparator;
    const v = settings.keyValueSeparator;
    const l = settings.levelSeparator;

    const reKey = (obj, groupKey) => converter(Object.keys(obj).reduce((result, key) => {
        result[groupKey + l + key] = obj[key];
        return result;
    }, {}));

    const converter = obj => Object.keys(obj).reduce((result, key) => {
        return isPlainObject(obj[key]) ?
            result + reKey(obj[key], key) :
            result + key + v + toString(obj[key]) + k;
    }, '');

    return converter(obj);
}

function objectToString(obj, _settings) {
    return _objectToString(obj, _settings).slice(0, -1);
}

module.exports = objectToString;
