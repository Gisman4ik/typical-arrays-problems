
exports.min = function min (array) {
    if (typeof array === 'undefined') {
        return 0;
    }
    let min = array[0] || 0;
    for (let index = 0; index < array.length; index++) {
        if (min>+array[index]) {
            min=array[index];
        };
    }
  return min;
}

exports.max = function max (array) {
    if (typeof array === 'undefined') {
        return 0;
    }
    let min = array[0] || 0;
    for (let index = 0; index < array.length; index++) {
        if (min<+array[index]) {
            min=array[index];
        };
    }
  return min;
}

exports.avg = function avg (array) {
    if (typeof array === 'undefined') {
        return 0;
    }
    let avg = array.reduce((acc, curr) => acc + curr, 0) / array.length || 0;
    return avg;
}
