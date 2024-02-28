import { BNodeNum } from "../common/binary-search-tree";

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

function postOrder(node: BNodeNum | null): number[] {
  return [42];
}

export { preOrder, postOrder };