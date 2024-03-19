
class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}


class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(val) {    
      if(val === undefined){
        throw new Error('we cant insert null to tree');
      }
      let newNode = new Node(val);
      if(this.root === null) {
          this.root = newNode;
          return this;
      }

     return this.insertNode(this.root, newNode);
    }

    insertNode(node, newNode) {
        if(newNode.data < node.data) {
            if(node.left === null){
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            } 
        } else  {
            if(node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
        return this;
    }
    insertWithLoop(val) {
        let node = this.root;
        let newNode = new Node(val);
        if(node === null) {
            node = newNode;
            return this;
        }
        while(node) {
            if(val < node.data) {
                if(node.left === null) {
                    node.left = newNode;
                    return this;
                } else {
                    node = node.left;
                }
            } else {
                if(node.right === null) {
                    node.right = newNode;
                    return this;
                } else {
                    node = node.left;
                }
            }
        }
    }
    contains(node, value) {
        console.log(node, value)
        if(node === null) {
            return false;
        }
        if(node.data === value) {
            console.log('hiid')
            return true;
        } 
        if(value < node.data) {
            return this.contains(node.left, value);
        } else {
           return  this.contains(node.right, value);
        }
    }
    containsWithLoop(value,node = this.root) {
    
      while(node != null) {
        if(node.data == value) {
            return true;
        }
        if(value < node.data) {
            node = node.left;
        } else {
            node = node.right;
        }
      }
      return false;
    }

    remove(val) {
        this.root = this.removeNode(this.root, val);
       }
    
       removeNode(node, val) {
        console.log('function call:', node)
         if(node === null) {
            return null;
         }
         if( val < node.data ) {
            node.left = this.removeNode(node.left, val);
            return node;
         } else if(val > node.data) {
            node.right = this.removeNode(node.right, val);
            return node;
         } else {
            if(node.left === null && node.right === null) {
                node = null;
                return node;
            } 
            if(node.left === null) {
                node = node.right;
                return node;

            } else if(node.right === null) {
                node = node.left;
                return node;
            }
            console.log('node.data: ',node.data)
            const aux = this.findMinNode(node.right);
            console.log('aux.data',aux.data)
            node.data = aux.data;
            node.right = this.removeNode(node.right, aux.data);
            return node;
           
         }
       }

   findMinNode(node) {
    console.log('node in min',node, node.data)
     if(node.left === null) {
        return node;
     } else {
        return this.findMinNode(node.left);
     }
   }
   findMaxNode(node) {
    if(node.right === null) {
        return node.data;
    } else {
        return this.findMaxNode(node.right);
    }
   }

   findCloseValue(target, node) {
      
   }
   inorder(node = this.root) {
     if(node != null) {
        this.inorder(node.left);
        process.stdout.write(`${node.data} `);
        this.inorder(node.right);
     }
   }
   preOrder(node= this.root) {
    if(node != null){
        process.stdout.write(`${node.data} `);
        this.preOrder(node.left);
        this.preOrder(node.right)
    }
   }
   postOrder(node = this.root) {
     if(node != null) {
        this.postOrder(node.left);
        this.postOrder(node.right);
        process.stdout.write(`${node.data} `);
     }
   }
}

const bst = new BinarySearchTree();
bst.insert(10)
bst.insert(15)
bst.insert(3)
bst.insert(1)
bst.insert(7)


console.log(bst)


console.log(bst.contains(bst.root, 3));
bst.inorder()
console.log('\n')
bst.preOrder();
console.log('\n');
bst.postOrder()

