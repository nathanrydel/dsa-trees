import { BNodeNum } from "../common/bintree";

/** Minimum depth from node to an "incomplete node".
 *
 * An incomplete node is a node with 0 or 1 children (not 2).
 */

function minDepthToIncompleteNode(node: BNodeNum): number {
  if(node.lnode === null) return 0;
  if(node.rnode === null) return 0;

  let minLeftNodeDepth = 0;
  let minRightNodeDepth = 0;


  minLeftNodeDepth =
    (Math.max(minDepthToIncompleteNode(node.lnode), minLeftNodeDepth));
    debugger;
  minRightNodeDepth =
    (Math.max(minDepthToIncompleteNode(node.rnode), minRightNodeDepth));
    debugger;

  return Math.min(minLeftNodeDepth, minRightNodeDepth) + 1;

}

export { minDepthToIncompleteNode };