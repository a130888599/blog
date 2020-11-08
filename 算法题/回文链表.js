let pre = null

class ListNode {
  constructor(val, next) {
    this.val = val
    this.next = next
  }
}

function createList(arr) {
  const dummy = new ListNode(null, null)
  let cur = dummy
  arr.forEach((item, index) => {
    const node = new ListNode(item, null)
    cur.next = node
    cur = cur.next
  })
  return dummy.next
}

function showList(head) {
  while(head) {
    console.log(head.val);
    head = head.next
  }
}

function isPalindrome(head) {
  pre = head
  return checkIsPalindrome(head)
}

function checkIsPalindrome(cur) {
  if(cur) {
    if(!checkIsPalindrome(cur.next)) return false
    if(cur.val !== pre.val) return false
    pre = pre.next
  }
  return true
}

const head = createList([1,2,3,3,2,1])

console.log(isPalindrome(head))