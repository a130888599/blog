/**
 * new的模拟实现
 *  new 运算符能创建一个用户定义的对象类型的实例或具有构造函数的内置对象类型之一
 * 
 *  new实现的功能
 *    1. new出来的实例可以访问到构造函数中的属性
 *    2. new出来的实例可以访问到构造函数的prototype的属性
 *    3. 传入不定参数
 * 
 *  因为new是关键字，这里用objectFactory代替new
 */

function objectFactory() {
  var obj = new Object()  // 新建对象
  var Constructor = [].shift.call(arguments)  // 获取传入的构造函数
  obj.__proto__ = Constructor.prototype // 将原型指向构造函数，则实例可以获取到prototype中的属性
  Constructor.apply(obj, arguments) // 将this改到新建的对象中，则obj可以访问到构造函数中的值
  return obj
}

/** 
 * 我们还需要考虑构造函数存在返回值的问题 
 * 如果它返回一个对象时，则只有对象中的属性可以访问
 * 如果它返回一个基本类型的值，则和没有返回一样
*/
// 最终版
function objectFactory() {
  var obj = new Object()
  var Constructor = [].shift.call(arguments)
  obj.__proto__ = Constructor.prototype
  
  var ret = Constructor.apply(obj, arguments)
  return typeof ret === 'object' || ret === 'function' ? ret : obj
}


function Otaku (name, age) {
  this.name = name;
  this.age = age;
  this.habit = 'Games';
}
Otaku.prototype.strength = 60;
Otaku.prototype.sayYourName = function () {
  console.log('I am ' + this.name);
}
var person = objectFactory(Otaku, 'Kevin', '18')

console.log(person.name) // Kevin
console.log(person.habit) // Games
console.log(person.strength) // 60

person.sayYourName(); // I am Kevin

const set = new Set()