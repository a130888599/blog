/**
 * apply的模拟实现
 * 
 *  apply的功能
 *    1. 修改this指向
 *    2. 执行函数
 *    3. 传入不定参数，以数组的形式
 * 
 *  边界条件
 *    1. this为null时的处理
 *    2. 函数有返回结果
 * 
 *  修改this的方法：
 *    1. 将函数设置为对象的属性
 *    2. 执行函数
 *    3. 删除函数
 */

// ES6版
Function.prototype.apply2 = function(context, args) {
  context = context || window
  context.fn = this
  const result = context.fn(...args)
  delete context.fn
  return result
}

// ES5版
Function.prototype.apply3 = function(context, arr) {
  context = context || window
  context.fn = this
  var args = []
  for(var i = 0; i < arr.length; i++) {
    args.push('arr[' + i + ']')
  }
  result = eval('context.fn(' + args + ')')
  delete context.fn
  return result
}
