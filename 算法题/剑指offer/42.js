/**
 * 题目：栈的压入、弹出序列
 * 
 * 1,2,3,4,5 => 4,5,3,2,1
 * 
 * 操作1：将下一个数压入栈中
 * 操作2：将当前栈顶元素弹出
 * 
 * 判断当前栈顶元素是否和下一个要输出的数是一样的
 * 情况1：一样 => 必然会将当前的栈顶元素弹出
 * 情况2：不一样 => 必然会将输入序列的下一个元素加入栈中
 */

function isPopOrder(pushV, popV) {
  if(pushV.length !== popV.length) return false
  let stk = []
  let k = 0
  for(let item of pushV) {
    stk.push(item)
    while(stk.length && stk[stk.length - 1] === popV[k]) {
      k++
      stk.pop()
    }
  }
  return stk.length === 0
}