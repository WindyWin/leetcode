import { longestValidParentheses } from "../src/32.longestValidParenthese";

describe('longestValidParentheses', () => {
   it('should return 0 for an empty string', () => {
      expect(longestValidParentheses('')).toBe(0);
   });

   it('should return 2 for the string "(()"', () => {
      expect(longestValidParentheses('(()')).toBe(2);
   });

   it('should return 4 for the string ")()())"', () => {
      expect(longestValidParentheses(')()())')).toBe(4);
   });

   it('should return 0 for a string with only closing parentheses', () => {
      expect(longestValidParentheses('))')).toBe(0);
   });

   it('should return 0 for a string with only opening parentheses', () => {
      expect(longestValidParentheses('(((')).toBe(0);
   });

   it('should return the correct length for a string with multiple valid parentheses substrings', () => {
      expect(longestValidParentheses('(()())')).toBe(6);
   });

   it('should return the correct length for a string with nested parentheses', () => {
      expect(longestValidParentheses('((()))')).toBe(6);
   });

   it('should return 0 for a string with no valid parentheses substrings', () => {
      expect(longestValidParentheses(')(')).toBe(0);
   });

   it('should return 6 for the string "(((())("', () => {
      expect(longestValidParentheses('(((())()')).toBe(6);
   });

   it('should return 6 for the string "()((())()(("', () => {
      expect(longestValidParentheses('()((())()((')).toBe(6);
   });

   it('should handle a string with a large number of characters', () => {
      const longString = '()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()';
      expect(longestValidParentheses(longString)).toBe(longString.length);
   })
})