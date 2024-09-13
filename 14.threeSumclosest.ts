function threeSumClosest(nums: number[], target: number): number {
   let result: number = 0;
   let min: number = Number.MAX_SAFE_INTEGER;
   nums.sort()
   for (let i = 0; i < nums.length - 2; i++) {
      let j = i + 1;
      let k = nums.length - 1;
      while (j < k) {
         let sum = nums[i] + nums[j] + nums[k]
         if (sum === target)
            return target;

         if (target < sum) {
            k--
         }
         else {
            j++
         }
         let cur = Math.abs(target - sum)
         if (cur <= min) {
            result = sum
            min = cur
         }

      }

   }
   return result;
};

console.log(threeSumClosest(
   [1, 2, 7, 13]

   , 12)); 