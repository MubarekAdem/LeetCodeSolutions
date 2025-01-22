function highestPeak(isWater: number[][]): number[][] {
    const rows = isWater.length;    
    const cols = isWater[0].length; 
    let answer: number[][] = [];    
    let queue: number[][] = [];   

   
    for (let i = 0; i < rows; i++) {
        answer.push(new Array(cols).fill(-1));
        for (let j = 0; j < cols; j++) {
            if (isWater[i][j] === 1) {
                queue.push([i, j]);
                answer[i][j] = 0;
            }
        }
    }

    
    const directions = [-1, 0, 1, 0, -1];

    
    while (queue.length) {
        let tempQueue: number[][] = [];
        for (const [currentRow, currentCol] of queue) {
            for (let k = 0; k < 4; k++) { 
                const newRow = currentRow + directions[k];
                const newCol = currentCol + directions[k + 1];
                
                if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols && answer[newRow][newCol] === -1) {
                    tempQueue.push([newRow, newCol]);
                    answer[newRow][newCol] = answer[currentRow][currentCol] + 1;
                }
            }
        }
        queue = tempQueue; 
    }

    return answer; 
}