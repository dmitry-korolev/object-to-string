// Imports
var checkSeparators = require('../helpers/checkSeparators');

function _objectToString(obj, _settings) {
    if (!obj || typeof obj !== 'object') {
        return '' + obj;
    }

    var defaults = {
        keySeparator: ';',
        keyValueSeparator: '=',
        levelSeparator: '|'
    };
    var settings = _settings ? Object.assign({}, defaults, _settings) : defaults;
    var k = settings.keySeparator;
    var v = settings.keyValueSeparator;
    var l = settings.levelSeparator;

    _settings && checkSeparators(k, v, l);

    function reKey(obj, groupKey) {
        var result = {},
            key;

        for (key in obj) {
            if (obj.hasOwnProperty(key)) {
                result[groupKey + l + key] = obj[key];
            }
        }

        return converter(result); // eslint-disable-line no-use-before-define
    }

    function converter(obj) {
        var result = '',
            key;

        for (key in obj) {
            if (obj.hasOwnProperty(key)) {
                result += obj[key] && typeof obj[key] === 'object' ?
                    reKey(obj[key], key) :
                    key + v + obj[key] + k;
            }
        }

        return result;
    }

    return converter(obj);
}

function objectToString(obj, _settings) {
    return _objectToString(obj, _settings).slice(0, -1);
}

module.exports = objectToString;
