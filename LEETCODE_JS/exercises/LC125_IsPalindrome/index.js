// Given an integer x, return true if x is palindrome integer.
// An integer is a palindrome when it reads the same backward as forward.
// For example, 121 is a palindrome while 123 is not.

// Time Complexity: O(n)
// Space Complexity: O(1)

function validPalindrome(s) {
  //return x.toLowerCase().split('').reverse().join('') === x.toString ? true : false;
  //Sanitize the input string
  s = s.toLowerCase().replace(/[\W_]/g, "");

  //Set left and right pointers
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (s[left] !== s[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
};

module.exports = validPalindrome;