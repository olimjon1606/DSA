const triangle = function (numRows) {
    let triangle = []
    for (i = 0; i < numRows; i++) {
        let row = Array(i + 1).fill(1)
        for (j = 1; j < i; j++) {
            row[j] = triangle[i - 1][j - 1] + triangle[i - 1][j]
        }
    }

}