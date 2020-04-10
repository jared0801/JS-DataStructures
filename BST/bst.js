class BTNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor(value) {
        this.root = new BTNode(value);
        this.count = 1;
    }

    size() {
        return this.count;
    }

    insert(value) {
        this.count++;
        let newNode = new BTNode(value);
        const searchTree = node => {
            if(value < node.value) {
                if(!node.left) {
                    node.left = newNode;
                } else {
                    searchTree(node.left);
                }
            } else if(value > node.value) {
                if(!node.right) {
                    node.right = newNode;
                } else {
                    searchTree(node.right);
                }
            }
        }

        searchTree(this.root);
    }

    min() {
        let curNode = this.root;
        while(curNode.left) {
            curNode = curNode.left;
        }

        return curNode.value;
    }

    max() {
        let curNode = this.root;
        while(curNode.right) {
            curNode = curNode.right;
        }

        return curNode.value;
    }

    contains(value) {
        let curNode = this.root;

        while(curNode) {
            if(value === curNode.value) {
                return true;
            } else if(value < curNode.value) {
                curNode = curNode.left;
            } else {
                curNode = curNode.right;
            }
        }

        return false;
    }

    // DFT - Depth-first traversal
    // Uses a stack
    // In-order: left, root, right
    dftInOrder() {
        let result = [];

        const traverse = node => {
            if(!node) return [];
            traverse(node.left);
            result.push(node.value);
            traverse(node.right);
        }
        traverse(this.root);

        return result;
    }
    // Pre-order: root, left, right
    dftPreOrder() {
        let result = [];

        const traverse = node => {
            if(!node) return [];
            result.push(node.value);
            traverse(node.left);
            traverse(node.right);
        }
        traverse(this.root);

        return result;
    }
    // Post-order: left, right, root
    dftPostOrder() {
        let result = [];

        const traverse = node => {
            if(!node) return [];
            traverse(node.left);
            traverse(node.right);
            result.push(node.value);
        }
        traverse(this.root);

        return result;
    }

    // BFS: level by level
    // Uses a queue
    bft() {
        let result = [];
        let queue = [];
        if(this.root) queue.push(this.root);

        while(queue.length > 0) {
            let curNode = queue.shift();
            result.push(curNode.value);
            if(curNode.left) queue.push(curNode.left);
            if(curNode.right) queue.push(curNode.right);
        }

        return result;
    }
    bftLevelOrder() {
        let result = [];
        let queue = [];
        if(this.root) queue.push(this.root);

        while(queue.length > 0) {
            let level = [];
            let lsize = queue.length; // Save this before we start pushing more items to the queue
            for(let i = 0; i < lsize; i++) {
                let temp = queue.shift();
                level[i] = temp.value;
                if(temp.left) queue.push(temp.left);
                if(temp.right) queue.push(temp.right);
            }
            result.push(level);
        }

        return result;
    }
}

module.exports = {
    BTNode,
    BST
}