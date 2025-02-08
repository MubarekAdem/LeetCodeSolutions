class NumberContainers {
    // Mapping from index to number.
    private indexToNumberMap: Map<number, number>;
    // Mapping from number to a min-heap of indices containing that number.
    private numberToIndicesMap: Map<number, MinHeap<number>>;

    constructor() {
        this.indexToNumberMap = new Map();
        this.numberToIndicesMap = new Map();
    }

    /**
     * Changes the number at the given index.
     * @param index The index of the number to change.
     * @param number The new number to set at the index.
     */
    change(index: number, number: number): void {
        // Check if the index already maps to a number.
        if (this.indexToNumberMap.has(index)) {
            // Retrieve the current number at the index.
            const currentNumber = this.indexToNumberMap.get(index);
            // Remove index from the min-heap of the current number.
            this.numberToIndicesMap.get(currentNumber!)?.remove(index);
        }
        // Update the index to the new number.
        this.indexToNumberMap.set(index, number);

        // If there's no existing min-heap for this number, create one.
        if (!this.numberToIndicesMap.has(number)) {
            this.numberToIndicesMap.set(number, new MinHeap());
        }
        // Add the index to the min-heap corresponding to the new number.
        this.numberToIndicesMap.get(number)?.insert(index);
    }

    /**
     * Finds the smallest index that contains the given number.
     * @param number The number to find the smallest index for.
     * @returns The smallest index containing the given number, or -1 if not found.
     */
    find(number: number): number {
        // Attempt to find the min-heap of indices for the given number.
        const indicesHeap = this.numberToIndicesMap.get(number);
        // If there's no min-heap for the number or the min-heap is empty, return -1.
        if (!indicesHeap || indicesHeap.size() === 0) {
            return -1;
        }
        // Return the smallest index (top of the min-heap).
        return indicesHeap.peek();
    }
}

/**
 * MinHeap implementation for efficient retrieval of the smallest index.
 */
class MinHeap<T> {
    private heap: T[];

    constructor() {
        this.heap = [];
    }

    // Get the size of the heap.
    size(): number {
        return this.heap.length;
    }

    // Insert a value into the heap.
    insert(value: T): void {
        this.heap.push(value);
        this.bubbleUp(this.heap.length - 1);
    }

    // Remove a specific value from the heap.
    remove(value: T): void {
        const index = this.heap.indexOf(value);
        if (index === -1) return;

        // Swap the value with the last element and remove it.
        this.swap(index, this.heap.length - 1);
        this.heap.pop();

        // Re-heapify.
        if (index < this.heap.length) {
            this.bubbleUp(index);
            this.bubbleDown(index);
        }
    }

    // Get the smallest value (top of the heap).
    peek(): T {
        return this.heap[0];
    }

    // Bubble up to maintain heap property.
    private bubbleUp(index: number): void {
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[parentIndex] <= this.heap[index]) break;
            this.swap(parentIndex, index);
            index = parentIndex;
        }
    }

    // Bubble down to maintain heap property.
    private bubbleDown(index: number): void {
        while (true) {
            const leftChildIndex = 2 * index + 1;
            const rightChildIndex = 2 * index + 2;
            let smallestIndex = index;

            if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] < this.heap[smallestIndex]) {
                smallestIndex = leftChildIndex;
            }
            if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[smallestIndex]) {
                smallestIndex = rightChildIndex;
            }
            if (smallestIndex === index) break;

            this.swap(index, smallestIndex);
            index = smallestIndex;
        }
    }

    // Swap two elements in the heap.
    private swap(i: number, j: number): void {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }
}

