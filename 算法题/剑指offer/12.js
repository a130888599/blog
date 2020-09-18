/**
 * 题目：矩阵中的路径
 * 
 *  这道题是一道经典的回溯法的题目，也是一道经典的递归问题。
 *  1. 枚举起点
 *  2. 枚举方向
 */

function hasPath(matrix, str) {
    for(let i in matrix) {
        for(let j in matrix[i]) {
            if(dfs(matrix, str, 0, i, j))
                return true
        }
    }
    return false
}

function dfs(matrix, str, u, x, y) {
    if(u === str.length -1) return true
    if(matrix[x][y] != str[u]) return false

    let temp = matrix[x][y]
    matrix[x][y] = '*'
    let [dx, dy] = [[-1, 0, 1, 0], [0, 1, 0, -1]]
    for(let i = 0; i < 4; i++) {
        let [a, b] = [parseInt(x) + parseInt(dx[i]), parseInt(y) + parseInt(dy[i])]
        if(a >=0 && a < matrix.length && b >= 0 && b < matrix[a].length) {
            if(dfs(matrix, str, u + 1, a, b))
                return true
        }
    }
    matrix[x][y] = temp
    return false
}

const arr = [
    ["A","B","C","E"],
    ["S","F","C","S"],
    ["A","D","E","E"]
]
const res = hasPath(arr, 'BCCE')
console.log('res :>> ', res)