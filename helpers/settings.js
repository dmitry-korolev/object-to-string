function settings(_settings) {
    var defaults = {
        keySeparator: ';',
        keyValueSeparator: '=',
        levelSeparator: '|'
    };

    if (!_settings) return defaults;

    return {
        keySeparator: _settings.keySeparator || defaults.keySeparator,
        keyValueSeparator: _settings.keyValueSeparator || defaults.keyValueSeparator,
        levelSeparator: _settings.levelSeparator || defaults.levelSeparator
    };
}

module.exports = settings;
