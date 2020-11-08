/**
 * 题目：打印1到最大的n位数
 * 
 * 这道题有三个考点：
 * 1. 如果输入的n非常大时，需要考虑大数问题 -> 将数字存储在字符串上
 * 2. 如何高效地判断是否到了最大的n位数 -> 第一个字符是否产生进位
 * 3. 如何打印出符合日常习惯的数字 -> 碰到第一个非0字符才开始打印
 * 
 * 解法1：字符串模拟数字
 * 解法2：数字排列
 */

// 数字排列
function printNumbers(n) {
  let number = new Array(n + 1)
  number[n] = '\0'
  for(let i = 0; i < 10; i++) {
    
  }
}
const res = printNumbers(10)
console.log('res :>> ', res);