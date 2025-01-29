/**
 * Finds the first occurrence of the `needle` in `haystack`, and returns its index.
 * If `needle` is not found in `haystack`, returns -1.
 * 
 * @param haystack - The string to be searched within.
 * @param needle - The string to find in the haystack.
 * @returns The index at which the needle is found in the haystack, or -1 if not found.
 */
function strStr(haystack: string, needle: string): number {
    // Length of the haystack and needle strings
    const haystackLength: number = haystack.length;
    const needleLength: number = needle.length;

    // Early return if the needle is an empty string
    if (needleLength === 0) return 0;

    // Loop through each character in the haystack until there's no room left for the needle
    for (let i = 0; i <= haystackLength - needleLength; i++) {
        // Assume that the needle is found unless a mismatch is found
        let isMatch: boolean = true;

        // Check each character of the needle against the haystack
        for (let j = 0; j < needleLength; j++) {
            if (haystack[i + j] !== needle[j]) {
                // If characters do not match, set isMatch to false and break out of the inner loop
                isMatch = false;
                break;
            }
        }

        // If the needle was found in the haystack, return the starting index `i`
        if (isMatch) {
            return i;
        }
    }

    // If the needle was not found in the haystack, return -1
    return -1;
}