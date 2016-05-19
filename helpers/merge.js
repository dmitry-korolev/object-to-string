function merge (a, b) {
    if (a && typeof a === 'object' && b && typeof b === 'object') {
        for (var key in b) {
            if (b.hasOwnProperty(key)) {
                if (a[key] && typeof a[key] === 'object' && b[key] && typeof b[key] === 'object') {
                    a[key] = merge(a[key], b[key]);
                } else {
                    a[key] = b[key];
                }
            }
        }
    } else {
        a = b;
    }

    return a;
}

module.exports = merge;
