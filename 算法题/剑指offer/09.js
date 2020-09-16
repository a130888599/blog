// 用两个栈实现一个队列

// 思路：一个主栈（用来保存数据），一个辅助栈（用来缓存数据）
// 输入时，直接压入主栈，输出时，先将主栈元素全部弹出，压入辅助栈，再取出第一个，再将辅助栈的元素全部压回主栈

var CQueue = function () {
  this.in = []
  this.out = []
};

/** 
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function (value) {
  while (this.out.length) {
    this.in.push(this.out.pop())
  }
  this.in.push(value)
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function () {
  while (this.in.length) {
    this.out.push(this.in.pop())
  }
  if (!this.out.length) {
    return -1
  }
  return this.out.pop()
};