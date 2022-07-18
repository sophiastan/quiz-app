//You are given a string s and an integer k. 
//You can choose any char of the string and change it to any other uppercase English character. 
//You can perform this operation at most k times.

//Return the length of the longest substring containing the same letter 
//you can get after performing the above operations.
// -- Example
// s = "ABAB", k = 2 => 4
// s= "AABBBA", k = 1 => 4

// Time Complexity: O(n) using Sliding Window that shrink/grow
// Current index and value in for loop will ALWAYS BE THE END of sliding window
// As end of window increases, we conditionally increase start of window

function charReplacement(s) {
  // create an empty hashMap(key/val -> char/index)
  let windowCharsMap = {};
  // create start and max var, set bot with initial values of 0
  let windowStart = 0;
  let maxLength = 0;

  // loop thru input string
  for (let i = 0; i < s.length; i++) {
    // set current char to endChar of window
    const endChar = s[i];

    // if current char in hashMap & has index >= start
    if (windowCharsMap[endChar] >= windowStart) {
      // set start of index for char found in hashMap + 1
      // set index of prev found to window start one above that index                            
      windowStart = windowCharsMap[endChar] + 1;
    }
    
    // set key/val pair on hashMap to current index
    // updates new position from when duplicate was found before
    windowCharsMap[endChar] = i;
    // if length of current window is greater than max
    //   set max to length of current window
    maxLength = Math.max(maxLength, i - windowStart + 1); 
    // second element is length of current sliding window
    // + 1 to compensate index starts at 0
    // end of  window is where we are on our for loop
  }

  return maxLength;
}

module.exports = charReplacement;