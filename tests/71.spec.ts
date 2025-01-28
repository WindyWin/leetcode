import { climbStairs } from "../src/71.climbingStairs";

describe('climbStairs', () => {
   it('should return the number of distinct ways to climb to the top', () => {
      expect(climbStairs(2)).toBe(2);
      expect(climbStairs(3)).toBe(3);
      expect(climbStairs(4)).toBe(5);
      expect(climbStairs(5)).toBe(8);
   });

   it('should handle edge cases', () => {
      expect(climbStairs(1)).toBe(1);
   });

   it('should handle larger inputs', () => {
      expect(climbStairs(10)).toBe(89);
      expect(climbStairs(20)).toBe(10946);
      expect(climbStairs(45)).toBe(1836311903);
   });


});