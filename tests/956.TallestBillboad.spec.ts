import { tallestBillboard } from "../src/956.TallestBillboad";

describe('tallestBillboard', () => {
   it('should return the largest possible height of the billboard installation', () => {
      // expect(tallestBillboard([1, 2, 3, 6])).toBe(6);
      expect(tallestBillboard([1, 2, 3, 4, 5, 6])).toBe(10);
      // expect(tallestBillboard([1, 2])).toBe(0);
   });


   it('should handle edge cases', () => {
      expect(tallestBillboard([])).toBe(0);
      expect(tallestBillboard([1])).toBe(0);
      expect(tallestBillboard([1000])).toBe(0);
   });

   it('should handle large inputs', () => {
      const rods = Array(20).fill(1000);
      expect(tallestBillboard(rods)).toBe(10000);
   });
   it('should handle large inputs', () => {
      const rods = [3, 4, 3, 3, 2];
      expect(tallestBillboard(rods)).toBe(6);
   });
});