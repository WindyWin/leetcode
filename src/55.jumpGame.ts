/*You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.

Return true if you can reach the last index, or false otherwise.

 

Example 1:

Input: nums = [2,3,1,1,4]
Output: true
Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
Example 2:

Input: nums = [3,2,1,0,4]
Output: false
Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.
 

Constraints:

1 <= nums.length <= 10^4
0 <= nums[i] <= 10^5
*/


function canJump(nums: number[]): boolean {
   const memo = new Set();
   function dfs(index: number): boolean {
      if (memo.has(index))
         return false
      if (index + nums[index] >= nums.length - 1) {
         return true
      }
      for (let nextJump = 1; nextJump <= nums[index]; nextJump++) {
         if (dfs(index + nextJump)) {
            return true
         }
      }
      memo.add(index)
      return false
   }

   return dfs(0)
};

function canJump2(nums: number[]): boolean {
   let target = nums.length - 1;
   for (let index = nums.length - 2; index >= 0; index--) {
      debugger;
      if (nums[index] + index >= target)
         target = index
   }
   return target === 0
}

export { canJump2 as canJump }