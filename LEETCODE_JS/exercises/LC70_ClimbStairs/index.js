// You are climbing a staircase. 
// It takes n steps to reach the top.
// Each time you can either climb 1 or 2 steps. 
//In how many distinct ways can you climb to the top?

// Solution #1
// Time complexity: O(n) our code loops N times
// Space complexity: O(n) array of size N is used

let climbStairs = function(n) {
  if (n <= 3) return n;

  let ways = [0, 1, 2, 3];

  for (let i = 4; i <= n; i++) {
    ways.push(ways[i - 1] + ways[i - 2]);
  }

  return ways[n];
}

module.exports = climbStairs;

// Solution #2
// Time complexity: O(n) our code loops N times
// Space complexity: O(1) no array

let climbStairs2 = function(n) {
  if (n == 1) return n;

  let first = 1;
  let second = 2;

  for (let i = 3; i <=n; i++) {
    const third = first + second;
    first = second;
    second = third;
  }

  return second;
}

module.exports = climbStairs2;