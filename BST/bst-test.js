const BST = require('./bst').BST;



const bst = new BST(15);

bst.insert(3);
bst.insert(36);
bst.insert(2);
bst.insert(12);
bst.insert(28);
bst.insert(39);
console.log(bst);
console.log(bst.bftLevelOrder());
