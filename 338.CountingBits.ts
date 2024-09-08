function countBits(n: number): number[] {
   const result: any[] = [];
   let divider: number = 1;
   for (let i = 0; i <= n; i++) {
      if (i === divider * 2) {
         divider *= 2
      }
      console.log(i);
      let temp = divider
      let count = 0;
      let prev = i;
      while (prev > 1) {
         prev %= temp
         count++;
         while (temp > prev) {
            //    console.log(temp, prev);
            temp >>= 1
         }
      }
      result.push([i, count + prev])
   }
   return result
};

// SOLUTION
function _countBits(num: number): number[] {
   const res = new Uint8Array(num + 1);
   for (let i = 0; i < res.length; i++) res[i] = res[i >> 1] + (i & 1);
   return [...res];
};

console.log(countBits(16));