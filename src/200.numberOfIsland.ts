/*
Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

 

Example 1:

Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1
Example 2:

Input: grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
Output: 3
 

Constraints:

m == grid.length
n == grid[i].length
1 <= m, n <= 300
grid[i][j] is '0' or '1'.
*/

function numIslands(grid: string[][]): number {
   let result: number = 0;

   const travel = (row: number, col: number) => {
      if (row < 0 || row >= grid.length || col < 0 || col >= grid[0].length || grid[row][col] === '0') {
         return
      }
      grid[row][col] = '0'
      travel(row + 1, col)
      travel(row - 1, col)
      travel(row, col + 1)
      travel(row, col - 1)
   }

   for (let row = 0; row < grid.length; row++) {
      for (let col = 0; col < grid[0].length; col++) {
         if (grid[row][col] === '1') {
            result++
            travel(row, col)
         }
      }
   }
   return result
};

export { numIslands }