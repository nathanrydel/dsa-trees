import { TreeNodeNum } from "../common/tree";

/** Get maximum depth from node.
 *
 * Maximum depth: length of longest path from node to a leaf.
 **/

function maxDepth(node: TreeNodeNum | null): number {
  if (node === null) return 0;

  let maxNodeDepth = 0;
  for (const child of node.children) {
    const childDepth = maxDepth(child);
    maxNodeDepth = Math.max(childDepth, maxNodeDepth);
  }

  return maxNodeDepth + 1;
}

export { maxDepth };
