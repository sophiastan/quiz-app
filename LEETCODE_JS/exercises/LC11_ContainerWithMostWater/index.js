// You are given an integer array height of length n. 
// There are n vertical lines drawn such that the two endpoints 
// of the ith line are (i, 0) and (i, height[i]).
// -- Example
// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Input: height = [1,1]
// Output: 1

// Time complexity: O(n) each number in input array visited once
// Space complexity: O(1) only used left and right pointers

function maxArea(height) {
  let maxArea = 0;
  let start = 0;
  let end = height.length - 1;

  // runs until start and end meet
  while (start < end) {
    // to get the area multiply height by the width
    // want the smallest height when calculating area
    // end - start is the width
    const currentArea = Math.min(height[start], height[end]) * (end - start);
    // Pass in the biggest max area
    maxArea = Math.max(currentArea, maxArea);

    if (height[start] < height[end]) {
      start++;
    }
    else {
      end--;
    }
  }

  return maxArea;
}

module.exports = maxArea;