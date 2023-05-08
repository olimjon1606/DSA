
var generate = function(numRows) {
    const triangle = [];
    for (let i = 0; i < numRows; i++) {
        const row = Array(i + 1).fill(1); // initialize current row with 1s
        for (let j = 1; j < i; j++) {
            row[j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
        }
        triangle.push(row); // add the current row to the triangle
    }
    return triangle;
};
console.log(generate(5))