class Trie {
  constructor() {
    this.characters = {};
    this.isWord = false;
  }
  addWord(word, index = 0) {
    if (index === word.length) {
      this.isWord = true;
      return;
    }
    const currentChar = word[index];
    if (!this.characters[currentChar]) {
      this.characters[currentChar] = new Trie();
    }
    this.characters[currentChar].addWord(word, index + 1);
  }
}

var firstTrie = new Trie();
firstTrie.addWord("fun");
console.log(firstTrie.characters); // {f: Trie}
console.log(!!firstTrie.characters["f"]); // true
console.log(firstTrie.characters.f.characters.u); // {u: Trie}
console.log(!!firstTrie.characters.f.characters.u); // true
console.log(firstTrie.characters.f.characters.u.characters.n.isWord); // true
console.log(!!firstTrie.characters.f.characters.u.characters.n); // true
console.log(!!firstTrie.characters.f.characters.u.characters.n.characters); // {}
console.log(!!firstTrie.characters.f.characters.u.characters.l); // true

var secondTrie = new Trie();
secondTrie.addWord("ha");
secondTrie.addWord("hat");
secondTrie.addWord("has");
secondTrie.addWord("have");
secondTrie.addWord("hate");

secondTrie.characters.h.characters.a.isWord; // true
secondTrie.characters.h.characters.a.characters.t.isWord; // true
secondTrie.characters.h.characters.a.characters.v.isWord; // false
secondTrie.characters.h.characters.a.characters.v.characters.e.isWord; // true
secondTrie.characters.h.characters.a.characters.t.characters.e.isWord; // true

Object.keys(secondTrie.characters.h.characters.a.characters).length; // 3
