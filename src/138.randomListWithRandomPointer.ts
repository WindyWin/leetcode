/*
A linked list of length n is given such that each node contains an additional random pointer, which could point to any node in the list, or null.

Construct a deep copy of the list. The deep copy should consist of exactly n brand new nodes, where each new node has its value set to the value of its corresponding original node. Both the next and random pointer of the new nodes should point to new nodes in the copied list such that the pointers in the original list and copied list represent the same list state. None of the pointers in the new list should point to nodes in the original list.

For example, if there are two nodes X and Y in the original list, where X.random --> Y, then for the corresponding two nodes x and y in the copied list, x.random --> y.

Return the head of the copied linked list.

The linked list is represented in the input/output as a list of n nodes. Each node is represented as a pair of [val, random_index] where:

val: an integer representing Node.val
random_index: the index of the node (range from 0 to n-1) that the random pointer points to, or null if it does not point to any node.
Your code will only be given the head of the original linked list.

 

Example 1:
Input: head = [[7,null],[13,0],[11,4],[10,2],[1,0]]
Output: [[7,null],[13,0],[11,4],[10,2],[1,0]]
Example 2:


Input: head = [[1,1],[2,1]]
Output: [[1,1],[2,1]]
Example 3:



Input: head = [[3,null],[3,0],[3,null]]
Output: [[3,null],[3,0],[3,null]]
 
 
 Constraints:

0 <= n <= 1000
-104 <= Node.val <= 104
Node.random is null or is pointing to some node in the linked list.
*/

export class _Node {
   val: number
   next: _Node | null
   random: _Node | null

   constructor(val?: number, next?: _Node, random?: _Node) {
      this.val = (val === undefined ? 0 : val)
      this.next = (next === undefined ? null : next)
      this.random = (random === undefined ? null : random)
   }
}

//my solution
function copyRandomList(head: _Node | null): _Node | null {
   if (head === null) return null
   const result = new _Node(head.val)
   const termArray = [result]
   const randomIndexMap = new WeakMap()
   randomIndexMap.set(head, 0)
   let cursor: _Node | null = head.next;
   let copyCursor = result;
   let index = 1;

   while (cursor != null) {
      randomIndexMap.set(cursor, index)
      let copiedNode = new _Node(cursor.val)
      termArray.push(copiedNode)
      copyCursor.next = copiedNode;
      debugger;
      cursor = cursor.next
      copyCursor = copyCursor.next
      index++;
   }

   cursor = head;
   index = 0

   console.log(termArray);

   while (cursor != null) {
      if (cursor.random != null)
         termArray[index].random = termArray[randomIndexMap.get(cursor.random)]
      cursor = cursor.next
      index++
   }
   return result
};

//random guy solution
function copyRandomList2(head: _Node | null): _Node | null {
   const map = new WeakMap<_Node, _Node>();
   function walk(curr: _Node | null): _Node | null {
      if (!curr) {
         return null;
      }
      if (map.has(curr)) {
         // So it will return this.
         return map.get(curr)!;
      }

      const copy = new _Node(curr.val);
      map.set(curr, copy);
      // First we're going to walk through all nodes, create them.
      copy.next = walk(curr.next);
      // Once last node has been reached 'walk' with random will be called.        
      // Since we have created all the nodes, it won't have problem finding it.
      copy.random = walk(curr.random);
      // Finally we're returning our first node, now the  second last has next node. 
      return copy;
   }
   // You can save the return in a var, which will be the head of the copy list. 
   walk(head);
   // But I decided to make it simplier
   return map.get(head!)!;
};

export { copyRandomList }