


// representation of the linked list with Object litral

// Simple representation of a node 
const node1 = {
    data: 2,
    next: null // Initially no next node
};

const node2 = {
    data: 3,
    next: null
};

const node3 = {
    data: 4,
    next: null
};

// Link the nodes together
node1.next = node2; 
node2.next = node3;

// "Head" of the linked list
const head = node1;

// To traverse (iterate) over the list:
let currentNode = head;
while (currentNode !== null) {
    console.log(currentNode.data); // Access data in each node
    currentNode = currentNode.next;
}

// same thing is happening with class 
// Creating linkedList with class is standared and more prefferd way
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }

   
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    appendNode(newNode) {
        let node = this.head;
        console.log("node: ", node)
        if(node == null) {
            this.head = newNode;
            return;
        }
        while(node.next) {
            node = node.next;
        }
        node.next = newNode;
    }
}

const linkedList = new LinkedList();

linkedList.appendNode(new Node(2));
linkedList.appendNode(new Node(3));
linkedList.appendNode(new Node(4));

console.log(linkedList);