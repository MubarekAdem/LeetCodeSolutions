const eventualSafeNodes = (graph: number[][]): number[] => {
    const n: number = graph.length; 
    const color: number[] = new Array(n).fill(0); 

    
    const dfs = (nodeIndex: number): boolean => {
        if (color[nodeIndex]) {
            
            return color[nodeIndex] === 2;
        }
        color[nodeIndex] = 1; 
        for (const neighbor of graph[nodeIndex]) {
           
            if (!dfs(neighbor)) {
                
                return false;
            }
        }
        color[nodeIndex] = 2; 
        return true; 
    };

    let ans: number[] = []; 
    for (let i = 0; i < n; ++i) {
        if (dfs(i)) {
            ans.push(i);
        }
    }
    return ans; 
};
