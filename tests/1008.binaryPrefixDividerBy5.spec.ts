import { prefixesDivBy5 } from "../src/1008.binaryPrefixDividerBy5";

describe('prefixesDivBy5', () => {


   it('should return correct result for array with one element', () => {
      expect(prefixesDivBy5([0])).toEqual([true]);
   });

   it('should return correct result for array with multiple elements', () => {
      expect(prefixesDivBy5([0, 1, 1])).toEqual([true, false, false]);
   });

   it('should return correct result for array with negative numbers', () => {
      expect(prefixesDivBy5([1, 1, 1])).toEqual([false, false, false]);
   });
   it('should return correct result for array with negative numbers', () => {
      expect(prefixesDivBy5([1, 0, 1])).toEqual([false, false, true]);
   });
   it('should return correct result for array with negative numbers', () => {
      expect(prefixesDivBy5([1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 1])).toEqual([false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, false, false, true, true, true, true, false]);
   });
   it('should return correct result for array with negative numbers', () => {
      expect(prefixesDivBy5([1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1])).toEqual([false, false, true, true, true, true, true, true, true, true, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, true, false, false, false, true, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, true, true, false, false, false]);
   });


});