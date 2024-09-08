function removeElement(nums: number[], val: number): number {
   let removedItemCount: number = 0;
   let cur = nums.length - 1
   let index = 0;
   while (index <= cur) {
      // console.log("\n", nums);
      // console.log(cur, nums[cur], index, nums[index]);
      if (nums[cur] === val) {
         cur--;
         removedItemCount++;
         continue;
      }
      if (nums[index] === val) {
         let term = nums[index]
         nums[index] = nums[cur];
         nums[cur] = term
         removedItemCount++;
         cur--;
      }
      index++;
   }

   nums.splice(nums.length - removedItemCount, removedItemCount)
   console.log(nums.length);
   return removedItemCount;

};

const nums = [0, 1, 2, 2, 3, 0, 4, 2]
removeElement(nums, 2)
console.log(nums);