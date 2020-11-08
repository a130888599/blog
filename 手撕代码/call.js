/**
 * call的模拟实现
 * 
 *  call的功能
 *    1. 修改this指向
 *    2. 执行函数
 *    3. 传入不定参数
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
Function.prototype.call2 = function(context, ...args) {
  context = context || window // 防止传入为null
  context.fn = this
  const result = context.fn(...args)
  delete context.fn
  return result
}

// ES5版
Function.prototype.call3 = function(context) {
  context = context || window
  context.fn = this

  var args = []
  for(var i = 1; i < arguments.length; i++) {
    args.push('arguments[' + i + ']')
  }
  var result = eval('contenx.fn(' + args + ')')
  delete context.fn
  return result
}


const foo = {
  value: 1000
}
const bar = function(args) {
  console.log(this.value);
  console.log(args);
  return {
    value: this.value,
    name: args
  }
}
const res = bar.call3(foo, 1, 2,3,4)
console.log('res :>> ', res);
