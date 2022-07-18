const charReplacement = require("./index");

test("'abcabcbb' returns '3'", () => {
  expect(charReplacement("abcabcbb")).toEqual(3);
});

test("'pwwkew' returns '3'", () => {
  expect(charReplacement("pwwkew")).toEqual(3);
});

test("'dvdf' returns '3'", () => {
  expect(charReplacement("dvdf")).toEqual(3);
});

test("'bbb' returns '1'", () => {
  expect(charReplacement("bbb")).toEqual(1);
});

