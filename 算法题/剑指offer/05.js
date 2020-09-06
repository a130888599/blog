// 替换空格

/*
  由于是考察字符串的替换功能，因此尽量不要使用JS自带的功能函数

  这道题的难点在于：一个空格要换成三个字符，相当于增长了字符串，这意味着我们需要将原来的字符串后移
  如何减少移动次数，就是问题的难点

  我们先进行一次遍历，找出一共有多少个空格，并得到字符串的长度
  然后使用指针p1, p2，指向原字符串的末端和伸长后字符串的末端
  然后指针p1, p2不断向前，并将p1的字符复制到p2中
  遇到空格时，p1前移1格，p2前移3格

  遇到的坑：
    刚开始的时候，我替换的方式是利用p1，遇到空格就将s[p1], s[p1 + 1], s[p1 + 2]修改成 %20
    然后就发现有bug，直接修改p1的话，后面p2上来时会覆盖掉已经修改好的内容
    因此遇到空格应该修改p2
*/
function replaceSpace1(s) {
  if (!s.length)
    return s

  let arr = Array.from(s)
  let spaceNum = 0
  let len = 0
  while (len !== arr.length) {
    if (arr[len] === ' ')
      spaceNum++
    console.log(len);
    len++
  }
  let [p1, p2] = [len - 1, len - 1 + spaceNum * 2]
  while (p1 !== p2) {
    if (arr[p1] !== ' ') {
      arr[p2] = s[p1]
    }
    else {
      arr[p2 - 2] = '%'
      arr[p2 - 1] = '2'
      arr[p2] = '0'
      p2 -= 2
    }
    p1--;
    p2--;
  }
  return arr.join('')
}

// 利用了JS原生函数的方法，不推荐，使用了这个方法，这道题就失去了意义
function replaceSpace2(s) {
  while (s.includes(' ')) {
    s = s.replace(' ', '%20')
  }
  return s
}

const res = replaceSpace1("     ")
console.log('res :>> ', res);