
class Node {

    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    appendNode(val) {
        if(val === undefined) {
            throw new Error('argument missing please provide argemnet');
        }
         let newNode = new Node(val)
        if(this.head === null) {
            this.head = newNode;
            this.tail = newNode;
            newNode.next = this.head;
        }

        this.tail.next = newNode;
        newNode.next = this.head;
        this.tail = newNode;

    }
    printNode() {
      let node = this.head;

      do {
        
          node = node.next;
      }while(node != this.head);
    }

    isCircular() {
        let slow = this.head;
        let fast = this.head;

        while(slow !== null && fast !== null) {
           if(slow === fast) {
            console.log(slow.data)
             return true;
           }
           slow = slow.next;
           fast = fast.next.next;
        }

        return false;
    }

   
}



const list = new LinkedList()
list.appendNode(1);
list.appendNode(2)
list.appendNode(3)
list.appendNode(4)
console.log(list);
list.printNode()
console.log(list.isCircular())