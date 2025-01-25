function lexicographicallySmallestArray(nums: number[], limit: number): number[] {
    
    const length: number = nums.length;
    const indices: number[] = nums.map((_, index) => index);
  
    indices.sort((i, j) => nums[i] - nums[j]);
    
    const answer: number[] = new Array(length).fill(0);

    
    for (let i = 0; i < length; ) {
       
        let j = i + 1;
        while (j < length && nums[indices[j]] - nums[indices[j - 1]] <= limit) {
            j++;
        }
        
        const sortedIndicesSlice: number[] = indices.slice(i, j).sort((a, b) => a - b);
       
        for (let k = i; k < j; k++) {
            answer[sortedIndicesSlice[k - i]] = nums[indices[k]];
        }
       
        i = j;
    }
  
    return answer;
}
