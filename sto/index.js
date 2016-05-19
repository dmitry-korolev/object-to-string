// Imports
var merge = require('../helpers/merge');
var checkSeparators = require('../helpers/checkSeparators');
var settings = require('../helpers/settings');

function stringToObject(str, _settings) {
    if (typeof str !== 'string') {
        return str;
    }

    if (!str.length) {
        return {};
    }

    var separators = settings(_settings);
    var k = separators.keySeparator;
    var v = separators.keyValueSeparator;
    var l = separators.levelSeparator;

    _settings && checkSeparators(k, v, l);

    function pathToObject(_path, value) {
        var result = {},
            path = _path.split(l),
            i = path.length - 1,
            tmp;

        for (;i >= 0; i -= 1) {
            tmp = {};
            if (i === path.length - 1) {
                tmp[path[i]] = value;
            } else {
                tmp[path[i]] = result;
            }
            result = tmp;
        }

        return result;
    }

    function converter(str) {
        var result = {},
            keys = str.split(k),
            i, tmp;

        for (i = 0; i < keys.length; i += 1) {
            tmp = keys[i].split(v);
            if (tmp.length < 2) {
                throw new SyntaxError('Unable to parse ' + keyVal + '!');
            }
            merge(result, pathToObject(tmp[0], tmp[1]));
        }

        return result;
    }

    return converter(str);

}

module.exports = stringToObject;
