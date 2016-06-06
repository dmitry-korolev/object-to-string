function merge (left, right) {
    if (left && typeof left === 'object' && right && typeof right === 'object') {
        for (var key in right) {
            if (right.hasOwnProperty(key)) {
                if (left[key] && typeof left[key] === 'object' && right[key] && typeof right[key] === 'object') {
                    left[key] = merge(left[key], right[key]);
                } else {
                    left[key] = right[key];
                }
            }
        }
    } else {
        left = right;
    }

    return left;
}

module.exports = merge;
