import { creatList } from '../createList'
// 从头到尾打印链表

/**
 * 最先想到的方法是：将链表反转，再遍历，但这会改变原有链表，并且需要两次遍历
 * 如何做到一次遍历，且不修改原链表呢？
 * 
 * 答案是利用栈
 * 遍历的时候，将数据放入栈中，遍历结束再依次将数据取出。
 * 
 * 既然想到了栈，那就也应该想一下递归。
 * 我们先递归到最后一个节点，再输出该节点自身
 * 
 */

// 利用JS原生方法
function reversePrint1(head) {
  let res = []
  let cur = head
  while (cur) {
    res.unshift(cur.val)
    cur = cur.next
  }
  return res
}

// 利用栈
function reversePrint2(head) {
  let stack = []
  let cur = head
  while (cur) {
    stack.push(cur.val)
    cur = cur.next
  }
  // TODO：未完成
}

// 递归法
function reversePrint3(head) {
  let res = []
  dfs(head, res)
  return res
}
function dfs(head, arr) {
  if (!head)
    return;
  if (head.next)
    dfs(head.next, arr)
  arr.push(head.val)
}

const arr = creatList([1, 2, 3, 4])
console.log('arr :>> ', arr);