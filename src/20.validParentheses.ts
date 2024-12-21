/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Example 1:

Input: s = "()"

Output: true

Example 2:

Input: s = "()[]{}"

Output: true

Example 3:

Input: s = "(]"

Output: false

Example 4:

Input: s = "([])"

Output: true

 

Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'.
*/

type OpenBracketType = "(" | "[" | "{";
type CloseBracketType = ")" | "]" | "}"
const mapper: Record<CloseBracketType, OpenBracketType> = {
   ")": '(',
   "]": '[',
   "}": '{'
}
function isValid(s: string): boolean {
   const stack: OpenBracketType[] = [];

   for (const char of s) {
      if (char === '(' || char === "[" || char === "{")
         stack.push(char)
      debugger
      if (char === "]" || char === ")" || char === "}") {
         const lastChar = stack.pop()
         if (mapper[char] !== lastChar)
            return false
      }
   }
   debugger
   return stack.length === 0
};

export { isValid }