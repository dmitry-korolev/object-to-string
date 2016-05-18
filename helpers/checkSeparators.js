function checkSeparators(a, b, c) {
    if (a === b || b === c || c === a) {
        throw new Error('Separators should be different!');
    }

    [a, b, c].forEach(sep => {
        if (typeof sep !== 'string') {
            throw new SyntaxError('Separator should be a string!');
        }
    });
}

module.exports = checkSeparators;
