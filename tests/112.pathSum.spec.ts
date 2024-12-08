import { hasPathSum, TreeNode } from "../src/112.pathSum";

describe('hasPathSum', () => {
   it('should return true for a tree with a root-to-leaf path that sums up to the target sum', () => {
      const root = new TreeNode(5);
      root.left = new TreeNode(4);
      root.right = new TreeNode(8);
      root.left.left = new TreeNode(11);
      root.left.left.left = new TreeNode(7);
      root.left.left.right = new TreeNode(2);
      root.right.left = new TreeNode(13);
      root.right.right = new TreeNode(4);
      root.right.right.right = new TreeNode(1);

      expect(hasPathSum(root, 22)).toBe(true);
   });
   it('should return false for a tree have no node and target sum is 0', () => {
      expect(hasPathSum(null, 0)).toBe(false);
   })

   it('should return false for a tree with no root-to-leaf path that sums up to the target sum', () => {
      const root = new TreeNode(5);
      root.left = new TreeNode(4);
      root.right = new TreeNode(8);
      root.left.left = new TreeNode(11);
      root.left.left.left = new TreeNode(7);
      root.left.left.right = new TreeNode(2);
      root.right.left = new TreeNode(13);
      root.right.right = new TreeNode(4);
      root.right.right.right = new TreeNode(1);

      expect(hasPathSum(root, 23)).toBe(false);
   });

   it('should return true for a tree with a single node that sums up to the target sum', () => {
      const root = new TreeNode(5);

      expect(hasPathSum(root, 5)).toBe(true);
   });

   it('should return false for a tree with a single node that does not sum up to the target sum', () => {
      const root = new TreeNode(5);

      expect(hasPathSum(root, 10)).toBe(false);
   });

   it('should return false for an empty tree', () => {
      expect(hasPathSum(null, 10)).toBe(false);
   });
});