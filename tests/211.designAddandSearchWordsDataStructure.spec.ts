import { WordDictionary } from '../src/211.designAddandSearchWordsDataStructure';

describe('WordDictionary', () => {
   it('should add a word and search for it', () => {
      const wordDictionary = new WordDictionary();
      wordDictionary.addWord('bad');
      expect(wordDictionary.search('bad')).toBe(true);
   });

   it('should not search for a word that has not been added', () => {
      const wordDictionary = new WordDictionary();
      expect(wordDictionary.search('bad')).toBe(false);
   });

   it('should search for a word with dots', () => {
      const wordDictionary = new WordDictionary();
      wordDictionary.addWord('bad');
      expect(wordDictionary.search('.ad')).toBe(true);
   });

   it('should search for a word with multiple dots', () => {
      const wordDictionary = new WordDictionary();
      wordDictionary.addWord('bad');
      expect(wordDictionary.search('b..')).toBe(true);
   });


   it('should add multiple words and search for them', () => {
      const wordDictionary = new WordDictionary();
      wordDictionary.addWord('bad');
      wordDictionary.addWord('dad');
      wordDictionary.addWord('mad');
      expect(wordDictionary.search('bad')).toBe(true);
      expect(wordDictionary.search('dad')).toBe(true);
      expect(wordDictionary.search('mad')).toBe(true);
   });

});