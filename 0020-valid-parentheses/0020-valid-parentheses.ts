const bracketPairs = new Map<string, string>([
    ['(', ')'],
    ['[', ']'],
    ['{', '}'],
]);

/**
 * Function to determine if the given string has valid bracket pairing.
 * @param {string} str - The input string containing brackets to be checked.
 * @return {boolean} - Returns true if the string is valid, otherwise false.
 */
function isValid(str: string): boolean {
    const expectedBracketsStack: string[] = [];

    for (const char of str) {
        if (bracketPairs.has(char)) {
            
            expectedBracketsStack.push(bracketPairs.get(char)!);
        } else {
            
            if (expectedBracketsStack.pop() !== char) {
                return false;
            }
        }
    }

    
    return expectedBracketsStack.length === 0;
}