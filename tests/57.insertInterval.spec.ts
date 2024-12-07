// tests/insertInterval.spec.ts
import { insert } from '../src/57.insertInterval';

describe('insertInterval function', () => {
   it('should return the original intervals if the new interval does not overlap', () => {
      const intervals = [[1, 3], [6, 9]];
      const newInterval = [4, 5];
      expect(insert(intervals, newInterval)).toEqual([[1, 3], [4, 5], [6, 9]]);
   });

   it('should merge overlapping intervals', () => {
      const intervals = [[1, 3], [6, 9]];
      const newInterval = [2, 5];
      expect(insert(intervals, newInterval)).toEqual([[1, 5], [6, 9]]);
   });

   it('should merge multiple overlapping intervals', () => {
      const intervals = [[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]];
      const newInterval = [4, 8];
      expect(insert(intervals, newInterval)).toEqual([[1, 2], [3, 10], [12, 16]]);
   });

   it('should handle empty intervals array', () => {
      const intervals: number[][] = [];
      const newInterval = [1, 2];
      expect(insert(intervals, newInterval)).toEqual([[1, 2]]);
   });

   it('should handle new interval that is completely contained within an existing interval', () => {
      const intervals = [[1, 5]];
      const newInterval = [2, 3];
      expect(insert(intervals, newInterval)).toEqual([[1, 5]]);
   });

   it('should handle new interval that contains an existing interval', () => {
      const intervals = [[1, 2], [3, 4]];
      const newInterval = [0, 5];
      expect(insert(intervals, newInterval)).toEqual([[0, 5]]);
   });
});