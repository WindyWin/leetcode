// old solution
// function getCombination(prev: string[], digits: string, result: string[]): void {
//    if (digits.length === 1)
//       for (const item of prev) {
//          for (const letter of letterArr[Number(digits[0])])
//             result.push(item + letter)
//       }
//    else {

//       for (const item of prev) {
//          let newPrev = []
//          for (const letter of letterArr[Number(digits[0])])
//             newPrev.push(item + letter)

//          getCombination(newPrev, digits.slice(1), result)
//       }
//    }
// };

// function letterCombinations(digits: string): string[] {
//    const result: string[] = [];
//    if (digits.length === 0) return result
//    if (digits.length === 1) return letterArr[Number(digits[0])].split("")

//    getCombination(letterArr[Number(digits[0])].split(""), digits.slice(1), result)
//    return result
// }

// new solution using dfs and back tracking


function letterCombinations(digits: string): string[] {
   const letterArr = ["abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"]

   const result: string[] = [];
   if (digits.length === 0) return result

   const term: string[] = []

   const dfs = (index: number) => {
      if (index >= digits.length) {
         result.push(term.join(""))
      }
      else {
         console.log(digits[index]);
         const possibleLetter = letterArr[Number(digits[index]) - 2]

         for (const char of possibleLetter) {
            term.push(char)
            dfs(index + 1)
            term.pop()
         }
      }
   }

   dfs(0)
   return result
}


console.log(letterCombinations("234"));
