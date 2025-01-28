/*Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

 

Example 1:

Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]
Example 2:

Input: n = 1
Output: ["()"]
 

Constraints:

1 <= n <= 8
*/

function generateParenthesis2(n: number): string[] {
   const result: string[] = [];
   if (n === 0)
      return result
   const runner = (str: string, open: number, close: number): void => {
      if (str.length === n * 2) {
         result.push(str)
      }
      if (open < n) {
         runner(str + '(', open + 1, close)
      }
      if (open > close) {
         runner(str + ')', open, close + 1)
      }
   };
   runner('', 0, 0)
   return result;
};
export { generateParenthesis2 as generateParenthesis   };