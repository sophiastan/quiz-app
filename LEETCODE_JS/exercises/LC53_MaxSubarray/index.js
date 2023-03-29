// Given an integer array nums, find the contiguous subarray 
// (containing at least one number) which has the largest sum and return its sum.
// A subarray is a contiguous part of an array.
// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.

// Time complexity: O(N)
// Space complexity: O(N) => O(1) without dp array

var maxSubArray = function(nums) {
  let dp = [nums[0]]; // comment out
  let max = nums[0];

  for (let i = 1; i < nums.length; i++) {
    const num = nums[i];
    // Checks max of num and max sum from our prev dp array
    // For space complexity O(1) change dp to nums instead
    dp[i] = Math.max(num, num + dp[i - 1]);
    // Checks prev max or current max from dp array (only need 1 for loop)
    max = Math.max(max, dp[i]);
  }

  return max;
};

module.export = maxSubArray;