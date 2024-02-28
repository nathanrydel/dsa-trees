import { TreeNodeNum } from "../common/tree";

/** Get maximum depth from node.
 *
 * Maximum depth: length of longest path from node to a leaf.
 **/

function maxDepth(node: TreeNodeNum | null): number {
  let maxNodeDepth = 0;
  if(node === null) return 0;
  for(const child of node.children){
    maxNodeDepth = Math.max(maxDepth(child), maxNodeDepth);
  }

  return maxNodeDepth + 1;
}

export { maxDepth };
