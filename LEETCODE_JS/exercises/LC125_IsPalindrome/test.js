const validPalindrome = require("./index");

test("'A man, a plan, a canal: Panama' returns true", () => {
  expect(validPalindrome("A man, a plan, a canal: Panama")).toEqual(true);
});

test("'love' returns false", () => {
  expect(validPalindrome("love")).toEqual(false);
});

test("'' returns true", () => {
  expect(validPalindrome("")).toEqual(true);
});

test("'_a__' returns true", () => {
  expect(validPalindrome("_a__")).toEqual(true);
});