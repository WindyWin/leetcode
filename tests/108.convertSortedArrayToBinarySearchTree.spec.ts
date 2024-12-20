import { TreeNode, sortedArrayToBST } from "../src/108.convertSortedArrayToBinarySearchTree";

describe('sortedArrayToBST', () => {
   it('should create a height-balanced BST from a sorted array', () => {
      const nums = [-10, -3, 0, 5, 9];
      const expected = new TreeNode(0, new TreeNode(-3, new TreeNode(-10), null), new TreeNode(9, null, new TreeNode(5)));
      expect(sortedArrayToBST(nums)?.toObject()).toEqual(expected.toObject());
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
