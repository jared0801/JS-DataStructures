const Trie = require('./trie').Trie;

myTrie = new Trie();
myTrie.add('ball')
myTrie.add('bat');
myTrie.add('doll');
myTrie.add('dork');
console.log(myTrie.getWords());
console.log(myTrie.isWord('bat'));
console.log(myTrie.isWord('bad'));
console.log(myTrie.root.keys.get('b').keys.get('a'));