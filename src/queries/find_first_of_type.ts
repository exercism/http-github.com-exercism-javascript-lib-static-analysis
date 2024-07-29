import type { TSESTree } from '@typescript-eslint/typescript-estree'
import { findFirst } from './find_first'

type Node = TSESTree.Node

export function findFirstOfType<T extends Node = Node>(
  root: Node,
  type: Node['type']
): T | undefined {
  const isOfType = (node: Node): node is T => node.type === type
  return findFirst(root, isOfType)
}
