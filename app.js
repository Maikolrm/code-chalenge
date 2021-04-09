/*
Arrays
* Get higher array number in one iteration
*/

const arr = [0, 10 ,67, -1500, 250, 1]

const getHigherNumber = (arr) => {
  let pivote = arr[0]
  arr.map(el => { if (el > pivote) pivote = el })
  return pivote
}

console.log(getHigherNumber(arr))
