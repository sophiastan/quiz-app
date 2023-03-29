function countHighlyProfitableMonths(stockPrices, k) {
  // write your code here
  let numOfProfitableMonths = 0
  let stockPriceLen = stockPrices.length
  let profitableMonthsArr = [stockPrices[0]]

  for (let i = 1; i < stockPriceLen; i += 1) {
      const currStockPrice = stockPrices[i]
      // checking current stock price against the profitable array
      if (currStockPrice > profitableMonthsArr[profitableMonthsArr.length - 1]) {
          if (profitableMonthsArr.length === k) {
            // drop the first element
            profitableMonthsArr.shift()
          }
          profitableMonthsArr.push(currStockPrice)
      } else {
          // if we need to start the array over
          profitableMonthsArr = [currStockPrice]
      }
    
      if (profitableMonthsArr.length === k) {
          numOfProfitableMonths += 1
      }
  }

  return numOfProfitableMonths
}


let stockPrices = [5, 3, 5, 7, 8]
let k = 3
// let res = countHighlyProfitableMonths(stockPrices, k)
console.log(countHighlyProfitableMonths(stockPrices, k) === 2)
console.log(countHighlyProfitableMonths([1,2,3,4,5,6,7,8,9], 3) === 7)
console.log(countHighlyProfitableMonths([1,2,3,4,5,6,7,8,9], 6) === 4)
console.log(countHighlyProfitableMonths([1,2,8,45,6,37,8,9], 6) === 0)
console.log(countHighlyProfitableMonths([1,2,8,45,6,37,8,9], 3) === 2)


// console.log(res)


//countHighlyProfitableMonths([1,2,3,4,5,6,7,8,9], 3) //7
//countHighlyProfitableMonths([1,2,3,4,5,6,7,8,9], 6) //4
//countHighlyProfitableMonths([1,2,8,45,6,37,8,9], 6) //0
//countHighlyProfitableMonths([1,2,8,45,6,37,8,9], 3) //2