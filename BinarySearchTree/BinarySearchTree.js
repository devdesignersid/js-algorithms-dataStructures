/* Binary Search Tree Implementation in Javascript */

class BinarySearchTreeNode {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

module.exports = class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // Inserting a node into the BinarySearchTree.
  insert = (value, currentNode = this.root) => {
    if (value === undefined)
      throw Error("(value) argument shouldn't be undefined!");
    const newNode = new BinarySearchTreeNode(value);

    if (this.root === null) {
      this.root = newNode;
    } else {
      if (currentNode.value > value) {
        if (currentNode.left === null) {
          currentNode.left = newNode;
        } else {
          currentNode = currentNode.left;
          this.insert(value, currentNode);
        }
      }
      if (currentNode.value < value) {
        if (currentNode.right === null) {
          currentNode.right = newNode;
        } else {
          urrentNode = currentNode.right;
          this.insert(value, currentNode);
        }
      }
    }
    return this;
  };

  // Looking up a node in the BinarySearchTree.
  lookup = (value, currentNode = this.root) => {
    let nodeFound = null;
    if (currentNode === null) return null;
    if (currentNode.value === value) return currentNode;
    if (currentNode.value > value) {
      currentNode = currentNode.left;
      nodeFound = this.lookup(value, currentNode);
    }
    if (currentNode.value < value) {
      currentNode = currentNode.right;
      nodeFound = this.lookup(value, currentNode);
    }
    return nodeFound;
  };

  // Removing a node from the BinarySearchTree.
  // Returns the address of root of the modified sub-tree.
  remove = (value, currentNode = this.root) => {
    if (currentNode === null) return currentNode;

    if (value < currentNode.value) {
      currentNode.left = this.remove(value, currentNode.left);
      return currentNode;
    }

    if (value > currentNode.value) {
      currentNode.right = this.remove(value, currentNode.right);
      return currentNode;
    }
    if (value === currentNode.value) {
      // case 1: No child
      if (currentNode.left === null && currentNode.right === null) {
        currentNode = null;
        return currentNode;
      }

      // case 2: One child
      if (currentNode.left === null) {
        currentNode = currentNode.right;
        return currentNode;
      }
      if (currentNode.right === null) {
        currentNode = currentNode.left;
        return currentNode;
      }

      // case 3: 2 children
      if (currentNode.left !== null && currentNode.right !== null) {
        let temp = this.findMinNode(currentNode.right);
        currentNode.value = temp.value;
        currentNode.right = this.remove(temp.value, currentNode.right);
        return currentNode;
      }
    }
  };

  // Binary Tree in-order traversal.
  // Ascending order.
  inOrder = () => {
    const result = new Array();
    const traverseInOrder = (currentNode) => {
      currentNode.left && traverseInOrder(currentNode.left);
      result.push(currentNode.value);
      currentNode.right && traverseInOrder(currentNode.right);
    };

    if (this.root === null) {
      return null;
    } else {
      traverseInOrder(this.root);
      return result;
    }
  };

  // Binary Search Tree pre-order traversal
  // priority for the parent nodes.
  preOrder = () => {
    let result = new Array();
    const traversePreOrder = (currentNode) => {
      result.push(currentNode.value);
      currentNode.left && traversePreOrder(currentNode.left);
      currentNode.right && traversePreOrder(currentNode.right);
    };

    if (this.root === null) {
      return null;
    } else {
      traversePreOrder(this.root);
      return result;
    }
  };

  // Binary Search Tree post-order traversal
  // priority for the child nodes.
  postOrder = () => {
    const result = new Array();
    const traversePostOrder = (currentNode) => {
      currentNode.left && traversePostOrder(currentNode.left);
      currentNode.right && traversePostOrder(currentNode.right);
      result.push(currentNode.value);
    };

    if (this.root === null) {
      return null;
    } else {
      traversePostOrder(this.root);
      return result;
    }
  };

  // returns the minimum node in the tree.
  findMinNode = (currentNode = this.root) => {
    if (currentNode.left === null) return currentNode;
    let minNode = this.findMinNode(currentNode.left);
    return minNode;
  };

  findHeight = (currentNode = this.root) => {
    if (currentNode === null) return 0;
    return (
      1 +
      Math.max(
        this.findHeight(currentNode.left),
        this.findHeight(currentNode.right)
      )
    );
  };

  prettyPrint = (currentNode = this.root) => {
    let height = this.findHeight(currentNode);
    let noOfNodes = Math.pow(2, height) - 1;
    let result = [];

    for (let i = 0; i < height; i++) {
      result.push([]);
      for (let j = 0; j < noOfNodes; j++) {
        result[result.length - 1].push("");
      }
    }

    const fill = (
      currentNode,
      start = 0,
      end = result[0].length - 1,
      row = 0
    ) => {
      if (!currentNode) return;
      let column = Math.floor((start + end) / 2);
      result[row][column] = currentNode.value.toString();

      if (currentNode.left) {
        fill(currentNode.left, start, column - 1, row + 1);
      }

      if (currentNode.right) {
        fill(currentNode.right, column + 1, end, row + 1);
      }
    };

    fill(currentNode);

    result.map((level) => {
      let nodes = "";
      level.map((value, index) => {
        nodes = nodes + " " + value;
        if (index === level.length - 1) {
          console.log(nodes);
        }
      });
      console.log("\n");
    });
  };

  invert = (currentNode = this.root) => {
    if (currentNode.left === null && currentNode.right === null)
      return currentNode;

    let leftNode = currentNode.left && this.invert(currentNode.left);
    let rightNode = currentNode.right && this.invert(currentNode.right);
    currentNode.left = rightNode;
    currentNode.right = leftNode;
    return currentNode;
  };
};
