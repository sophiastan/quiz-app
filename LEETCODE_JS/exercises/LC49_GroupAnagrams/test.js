const groupAnagrams = require('./index');

test("'['eat', 'tea', 'tan', 'ate', 'nat', 'bat']' returns 3 groups of Anagrams", () => {
  expect(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat'])).toEqual([['bat'],['nat','tan'],['ate','eat','tea']]);
});