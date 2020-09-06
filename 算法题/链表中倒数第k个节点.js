/**
 * 剑指 Offer 22 链表中倒数第k个节点
 * https: //leetcode-cn.com/problems/lian-biao-zhong-dao-shu-di-kge-jie-dian-lcof/
 */

// 快慢指针法
function getKthFromEnd(head, k) {
  let [fast, slow] = [head, head]
  while (k--) {
    fast = fast.next
  }
  while (fast) {
    fast = fast.next
    slow = slow.next
  }
  return slow
}