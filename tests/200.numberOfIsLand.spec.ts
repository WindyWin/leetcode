import { numIslands } from "../src/200.numberOfIsland";

describe('numIslands', () => {
   it('should return 1 for a grid with a single island', () => {
      const grid = [
         ['1', '1', '1', '1', '0'],
         ['1', '1', '0', '1', '0'],
         ['1', '1', '0', '0', '0'],
         ['0', '0', '0', '0', '0']
      ];
      expect(numIslands(grid)).toBe(1);
   });

   it('should return 3 for a grid with three islands', () => {
      const grid = [
         ['1', '1', '0', '0', '0'],
         ['1', '1', '0', '0', '0'],
         ['0', '0', '1', '0', '0'],
         ['0', '0', '0', '1', '1']
      ];
      expect(numIslands(grid)).toBe(3);
   });

   it('should return 0 for an empty grid', () => {
      const grid = [
         ['0', '0', '0', '0', '0'],
         ['0', '0', '0', '0', '0'],
         ['0', '0', '0', '0', '0'],
         ['0', '0', '0', '0', '0']
      ];
      expect(numIslands(grid)).toBe(0);
   });
});