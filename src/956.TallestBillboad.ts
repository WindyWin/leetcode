/*
You are installing a billboard and want it to have the largest height. The billboard will have two steel supports, one on each side. Each steel support must be an equal height.

You are given a collection of rods that can be welded together. For example, if you have rods of lengths 1, 2, and 3, you can weld them together to make a support of length 6.

Return the largest possible height of your billboard installation. If you cannot support the billboard, return 0.

 

Example 1:

Input: rods = [1,2,3,6]
Output: 6
Explanation: We have two disjoint subsets {1,2,3} and {6}, which have the same sum = 6.
Example 2:

Input: rods = [1,2,3,4,5,6]
Output: 10
Explanation: We have two disjoint subsets {2,3,5} and {4,6}, which have the same sum = 10.
Example 3:

Input: rods = [1,2]
Output: 0
Explanation: The billboard cannot be supported, so we return 0.
 

Constraints:

1 <= rods.length <= 20
1 <= rods[i] <= 1000
sum(rods[i]) <= 5000
*/

import { setConstantValue } from "typescript";

// meet in the middle
function tallestBillboard(rods: number[]): number {

   const getTheDiff = (rods: number[], startIndex: number, endIndex: number): Map<number, number> => {
      let result = [[0, 0]]

      for (let index = startIndex; index < endIndex; index++) {
         const value = rods[index];

         let newResult: Array<Array<number>> = []
         for (const [left, right] of result) {
            newResult.push([left, right + value])
            newResult.push([left + value, right],)
         }

         result.push(...newResult)
      }

      let dp = new Map<number, number>()
      for (const [left, right] of result) {
         let diff = left - right
         dp.set(left - right, Math.max(dp.get(diff) ?? 0, left))
      }

      return dp
   }
   const mid = Math.round(rods.length / 2)

   const leftDiff = getTheDiff(rods, 0, mid)
   const rightDiff = getTheDiff(rods, mid, rods.length)

   let max = 0
   for (const [key, leftValue] of leftDiff.entries()) {
      const rightValue = rightDiff.get(-key)
      if (rightValue) {
         max = Math.max(rightValue + leftValue, max)
      }
   }

   return max
};
//dp
function tallestBillboardDp(rods: number[]): number {

   let dp = new Map<number, number>();
   dp.set(0, 0)

   for (const rod of rods) {
      let new_dp = new Map<number, number>(dp)
      for (const [diff, taller] of dp.entries()) {
         let sorter = taller - diff

         // new_dp.set(diff, taller)

         let diff1 = diff + rod
         const newTaller1 = Math.max(taller + rod, new_dp.get(diff1) ?? 0);
         new_dp.set(diff1, newTaller1)

         let diff2 = Math.abs(sorter + rod - taller)
         const newTaller2 = Math.max(taller, sorter + rod, new_dp.get(diff2) ?? 0);
         new_dp.set(diff2, newTaller2)
      }
      dp = new_dp;

   }


   return dp.get(0)!
};

export { tallestBillboardDp as tallestBillboard };