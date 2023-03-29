// Given the array nums after the possible rotation and an integer target, 
// return the index of target if it is in nums, or -1 if it is not in nums.
// You must write an algorithm with O(log n) runtime complexity.

// Psuedocode:
// Find inflection index, use inflection idnex to perform two separate Binary Searches on rotated sorted array
// Return the highest Index Value returned from your two Binary searches

// Time complexity: O(log N) performed multiple binary searches
// Space complexity: O(1)

// helper find min idx function
function findMinIdx(rotatedSortedArr) {
  let left = 0;
  let right = rotatedSortedArr.length - 1;

  if (rotatedSortedArr.length === 1) return 0; // at index 0
  // properly sorted array [1, 2, 3]
  if (rotatedSortedArr[left] < rotatedSortedArr[right]) return 0; // left is smaller than right, we are at min, index at 0

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    // if mid less than left, mid is minIdx
    if (rotatedSortedArr[mid] <  rotatedSortedArr[mid - 1]) return mid;
    
    // if mid is bigger than right of mid, right of mid is midIdx
    if (rotatedSortedArr[mid] > rotatedSortedArr[mid + 1]) return mid + 1;

    // if mid less than first index, we haven't found a minIdx, keep doing binary search
    if (rotatedSortedArr[mid] < rotatedSortedArr[left]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
}

// helper binary search function
function binarySearch(nums, target, left, right) {
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

var search = function(nums, target) {
  // get min index of sorted array
  const minIdx = findMinIdx(nums);

  // left sorted array: left starts at index 0 and ends at inflection point (minIdx)
  const left = binarySearch(nums, target, 0, minIdx - 1);

  // right sorted array: left starts at inflection point (minIdx), and ends at last idx of sorted array
  const right = binarySearch(nums, target, minIdx, nums.length - 1);

  return Math.max(left, right);
};

module.exports = search;