/* MAP */

// new Map() – creates the map.
// map.set(key, value) – stores the value by the key.
// map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
// map.has(key) – returns true if the key exists, false otherwise.
// map.delete(key) – removes the value by the key.
// map.clear() – removes everything from the map.
// map.size – returns the current element count.

// can set key to a string, number, or boolean
let map = new Map();

map.set('1', 'str1');   // a string key
map.set(2, 'num1');     // a numeric key
map.set(true, 'bool1'); // a boolean key

map['key'] = 2;

map.get(2); // 'num1'

// compare keys use '==='
if (map.get(2) === map.get('1')) {
  return true;
} // false

// Iteration over Map
let recipeMap = new Map([
  ['cucumber', 500],
  ['tomatoes', 350],
  ['onion',    50]
]);

// iterate over keys (vegetables)
for (let vegetable of recipeMap.keys()) {
  alert(vegetable); // cucumber, tomatoes, onion
}

// iterate over values (amounts)
for (let amount of recipeMap.values()) {
  alert(amount); // 500, 350, 50
}

// iterate over [key, value] entries
for (let entry of recipeMap) { // the same as of recipeMap.entries()
  alert(entry); // cucumber,500 (and so on)
}

// runs the function for each (key, value) pair
recipeMap.forEach( (value, key) => {
  alert(`${key}: ${value}`); // cucumber: 500 etc
});

// create map from obj to array
let obj = {
  name: "John",
  age: 30
};

let newMap = new Map(Object.entries(obj));

alert( newMap.get('name') ); // John

// creates map from array to object
map.set('banana', 1);
map.set('orange', 2);
map.set('meat', 4);

let item = Object.fromEntries(map.entries()); // make a plain object (*)

// obj = { banana: 1, orange: 2, meat: 4 }

alert(item.orange); // 2

// Returns an array of duplicate values in array a
const a = [4,3,6,3,4,3]
function containsDuplicates(a) {
  let duplicates = new Map();
  let results = [];
  for (let i = 0; i < a.length; i++) {
    if (!duplicates.hasOwnProperty(a[i])) {
      duplicates[a[i]] = 1;
    } else {
      duplicates[a[i]] += 1;
      if (!results.includes(a[i]))
        results.push(a[i]);
    }
  }
  console.log(duplicates);
  console.log(results);
}

containsDuplicates(a);