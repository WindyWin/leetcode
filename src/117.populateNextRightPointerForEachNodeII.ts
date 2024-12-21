/*
Given a binary tree

struct Node {
  int val;
  Node *left;
  Node *right;
  Node *next;
}
Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.

Initially, all next pointers are set to NULL.

 

Example 1:


Input: root = [1,2,3,4,5,null,7]
Output: [1,#,2,3,#,4,5,7,#]
Explanation: Given the above binary tree (Figure A), your function should populate each next pointer to point to its next right node, just like in Figure B. The serialized output is in level order as connected by the next pointers, with '#' signifying the end of each level.
Example 2:

Input: root = []
Output: []
 

Constraints:

The number of nodes in the tree is in the range [0, 6000].
-100 <= Node.val <= 100
 

Follow-up:

You may only use constant extra space.
The recursive approach is fine. You may assume implicit stack space does not count as extra space for this problem.
*/
export class _Node {
   val: number
   left: _Node | null
   right: _Node | null
   next: _Node | null

   constructor(val?: number, left?: _Node, right?: _Node, next?: _Node) {
      this.val = (val === undefined ? 0 : val)
      this.left = (left === undefined ? null : left)
      this.right = (right === undefined ? null : right)
      this.next = (next === undefined ? null : next)
   }
}


function connect(root: _Node | null): _Node | null {
   if (root === null)
      return root;
   const queue: _Node[] = [root];

   while (queue.length) {
      const levelSize = queue.length

      for (let i = 0; i < levelSize; i++) {
         const element = queue.shift()!
         //not the last element of current level
         if (i !== levelSize - 1)
            element.next = queue[0]

         if (element.left)
            queue.push(element.left)
         if (element.right)
            queue.push(element.right)
      }
   }

   return root
};

export { connect }