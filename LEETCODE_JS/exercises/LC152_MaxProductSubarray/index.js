// Given an integer array nums, find a contiguous non-empty subarray within the array 
// that has the largest product, and return the product.
// The test cases are generated so that the answer will fit in a 32-bit integer.
// A subarray is a contiguous subsequence of the array.
// Input: nums = [2,3,-2,4]
// Output: 6
// Explanation: [2,3] has the largest product 6.

// Time complexity: O(N) for loop
// Space complexity: O(N) two dp arrays for max and min

var maxProduct = function(nums) {
  let maxTillIndex = [nums[0]];
  let minTillIndex = [nums[0]];
  let max = nums[0];

  for (let i = 1; i < nums.length; i++) {
    const num = nums[i];

    // Gets the number to the left of maxTillIndex and minTillIndex
    maxTillIndex[i] = Math.max(
      num, 
      num * maxTillIndex[i - 1], 
      num * minTillIndex[i - 1]
    );

    minTillIndex[i] = Math.min(
      num, 
      num * maxTillIndex[i - 1], 
      num * minTillIndex[i - 1]
    );

    max = Math.max(max, maxTillIndex[i]);
  }

  return max;
};

module.export = maxProduct;