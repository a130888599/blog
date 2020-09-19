/**
 * 题目：数值的整数次方
 * 
 * 这道题的难点在于：如果输入的是负数或者零时，该如何处理
 * 
 * 如果是负数时，需要将指数取绝对值，然后结果取倒数
 * 
 * 快速幂算法
 *  顾名思义，该算法可以快速求幂，这是利用了一个特质实现的
 *  比如我们要求3的100次幂，
 *    3^100 = 3^50 * 3^50 (偶数幂)
 *    3^50 = 3^25 * 3^25  (偶数幂)
 *    3^25 = 3^12 * 3^12 * 3  (奇数幂)
 *  可以得出规律，如果是偶数，则对半乘，如果是奇数，可以拎出来一个，再对半乘
 *  这样就可得到简单直接的算法了
 *  1. 判断幂是奇数还是偶数，若是奇数，则先让 res *= exponent，若是偶数，则让 底数直接相乘 base *= base
 */

function Power(base, exponent) {
  if(base === 0) return 0
  if(exponent === 0) return 1
  let isNegative = false
  let res = 1
  if(exponent < 0) {
    exponent = -exponent
    isNegative = true
  }
  for(let i = 0; i < exponent; i++) {
    res *= base
  }
  if(isNegative)
    return 1 / res
  return res

}

// 快速幂
function _Power(base, exponent) {
  let is_minus = exponent < 0
  if(is_minus) exponent = -exponent
  let res = 1
  for(let k = exponent; k; k = Math.floor(k / 2)) {
    if(k & 1) res *= base
    base *= base
    console.log('k :>> ', k);
  }
  return is_minus ? 1/res : res
}

const res = _Power(1.00000001, 999999997)
// const res = _Power(10, 6)
console.log('res :>> ', res);