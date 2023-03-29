// Given an integer array nums, return an array answer such that answer[i] 
// is equal to the product of all the elements of nums except nums[i].
// -- Example
// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]

const productExceptSelf = nums => {
  let output = nums.map(n => 1); // creates array filled with 1s w length of nums [1, 1, 1, 1] 
  let product = 1;

  // Multiply from the left
  for (let i = 0; i < nums.length; i++) {
    output[i] = output[i] * product; // [1, 1, 1, 1]
    product = product * nums[i]; // multiply product to current number 
  }

  product = 1;
  // Multiply from the right => start from the end of the nums Array
  for (let j = nums.length - 1; j >= 0; j--) {
    output[j] = output[j] * product; 
    product = product * nums[j];
  }

  return output;
};

module.exports = productExceptSelf;