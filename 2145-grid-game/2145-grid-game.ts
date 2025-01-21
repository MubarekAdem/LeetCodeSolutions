function gridGame(grid: number[][]): number {
    
    let answer = Number.MAX_SAFE_INTEGER;

   
    let topRowSum = grid[0].reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    
    let bottomRowSum = 0;

    
    for (let columnIndex = 0; columnIndex < grid[0].length; ++columnIndex) {
       
        topRowSum -= grid[0][columnIndex];
  
        
        answer = Math.min(answer, Math.max(topRowSum, bottomRowSum));
  
        
        bottomRowSum += grid[1][columnIndex];
    }

   
    return answer;
}
