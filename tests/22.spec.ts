import { generateParenthesis } from "../src/22.generateParenthese";

describe('generateParenthesis', () => {
  it('should return an empty array when n is 0', () => {
    expect(generateParenthesis(0)).toEqual([]);
  });

  it('should return a single pair of parentheses when n is 1', () => {
    expect(generateParenthesis(1)).toEqual(['()']);
  });

  it('should return multiple combinations of parentheses when n is 2', () => {
    expect(generateParenthesis(2).sort()).toEqual(['(())', '()()'].sort());
  });

  it('should return multiple combinations of parentheses when n is 3', () => {
    expect(generateParenthesis(3).sort()).toEqual(['((()))', '(()())', '(())()', '()(())', '()()()'].sort());
  });

  it('should return the correct number of combinations for larger values of n', () => {
    expect(generateParenthesis(4).length).toBe(14);
  });

  it('should not include invalid combinations', () => {
    const result = generateParenthesis(3);
    expect(result).not.toContain(')(');
    expect(result).not.toContain('(()');
    expect(result).not.toContain(')())');
  });
});