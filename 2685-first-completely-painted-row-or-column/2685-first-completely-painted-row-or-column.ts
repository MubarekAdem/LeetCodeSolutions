function firstCompleteIndex(arr: number[], mat: number[][]): number {
   
    const rowCount = mat.length;
    const colCount = mat[0].length;

    
    const positionMap: Map<number, number[]> = new Map();
    for (let row = 0; row < rowCount; ++row) {
        for (let col = 0; col < colCount; ++col) {
            positionMap.set(mat[row][col], [row, col]);
        }
    }

    
    const rowCompletionCount: number[] = new Array(rowCount).fill(0);
    const colCompletionCount: number[] = new Array(colCount).fill(0);

    for (let index = 0; index < arr.length; ++index) {
        const [row, col] = positionMap.get(arr[index])!;
        ++rowCompletionCount[row];
        ++colCompletionCount[col];

        if (rowCompletionCount[row] === colCount || colCompletionCount[col] === rowCount) {
            return index;
        }
    }
  
    
}
