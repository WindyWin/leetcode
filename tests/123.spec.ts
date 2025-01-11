import { maxProfit, maxProfitForNTransactions } from "../src/123.bestTimeToBuyAndSellStockIII";

describe('maxProfit', () => {
   it('should return the maximum profit that can be achieved with at most two transactions', () => {
      expect(maxProfit([3, 3, 5, 0, 0, 3, 1, 4])).toBe(6);
      expect(maxProfit([1, 2, 3, 4, 5])).toBe(4);
      expect(maxProfit([7, 6, 4, 3, 1])).toBe(0);
   });

   it('should handle edge cases', () => {
      expect(maxProfit([])).toBe(0);
      expect(maxProfit([1])).toBe(0);
      expect(maxProfit([1000])).toBe(0);
   });

   it('should handle cases with multiple peaks and valleys', () => {
      expect(maxProfit([10, 22, 5, 75, 65, 80])).toBe(87);
      expect(maxProfitForNTransactions([10, 22, 5, 75, 65, 80],2)).toBe(87);
      
      expect(maxProfit([100, 50, 200, 150, 300, 250])).toBe(300);
   });

   it('should handle cases with no profit', () => {
      expect(maxProfit([5, 5, 5, 5, 5])).toBe(0);
      expect(maxProfit([10, 9, 8, 7, 6])).toBe(0);
   });
   it('should return the maximum profit that can be achieved with at most two transactions', () => {
      expect(maxProfit([1,2,4,2,5,7,2,4,9,0])).toBe(13);
   });
});