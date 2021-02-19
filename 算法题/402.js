const input = '1432219'

var removeKdigits = function(num, k) {
  if(num.length === k) return 0
  
  const nums = Array.from(num)
  for(let i = 1; i < nums.length; i++) {
    if(nums[i] < nums[i - 1] && k) {
      nums.splice(i - 1, 1)
      k--
      i--
    }
  }
  console.log(nums);
  if(k) nums.splice(-k, k)
  console.log(nums);
  let index = 0
  while(nums[index] == 0) {
    index++
  }
  nums.splice(0, index)
  return nums.join('') || "0"
};

const res = removeKdigits("1111111", 3)
console.log(res);
