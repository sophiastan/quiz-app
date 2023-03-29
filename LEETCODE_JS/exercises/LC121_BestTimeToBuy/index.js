// You are given an array prices where prices[i] is the price 
// of a given stock on the ith day.
// You want to maximize your profit by choosing a single day to buy one stock 
// and choosing a different day in the future to sell that stock.
// -- Example
// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Input: prices = [7,6,4,3,1]
// Output: 0

// Time complexity: O(n) we iterate thru input array once
// Space complexity: O(1)

var maxProfit = function(prices) {
  let minPrice = prices[0];
  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    const price = prices[i];
    if (price < minPrice) minPrice = price;

    const currentProfit = price - minPrice;
    maxProfit = Math.max(currentProfit, maxProfit);
  }

  return maxProfit;
};

module.exports = maxProfit;