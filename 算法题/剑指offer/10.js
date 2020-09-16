// 斐波那契数列

// 思路一：递归（效率极低）
function fib(n) {
  if (n <= 0)
    return 0;
  if (n === 1)
    return 1;
  return fib(n - 1) + fib(n - 2);
}

// 思路二：循环计算方法
function _fib(n) {
  if (n <= 1)
    return n
  let [a, b, c] = [1, 1, 0]
  while (n--) {
    a = b
    b = c
    c = (a + b)
  }
  return c;
}