// 思路1：使用二分法。我们可以看做是已经排好序的两段序列，因此只需要判断出中间位置即可找到最小值
function findMin(nums) {
    let n = nums.length - 1
    if(n < 0)
        return -1
    // 去除中间相等的元素
    while(n > 0 && nums[n] === nums[0])
        n--
    if(nums[n] >= nums[0])
        return nums[0]
    let [l, r] = [0, n]
    while(l < r) {
        let mid = Math.floor((l + r) / 2)
        if(nums[mid] < nums[0])
            r = mid
        else 
            l = mid + 1
    }
    return nums[r];
}
findMin([3,4,5,1,2])

// 思路2：使用ES6提供的语法
function _findMin(nums) {
    return Math.min(...nums)
}