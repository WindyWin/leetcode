/*
Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right, which minimizes the sum of all numbers along its path.

Note: You can only move either down or right at any point in time.

 

Example 1:


Input: grid = [[1,3,1],[1,5,1],[4,2,1]]
Output: 7
Explanation: Because the path 1 → 3 → 1 → 1 → 1 minimizes the sum.
Example 2:

Input: grid = [[1,2,3],[4,5,6]]
Output: 12
 

Constraints:

m == grid.length
n == grid[i].length
1 <= m, n <= 200
0 <= grid[i][j] <= 200
*/

function minPathSum(grid: number[][]): number {
   const height = grid.length, width = grid[0].length;
   let aboveRow = new Array(width)
   aboveRow[0] = grid[0][0]
   for (let index = 1; index < width; index++) {
      aboveRow[index] = aboveRow[index - 1] + grid[0][index]
   }

   for (let y = 1; y < height; y++) {
      const currentRow = new Array(width);
      currentRow[0] = aboveRow[0] + grid[y][0]
      for (let x = 1; x < width; x++) {
         currentRow[x] = Math.min(currentRow[x - 1] + grid[y][x], aboveRow[x] + grid[y][x])
      }
      aboveRow = currentRow
   }
   return aboveRow[width - 1]
};

export { minPathSum }