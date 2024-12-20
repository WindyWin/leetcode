/*
You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

You may assume that you have an infinite number of each kind of coin.

 

Example 1:

Input: coins = [1,2,5], amount = 11
Output: 3
Explanation: 11 = 5 + 5 + 1
Example 2:

Input: coins = [2], amount = 3
Output: -1
Example 3:

Input: coins = [1], amount = 0
Output: 0
 

Constraints:

1 <= coins.length <= 12
1 <= coins[i] <= 231 - 1
0 <= amount <= 10^4
*/

/*
 amount 
   i = mou

*/

function coinChange(coins: number[], amount: number): number {
   const dp: number[] = new Array(amount + 1).fill(Infinity);
   dp[0] = 0;

   for (const coin of coins) {
      for (let i = coin; i <= amount; i++) {
         dp[i] = Math.min(dp[i], dp[i - coin] + 1);
      }
   }

   return dp[amount] === Infinity ? -1 : dp[amount];
}

function coinChangeBfsApproach(coins: number[], amount: number): number {
   const queue: [number, number][] = [[amount, 0]];
   const visited: Set<number> = new Set();

   while (queue.length > 0) {
      const [currAmount, numCoins] = queue.shift()!;

      if (currAmount === 0) return numCoins;
      if (currAmount < 0 || visited.has(currAmount)) continue;

      visited.add(currAmount);

      for (const coin of coins) {
         queue.push([currAmount - coin, numCoins + 1]);
      }
   }

   return -1;
}

export { coinChangeBfsApproach as coinChange }