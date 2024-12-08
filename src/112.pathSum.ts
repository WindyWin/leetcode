/*
Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.

A leaf is a node with no children.

Example 1: 
   Input: root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
   Output: true
   Explanation: The root-to-leaf path with the target sum is shown.
*/

export class TreeNode {
   val: number
   left: TreeNode | null
   right: TreeNode | null
   constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
      this.val = (val === undefined ? 0 : val)
      this.left = (left === undefined ? null : left)
      this.right = (right === undefined ? null : right)
   }
}


function hasPathSum(root: TreeNode | null, targetSum: number): boolean {

   if (!root) return false;
   if (root.val === targetSum && !root.left && !root.right) return true;

   return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val);
};

export { hasPathSum }