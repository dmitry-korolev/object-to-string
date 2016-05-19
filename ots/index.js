// Imports
var checkSeparators = require('../helpers/checkSeparators');
var settings = require('../helpers/settings');

function _objectToString(obj, _settings) {
    if (!obj || typeof obj !== 'object') {
        return '' + obj;
    }

    var separators = settings(_settings);
    var k = separators.keySeparator;
    var v = separators.keyValueSeparator;
    var l = separators.levelSeparator;

    _settings && checkSeparators(k, v, l);

    function reKey(obj, groupKey) {
        var result = {},
            key;

        for (key in obj) {
            if (obj.hasOwnProperty(key)) {
                result[groupKey + l + key] = obj[key];
            }
        }

        return converter(result);
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
