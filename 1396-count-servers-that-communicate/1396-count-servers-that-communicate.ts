function countServers(grid: number[][]): number {
    const rowCount = grid.length;
    const colCount = grid[0].length;

    
    const rowServerCounts = new Array(rowCount).fill(0);
    const colServerCounts = new Array(colCount).fill(0);

    for (let rowIndex = 0; rowIndex < rowCount; rowIndex++) {
        for (let colIndex = 0; colIndex < colCount; colIndex++) {
            if (grid[rowIndex][colIndex] === 1) {
                rowServerCounts[rowIndex]++;
                colServerCounts[colIndex]++;
            }
        }
    }

    
    let connectedServers = 0;

    
    for (let rowIndex = 0; rowIndex < rowCount; rowIndex++) {
        for (let colIndex = 0; colIndex < colCount; colIndex++) {
           
            if (grid[rowIndex][colIndex] === 1 && (rowServerCounts[rowIndex] > 1 || colServerCounts[colIndex] > 1)) {
                connectedServers++;
            }
        }
    }

    return connectedServers;
}