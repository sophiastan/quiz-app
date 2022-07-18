/* ARRAY */

// add/insert element to tail - O(1)
function insertToTail(arr, ele) {
  arr.push(ele);
  return arr;
}

// add/insert element to head - O(n) needs to iterate through all ele
function insertToHead(arr, ele) {
  arr.unshift(ele);
  return arr;
}

// access an ele in an array - O(1)
function access(arr, index) {
  return arr[index];
}

// search an ele in an array - O(n)
function search(arr, ele) {
  for (let i = 0; i < arr.length; i++) {
    if (ele === arr[i]) {
      return i; 
    }
  }
}

// remove ele from an array - O(n)
// could use filter() to remove too
function remove(arr, ele) {
  const index = search(arr, ele);
  arr.splice(index, 1);
  return arr;
}

// array destructuring
// we have an array with the name and surname
let arr = ["John", "Smith"]

// destructuring assignment
// sets firstName = arr[0]
// and surname = arr[1]
let [firstName, surname] = arr;

alert(firstName); // John
alert(surname);  // Smith

// ignore elements using commas
// second element is not needed
let [firstName, , title] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

alert( title ); // Consul

let user = {};
[user.name, user.surname] = "John Smith".split(' ');

alert(user.name); // John
alert(user.surname); // Smith

// using spread operator
let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

// rest is array of items, starting from the 3rd one
alert(rest[0]); // Consul
alert(rest[1]); // of the Roman Republic
alert(rest.length); // 2