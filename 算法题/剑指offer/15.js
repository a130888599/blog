/**
 * 题目：二进制中1的个数
 * 
 * 这道题考察的是二进制和位运算
 * 1. 判断右边是不是1，可以使用
 * 2. 右移，将已经判断过的1去除
 * 
 * 值得注意的是，如果输入是负数时，会陷入死循环
 * 解决方法是使用 n & (n - 1)，可以直接把n最右边的1变成0
 * 
 */


function NumberOf1(n) {
  let res = 0;
  while(n) {
    n &= n - 1
    res++
  }
  return res
}

const res = NumberOf1(9)
console.log('res :>> ', res);