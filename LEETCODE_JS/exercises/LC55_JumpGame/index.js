// You are given an integer array nums. You are initially positioned at the array's
// first index, and each element in the array represents your maximum jump 
// length at that position.
// Return true if you can reach the last index, or false otherwise.
// -- Example
// Input: nums = [2,3,1,1,4]
// Output: true
// Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.

// Time Complexity: O(N^2) nested for loops
// Space Complexity: O(N) DP Array same size as input array

var canJump = function(nums) {
  let dpPositions = new Array(nums.length).fill(false);
  dpPositions[0] = true;
  
  for (let j = 1; j < nums.length; j++) {
    for (let i = 0; i < j; i++) {
      // if possible to reach step i and number of jumps from step i is => j
      if (dpPositions[i] && i + nums[i] >= j) {
        dpPositions[j] = true;
        break;
      }
    }
  }

  return dpPositions[dpPositions.length - 1];
}

module.exports = canJump;