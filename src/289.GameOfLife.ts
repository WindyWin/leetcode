/**
 Do not return anything, modify board in-place instead.
 */
function gameOfLife(board: number[][]): void {
   const map: {
      [key: string]: number
   } = {}
   for (let row = 0; row < board.length; row++) {
      const rowData = board[row];
      for (let col = 0; col < rowData.length; col++) {
         const element = rowData[col];
         for (let i = -1; i <= 1; i++) {
            const neighborRow = row + i;
            if (neighborRow < 0 || neighborRow >= board.length) {
               continue;
            }
            for (let j = -1; j <= 1; j++) {
               const neighborCol = col + j
               if (neighborCol < 0 || neighborCol >= rowData.length || (row === neighborRow && col === neighborCol)) {
                  continue;
               }
               map[`${neighborRow},${neighborCol}`] ||= 0;
               console.log(neighborRow, neighborCol);
               if (element) {
                  map[`${neighborRow},${neighborCol}`]++
               }
            }
         }
      }
   }
   for (let row = 0; row < board.length; row++) {
      const rowData = board[row];
      for (let col = 0; col < rowData.length; col++) {
         const element = rowData[col];
         const neighborCount = map[`${row},${col}`]
         if (element === 1) {
            if (neighborCount < 2 || neighborCount > 3)
               board[row][col] = 0;
         }
         else {
            if (neighborCount === 3)
               board[row][col] = 1
         }
      }
   }
   console.log(map);
};

const a = [[0, 1, 0], [0, 0, 1], [1, 1, 1], [0, 0, 0]]
const b = [[1, 1], [0, 1]]
gameOfLife(b)
console.log(b);