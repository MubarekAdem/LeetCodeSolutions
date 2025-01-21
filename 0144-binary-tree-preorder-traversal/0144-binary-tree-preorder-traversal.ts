/**
 * Performs a preorder traversal on a binary tree without using recursion or a stack.
 * 
 * @param {TreeNode | null} root - The root node of the binary tree.
 * @returns {number[]} The preorder traversal output as an array of node values.
 */
function preorderTraversal(root: TreeNode | null): number[] {
    let result: number[] = [];

    while (root !== null) {
        if (root.left === null) {
           
            result.push(root.val);
            root = root.right;
        } else {
           
            let predecessor = root.left;
            while (predecessor.right !== null && predecessor.right !== root) {
                predecessor = predecessor.right;
            }

          
            if (predecessor.right === null) {
                result.push(root.val);
                
                predecessor.right = root;
                root = root.left;
            } else {
                
                predecessor.right = null;
                
                root = root.right;
            }
        }
    }

    
    return result;
}