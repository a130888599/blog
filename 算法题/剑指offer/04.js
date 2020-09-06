// 二维数组中的查找

/*
  二维数组是 从左到右递增，从上到下递增的，这是一个解题的突破口

  首先我尝试的是从左上角开始，遇到比target大的，就退回来，然后发现不行。
  因为当前行的第一个数比target小，但是第二个数比target大，并且target在更上一层

  正确的做法是从右上角出发，这样它的x = 0，y = 最大，然后逐渐收敛，遇到比target大的就让y--，遇到比target小的就x++，即可找到target
*/

function findNumberIn2DArray(matrix, target) {
  if (!matrix || !matrix.length || !matrix[0].length)
    return false
  
  let [x, y] = [0, matrix[0].length - 1]
  while (x <= matrix.length - 1 && y >= 0) {
    if (matrix[x][y] === target) {
      return true
    } else if (matrix[x][y] > target) {
      y--
    } else {
      x++
    }
  }
  return false
}


// 测试用例
const matrix = [
  [1, 4, 7, 11, 15],
  [2, 5, 8, 12, 19],
  [3, 6, 9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
]

const a = [[-5]]

const res = findNumberIn2DArray(a, -5)
console.log('res :>> ', res);