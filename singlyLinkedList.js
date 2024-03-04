class Node {
  constructor(data = null) {
    if (typeof data === null) {
      throw new Error("argument missing at Node(), connot create empty node");
    }
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
    if (!val) {
      throw new Error("cannot append null node");
    }
    let node = this.head;
    let newNode = new Node(val);
    if (node === null) {
      this.head = newNode;
      this.tail = newNode;
      return this;
    }

    this.tail.next = newNode;
    this.tail = newNode;
    return this;
  }

  prepend(val = null) {
    if (typeof val === null) {
      throw new Error("cannot prpend null node");
    }

    let node = this.head;
    let newNode = new Node(val);

    if (node === null) {
      this.head = newNode;
      this.tail = newNode;
      return this;
    }
    this.head = newNode;
    newNode.next = node;
    return this;
  }

  insertAfter(data, val) {
    if (data === undefined) {
      throw new Error("argument missing at insertAfter, value is required");
    }
    if (val === undefined) {
      throw new Error(
        "cannot insert null node, argument missing at insertAfter"
      );
    }
    let flag = false;
    let node = this.head;
    let newNode = new Node(val);
    while (node) {
      if (node.data === data) {
        flag = true;
        break;
      }
      node = node.next;
    }
    if (!flag) {
      throw new Error("LinkedList bound out of position");
    }

    if (node === this.tail) {
      this.tail = newNode;
    }
    let temp = node.next;
    node.next = newNode;
    newNode.next = temp;
    return this;
  }

  insertBefore(data, val) {
    if (data === undefined) {
      throw new Error("argument missing at insertBefore, value is required");
    }
    if (val === undefined) {
      throw new Error(
        "cannot insert null node, argument missing at insertBefore"
      );
    }
    let flag = false;
    let node = this.head;
    let newNode = new Node(val);
    if (this.head.data === data) {
      this.head = newNode;
      newNode.next = node;
      return this;
    }
    while (node) {
      if (node.next.data === data) {
        flag = true;
        break;
      }
      node = node.next;
    }
    if (!flag) {
      throw new Error("LinkedList bound out of position");
    }
    let temp = node.next;
    node.next = newNode;
    newNode.next = temp;
    return this;
  }

  insertAt(position, data) {
    if (data === undefined) {
      throw new Error("argument missing at insertAt, value is required");
    }
    if (position === undefined) {
      throw new Error(
        "cannot insertAt null node, argument missing at insertAt"
      );
    }
    let node = this.head;
    let newNode = new Node(data);
    if (position === 0) {
      this.head = newNode;
      newNode.next = node;
      return this;
    }

    while (--position) {
      if (node.next !== null) {
        node = node.next;
      } else {
        throw new Error("linkedList out of position");
      }
    }

    let temp = node.next;
    node.next = newNode;
    newNode.next = temp;
    return this;
  }

  delete(val) {
    if (val === undefined) {
      throw new Error("argument missing at delete");
    }
    let node = this.head;
    if (this.head.data === val) {
      this.head = node.next;
      return this;
    }
    while (node.next) {
      if (node.next.data === val) {
        node.next = node.next.next;
        return this;
      }
      node = node.next;
    }
  }

  deleteAfter(val) {
    if (val === undefined) {
      throw new Error("argument missing at deleteAfter");
    }
    let node = this.head;
    while (node.next) {
      if (node.data === val) {
        node.next = node.next.next;
        return this;
      }
      node = node.next;
    }
  }

  deleteBefore(data) {
    if (data === undefined) {
      throw new Error("argument missing at deleteBefore, value is required");
    }

    if (this.head.data === data) {
      throw new Error("no node before first node");
    }
    let node = this.head;
    if (node.next.data === data) {
      this.head = node.next;
      return this;
    }
    while (node.next) {
      if (node.next?.next?.data === data) {
        node.next = node.next.next;
        return this;
      }
      node = node.next;
    }
  }

  deleteAt(position) {
    if (position === undefined) {
      throw new Error(
        "argument missing at deleteAt method, required position to delete element"
      );
    }
    if (position === 0) {
      this.head = this.head.next;
      return this;
    }
    let node = this.head;
    while (--position) {
      if (node.next !== null) {
        node = node.next;
      }
      node = node.next;
    }
    node.next = node.next.next;
    return this;
  }

  deleteLast() {
    let node = this.head;
    if (node === null) {
      throw new Error("cannot delete from empty node");
    }
    this.tail = null;
    return this;
  }

  deleteFirst() {
    this.head = this.head.next;
    return this;
  }

  indexOf(val) {
    if (val === undefined) {
      throw new Error("agrgument missing at indexOf() method, required value");
    }
    let position = -1;
    let node = this.head;
    while (node) {
      ++position;
      if (node.data === val) {
        return position;
      }
      node = node.next;
    }
    return -1;
  }

  size() {
    let node = this.head;
    let size = 0;
    while (node) {
      ++size;
      node = node.next;
    }
    return size;
  }

  isEmpty() {
    return this.head === null;
  }

  clear() {
    this.head = null;
  }

  reverse() {
    let previosNode = null;
    let currentNode = this.head;
    let nextNode = null;
    if (this.head === null) return;
    while (currentNode) {
      nextNode = currentNode.next;
      currentNode.next = previosNode;
      previosNode = currentNode;
      currentNode = nextNode;
    }
    this.head = previosNode;
    return this;
  }

  printList() {
    let node = this.head;
    process.stdout.write("Head -> ");
    while (node) {
      process.stdout.write(`${node.data} -> `);
      node = node.next;
    }
    process.stdout.write("null");
  }
}

const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
console.log("size", list.size());

list.reverse();
list.printList();
