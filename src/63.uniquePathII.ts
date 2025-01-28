/*
You are given an m x n integer array grid. There is a robot initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.

An obstacle and space are marked as 1 or 0 respectively in grid. A path that the robot takes cannot include any square that is an obstacle.

Return the number of possible unique paths that the robot can take to reach the bottom-right corner.

The testcases are generated so that the answer will be less than or equal to 2 * 109.

 

Example 1:


Input: obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]]
Output: 2
Explanation: There is one obstacle in the middle of the 3x3 grid above.
There are two ways to reach the bottom-right corner:
1. Right -> Right -> Down -> Down
2. Down -> Down -> Right -> Right
Example 2:


Input: obstacleGrid = [[0,1],[0,0]]
Output: 1
*/

// my approach
function uniquePathsWithObstaclesD(obstacleGrid: number[][]): number {
   const memo: { [key: string]: number } = {}
   const height = obstacleGrid.length - 1;
   const width = obstacleGrid[0].length - 1
   memo[height + "-" + width] = 1
   const travel = (x: number, y: number): number => {
      if (obstacleGrid[x][y] === 1) {
         return 0;
      }

      let key = `${x}-${y}`
      if (memo[key])
         return memo[key]
      const travelTop = (x < height ? travel(x + 1, y) : 0);
      const travelRight = (y < width ? travel(x, y + 1) : 0);

      memo[key] = travelTop + travelRight
      return memo[key]
   }

   return travel(0, 0)
};

//random guy approach
function uniquePathsWithObstaclesO(obstacleGrid:number[][]):number {
   let m = obstacleGrid.length, n = obstacleGrid[0].length;

   if(obstacleGrid[0][0] == 1 || obstacleGrid[m-1][n-1] == 1) return 0;
   
   obstacleGrid[0][0] = 10;

   for(let i=0; i<m; i++) {
       for(let x=0; x<n; x++) {

           if (x+1 < n && obstacleGrid[i][x]%10 == 0) {
               obstacleGrid[i][x+1] += obstacleGrid[i][x];
           }
           if (i+1 < m && obstacleGrid[i][x]%10 == 0) {
               obstacleGrid[i+1][x] += obstacleGrid[i][x];
           }
       }
   }
   return obstacleGrid[m-1][n-1]/10;
};

// 0ms solution :)) ?
function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
   const height: number = obstacleGrid.length, width: number = obstacleGrid[0].length;
   let y: number = 0;
   let aboveRow: number[] = Array(width).fill(1);

   if (obstacleGrid[0][0] === 1) return 0;

   for(let x = 1; x < width; x++) {
       if (obstacleGrid[y][x] === 1) aboveRow[x] = 0;
       else aboveRow[x] = aboveRow[x-1]; 
   }
   y++;

   while (y < height) {
       let currRow: number[] = Array(width).fill(0);
       if (obstacleGrid[y][0] !== 1 && aboveRow[0] !== 0) currRow[0] = 1;
       for(let x = 1; x < width; x++) {
           if (obstacleGrid[y][x] === 1) currRow[x] = 0;
           else currRow[x] = currRow[x-1] + aboveRow[x];
       }
       aboveRow = currRow;
       y++;
   }

   return aboveRow[width-1];
};

export { uniquePathsWithObstacles }