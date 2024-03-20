
class Node {
    constructor(data){
      this.data = data;
      this.left = null;
      this.right = null;
    }
  }
  class MinHeap {
    constructor() {
      this.root = null;
    }
  
    heapfyDown(currentIdx) {
      let minHeap = this.root;
      let endIdx = this.root.length - 1;
      let leftChildIdx = this.leftChild(currentIdx);
      let rightChildIdx = this.rightChild(currentIdx);
  
      while(leftChildIdx <= endIdx) {
         let valueToShift = leftChildIdx;
         console.log('hi')
  
         if(rightChildIdx <= endIdx && minHeap[rightChildIdx] < minHeap[leftChildIdx]) {
           valueToShift = rightChildIdx;
         }
  
         if(minHeap[currentIdx] > minHeap[valueToShift]) {
           this.swap(currentIdx, valueToShift);
  
           currentIdx = valueToShift;
           leftChildIdx = this.leftChild(currentIdx);
           rightChildIdx = this.rightChild(currentIdx);
         } else {
            return 
         }
      }
    }
  
  heapfyUp(currentIdx) {
    let heap = this.root;
     let parentIdx = this.parent(currentIdx);
     while(currentIdx > 0 && heap[currentIdx] > heap[parentIdx]) {
         this.swap(currentIdx, parentIdx);
         currentIdx = parentIdx;
         parentIdx = this.parent(currentIdx); 
     }
  }
  
  build(array) {
    this.root = array;
    const lastParent = this.parent(array.length - 1);
    for(let i = lastParent; i >= 0; i--) {
      this.heapfyDown(i);
    }
  }
  
  insert(val) {
    const heap = this.root;
    heap.push(val);
    this.heapfyUp(heap.length - 1);
  }
  
  remove() {
    let minHeap = this.root;
    this.swap(0, minHeap.length - 1);
    minHeap.pop();
    this.heapfyDown(0);
  }
  
  extractMin() {
    return this.root.pop();
  }
    parent(i) {
      return Math.floor((i - 1) / 2);
    }
  
    leftChild(i) {
      return 2 * i + 1;
    }
  
    rightChild(i) {
      return 2 * i + 2;
    }
  
    swap(firstIdx, secondIdx) {
      const array = this.root;
      let temp = array[firstIdx];
      array[firstIdx] = array[secondIdx];
      array[secondIdx] = temp;
    }
  }
  
  const minHeap = new MinHeap();
  const arr = [10, 7, 5, 8, 2, 1]
  minHeap.build(arr);
  minHeap.remove()
  console.log(minHeap)