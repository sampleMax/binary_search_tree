export class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

export class Tree {
  constructor(array) {
    // Step 1: sort & remove duplicates
    const sortedArray = [...new Set(array)].sort((a, b) => a - b);

    // Step 2: build tree
    this.root = this.buildTree(sortedArray);
  }

  // Step 3: recursively build a balanced BST
  buildTree(array) {
    if (array.length === 0) return null;

    const mid = Math.floor(array.length / 2);
    const root = new Node(array[mid]);

    root.left = this.buildTree(array.slice(0, mid));
    root.right = this.buildTree(array.slice(mid + 1));

    return root;
  }
  insert(value) {
    this.root = this._insertRec(this.root, value);
  }
  deleteItem(value) {
    this.root = this._deleteRec(this.root, value);
  }
  find(value) {
  return this._findRec(this.root, value);
}
  
  // ---------- Level Order ----------
  levelOrderForEach(callback) {
    if (typeof callback !== 'function')
      throw new Error('A callback function is required');

    const queue = [];
    if (this.root) queue.push(this.root);

    while (queue.length > 0) {
      const node = queue.shift();
      callback(node);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }

  // ---------- Depth-First Traversals ----------
  inOrderForEach(callback, node = this.root) {
    if (typeof callback !== 'function')
      throw new Error('A callback function is required');
    if (node === null) return;
    this.inOrderForEach(callback, node.left);
    callback(node);
    this.inOrderForEach(callback, node.right);
  }

  preOrderForEach(callback, node = this.root) {
    if (typeof callback !== 'function')
      throw new Error('A callback function is required');
    if (node === null) return;
    callback(node);
    this.preOrderForEach(callback, node.left);
    this.preOrderForEach(callback, node.right);
  }

  postOrderForEach(callback, node = this.root) {
    if (typeof callback !== 'function')
      throw new Error('A callback function is required');
    if (node === null) return;
    this.postOrderForEach(callback, node.left);
    this.postOrderForEach(callback, node.right);
    callback(node);
  }

  // ---------- Height ----------
  height(value) {
    const node = this.find(value);
    if (!node) return null;
    return this._getHeight(node);
  }

  _getHeight(node) {
    if (node === null) return -1; // height in edges
    return 1 + Math.max(this._getHeight(node.left), this._getHeight(node.right));
  }

  // ---------- Depth ----------
  depth(value) {
    const node = this.find(value);
    if (!node) return null;

    let depth = 0;
    let current = this.root;
    while (current !== null) {
      if (value === current.data) return depth;
      current = value < current.data ? current.left : current.right;
      depth++;
    }
    return null;
  }

  // ---------- Balance Check ----------
  isBalanced(node = this.root) {
    if (node === null) return true;

    const leftHeight = this._getHeight(node.left);
    const rightHeight = this._getHeight(node.right);

    if (Math.abs(leftHeight - rightHeight) > 1) return false;
    return this.isBalanced(node.left) && this.isBalanced(node.right);
  }

  // ---------- Rebalance ----------
  rebalance() {
    const nodes = [];
    this.inOrderForEach(node => nodes.push(node.data));
    this.root = this.buildTree(nodes);
  }


_findRec(root, value) {
  if (root === null) return null;          // Not found

  if (value === root.data) return root;    // Found!
  else if (value < root.data) return this._findRec(root.left, value);
  else return this._findRec(root.right, value);
}
  prettyPrint(node = this.root, prefix = '', isLeft = true) {
    if (node === null) return;
    if (node.right !== null)
      this.prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
    if (node.left !== null)
      this.prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
  }
  _insertRec(root, value) {
    if (root === null) return new Node(value);

    if (value < root.data) root.left = this._insertRec(root.left, value);
    else if (value > root.data) root.right = this._insertRec(root.right, value);
    // ignore duplicates

    return root;
  }
  _deleteRec(root, value) {
    if (root === null) return root;

    if (value < root.data) {
      root.left = this._deleteRec(root.left, value);
    } else if (value > root.data) {
      root.right = this._deleteRec(root.right, value);
    } else {
      // Node found
      if (root.left === null) return root.right;
      if (root.right === null) return root.left;

      // Two children → get inorder successor
      const succ = this._getSuccessor(root);
      root.data = succ.data;
      root.right = this._deleteRec(root.right, succ.data);
    }

    return root;
  }
  _getSuccessor(node) {
    let curr = node.right;
    while (curr && curr.left !== null) curr = curr.left;
    return curr;
  }

}