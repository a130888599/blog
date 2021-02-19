// 深拷贝

// 1. JSON
function deepClone1(data) {
  return JSON.parse(JSON.stringify(data))
}