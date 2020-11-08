/**
 * bind的模拟实现
 *  bind() 方法会创建一个新函数，当这个新函数被调用时，bind() 的第一个参数将作为它运行时的 this，之后的一系列参数将会在传递的实参前作为它的参数。
 * 
 *  bind的功能
 *    1. 返回一个新函数，this 是它的第一个参数
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

// 返回函数 + 传入不定参数
Function.prototype.bind2 = function(context, ...args) {
  context = context || window
  const _this = this
  return function(...bindArgs) {
    return _this.apply(context, args.concat(bindArgs))
  }
}

// Object.create() 的实现方式，使用一个中间函数，可以保证原型链的连贯性
Object.prototype.create2 = function(obj) {
  function f() {}
  f.prototype = obj
  return new f
}

/**
 * bind 还有一个重要的特点：返回的函数可以使用 new 关键字，这类似于构造函数，原本提供的this将失效，但传入的参数依然有效
 */

 // 终版
Function.prototype.bind2 = function(context, ...args) {
  const _this = this

  const fNOP = function() {}
  const fBound = function(...bindArgs) {
    context = this instanceof fBound ? this : context // 判断是否作为构造函数，如果是构造函数，则this应该指向了新建的实例，否则还是指向fBound
    return _this.apply(context, args.concat(bindArgs))
  }
  // 修改返回函数的 prototype 为绑定函数的 prototype，实例就可以继承绑定函数的原型中的值
  fNOP.prototype = this.prototype
  fBound.prototype = new fNOP()
  return fBound
}
