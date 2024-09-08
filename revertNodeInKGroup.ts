
//Definition for singly-linked list.
class ListNode {
   val: number
   next: ListNode | null
   constructor(val?: number, next?: ListNode | null) {
      this.val = (val === undefined ? 0 : val)
      this.next = (next === undefined ? null : next)
   }
}

console.clear()
let revertedHead: ListNode | null = null

function revert(root: ListNode | null, count: number): ListNode | null {
   if (!root) {
      revertedHead = null
      return null;
   }
   if (count === 1) {
      revertedHead = root
      return root;
   }


   const nextRevert = revert(root.next, count - 1)
   if (!nextRevert) {
      return null;
   }
   root.next = nextRevert.next;
   nextRevert.next = root;


   return root;
}


function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
   let newRoot = null;
   let preHead = null;
   while (head !== null) {

      head = revert(head, k)
      if (preHead && head) {
         preHead.next = revertedHead;
      }
      else {
         newRoot ||= revertedHead
         // preHead = revertedHead
      }
      preHead = head;

      head = head?.next ?? null
   }

   return newRoot;
};

function createLinkedList(arr: number[]): ListNode | null {
   if (arr.length === 0) return null;

   let head = new ListNode(arr[0]);
   let current = head;

   for (let i = 1; i < arr.length; i++) {
      current.next = new ListNode(arr[i]);
      current = current.next;
   }

   return head;
}

// Example usage:
const array = [1, 2, 3, 4, 5, 6, 7];
const linkedList = createLinkedList(array);

// Function to print the linked list in the desired format
function printLinkedList(head: ListNode | null): void {
   let current = head;
   let result = '';
   while (current !== null) {
      result += current.val;
      if (current.next !== null) {
         result += ' -> ';
      }
      current = current.next;
   }
}

printLinkedList(reverseKGroup(linkedList, 3))

