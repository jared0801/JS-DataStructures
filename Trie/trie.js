class TrieNode {
    constructor(contents='') {
        this.keys = new Map();
        this.contents = contents;
        this.end = false;
    }
    
    isEnd() {
        return this.end;
    };
    setEnd() {
        this.end = true;
    };
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    add(input, node=this.root, index=0) {
        if(index >= input.length) {
            node.setEnd();
            return;
        }
        if(!node.keys.has(input[index])) {
            node.keys.set(input[index], new TrieNode(input.slice(0, index+1)));
        }
        return this.add(input, node.keys.get(input[index]), index+1);
    }

    isWord(word) {
        let node = this.root;
        while(word.length > 1) {
            if(!node.keys.has(word[0])) {
                return false;
            }

            node = node.keys.get(word[0]);
            word = word.slice(1);
        }
        return (node.keys.has(word) && node.keys.get(word).isEnd()) ? true : false;
    }

    getWords() {
        let words = [];
        let traverse = function(node, string) {
            if(node.keys.size != 0) {
                for(let letter of node.keys.keys()) {
                    traverse(node.keys.get(letter), string.concat(letter))
                }
                if(node.isEnd()) {
                    words.push(string);
                }
            } else {
                string.length > 0 ? words.push(string) : undefined;
                return;
            }
        }

        traverse(this.root, '');
        return words.length > 0 ? words : null;
    }
}

module.exports = {
    TrieNode,
    Trie
}