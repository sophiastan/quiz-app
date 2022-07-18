// Given an array of strings strs, group the anagrams together. 
// You can return the answer in any order.
// -- Example
//Input: strs = ["eat","tea","tan","ate","nat","bat"] 
//Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// Time complexity: O(N K log K), Where N is # of strings, and K is length of strings
// Space complexity: O(N K), data stored in our grouped Hash Table
function groupAnagrams(strs) {
  let grouped = {};
  
  for (let i = 0; i < strs.length; i++) {
    // gets current word
    const word = strs[i];
    // use sorted word as key 
    const key = word.split('').sort().join('');

    // if key is not in hashMap create a new array for value
    if (!grouped[key]) {
      grouped[key] = [];
    }

    // if key is already in hashMap, push word array of values corresponding key
    grouped[key].push(word);
  }

  // returns array of values of key => [[values], [values], [values]]
  return Object.values(grouped);
}

module.exports = groupAnagrams;