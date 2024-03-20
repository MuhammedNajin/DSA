
class MaxHeap {
    constructor(){
      this.root = null;
    }
  
    build(array) {
      this.root = array;
      const lastParent = this.parent(array.length - 1);
      console.log('last:', lastParent)
      for(let i = lastParent; i >= 0; i--) {
         this.heapfyDown(i);
      }
    }
  
    insert(val) {
       let maxHeap = this.root;
       maxHeap.push(val);
       this.heapfyDown(maxHeap.length - 1);
    }
  
    remove() {
      if(this.root === null) {
        return undefined;
      }
      let maxHeap = this.root;
      this.swap(0, maxHeap.length - 1);
      maxHeap.pop()
      this.heapfyDown(0)
    }
  
    heapyUp(currentIdx) {
      const maxHeap = this.root;
      let parent = this.parent(currentIdx)
      while(currentIdx >= 0 && maxHeap[currentIdx] > maxHeap[parent]) {
        this.swap(parent, currentIdx);
        currentIdx = parent;
        parent = this.parent(currentIdx);
      }
    }
  
    heapfyDown(currentIdx) {
      console.log('currentIdx:', currentIdx);
      const maxHeap = this.root;
      let leftChildIdx = this.leftChild(currentIdx);
      let rightChildIdx = this.rightChild(currentIdx);
      let endIdx = maxHeap.length - 1;
  
      while(leftChildIdx <= endIdx) {
         let valueToShift = leftChildIdx;
  
         if(rightChildIdx <= endIdx && maxHeap[rightChildIdx] > maxHeap[leftChildIdx]) {
            valueToShift = rightChildIdx;
         }
         console.log(valueToShift)
  
         if(maxHeap[valueToShift] > maxHeap[currentIdx]) {
           this.swap(currentIdx, valueToShift)
           currentIdx = valueToShift;
           leftChildIdx = this.leftChild(currentIdx);
           rightChildIdx = this.rightChild(currentIdx);
         } else {
            return;
         }
      }
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
  
  const maxHeap = new MaxHeap();
  maxHeap.build([1, 3, 5, 8, 20])
  console.log(maxHeap)