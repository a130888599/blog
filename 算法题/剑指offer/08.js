// 给定一棵二叉树的其中一个节点，请找出中序遍历序列的下一个节点

// 如果当前节点有右儿子， 则右子树中最左侧的节点就是当前节点的后继。 比如F的后继是H；
// 如果当前节点没有右儿子， 则需要沿着father域一直向上找， 找到第一个是其father左儿子的节点， 该节点的father就是当前节点的后继。

function inorderSuccessor(p) {
  // 如果当前节点有右节点
  if (p.right) {
    p = p.right
    while (p.left)
      p = p.left
    return p
  }
  // 如果当前节点没有右节点，则向上寻找  
  while (p.father && p === p.father.right)
    p = p.father
  return p.father
}