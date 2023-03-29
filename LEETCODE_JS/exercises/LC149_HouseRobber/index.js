// Given an integer array nums representing the amount of money of each house, 
// return the maximum amount of money you can rob tonight without alerting the police.
//  it will automatically contact the police if two adjacent houses 
// were broken into on the same night.

// Time complexity: O(N) our code loops over input array once
// Space complexity: O(N) can be optimized to O(1) with two number variables

var rob = function(nums) {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];
  if (nums.length === 2) return Math.max(nums[0], nums[1]);

  let maxLootAtNth = [nums[0], Math.max(nums[0], nums[1])];

  for (let i = 2; i < nums.length; i++) {
    // compare addition of 1st and 3rd ele to middle ele (2nd)
    maxLootAtNth.push(
      Math.max(nums[i] + maxLootAtNth[i - 2], maxLootAtNth[i - 1])
    );
  }

  // return last item in array
  return maxLootAtNth.pop();
};

module.exports = rob;