
class Node {
    constructor(data) {
        this.prev = null;
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(val) {
       if(val === undefined) {
          throw new Error('argument required at method append(), cannot null node')
       }
       let node = this.head;
       let newNode = new Node(val);
       if(node === null) {
         this.head = newNode;
         this.tail = newNode;
         return this;
       }
       this.tail.next = newNode;
       newNode.prev = this.tail;
       this.tail = newNode;
       return this;
    }

    prepend(val) {
        if(val === undefined) {
            throw new Error('argument required at method prepend, cannot add null node');
        }
        let newNode = new Node(val);
        let node = this.head;
        this.head = newNode;
        newNode.next = node;
        node.prev = newNode;
        return this;

    }

    insertAfter(val, newVal) { 
        if(val === undefined || newVal === undefined) {
            throw new Error('argument missing at method insertAfter');
        }
        let node = this.head;
        let newNode = new Node(newVal);
        while(node.next) {
            if(node.data === val) {
                let temp = node.next;
                node.next = newNode
                newNode.next = temp;
                newNode.prev = node;
                temp.prev = newNode;
                return this;
            }
            node = node.next;
        }
    }

    insertBefore(val, newVal) {
        if(val === undefined || newVal === undefined) {
            throw new Error('argument missing at method insertAfter');
        }

        let newNode = new Node(newVal);
        let node = this.head;
        while(node) {
            if(node.next.data === val) {
                let temp = node.next;
                node.next = newNode;
                newNode.next = temp;
                newNode.prev = node;
                temp.prev = newNode;
                return this;
            }
            node = node.next;
        }

    }

    insertAt(position, newVal) {
        if(position === undefined || newVal === undefined) {
            throw new Error('argument missing at method insertAfter');
        }
        let node = this.head;
        let newNode = new Node(newVal);
        while(--position) {
            if(node.next !== null) {
                node = node.next;
            } else {
                throw new Error('LinkedList out of bound');
            }
        }
        let temp = node.next;
        node.next = newNode;
        newNode.next = temp;
        newNode.prev = node;
        temp.prepend = newNode;
        return this;
    }
    
    delete(val) {
        if(val === undefined) {
            throw new Error('argument required at method(), data is  required');
        }
        let node = this.head;
        if(this.tail.data === val) {
            this.tail.prev.next = null;
            this.tail = this.tail.prev;
            return this;
        }
       while(node.next) {
          if(node.next.data === val ) {
             node.next = node.next.next;
             node.next.prev = node;
             return this;
          }
          node = node.next;
       }
        
    }

    deleteLast() {
        console.log('data: ',this.tail.prev.prev)
        const temp = this.tail.prev;
        this.tail = this.tail.prev
        this.tail.next = null; 
       console.log('next:',this.tail.next)

       
    }

    print() {
        let node = this.head;
        process.stdout.write('head -> ')
        while(node) {
            process.ssdtdout.write(`${node.data} -> `)
           
            node = node.next;
        }
        process.stdout.write('null');
    }
}

const list = new LinkedList();
console.log(list); 
list.append(1);
list.append(2);
list.append(3);
list.prepend(0)

list.deleteLast()
list.deleteLast()
list.deleteLast()



list.print();
