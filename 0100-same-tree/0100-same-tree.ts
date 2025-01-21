interface TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
}

/**
 * Determines if two binary trees are the same.
 * Two binary trees are considered the same if they are structurally identical,
 * and the nodes have the same values.
 * 
 * @param {TreeNode | null} tree1 - The root node of the first binary tree.
 * @param {TreeNode | null} tree2 - The root node of the second binary tree.
 * @return {boolean} - True if both trees are the same, false otherwise.
 */
function isSameTree(tree1: TreeNode | null, tree2: TreeNode | null): boolean {
    
    if (tree1 === null && tree2 === null) {
        return true;
    }
   
    if (tree1 === null || tree2 === null || tree1.val !== tree2.val) {
        return false;
    }
  
    return isSameTree(tree1.left, tree2.left) && isSameTree(tree1.right, tree2.right);
}