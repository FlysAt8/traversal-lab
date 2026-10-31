import { TreeNode } from "./tree";
import { bfs } from "./bfs";
import { dfsPreorder, dfsInorder, dfsPostorder } from "./dfs";

//         A
//        / \
//       B   C
//      / \   \
//     D   E   F

const root = new TreeNode("A");
root.left = new TreeNode("B");
root.right = new TreeNode("C");
root.left.left = new TreeNode("D");
root.left.right = new TreeNode("E");
root.right.right = new TreeNode("F");

console.log("Дерево:");
console.log("        A");
console.log("       / \\");
console.log("      B   C");
console.log("     / \\   \\");
console.log("    D   E   F");
console.log();

console.log("BFS:          ", bfs(root).join(" "));
console.log("DFS Preorder: ", dfsPreorder(root).join(" "));
console.log("DFS Inorder:  ", dfsInorder(root).join(" "));
console.log("DFS Postorder:", dfsPostorder(root).join(" "));