
class TrieNode {
    constructor(){
        this.children = new Map();
        this.end = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode()
    }

    insert(words) {
       let node = this.root;
       for(let i = 0; i < words.length; i++) {
          const char = words[i];
          if(!node.children.get(char)) {
             node.children.set(char, new TrieNode());
          }
          node = node.children.get(char);
       }
         node.end = true;
    }

    search(words) {
        let node = this.root;
        for(let i = 0; i < words.length; i++) {
            const char = words[i];
            if(!node.children.get(char)) {
                return false;
            }
            node = node.children.get(char);
        }
        return node.end;
    }

    startsWith(prefixx) {
        let node = this.root;
        for(let i = 0; i < prefixx.length; i++) {
            const char = prefixx[i];
            if(!node.children.get(char)) {
                return false;
            }
        }

        return true;
    }

    findAllWordsWithPrefix(prefix, node = this.root, currentWord = prefix, result = []) {
        // If node is null or prefix is empty, return
        if (!node || prefix.length === 0) {
            return;
        }
    
        // If prefix is empty and node is end of a word, add current word to result
        if (prefix.length === 0 && node.isEndOfWord) {
            result.push(currentWord);
        }
    
        // Traverse child nodes recursively
        for (let [char, childNode] of node.children.entries()) {
            this.findAllWordsWithPrefix(prefix.slice(1), childNode, currentWord + char, result);
        }
    
        return result;
    }
}

const trie = new Trie();
trie.insert('apple')
trie.insert('app')
trie.insert('application');
console.log(trie.search('app'))
console.log(trie.findAllWordsWithPrefix('app'))