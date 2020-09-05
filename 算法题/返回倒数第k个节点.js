/**
 * 面试题 02.02 返回倒数第 k 个节点
 * https: //leetcode-cn.com/problems/kth-node-from-end-of-list-lcci/
 */

// 使用快慢指针法
function kthToLast(head, k) {
  if (!head) return null

  let [fast, slow] = [head, head]
  while (k--) {
    fast = fast.next
  }
  while (fast) {
    fast = fast.next
    slow = slow.next
  }
  return slow.val
}