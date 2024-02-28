import { TreeNodeNum } from "../common/tree";

/** dfsPreOrder(): Traverse from the invoking node using pre-order DFS.
 * Returns an array of visited nodes. */

function preOrder(node: TreeNodeNum | null): number[] {
  if (node === null) return [];

  const order = [node.val];

  for (const child of node.children) {
    order.push(...preOrder(child));
  }

  return order;
}


/** dfsPostOrder(): Traverse from the invoking node using post-order DFS.
 * Returns an array of visited nodes. */

function postOrder(node: TreeNodeNum | null): number[] {
  if (node === null) return [];

  const order = [];

  for (const child of node.children) {
    order.push(...postOrder(child));
  }
  order.push(node.val);

  return order;
}

export { preOrder, postOrder };