// Generated by Qodo Gen

import { _Node, copyRandomList } from "../src/138.randomListWithRandomPointer";

describe('copyRandomList', () => {

   // Create deep copy of linked list with single node
   it('should create deep copy of single node list with random pointer to itself', () => {
      const node = new _Node(1);
      node.random = node;

      const result = copyRandomList(node);

      expect(result).not.toBe(node);
      expect(result?.val).toBe(1);
      expect(result?.next).toBeNull();
      expect(result?.random).toBe(result);
   });

   // Handle null input
   it('should return null when input is null', () => {
      const result = copyRandomList(null);

      expect(result).toBeNull();
   });

   it('should create deep copy preserving values and random connections', () => {
      const node1 = new _Node(1);
      const node2 = new _Node(2);
      const node3 = new _Node(3);

      node1.next = node2;
      node2.next = node3;
      node1.random = node3;
      node2.random = node2;
      node3.random = node1;

      const copy = copyRandomList(node1);
      console.log(copy);
      expect(copy!.val).toBe(1);
      expect(copy!.next!.val).toBe(2);
      expect(copy!.next!.next!.val).toBe(3);
      expect(copy!.random!.val).toBe(3);
      expect(copy!.next!.random!.val).toBe(2);
      expect(copy!.next!.next!.random!.val).toBe(1);
      expect(copy).not.toBe(node1);
   });
});
