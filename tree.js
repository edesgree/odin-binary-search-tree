import Node from './node.js';

class Tree {
  constructor(array) {
    this.sortedArray = [...new Set(array)].sort((a, b) => a - b);
    this.root = this.buildTree(array);
    this.length = 0;
  }

  buildTree(sortedArray) {
    if (sortedArray.length === 0) return null;

    //get middle of sortedArray and use it as value
    const middle = Math.floor(sortedArray.length / 2);
    const newNode = new Node(sortedArray[middle]);

    // determine left and right children with recursive
    const firstHalf = sortedArray.slice(0, middle);
    const secondHalf = sortedArray.slice(middle + 1);
    newNode.left = this.buildTree(firstHalf);
    newNode.right = this.buildTree(secondHalf);
    console.log('newNode', newNode);
    return newNode;
  }
  prettyPrint(node = this.root, prefix = '', isLeft = true) {
    if (node.right) {
      this.prettyPrint(
        node.right,
        `${prefix}${isLeft ? '|   ' : '    '}`,
        false
      );
    }
    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
    if (node.left) {
      this.prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '|   '}`, true);
    }
  }
}
export default Tree;
