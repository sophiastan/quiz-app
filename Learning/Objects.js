/* Object */

// Object.keys(obj) – returns an array of keys.
// Object.values(obj) – returns an array of values.
// Object.entries(obj) – returns an array of [key, value] pairs.

let user = {
  name: "John",
  age: 30
};

Object.keys(user) = ["name", "age"]
Object.values(user) = ["John", 30]
Object.entries(user) = [ ["name","John"], ["age",30] ]

// loop over values
for (let value of Object.values(user)) {
  alert(value); // John, then 30
}

// transforming objects

// 1. Use Object.entries(obj) to get an array of key/value pairs from obj.
// 2. Use array methods on that array, e.g. map.
// 3. Use Object.fromEntries(array) on the resulting array to turn it back into an object.
let prices = {
  banana: 1,
  orange: 2,
  meat: 4,
};

let doublePrices = Object.fromEntries(
  // convert to array, map, and then fromEntries gives back the object
  Object.entries(prices).map(([key, value]) => [key, value * 2])
);

alert(doublePrices.meat); // 8