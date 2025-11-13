import {Tree,Node} from './bst.js'
function randomArray(size){
const arr = Array.from({ length: size }, () => Math.floor(Math.random() * 100));
return arr;
}
let arr=randomArray(100);
const tree=new Tree(arr);
tree.prettyPrint();
console.log(tree.isBalanced());
const levelOrderArr1 = [];
tree.levelOrderForEach(node => levelOrderArr1.push(node.data));
console.log('Level Order:', levelOrderArr1);

// Preorder
const preOrderArr1 = [];
tree.preOrderForEach(node => preOrderArr1.push(node.data));
console.log('Preorder:', preOrderArr1);

// Postorder
const postOrderArr1 = [];
tree.postOrderForEach(node => postOrderArr1.push(node.data));
console.log('Postorder:', postOrderArr1);

// Inorder
const inOrderArr1 = [];
tree.inOrderForEach(node => inOrderArr1.push(node.data));
console.log('Inorder:', inOrderArr1);

tree.insert(101);
tree.insert(450);
tree.insert(324);
console.log(tree.isBalanced())
tree.rebalance();
console.log(tree.isBalanced())
// Level Order
const levelOrderArr = [];
tree.levelOrderForEach(node => levelOrderArr.push(node.data));
console.log('Level Order:', levelOrderArr);

// Preorder
const preOrderArr = [];
tree.preOrderForEach(node => preOrderArr.push(node.data));
console.log('Preorder:', preOrderArr);

// Postorder
const postOrderArr = [];
tree.postOrderForEach(node => postOrderArr.push(node.data));
console.log('Postorder:', postOrderArr);

// Inorder
const inOrderArr = [];
tree.inOrderForEach(node => inOrderArr.push(node.data));
console.log('Inorder:', inOrderArr);
