// Time complexity: O(n)
// Space complexity: O(n)

const isValid = s => {
  let stack = [];
  let pairsHashMap = { "(" : ")", "{" : "}", "[" : "]"};

  for (let i = 0; i < s.length; i++) {
    let char = s[i];

    if (pairsHashMap[char]) {
      stack.push(char);
    }
    else if (pairsHashMap[stack.pop()] !== char) {
      return false;
    }
  }

  return stack.length === 0;
}