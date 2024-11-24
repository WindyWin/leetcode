// https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/description/
//my solution 
// function removeDuplicates(nums: number[]): number {
//    for (let index = 0; index < nums.length - 2; index++) {
//       const j = index + 2
//       while (j < nums.length && nums[index] === nums[j]) {
//          nums.splice(j, 1)
//       }
//    }
//    return nums.length
// };

//best solution
function removeDuplicates(nums: number[]): number {
   let j: number = 2;

   for (let i = 2; i < nums.length; i++) {
      if (nums[i] !== nums[j - 2]) {
         nums[j++] = nums[i];
      }
   }

   return j;
};

export { removeDuplicates }