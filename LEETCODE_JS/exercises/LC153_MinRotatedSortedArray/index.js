// Given the sorted rotated array nums of unique elements, return the minimum element of this array.
// You must write an algorithm that runs in O(log n) time.
// Input: nums = [3,4,5,1,2]
// Output: 1
// Explanation: The original array was [1,2,3,4,5] rotated 3 times.
// Look for inflection point: 
// If num to left is larger, we are at min OR If num to the right is smaller, num to the right is min
// If inflection point is not at mid:
// If MID is greater than LEFT, move LEFT up to MID OR 
// If MID is smaller than LEFT, move RIGHT down to MID
// Repeat binary search until mid is finally inflection point

// Time complexity: O(log N) we performed a binary search
// Space complexity: O(1)

var findMin = function(nums) {
  let left = 0;
  let right = nums.length - 1;

  if (nums.length === 1) return nums[0];
  if (nums[left] < nums[right]) return nums[left];

  // if in a sorted array - do binary search
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    const leftVal = nums[left];
    const midVal = nums[mid];
    const leftOfMid = nums[mid - 1];
    const rightOfMid = nums[mid + 1];

    // If num to the right is smaller, num to the right is min
    if (midVal > rightOfMid) {
      return rightOfMid;
    } else if (leftOfMid > midVal) {
      // If num to left is larger, we are at min
      return midVal;
    }

    if (midVal > leftVal) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
};

module.export = findMin;
