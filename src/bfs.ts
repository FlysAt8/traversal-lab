import { TreeNode } from "./tree";

export function bfs<T>(root: TreeNode<T> | null): T[] {
    if (root === null) return [];

    const result: T[] = [];
    const queue: TreeNode<T>[] = [root];
    let head = 0;

    while (head < queue.length) {
        const node = queue[head++];
        result.push(node.value);

        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
    }

    return result;
}