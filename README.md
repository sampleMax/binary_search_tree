Binary Search Tree (BST) Project

This project implements a Binary Search Tree (BST) in JavaScript with common operations and traversal methods. It also demonstrates how to use the tree in a separate main.js file, with the ability to watch changes using nodemon.

Files
bst.js – Contains the Node and Tree classes with all BST functionality.

main.js – Demonstrates usage of the BST, including insertion, deletion, traversals, and balancing.

Features:-

BST Operations
Insert – Add nodes to the tree.
Delete – Remove nodes from the tree.
Find – Search for a node with a given value.
Height – Calculate the height of a node.
Depth – Calculate the depth of a node.
IsBalanced – Check if the tree is balanced.
Rebalance – Rebalance the tree if it becomes unbalanced.

Traversals:-

Each traversal can be used with a callback or to generate an array of node values:
Level Order (Breadth-first)
Preorder (Root → Left → Right)
Inorder (Left → Root → Right)
Postorder (Left → Right → Root)

Utility
prettyPrint – Visually prints the tree structure in the console.