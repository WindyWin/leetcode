function measureRuntime<T extends (...args: any[]) => any>(fn: T, ...args: Parameters<T>): ReturnType<T> {
   const start = performance.now(); // Start time
   const result = fn(...args); // Call the function with its arguments
   const end = performance.now(); // End time

   const duration = end - start; // Calculate duration
   console.log(`Function ${fn.name} took ${duration.toFixed(2)} milliseconds to execute.`);

   return result; // Return the result of the function
}

function fourSum(nums: number[], target: number): number[][] {
   const result: number[][] = []
   const set = new Set()
   if (nums.length < 4)
      return result;
   nums.sort((a, b) => a - b)
   console.log(nums);

   for (let p1 = 0; p1 < nums.length - 3; p1++) {
      for (let p4 = nums.length - 1; p4 > 2; p4--) {
         let p2 = p1 + 1;
         let p3 = p4 - 1;
         while (p2 < p3) {
            const sum = nums[p1] + nums[p2] + nums[p3] + nums[p4]
            console.log(`${nums[p1]} + ${nums[p2]} + ${nums[p3]} + ${nums[p4]}:`, sum)
            if (sum === target) {
               const string = "" + nums[p1] + nums[p2] + nums[p3] + nums[p4]
               const prevLength = set.size
               set.add(string)
               if (set.size !== prevLength)
                  result.push([nums[p1], nums[p2], nums[p3], nums[p4]])
               p2++;
               p3--

            }
            else if (sum > target) {
               p3--
            }
            else {
               p2++
            }
         }
      }
   }


   return result;
};


// console.log(fourSum([-2, -1, -1, 1, 1, 2, 2], 0));
// console.log(fourSum([2, 2, 2, 2, 2, 2, 2], 8)); 
// console.log(fourSum([-3, -1, 0, 2, 4, 5], 2)); 
// console.log(fourSum([-1, 2, 2, -5, 0, -1, 4], 3)); 
console.log(measureRuntime(fourSum, [-497, -480, -477, -470, -452, -448, -440, -412, -390, -381, -372, -372, -369, -366, -355, -346, -340, -337, -322, -321, -311, -296, -258, -249, -248, -232, -215, -199, -174, -154, -128, -122, -122, -117, -115, -113, -110, -89, -86, -84, -78, -71, -69, -53, -49, -35, -25, -21, -7, 3, 7, 21, 25, 30, 47, 52, 81, 84, 87, 91, 96, 157, 161, 167, 178, 184, 210, 217, 228, 236, 274, 277, 283, 286, 290, 301, 302, 341, 352, 354, 361, 367, 384, 390, 412, 421, 458, 468, 483, 484, 486, 487, 490, 491], 8377)); 
