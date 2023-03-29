// Time Complexity: O(n) goes through every ele in input Array
// Space Complexity: O(n) # keys in HT equal to # unique values in input Array

const containsDuplicate = nums => {
  const visitedNums = {};

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (visitedNums[num])
      return true;
    else 
      visitedNums[num] = true;
  }
  return false;
};

module.exports = containsDuplicate;