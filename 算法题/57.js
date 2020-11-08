var insert = function(intervals, newInterval) {
  intervals.push(newInterval)
  let i = 0;
  let res = [];
  let len = intervals.length;
  if (len == 1) return intervals;
  intervals.sort((a, b) => a[0] - b[0])
  while (i < len) {
    let l = intervals[i][0]
    let r = intervals[i][1]
    while (i < len - 1 && r >= intervals[i + 1][0]) {
      i++
      r = Math.max(r, intervals[i][1])
    }
    res.push([l, r])
    i++
  }
  return res
}

intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]]
newInterval = [4,8]
const res = insert(intervals, newInterval)
console.log(res);