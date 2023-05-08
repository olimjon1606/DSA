const grid = [
    [1, 1, 1, 1, 0],
    [1, 1, 0, 1, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 0, 1, 0]
];

function numIslands(grid) {
    console.log("hello")

    if (!grid || grid.length === 0) {
        return 0;
    }
    console.log("help");

    const m = grid.length;
    const n = grid[0].length;
    console.log("hello")

    let count = 0;

    const dfs = (i, j) => {
        if (i < 0 || i >= m || j < 0 || j >= n || grid[i][j] === '0') {
            return;
        }

        grid[i][j] = '0';

        dfs(i - 1, j);
        dfs(i + 1, j);
        dfs(i, j - 1);
        dfs(i, j + 1);
    };
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === '1') {
                count++;
                dfs(i, j);
            }
        }
    }
    return count;
};
console.log(numIslands());
console.log(!grid);