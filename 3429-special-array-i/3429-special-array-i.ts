/**
 * Determines if the array is special.
 * An array is considered special if adjacent elements alternate between even and odd.
 * 
 * @param nums - Array of numbers to check
 * @returns True if the array is special, otherwise false
 */
function isArraySpecial(nums: number[]): boolean {
    for (let i = 1; i < nums.length; ++i) {
        
        if (nums[i] % 2 === nums[i - 1] % 2) {
            return false;
        }
    }
    return true;
}