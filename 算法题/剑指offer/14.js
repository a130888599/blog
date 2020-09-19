/**
 * 题目：剪绳子
 * 
 * 这道题共有两种解法：动态规划和贪心算法
 * 
 * 动态规划：
 *  动态规划的思想是：把大的问题分解成小的问题，再将小问题的答案保存下来，作为大问题的基础
 *  即：从上到下分析问题，从下到上求解问题
 *  
 *  这里就可以把f(n)分解成 f(i) * f(n-i)，直到i最小，然后把f(i)的最优解保存下来，计算f(n)
 *  的时候就可以直接用了
 * 
 * 贪心算法：
 *  这里涉及到一个数学推导。
 *    切分规则：当 n>=5 时，可以这样切分
 *       1. 最优为3，把绳子尽可能切为多个长度为3的片段，留下的最后一段绳子的长度可能为0，1，2三种情况
 *       2. 次优为2，若最后一段绳子长度为2，则保留，不再拆分成1+1
 *       3. 最差为1，若最后一段绳子长度为1，则应该把 3+1 改为 2+2，因为 3*1 < 2*2
 *    当 n < 5 时
 *    n = 2, res = 1 * 1 = 1
 *    n = 3, res = 2 * 1 = 2
 *    n = 4, res = 2 * 2 = 4
 */

// 贪心
function cuttingRope(n) {
  if (n <= 3)
    return 1 * (n - 1)
  let res = 1
  if (n % 3 === 1) {
    res = 4
    n -= 4
  } else if(n % 3 === 2) {
    res = 2
    n -= 2
  }

  while(n) {
    res *= 3
    n -= 3
  }
  return res
}

// 递归
function _cuttingRope(n) {
  if (n === 2) return 1
  if (n === 3) return 2
  // 这里是 n>=4 的情况，4可以分很多段，比如 1+3 2+2，所以dp[4] = dp[2] * dp[2]，因此必须初始化dp[2] = 2
  // 同理，初始化dp[1] = 1, dp[3] = 3
  let dp = [0, 1, 2, 3]
  for(let i = 4; i <= n; i++) {
    let maxValue = 0
    for(let j = 1; j <= Math.floor(i/2); j++) {
      maxValue = Math.max(maxValue, dp[j] * dp[i - j])
    }
    dp[i] = maxValue
  }
  return dp[n]
}

const res = _cuttingRope(8)
console.log('res :>> ', res);