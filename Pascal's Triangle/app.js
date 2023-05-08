
var generate = function(numRows) {
    const triangle = [];
    for (let i = 0; i < numRows; i++) {
        const row = Array(i + 1).fill(1);
        for (let j = 1; j < i; j++) {
            row[j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
        }
        triangle.push(row);
    }
    return triangle;
};
console.log(generate(5))