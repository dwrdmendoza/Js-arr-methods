// Given an array of ones and zeroes, convert the equivalent binary value to integer.
// eg: [0,0,0,1] is treated as 0001 which is the binary representation of 1.
// exmaple: [0,0,0,1] => 1
// exmaple: [0,0,1,0] => 2
// exmaple: [0,1,0,1] => 5
// exmaple: [1,0,0,1] => 9
// exmaple: [0,0,1,1] => 2

const binaryArrayToNumber = arr => {
  parseInt(arr.join(''),2) 
}