var relativeSortArray = function(arr1, arr2) {
  return arr1.sort((a,b) => {
      let indexA = arr2.indexOf(a),
          indexB = arr2.indexOf(b)
      console.log(indexA, ~indexA);
      if (~indexA && ~indexB) {
          return indexA - indexB
      } else if (~indexA ^ ~indexB) {
          return indexB - indexA
      } else {
          return a-b
      }
  })
}

let arr1 = [2,3,1,3,2,4,6,7,9,2,19]
let arr2 = [2,1,4,3,9,6]
const res = relativeSortArray(arr1, arr2)
// console.log('relativeSortArray(arr1, arr2)', relativeSortArray(arr1, arr2))
// console.log(res);