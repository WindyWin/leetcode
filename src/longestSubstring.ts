
//my Solution
function lengthOfLongestSubstring(s: string): number {
   let max = 0;
   let currentSet = new Set()
   for (const char of s) {
      if (currentSet.has(char)) {
         max = Math.max(currentSet.size, max)
         let index = 0
         let iterator = currentSet.values()
         for (; index < currentSet.size; index++) {
            if (iterator.next().value === char)
               break;
         }

         currentSet = new Set([...Array.from(currentSet).slice(index + 1, currentSet.size), char])
      }
      else {
         currentSet.add(char)
      }
   }
   max = Math.max(currentSet.size, max)
   return max
};

console.log(lengthOfLongestSubstring("aabaab!bb"));

