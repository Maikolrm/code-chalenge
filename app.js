/*
Arrays
* Get higher array number in one iteration
*/

// const arr = [0, 10 ,67, -1500, 250, 1]

const getHigherNumber = (arr) => {
  let pivote = arr[0]
  arr.map(el => { if (el > pivote) pivote = el })
  return pivote
}

// console.log(getHigherNumber(arr))

/*
Array
* Remove undefined, null and 0 in one iteration
*/

const arr = [undefined, 0, null, false, 50, -450, {}]

const cleanArray = (arr) => {
  let result = []
  arr.map(el => { if (el) result.push(el) })
  return result
}

console.log(cleanArray(arr))
