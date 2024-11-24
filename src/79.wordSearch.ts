// Given an m x n grid of characters board and a string word, return true if word exists in the grid.

// The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.
// Constraints:

// m == board.length
// n = board[i].length
// 1 <= m, n <= 6
// 1 <= word.length <= 15
// board and word consists of only lowercase and uppercase English letters.

function exist(board: string[][], word: string): boolean {
   if (word.length === 0) return false
   let visited: boolean[][];

   function dfs(row: number, col: number, index: number): boolean {
      if (index === word.length) return true
      if (row < 0 || row >= board.length || col < 0 || col >= board[0].length) return false
      if (visited[row][col] || board[row][col] !== word[index]) return false
      visited[row][col] = true

      const result = dfs(row + 1, col, index + 1) || dfs(row - 1, col, index + 1) || dfs(row, col + 1, index + 1) || dfs(row, col - 1, index + 1)
      visited[row][col] = false
      return result
   }

   for (let rowIndex = 0; rowIndex < board.length; rowIndex++) {
      for (let colIndex = 0; colIndex < board[0].length; colIndex++) {
         visited = Array.from({ length: board.length }, () => new Array(board[0].length).fill(false))
         if (dfs(rowIndex, colIndex, 0)) return true
      }
   }
   return false
};

export { exist }