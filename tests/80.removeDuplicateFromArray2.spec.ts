//write some test for the removeDuplicate function
//import the removeDuplicate function from the main.js file

import { removeDuplicates } from '../src/80.removeDuplicateFromSortedArray2';

//the function updated on existed array not return new array
//remove the duplicate in place such that each unique element appears at most twice 
describe('removeDuplicates', () => {
   it('should remove duplicates in place', () => {
      const nums = [1, 1, 1, 2, 2, 3];
      removeDuplicates(nums);
      expect(nums.slice(0, 5)).toEqual([1, 1, 2, 2, 3]);
   });

   it('should remove duplicates in place', () => {
      const nums = [0, 0, 1, 1, 1, 1, 2, 3, 3];
      removeDuplicates(nums);
      expect(nums.slice(0, 7)).toEqual([0, 0, 1, 1, 2, 3, 3]);
   });
});
