const MaxHeap = require('./maxheap').MaxHeap;
const MinHeap = require('./minheap').MinHeap;

const pqMax = new MaxHeap();
pqMax.insert(5);
pqMax.insert(2);
pqMax.insert(100);
pqMax.insert(53);
console.log(pqMax.peek());
console.log(pqMax.extractMax());
console.log(pqMax.extractMax());
console.log(pqMax.extractMax());
console.log(pqMax.peek());


const pqMin = new MinHeap();
pqMin.insert(5);
pqMin.insert(2);
pqMin.insert(100);
pqMin.insert(53);
console.log(pqMin.peek());
console.log(pqMin.extractMin());
console.log(pqMin.extractMin());
console.log(pqMin.extractMin());
console.log(pqMin.peek());

