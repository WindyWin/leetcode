/*
Given the head of a linked list, return the list after sorting it in ascending order.

 

Example 1:


Input: head = [4,2,1,3]
Output: [1,2,3,4]
Example 2:


Input: head = [-1,5,3,4,0]
Output: [-1,0,3,4,5]
Example 3:

Input: head = []
Output: []
 

Constraints:

The number of nodes in the list is in the range [0, 5 * 104].
-105 <= Node.val <= 105
 

Follow up: Can you sort the linked list in O(n logn) time and O(1) memory (i.e. constant space)?
*/


class ListNode {
   val: number
   next: ListNode | null
   constructor(val?: number, next?: ListNode | null) {
      this.val = (val === undefined ? 0 : val)
      this.next = (next === undefined ? null : next)
   }
}

//section sort 
function _sortList(head: ListNode | null): ListNode | null {
   if (head == null || head.next === null)
      return head;
   let cursor: ListNode | null = head.next;
   let min: ListNode = head;
   let prev = null;
   let minPrev = null;
   //selection sort 
   while (cursor != null) {
      if (min.val > cursor.val) {
         min = cursor
         minPrev = prev;
      }
      prev = cursor
      cursor = cursor.next
   }

   if (min !== head) {
      // Save the next node of the head
      let temp = head.next;

      // If minPrev exists, it should point to head after the swap
      if (minPrev) {
         minPrev.next = head;
      }

      // Swap the next pointers of head and min
      head.next = min.next;
      if (temp === min) {
         min.next = head
      }
      else {
         min.next = temp;
      }
   }

   min.next = sortList(min.next)
   return min;
};

function sortList(head: ListNode | null): ListNode | null {
   if (head === null || head.next === null)
      return head
   let slow = head;
   let fast: ListNode | null = head.next;

   while (fast !== null && fast.next !== null) {
      slow = slow.next!;
      fast = fast.next.next;
   }

   const mid = slow.next
   slow.next = null

   let left = sortList(head)
   let right = sortList(mid)

   let root: ListNode = new ListNode(0)
   let cursor = root

   while (left !== null && right !== null) {
      if (left.val < right.val) {
         cursor.next = left;
         left = left.next;
      }
      else {
         cursor.next = right;
         right = right.next;
      }
      cursor = cursor.next
   }
   if (left != null) {
      cursor.next = left;
   }
   if (right != null) {
      cursor.next = right
   }

   return root.next
}

export { sortList, ListNode }