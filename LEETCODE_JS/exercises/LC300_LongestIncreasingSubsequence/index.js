// Given an integer array nums, return the length of the longest
// strictly increasing subsequence.

// Time complexity: O(n^2) nested for loop
// Space complexity: O(n) we store the answer up to N sub problems

/**
 * @param {number[]} nums
 * @return {number}
 */

let lengthOfLIS = function(nums) {
  if (nums.length === 0) return 0;

  let dpSubsequence = new Array(nums.length).fill(1);
  let maxSoFar = 1;

  for (let j = 1; j < nums.length; j++) {
    for (let i = 0; i < j; i++) {
      if (nums[j] > nums[i]) {
        dpSubsequence[j] = Math.max(dpSubsequence[i] + 1, dpSubsequence[j]);
      }
    }

    maxSoFar = Math.max(maxSoFar, dpSubsequence[j]);
  }

  return maxSoFar;
};

module.exports = lengthOfLIS;