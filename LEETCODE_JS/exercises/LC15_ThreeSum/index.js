// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]]
// such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
// -- Example
// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]

// Time complexity: O(n) <= O(logN * n^2) bc of sorted array, 
// Space complexity: O(1)

var threeSum = function(nums) {
  nums.sort((a,b) => a - b);
  let res = [];

  for (let i = 0; i < nums.length; i++) {
    const target = 0 - nums[i];
    let left = i + 1;
    let right = nums.length - 1;

    // passes duplicate test
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    while (left < right) {
      if (nums[left] + nums[right] === target) {
        res.push([nums[i], nums[left], nums[right]]);
        left++;
        while (nums[left] == nums[left - 1]) {
          left++;
        }
      } else if (nums[left] + nums[right] < target) {
        left++;
      } else {
        right--;
      }
    }
  }
  return res;
}

module.exports = threeSum;