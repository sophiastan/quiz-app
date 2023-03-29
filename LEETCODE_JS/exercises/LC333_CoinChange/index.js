// set target as amount
// map values that are in the array
// create var for counter for each coin need to be used
// two for loops that contains logic for remainder 
// if remainder is 1 set output to - 1

// You are given an integer array coins representing coins of different denominations and an integer amount 
// representing a total amount of money.

// Return the fewest number of coins that you need to make up that amount. If that amount of money cannot 
// be made up by any combination of the coins, return -1.

// You may assume that you have an infinite number of each kind of coin.

//----Example----
// Input: coins = [1,2,5], amount = 11
// Output: 3
// Explanation: 11 = 5 + 5 + 1

// Time Complexity: O(A  * C) where A is amoubnt and C is number of coins
// Space Complexity: O(A) Created a DP array of length A

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
 let coinChange = function(coins, amount) {
    let dpMinCoins = new Array(amount + 1).fill(Infinity);
    dpMinCoins[0] = 0;

    for (let i = 1; i < dpMinCoins.length; i++) {
      for (let j = 0; j < coins.length; j++) {
        const coinValue = coins[j];
        // inner loops goes to next index but it is a bigger num than current index which will be negative
        if (coinValue <= i) {
          // checks if current amount - coinValue + 1 (using a coin) OR previous minCoins
          dpMinCoins[i] = Math.min(dpMinCoins[i - coinValue] + 1, dpMinCoins[i]);
        }
      }
    }

    const answer = dpMinCoins[dpMinCoins.length - 1]; // grab last item/value of the array
    return answer === Infinity ? -1 : answer;
};