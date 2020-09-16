// 数组中重复的数字
/*
  我们新建一个数组来存放已经访问过的数字，当该数字再次出现时，它所存放的位置上必然已经有数字了，因此可以找到重复数字
*/

function findRepeatNumber(nums) {
  let res = []
  for (let i = 0; i < nums.length; i++) {
    const curNum = nums[i]
    if (res[curNum] === undefined) {
      res[curNum] = curNum
    } else {
      return curNum
    }
  }
}

// 二分法，根据抽屉原理，必然