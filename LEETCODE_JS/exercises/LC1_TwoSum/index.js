// Given an array of integers nums and an integer target, 
// return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, 
// and you may not use the same element twice.
// You can return the answer in any order.
// -- Examples
// twoSum([2, 7, 11, 15], 9) --> [0,1]
// twoSum([3, 2, 4], 6) --> [1, 2]

function twoSum(arr, target) {
  let map = new Map();
  for (let i = 0; i < arr.length; i++) {
    let complement = target - arr[i];
    if (map.has(complement)) {
      return [map.has(complement), i];
    }
    map.set(arr[i], i);
  }
}

module.exports = twoSum;