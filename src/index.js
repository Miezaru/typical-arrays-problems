exports.min = function min(array) {
    if (array) {
        if (Array.isArray(array) && array.length) {
            return Math.min(...array);
        }
    }
    return 0;
};

exports.max = function max(array) {
    if (array) {
        if (Array.isArray(array) && array.length) {
            return Math.max(...array);
        }
    }
    return 0;
};

exports.avg = function avg(array) {
    let average = 0;
    if (array) {
        if (array.length === 1) {
            return array[0];
        }
        if (Array.isArray(array) && array.length) {
            for (let i = 0; i < array.length; i++) {
                average += array[i];
            }
            return average / array.length;
        }
    }
    return 0;
};
