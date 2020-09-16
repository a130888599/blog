class Node {
  constructor(value, next) {
    this.val = value
    this.next = next
  }
}

/**
 * 创建链表
 *
 * @param {*} input 节点数组
 */
export function createList(input) {
  let [pre, cur, size] = [null, null, input.length]
  while (size--) {
    pre = new Node(input[size], cur)
    cur = pre
  }
  return pre
}