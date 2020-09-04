/**
 * 1、两数之和
 * https: //leetcode-cn.com/problems/two-sum/
 */

// 使用哈希表的方法
function twoSum(nums, target) {
  const prevNums = {} // 保存出现过的数字，以及它的索引（数字：索引）
  for (let i = 0; i < nums.length; i++) {
    const curNum = nums[i]  // 当前元素
    const targetNum = target - curNum // 满足要求的目标元素
    const targetNumIndex = prevNums[targetNum]  // 满足要求的目标元素的索引
    if (targetNumIndex) { // 如果在哈希表中存在
      return [targetNumIndex, i]  // 直接返回[目标元素索引，当前索引]，并且目标元素索引必定比当前索引大
    }
    prevNums[curNum] = i   // 如果没有，则该值添加到
  }
}