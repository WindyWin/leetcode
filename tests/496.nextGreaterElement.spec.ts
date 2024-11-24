// https://leetcode.com/problems/next-greater-element-i/description/
import { nextGreaterElement } from "../src/496.nextGraterElement";


describe('nextGreaterElement', () => {
   it.skip('should return the next greater element for each element in nums1', () => {
      const nums1 = [4, 1, 2];
      const nums2 = [1, 3, 4, 2];
      const result = nextGreaterElement(nums1, nums2);
      expect(result).toEqual([-1, 3, -1]);
   });
   it.skip('should return the next greater element for each element in nums1', () => {
      const nums1 = [2, 4];
      const nums2 = [3, -1];
      const result = nextGreaterElement(nums1, nums2);
      expect(result).toEqual([-1, 3, -1]);
   });

});