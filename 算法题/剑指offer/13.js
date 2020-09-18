/**
 * 题目：机器人的运动范围
 * 
 * 这道题是宽度搜索问题。
 * 机器人从(0, 0)开始移动，然后枚举四个方向，利用回溯进行判断
 * 
 * 需要注意的是，进入下个坐标前先判断能否进入
 */

function movingCount(k, m, n) {
    let res = 0;
    if(!m || !n) return res;

    let flag = []
    for(let i = 0; i < m; i++) {
        let arr = []
        for(let j = 0; j < n; j++) {
            arr[j] = false
        }
        flag.push(arr)
    }

    let queue = [[0, 0]]
    let d = [[-1, 0], [0, 1], [1, 0], [0, -1]]
    while(queue.length) {
        let [x, y] = queue.shift()
        if(parseInt(get_sum(x)) + parseInt(get_sum(y)) > k || flag[x][y])
                continue
        res++
        flag[x][y] = true
        for(let i = 0; i < 4; i++) {
            let [dx, dy] = d[i]
            let [a, b] = [x + dx, y + dy]
            if(a >=0 && a < m && b >= 0 && b < n) {
                queue.push([a, b])
            }
        }
    }
    return res
}

function get_sum(num) {
    let sum = 0
    while(num) {
        sum += num % 10
        num = Math.floor(num / 10)
    }
    return sum
}

const res = movingCount(9, 20,25)
console.log('res :>> ', res);