/**
 * Calculates the maximum ascending subarray sum in an array of numbers
 * @param nums - The given array of numbers
 * @returns The maximum sum of an ascending subarray
 */
function maxAscendingSum(nums: number[]): number {
    const length = nums.length; // Length of the input array
    let maxSum = nums[0]; // Initialize maxSum as the first element
    let currentSum = nums[0]; // Initialize currentSum as the first element
    for (let i = 1; i < length; i++) {
       
        if (nums[i] <= nums[i - 1]) {
            maxSum = Math.max(maxSum, currentSum);
            currentSum = nums[i];
        } else {
            currentSum += nums[i];
        }
    }

    // Return the maximum sum between maxSum and the currentSum
    // to cover the case where the last element was part of the ascending sequence
    return Math.max(maxSum, currentSum);
}
