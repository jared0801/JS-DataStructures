class MinHeap {
    constructor() {
        this.data = [];
    }

    // Adds a new element to the heap array and reheapifys
    insert(node) {
        this.data.push(node);
        this.bubbleUp();
    }

    // Moves new items up to their correct position (where parent is smaller)
    bubbleUp() {
        let index = this.data.length - 1;

        // Keep going until at the front of the array
        while(index > 0) {
            let element = this.data[index];
            let parentIndex = Math.floor((index-1)/2);
            let parent = this.data[parentIndex];

            // Break if parent is smaller
            if(parent <= element) break;

            // Swap this element and its parent,
            // Keeping track of the new index of this element
            this.data[index] = parent;
            this.data[parentIndex] = element;
            index = parentIndex;
        }
    }

    // Returns the max and reheapifys the array
    extractMin() {
        // Store max to return
        let min = this.data[0];

        // Set first element to the last element
        this.data[0] = this.data.pop();

        // Sink the (new) first element down to a position where its smaller than both its children
        this.sinkDown(0);

        return min;
    }

    // Moves the item at index down until it is smaller than both of its children
    sinkDown(index) {
        let smallest = index;
        let left = index*2 + 1;
        let right = index*2 + 2;
        const length = this.data.length;

        // Checks if left child is smaller than this element
        if(left <= length && this.data[left] < this.data[smallest]) {
            // Set smallest to left child's index
            smallest = left;
        }
        // Checks if right child is smaller than this element (or its smaller left child)
        if(right <= length && this.data[right] < this.data[smallest]) {
            // Set smallest to right child's index
            smallest = right;
        }

        // Swap element at index with it's smallest child
        // and keep going until element is larger than both children
        if(smallest !== index) {
            [this.data[smallest], this.data[index]] = [this.data[index], this.data[smallest]];
            this.sinkDown(smallest);
        }
    }

    peek() {
        return this.data[0];
    }


}

module.exports = {
    MinHeap
}