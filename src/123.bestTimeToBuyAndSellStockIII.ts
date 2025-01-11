/*
You are given an array prices where prices[i] is the price of a given stock on the ith day.

Find the maximum profit you can achieve. You may complete at most two transactions.

Note: You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).

 

Example 1:

Input: prices = [3,3,5,0,0,3,1,4]
Output: 6
Explanation: Buy on day 4 (price = 0) and sell on day 6 (price = 3), profit = 3-0 = 3.
Then buy on day 7 (price = 1) and sell on day 8 (price = 4), profit = 4-1 = 3.
Example 2:

Input: prices = [1,2,3,4,5]
Output: 4
Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
Note that you cannot buy on day 1, buy on day 2 and sell them later, as you are engaging multiple transactions at the same time. You must sell before buying again.
Example 3:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transaction is done, i.e. max profit = 0.
 
*/

//Random guy on leetcode 


function maxProfit(prices: number[]): number {
   // f1 profit for the first buy
   // f2 profit for the first sell
   // f3 profit for the second buy
   // f4 profit for the second sell
   let [f1,f2,f3,f4 ]: number[] = [-prices[0], 0, -[prices[0]], 0]
   for (const price of prices) {
      f1 = Math.max(f1, -price)
      f2 = Math.max(f2, f1 + price)
      f3 = Math.max(f3, f2 - price)
      f4 = Math.max(f4, f3 + price)
   }

   return f4
};

function maxProfitForNTransactions(prices: number[], n: number): number {
   
   let profitDp = new Array(2*n ).fill(0)
   for (let index = 0; index < profitDp.length; index++) {
      if(index%2 === 0) {
         profitDp[index] = -prices[0] // set default profit for buy index
      }
   }
   profitDp[0] = -prices[0]
   for (const price of prices) {
      profitDp[0] = Math.max(profitDp[0], -price)
      for (let transIndex = 1; transIndex < profitDp.length; transIndex++) {
         if(transIndex%2 === 0) {
            profitDp[transIndex] = Math.max(profitDp[transIndex], profitDp[transIndex - 1] - price)
         }
         else {
            profitDp[transIndex] = Math.max(profitDp[transIndex], profitDp[transIndex - 1] + price)
         }
      }
      
   }
   return profitDp[profitDp.length - 1]
}

export { maxProfit,maxProfitForNTransactions }