/*
Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer.

The algorithm for myAtoi(string s) is as follows:

Whitespace: Ignore any leading whitespace (" ").
Signedness: Determine the sign by checking if the next character is '-' or '+', assuming positivity if neither present.
Conversion: Read the integer by skipping leading zeros until a non-digit character is encountered or the end of the string is reached. If no digits were read, then the result is 0.
Rounding: If the integer is out of the 32-bit signed integer range [-231, 231 - 1], then round the integer to remain in the range. Specifically, integers less than -231 should be rounded to -231, and integers greater than 231 - 1 should be rounded to 231 - 1.
Return the integer as the final result.
*/
function myAtoi(s: string): number {
   s.trim();

   for (const char of s) {
      if (char === ' ')
         s = s.slice(1);
      else
         break
   }
   console.log(s);
   let result = 0;
   let sign = 1;
   if (s[0] === '-') {
      sign = -1;
      s = s.slice(1);
   }
   else if (s[0] === '+') {
      s = s.slice(1);
   }
   console.log(s);
   for (const char of s) {
      console.log({ char });
      if (char >= '0' && char <= '9') {
         result = result * 10 + Number(char)
         if (result > 2 ** 31 - 1) {
            return sign === 1 ? 2 ** 31 - 1 : -1 * 2 ** 31
         }

      }
      else {
         return result * sign
      }
   };
   return result * sign
}
export { myAtoi }