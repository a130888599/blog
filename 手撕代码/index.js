function call(context) {
  context = context || window
  context.fn = this
  var args = []
  for(var i = 1; i < arguments.length; i++) {
    args.push('arguments[' + i + ']')
  }
  var result = eval('context.fn(' + args + ')')
  delete context.fn
  return result
}

function apply(context, arr) {
  context = context || window
  context.fn = this
  var args = []
  for(var i = 0; i < arr.length; i++) {
    args.push('arr[' + i + ']')
  }
  var result = eval('context.fn(' + args + ')')
  delete context.fn
  return result
}

function createObject(obj) {
  function f() {}
  f.prototype = obj
  return new f;
}

function bind(context) {
  var args = Array.prototype.slice.call(arguments, 1)
  var _this = this
  var fNOP = function() {}  // 中间函数，用来中转fBound和绑定函数是prototype
  var fBound = function() {
    var bindArgs = Array.prototype.slice.call(arguments)
    context = this instanceof fBound ? this : context
    _this.apply(context, args.concat(bindArgs))
  }
  fNOP.prototype = this.prototype
  fBound.prototype = new fNOP()
  return fBound
}

function objFactory() {
  var obj = new Object()
  var Constructor = [].shift.call(arguments)  //构造函数
  obj.__proto__ = Constructor.prototype // 修正原型链

  var result = Constructor.apply(obj, arguments)
  return typeof result === 'object' ? result : obj
}