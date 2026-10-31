import { TreeNode } from "./tree";

export function dfsPreorder<T>(root: TreeNode<T> | null): T[] {
    if (root === null) return [];

    const result: T[] = [];
    const stack: TreeNode<T>[] = [root];

    while (stack.length > 0) {
        const node = stack.pop()!;
        result.push(node.value);

        if (node.right) stack.push(node.right);
        if (node.left) stack.push(node.left);
    }

    return result;
}

export function dfsInorder<T>(root: TreeNode<T> | null): T[] {
    const result: T[] = [];
    const stack: TreeNode<T>[] = [];
    let current: TreeNode<T> | null = root;

    while (current !== null || stack.length > 0) {
        while (current !== null) {
            stack.push(current);
            current = current.left;
        }

        const node = stack.pop()!;
        result.push(node.value);
        current = node.right;
    }

    return result;
}

export function dfsPostorder<T>(root: TreeNode<T> | null): T[] {
    if (root === null) return [];

    const stack1: TreeNode<T>[] = [root];
    const stack2: TreeNode<T>[] = [];

    while (stack1.length > 0) {
        const node = stack1.pop()!;
        stack2.push(node);

        if (node.left) stack1.push(node.left);
        if (node.right) stack1.push(node.right);
    }

    const result: T[] = [];
    while (stack2.length > 0) {
        result.push(stack2.pop()!.value);
    }

    return result;
}