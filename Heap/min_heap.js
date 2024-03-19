

class MinHeap {
    constructor(array) {
        
        this.heap = [];
        
        
    }

    build(array){
        this.heap = array;
        
        for(let i = this.parent(this.heap.length - 1); i >= 0; i--) {
           this._shiftDown(i)
        }
    }
    _shiftDown(currentIdx) {
        let heap = this.heap;
        let endIdx = heap.length - 1;
        let leftChild = this.leftChild(currentIdx);
        let rightChild = this.rightChild(currentIdx);

        while(leftChild <= endIdx) {
            let valueToShift = leftChild;

            if(rightChild <= endIdx && heap[rightChild] < heap[leftChild]) {
                valueToShift = rightChild;
            }

            if(heap[currentIdx] > heap[valueToShift]) {
                this.swap(heap, currentIdx, valueToShift);
            
                currentIdx = valueToShift;
                leftChild = this.leftChild(currentIdx);
                rightChild = this.rightChild(currentIdx);

            } else {
                return;
            }
        }
    }

    _shiftUp(currentIdx) {
        let heap = this.heap;
        let parentIdx = this.parent(currentIdx);
        while(currentIdx > 0 && heap[parentIdx] > heap[currentIdx]) {
            this.swap(heap, currentIdx, parentIdx);
            currentIdx = parentIdx;
            parentIdx = this.parent(currentIdx);
        }
    }

    remove() {
        this.swap(this.heap, 0, this.heap.length - 1);
        this.heap.pop();
        this._shiftDown(0);
    }

    insert(val) {
      this.heap.push(val);
      this._shiftUp(this.heap.length - 1)
    }
    
    parent(index) {
        return Math.floor((index - 1) / 2);
    }

    leftChild(index) {
       return 2 * index + 1;
    }

    rightChild(index) {
       return 2 * index + 2;
    }
    swap(array, Index1, index2) {
        let temp = array[Index1];
        array[Index1] = array[index2];
        array[index2] = temp;
    }
}

const minHeap = new MinHeap();
minHeap.build([1, 5 , 8, 2, 4]);
minHeap.remove()
console.log(minHeap.heap)