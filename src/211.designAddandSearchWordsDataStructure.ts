/*Design a data structure that supports adding new words and finding if a string matches any previously added string.

Implement the WordDictionary class:

WordDictionary() Initializes the object.
void addWord(word) Adds word to the data structure, it can be matched later.
bool search(word) Returns true if there is any string in the data structure that matches word or false otherwise.word may contain dots '.' where dots can be matched with any letter.


   Example:

Input
["WordDictionary", "addWord", "addWord", "addWord", "search", "search", "search", "search"]
[[], ["bad"], ["dad"], ["mad"], ["pad"], ["bad"], [".ad"], ["b.."]]
Output
[null, null, null, null, false, true, true, true]

Explanation
WordDictionary wordDictionary = new WordDictionary();
wordDictionary.addWord("bad");
wordDictionary.addWord("dad");
wordDictionary.addWord("mad");
wordDictionary.search("pad"); // return False
wordDictionary.search("bad"); // return True
wordDictionary.search(".ad"); // return True
wordDictionary.search("b.."); // return True


Constraints:

1 <= word.length <= 25
word in addWord consists of lowercase English letters.
word in search consist of '.' or lowercase English letters.
There will be at most 2 dots in word for search queries.
At most 10^4 calls will be made to addWord and search.
*/

class WordNode {
   c: Map<string, WordNode>
   e: boolean
   constructor() {
      this.c = new Map<string, WordNode>()
      this.e = false
   }




}

class WordDictionary {
   d: WordNode

   constructor() {
      this.d = new WordNode()
   }

   addWord(word: string): void {
      let c = this.d;
      for (let i = 0; i < word.length; i++) {
         if (!c.c.has(word[i])) {
            c.c.set(word[i], new WordNode())
         }
         c = c.c.get(word[i]) as WordNode

      }
      c.e = true
   }

   search(w: string): boolean {
      const _d = (i: number, c: WordNode) => {

         for (i; i < w.length; i++) {
            const e = w[i];

            if (e === '.') {
               for (const [key, value] of c.c) {
                  if (_d(i + 1, value))
                     return true;
               }
               return false
            }
            else {
               if (!c.c.has(e)) return false
               c = c.c.get(e) as WordNode
            }
         }
         return c.e
      }
      return _d(0, this.d)
   }
}

export { WordDictionary }

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */