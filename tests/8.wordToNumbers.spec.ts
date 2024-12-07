// tests/8.wordToNumbers.spec.ts
import { myAtoi } from '../src/8.wordToNumbers';

describe('myAtoi function', () => {
   it.skip('should return 0 for an empty string', () => {
      expect(myAtoi('')).toBe(0);
   });

   it.skip('should return 0 for a string with only whitespace', () => {
      expect(myAtoi('   ')).toBe(0);
   });

   it.skip('should return a positive integer for a string with a positive number', () => {
      expect(myAtoi('123')).toBe(123);
   });

   it.skip('should return a negative integer for a string with a negative number', () => {
      expect(myAtoi('-123')).toBe(-123);
   });

   it.skip('should return a positive integer for a string with a positive number and leading whitespace', () => {
      expect(myAtoi('   123')).toBe(123);
   });

   it.skip('should return a negative integer for a string with a negative number and leading whitespace', () => {
      expect(myAtoi('   -123')).toBe(-123);
   });

   it.skip('should return 0 for a string with non-numeric characters', () => {
      expect(myAtoi('abc')).toBe(0);
   });

   it.skip('should return the maximum 32-bit signed integer for a string with a number greater than the maximum 32-bit signed integer', () => {
      expect(myAtoi('2147483648')).toBe(2147483647);
   });

   it.skip('should return the minimum 32-bit signed integer for a string with a number less than the minimum 32-bit signed integer', () => {
      expect(myAtoi('-2147483649')).toBe(-2147483648);
   });
   it.skip('should return the minimum 32-bit signed integer for a string with a number less than the minimum 32-bit signed integer', () => {
      expect(myAtoi('4193 with words')).toBe(4193);
   });
});