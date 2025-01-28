/*
Given a string containing just the characters '(' and ')', return the length of the longest valid (well-formed) parentheses 
substring
.

 

Example 1:

Input: s = "(()"
Output: 2
Explanation: The longest valid parentheses substring is "()".
Example 2:

Input: s = ")()())"
Output: 4
Explanation: The longest valid parentheses substring is "()()".
Example 3:

Input: s = ""
Output: 0
 

Constraints:

0 <= s.length <= 3 * 10^4
s[i] is '(', or ')'.
*/
function longestValidParentheses(s: string): number {
   const stack: number[] = []
   const steak: boolean[] = new Array(s.length).fill(false)
   for (let index = 0; index < s.length; index++) {
      const c = s[index];
      if (c === '(') {
         stack.push(index)
      }
      else {
         if (stack.length !== 0) {
            steak[index] = true
            steak[stack[stack.length - 1]] = true
            stack.pop()
         }
      }
   }
   console.log({ steak });
   let max = 0
   let count = 0
   for (let index = 0; index < steak.length; index++) {
      if (steak[index]) {
         count++
         max = Math.max(count, max)
      }
      else
         count = 0
   }
   return max
};

export { longestValidParentheses }