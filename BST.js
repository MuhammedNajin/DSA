

class TreeNode {
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
  
      insert(target) {
        if(target === undefined) {
          throw new Error('argument missing at method insert');
        }
        const node = this.root;
        const newNode = new TreeNode(target);
        if(node === null) {
          this.root = newNode;
          return this;
        }
  
        this.insertNode(node, newNode);
      }
  
      insertNode(node, newNode) {
        if(node === null) {
          return 
        }
         if(newNode.data < node.data) {
            if(node.left === null) {
              node.left = newNode;
            } else {
              this.insertNode(node.left, newNode);
            }
            return this;
         } else if(newNode.data > node.data ) {
            if(node.right === null) {
              node.right = newNode;
            } else {
              this.insertNode(node.right, newNode);
            }
            return this;
         }
      }
  
      contains(target, node = this.root) {
        if(target === undefined) {
          throw new Error('argument missing at method contains');
        }
        if(node === null) {
          return { target: target, status: false }
        }
  
        if(node.data === target) {
          return { target: target, status: true }
        }
        if(target < node.data) {
  
          return this.contains(target ,node.left);
  
        } else if(target > node.data) {
  
          return this.contains(target, node.right);
        }
      }
  
      remove(target) {
        if(target === undefined) {
          throw new Error('argument missing at remove method')
        }
        
        this.root = this.removeNode();
      }
  
      removeNode(node, target) {
        if(node === null) {
          return null;
        }
        if(target < node.data) {
          node.left = this.removeNode(node.left, target);
        } else if(target > node.data) {
          node.right = this.removeNode(node.right, target);
        } else {
           if(node.left === null && node.right === null) {
             node = null;
             
           } else if(node.left === null) {
             node = node.right;
           } else if(node.right === null) {
             node = node.left;
           } else {
             const aux = this.findMinNode(node.right);
             node.data = aux;
             node.right = this.removeNode(node.right, aux)
           }
           return node;
        }
      }
  
      findMinNode(node) {
        if(node.left === null) {
          return node.data;
        } else {
           this.findMinNode(node.left);
        }
      }
  
      inOrder(node = this.root, nodes = []) {
         if(node === null) {
           return
         }
         this.inOrder(node.left, nodes);
         console.log(node.data)
         nodes.push(node.data);
         this.inOrder(node.right, nodes);
         return nodes;
        }
  
      preOrder(node = this.root, nodes = []) {
         if(node === null) {
           return
         }
         nodes.push(node.data);
         this.preOrder(node.left, nodes);
         this.preOrder(node.right, nodes);
  
         return nodes;
      }
  
      postOrder(node = this.root, nodes = []) {
         if(node === null) {
          return;
         }
         this.postOrder(node.left, nodes)
         this.preOrder(node.right, nodes);
         nodes.push(node.data);
         return nodes;
      }
  
      isBst() {
        let node = this.root;
         return this.isBstHelper(node);
      }
  
      findSecondLargest(node = this.root, result = { count: 0, secondLargest: null }) {
         if(node === null) {
           return
         }
         this.findSecondLargest(node.right, result);
         if(++result.count === 2) {
            result.secondLargest = node.data;
         }
         return result;
      }
  
      findSecondSallest(node = this.root, result = { count: 0, data: null }) {
         if(node === null) {
            return
         }
  
         this.findSecondSallest(node.left, result);
         if(++result.count === 2) {
             result.data = node.data
         }
  
         return result;
      }
  
      isBstHelper(node, min = -Infinity, max = Infinity) {
          if(node === null) {
            return true;
          }
          if(node.data < min || node.data > max) {
             return false;
          }
         return this.isBstHelper(node.left, min, node.data) && this.isBstHelper(node.right, node.data, max);
      }
  
      maxDepth() {
        return this.maxDepthHelper(this.root);
      }
      maxDepthHelper(node) {
        if(node === null) {
          return 0;
        }
        return Math.max(1 + this.maxDepthHelper(node.left), 1 + this.maxDepthHelper(node.right));
      }
  
      iterrativeSearch(target) {
        let node = this.root;
        while(node !== null) {
          console.log('hi')
          if(node.data === target) {
            return true;
          }
          if(target < node.data) {
            node = node.left;
          } else if(target > node.data) {
            node = node.right;
          }
        }
        return false;
      }
    
      findClosestValue(target) {
        let node = this.root;
        let closest = node.data;
        while(node != null) {
          if(Math.abs(target - closest) > Math.abs(target - node.data)) {
            closest = node.data;
          }
          if(target < node.data) {
             node = node.left;
          } else if(target > node.data) {
            node = node.right;
          } else {
            break;
          }
          console.log('k')
        }
        return closest;
      }
  }
  
  const bst = new BinarySearchTree();
  bst.insert(10);
  bst.insert(7);
  bst.insert(15);
  bst.insert(8);
  bst.insert(2);
  console.log(bst.contains(15));
  console.log(bst.inOrder());
  console.log(bst.postOrder());
  console.log(bst.isBst());
  console.log(bst.maxDepth());
  console.log(bst.findSecondLargest());
  console.log(bst.findSecondSallest());
  console.log(bst.iterrativeSearch(19));
  console.log(bst.findClosestValue(4));
  