module.exports = function towelSort(matrix) {
    if (arguments.length === 0) return [];

    for (let i = 0; i < matrix.length; i++) {
        if (i % 2) {
            matrix[i].sort((a, b) => b - a);
        }
    }

    return matrix.flat();
};
