function findThreeSum(idxs: number[], nums: number[], result: number[][]) {
   if (idxs.length === 3) {
      const sum = idxs.reduce((prev, cur) => prev + nums[cur], 0)
      if (sum === 0) {
         result.push(idxs.map(idx => nums[idx]))
      }
   }
   else {
      for (let index = idxs[idxs.length - 1] + 1; index < nums.length; index++) {
         findThreeSum([...idxs, index], nums, result)
      }
   }
}

function threeSum(nums: number[]): number[][] {
   const result: number[][] = []
   for (let index = 0; index < nums.length; index++) {
      findThreeSum([index], nums, result)
   }
   return result
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));