const calculate = (number1: number, number2: number, operator: string): number => {
   switch (operator) {
      case "*":
         return number1 * number2
      case "-":
         return number1 - number2
      default:
         return number1 + number2
   }
}

function diffWaysToCompute(expression: string): number[] {
   let result: number[] = []

   let isNumber = true;
   for (let index = 0; index < expression.length; index++) {
      const char = expression[index];
      if (char === "+" || char === "-" || char === "*") {
         isNumber = false;
         const left = diffWaysToCompute(expression.slice(0, index))
         const right = diffWaysToCompute(expression.slice(index + 1))
         for (const leftElement of left) {
            for (const rightElement of right) {
               const val = calculate(leftElement, rightElement, char)
               result.push(val)
            }
         }
      }
   }

   if (isNumber) result.push(Number(expression))

   return result
};

console.log(diffWaysToCompute("2-1-1+12*12+12"))
