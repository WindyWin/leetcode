// tests/79.wordSearch.spec.ts
import { exist } from '../src/79.wordSearch';

describe('exist function', () => {
   it.skip('should return true for a word that exists in the grid', () => {
      const board = [
         ['A', 'B', 'C', 'E'],
         ['S', 'F', 'C', 'S'],
         ['A', 'D', 'E', 'E'],
      ];
      const word = 'ABCCED';
      expect(exist(board, word)).toBe(true);
   });

   it('should return true for a word that exists in the grid with different case', () => {
      const board = [
         ['A', 'B', 'C', 'E'],
         ['S', 'F', 'C', 'S'],
         ['A', 'D', 'E', 'E'],
      ];
      const word = 'FCSECB';
      expect(exist(board, word)).toBe(true);
   });

   it.skip('should return false for a word that does not exist in the grid', () => {
      const board = [
         ['A', 'B', 'C', 'E'],
         ['S', 'F', 'C', 'S'],
         ['A', 'D', 'E', 'E'],
      ];
      const word = 'ABCB';
      expect(exist(board, word)).toBe(false);
   });

   it.skip('should return false for an empty word', () => {
      const board = [
         ['A', 'B', 'C', 'E'],
         ['S', 'F', 'C', 'S'],
         ['A', 'D', 'E', 'E'],
      ];
      const word = '';
      expect(exist(board, word)).toBe(false);
   });

   it.skip('should return false for a word that is longer than the grid', () => {
      const board = [
         ['A', 'B', 'C', 'E'],
         ['S', 'F', 'C', 'S'],
         ['A', 'D', 'E', 'E'],
      ];
      const word = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      expect(exist(board, word)).toBe(false);
   });
});