/**
 * 题目：删除链表中的重复节点
 * 
 * 这道题的考点在于：头节点可能被删除，需要设置一个虚拟头节点
 */

function deleteDuplication(head) {
  let dummy = new ListNode(-1)
  dummy.next = head
  let p1 = dummy
  while(p1.next) {
    let p2 = p1.next
    while(p2 && p2.val === p1.next.val) p2 = p2.next

    if(p1.next.next === p2) p1 = p1.next
    else p1.next = p2
  }
  return dummy.next
}