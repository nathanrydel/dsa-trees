import { BNodeNum } from "../common/bintree";

/** Minimum depth from node to an "incomplete node".
 *
 * An incomplete node is a node with 0 or 1 children (not 2).
 */

function minDepthToIncompleteNode(node: BNodeNum): number {
  if (node === null) return 0;
  if (node.lnode === null) return 1;
  if (node.rnode === null) return 1;

  debugger;

  let minDepth = 0;
  debugger;

  minDepth = (
    Math.min(
      minDepthToIncompleteNode(node.lnode),
      minDepthToIncompleteNode(node.rnode)) + 1
  );

  debugger;

  return minDepth;
}

export { minDepthToIncompleteNode };