// https://leetcode.com/problems/next-greater-element-i/description/
// drop -_-
export function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
   const result: number[] = new Array(nums1.length).fill(-1)

   for (let index = 0; index < nums1.length; index++) {
      const num1 = nums1[index];

      for (let j = 0; j < nums2.length; j++) {
         const num2 = nums2[j];
         if (num1 < num2) {
            result[index] = num2
            break
         }
      }
   }
   return result
};