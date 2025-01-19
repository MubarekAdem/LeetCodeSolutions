type HeightAndCoordinates = [number, number, number];

function trapRainWater(heightMap: number[][]): number {
    const minHeap: HeightAndCoordinates[] = [];

    const compare: (a: HeightAndCoordinates, b: HeightAndCoordinates) => number = ([heightA], [heightB]) => heightA - heightB;

    const heapify = (index: number) => {
        let smallest = index;
        const left = 2 * index + 1;
        const right = 2 * index + 2;
      
        if (left < minHeap.length && compare(minHeap[left], minHeap[smallest]) < 0) {
            smallest = left;
        }
        if (right < minHeap.length && compare(minHeap[right], minHeap[smallest]) < 0) {
            smallest = right;
        }
        if (smallest !== index) {
            [minHeap[index], minHeap[smallest]] = [minHeap[smallest], minHeap[index]];
            heapify(smallest);
        }
    };

    const extractMin = (): HeightAndCoordinates | undefined => {
        if (minHeap.length === 0) return undefined;
        const min = minHeap[0];
        minHeap[0] = minHeap[minHeap.length - 1];
        minHeap.pop();
        heapify(0);
        return min;
    };

    const insertHeap = (element: HeightAndCoordinates) => {
        minHeap.push(element);
        let i = minHeap.length - 1;
        while (i !== 0 && compare(minHeap[Math.floor((i - 1) / 2)], minHeap[i]) > 0) {
            [minHeap[i], minHeap[Math.floor((i - 1) / 2)]] = [minHeap[Math.floor((i - 1) / 2)], minHeap[i]];
            i = Math.floor((i - 1) / 2);
        }
    };

    const rows: number = heightMap.length;
    const cols: number = heightMap[0].length;

    const visited: boolean[][] = Array.from(new Array(rows), () => new Array(cols).fill(false));

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (i === 0 || i === rows - 1 || j === 0 || j === cols - 1) {
                insertHeap([heightMap[i][j], i, j]);
                visited[i][j] = true;
            }
        }
    }

    let trappedWater: number = 0;

    
    const directions: number[] = [-1, 0, 1, 0, -1];

    while (minHeap.length) {
        const [currentHeight, row, col] = extractMin()!;

      
        for (let k = 0; k < 4; k++) {
            const newRow: number = row + directions[k];
            const newCol: number = col + directions[k + 1];

           
            if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols && !visited[newRow][newCol]) {
                
                trappedWater += Math.max(0, currentHeight - heightMap[newRow][newCol]);

               
                visited[newRow][newCol] = true;

                
                insertHeap([Math.max(heightMap[newRow][newCol], currentHeight), newRow, newCol]);
            }
        }
    }

    return trappedWater;
}