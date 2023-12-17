const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor(){
    this.bintree = null;
  }

  root() {
    this.bintree = null;
    if (!this.bintree) {
      return null;
    }
  }

  add(data) {
    this.bintree = addIn(this.bintree, data);

    function addIn(node, data) {
      if (!node) {
        return new Node(data);
      }
      if (node.data === data) {
        return node;
      }
      if (data < node.data) {
        node.left = addIn(node.left, data);
      } else {
        node.right = addIn(node.right, data);
      }
      return node;
    }
  }

  has(data) {
    return searchInto(this.bintree, data);

    function searchInto(node, data) {
      if (!node) {
        return false;
      }
      if (node.data == data) {
        return true;
      }
      return data < node.data ? searchInto(node.left, data) : searchInto(node.right, data);
    }
  }

  find(data) {
    this.bintree = findNode(this.bintree, data);
    
    function findNode(node, data) {
      if (!node) {
        return null;
      }
      if (data < node.data) {
      node.left = findNode(node.left, data);
      return node;
      } else if (data > node.data) {
      node.right = findNode(node.right, data);
      return node;
      }
      else {
        if (!node.left && !node.right) {
        return null;
        }
        if (!node.left) {
        node = node.right;
        return node;
        }
        if (!node.right) {
        node = node.left;
        return node;
        }
      let minRight = node.right;
      while (minRight.left) {
        minRight = minRight.left;
      }
      node.data = minRight.data;
      node.right = findNode(node.right, minRight.data);
      return node;
      }
    }
  }

  remove(data) {
    this.bintree = removeNode(this.bintree, data);

    function removeNode(node, data) {
      if (!node) {
        return null;
      }
      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }
        if (!node.left) {
          node = node.right;
          return node;
        }
        if (!node.right) {
          node = node.left;
          return node;
        }
        let minRight = node.right;
        while (minRight.left) {
          minRight = minRight.left;
        }
        node.data = minRight.data;
        node.right = removeNode(node.right, minRight.data);

        return node;
      }
    }
  }

  min() {
   if (!this.bintree) {
    return;
   }

   let minNode = this.bintree;

   while(minNode.left) {
    minNode = minNode.left;
   }
   return minNode.data;

  }

  max() {
    if (!this.bintree) {
      return;
     }
  
     let maxNode = this.bintree;
  
     while(maxNode.right) {
      maxNode = maxNode.right;
     }
     return maxNode.data;
  
  }
}

module.exports = {
  BinarySearchTree
};