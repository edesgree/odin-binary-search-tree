import Tree from './tree.js';
const randomArray = (size) => {
  return Array.from({ length: size }, () => Math.floor(Math.random() * 100));
};
var arr = randomArray(10);

const myTree = new Tree(arr);
console.log('myTree', myTree);
myTree.prettyPrint();

//console.log('mylist', myTree);
