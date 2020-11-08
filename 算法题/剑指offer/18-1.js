/**
 * 题目：删除链表的节点
 *    在链表中删除一个节点的两种方法：
 *    1. 将节点i的前一个节点连到节点i的后一个节点
 *    2. 将节点i的后一个节点复制到节点i上，再删除后一个节点
 * 
 *    这道题的边界的条件需要注意：
 *      如果删除的是头节点
 *      如果只有一个节点
 *      如果删除的是最后一个节点
 */

class ListNode {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

// 解法一
function deleteNode(head, val) {
  let pre = new ListNode(1)
  pre.next = head
  while(pre.next.val !== val)
    pre = pre.next
  pre.next = pre.next.next
  return head
}

// 解法二
function _deleteNode(node) {
  if (!node.next) // 如果是最后一个节点，则直接删除即可
    delete node
  let nx = node.next
  node.val = nx.val
  node.next = nx.next
  delete nx
}