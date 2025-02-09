function countBadPairs(nums: number[]): number {
    
    const countMap = new Map<number, number>();
    let badPairsCount = 0;
  
    for (let i = 0; i < nums.length; ++i) {
        
        const diff = i - nums[i];
       
        badPairsCount += i - (countMap.get(diff) ?? 0);
        // Update the count of good pairs with the current difference in the map.
        countMap.set(diff, (countMap.get(diff) ?? 0) + 1);
    }
  
    // Return the total count of bad pairs.
    return badPairsCount;
}