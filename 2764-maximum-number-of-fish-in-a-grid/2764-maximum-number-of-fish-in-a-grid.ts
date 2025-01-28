function findMaxFish(grid: number[][]): number {
    const rowCount = grid.length;    
    const colCount = grid[0].length; 
    const directions = [-1, 0, 1, 0, -1]; 
    const deepFirstSearch = (row: number, col: number): number => {
        let count = grid[row][col]; 
        grid[row][col] = 0; 
      
       
        for (let dirIndex = 0; dirIndex < 4; ++dirIndex) {
            const nextRow = row + directions[dirIndex]; 
            const nextCol = col + directions[dirIndex + 1];
          
            
            if (nextRow >= 0 && nextRow < rowCount && nextCol >= 0 && nextCol < colCount && grid[nextRow][nextCol] > 0) {
                count += deepFirstSearch(nextRow, nextCol);
            }
        }
      
        return count; 
    };

    let maxFish = 0; 
  
   
    for (let row = 0; row < rowCount; ++row) {
        for (let col = 0; col < colCount; ++col) {
            
            if (grid[row][col] > 0) {
               
                maxFish = Math.max(maxFish, deepFirstSearch(row, col));
            }
        }
    }
  
    return maxFish; // Return the maximum fish count found in any connected region.
}