import { coinChange } from "../src/322.coinChange";

describe('coinChange', () => {
   it('should return 3 for coins = [1,2,5] and amount = 11', () => {
      const coins = [1, 2, 5];
      const amount = 11;
      expect(coinChange(coins, amount)).toBe(3);
   });

   it('should return -1 for coins = [2] and amount = 3', () => {
      const coins = [2];
      const amount = 3;
      expect(coinChange(coins, amount)).toBe(-1);
   });

   it('should return 0 for coins = [1] and amount = 0', () => {
      const coins = [1];
      const amount = 0;
      expect(coinChange(coins, amount)).toBe(0);
   });

   it('should return 1 for coins = [1] and amount = 1', () => {
      const coins = [1];
      const amount = 1;
      expect(coinChange(coins, amount)).toBe(1);
   });

   it('should return 2 for coins = [1, 2] and amount = 3', () => {
      const coins = [1, 2];
      const amount = 3;
      expect(coinChange(coins, amount)).toBe(2);
   });

   it('should return -1 for coins = [3, 5] and amount = 2', () => {
      const coins = [3, 5];
      const amount = 2;
      expect(coinChange(coins, amount)).toBe(-1);
   });
   it(`should return 4 for coins = [1,2,5,10] and amount = 18`, () => {
      const coins = [1, 2, 5, 10];
      const amount = 18;
      expect(coinChange(coins, amount)).toBe(4);
   })
   it(`should return 20 for coins = [186,419,83,408] and amount = 6249`, () => {
      const coins = [186, 419, 83, 408];
      const amount = 6249;
      expect(coinChange(coins, amount)).toBe(20);
   })
});