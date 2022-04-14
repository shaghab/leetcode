// https://leetcode.com/problems/search-in-a-binary-search-tree/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
const searchBST = (root, val) => {
  if (root === null) return null;
  if (root.val === val) return root;

  let ans = null;
  //if (root.left !== null)
  ans = searchBST(root.left, val);
  if (ans !== null) return ans;

  //if (root.right !== null)
  ans = searchBST(root.right, val);
  if (ans !== null) return ans;

  return null;
};

const searchBST_loop = (root, val) => {
  if (root === null) return null;
  if (root.val === val) return root;

  let ans = null;

  let nodes = [];
  if (root.left !== null) nodes.push(root.left);
  if (root.right !== null) nodes.push(root.right);

  while (nodes.length > 0) {
    let node = nodes.pop();
    if (node.val === val) return node;

    if (node.left !== null) nodes.push(node.left);
    if (node.right !== null) nodes.push(node.right);
  }

  return null;
};
