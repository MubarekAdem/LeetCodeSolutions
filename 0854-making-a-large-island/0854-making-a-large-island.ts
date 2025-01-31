function depthFirstSearch(i: number, j: number, path: [number, number][], grid: number[][], visited: boolean[][], n: number): void {
    // Boundary check and ensuring it is an unvisited land cell
    if (i < 0 || j < 0 || i >= n || j >= n || visited[i][j] || grid[i][j] !== 1) {
        return;
    }

    // Mark as visited
    visited[i][j] = true;

    // Include this cell in the current path
    path.push([i, j]);

    // Explore neighboring cells in all four directions
    depthFirstSearch(i + 1, j, path, grid, visited, n);
    depthFirstSearch(i, j + 1, path, grid, visited, n);
    depthFirstSearch(i - 1, j, path, grid, visited, n);
    depthFirstSearch(i, j - 1, path, grid, visited, n);
}

// Main function to find the largest island by 'flipping' one zero to one
function largestIsland(grid: number[][]): number {
    const n = grid.length; // Grid dimension

    // Initialize visited and group matrices
    const visited = Array.from({ length: n }, () => new Array(n).fill(false));
    const group = Array.from({ length: n }, () => new Array(n).fill(0));
  
    let groupId = 1; // Assign unique id to each island group

    // Iterate over the grid to perform DFS and group the islands
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            const path: [number, number][] = [];
            depthFirstSearch(i, j, path, grid, visited, n);
            if (path.length !== 0) {
                for (const [x, y] of path) {
                    group[x][y] = groupId; // Assign group id to each cell in the island
                    grid[x][y] = path.length; // Update each cell with the size of its island
                }
                groupId++;
            }
        }
    }

    // After grouping, calculate the maximum size of an island after flipping one '0' to '1'
    let maxSize = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            // If current cell is '0' (water), check adjacent cells to potentially flip it
            if (grid[i][j] === 0) {
                let sum = 1; // After flipping, it becomes '1'
                const uniqueGroups = new Set<number>();
                // Check all adjacent cells and sum the sizes of distinct island groups
                if (i > 0 && !uniqueGroups.has(group[i - 1][j])) {
                    sum += grid[i - 1][j];
                    uniqueGroups.add(group[i - 1][j]);
                }
                if (i < n - 1 && !uniqueGroups.has(group[i + 1][j])) {
                    sum += grid[i + 1][j];
                    uniqueGroups.add(group[i + 1][j]);
                }
                if (j > 0 && !uniqueGroups.has(group[i][j - 1])) {
                    sum += grid[i][j - 1];
                    uniqueGroups.add(group[i][j - 1]);
                }
                if (j < n - 1 && !uniqueGroups.has(group[i][j + 1])) {
                    sum += grid[i][j + 1];
                }
                maxSize = Math.max(maxSize, sum); // Update the maximum island size
            } else {
                // If it's already a '1', consider the size of the current island
                maxSize = Math.max(maxSize, grid[i][j]);
            }
        }
    }
    return maxSize; // Return the maximum island size found
}