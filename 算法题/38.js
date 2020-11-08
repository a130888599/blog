var permutation = function(s) {
  const res = new Set()
  const visit = {}
  s = Array.from(s)
  function dfs (path) {
      if(path.length === s.length) {
        res.add(path)
      }
      for(let i in s) {
        if(visit[i]) continue
        visit[i] = true
        dfs(path + s[i])
        visit[i] = false
      }
  }
  dfs('')
  return res
};

const res = permutation('abc')
console.log(res);