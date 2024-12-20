import { TreeNode, sortedArrayToBST } from "../src/108.convertSortedArrayToBinarySearchTree";

function isBST(node: TreeNode | null, min: number | null, max: number | null): boolean {
   if (!node) return true;
   if ((min !== null && node.val <= min) || (max !== null && node.val >= max)) return false;
   return isBST(node.left, min, node.val) && isBST(node.right, node.val, max);
}

function isHeightBalanced(node: TreeNode | null): boolean {
   function checkHeight(n: TreeNode | null): number {
      if (!n) return 0;
      const leftHeight = checkHeight(n.left);
      const rightHeight = checkHeight(n.right);
      if (leftHeight === -1 || rightHeight === -1 || Math.abs(leftHeight - rightHeight) > 1) {
         return -1;
      }
      return Math.max(leftHeight, rightHeight) + 1;
   }
   return checkHeight(node) !== -1;
}

describe('sortedArrayToBST', () => {
   it('should create a height-balanced BST from a sorted array', () => {
      const nums = [-10, -3, 0, 5, 9];
      // const expected = new TreeNode(0, new TreeNode(-3, new TreeNode(-10), null), new TreeNode(9, null, new TreeNode(5)));
      const result = sortedArrayToBST(nums);

      expect(isBST(result, null, null)).toBe(true);
      expect(isHeightBalanced(result)).toBe(true);
   });

   it('should create a height-balanced BST from a sorted array with two elements', () => {
      const nums = [1, 3];
      const expected = new TreeNode(3, new TreeNode(1), null);
      expect(sortedArrayToBST(nums)).toEqual(expected);
   });

   it('should create a height-balanced BST from a sorted array with one element', () => {
      const nums = [1];
      const expected = new TreeNode(1);
      expect(sortedArrayToBST(nums)).toEqual(expected);
   });

   it('should return null for an empty array', () => {
      const nums: number[] = [];
      expect(sortedArrayToBST(nums)).toBeNull();
   });

});
