'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}



/*
 * Complete the 'countHighlyProfitableMonths' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY stockPrices
 *  2. INTEGER k
 */

function countHighlyProfitableMonths(stockPrices, k) {
    let profitableMonthsCount = 0
    let profitableMonthsArr = [stockPrices[0]];
    
    for (let i = 1; i <= stockPrices.length; i++) {
        const currStockPrice = stockPrices[i];
        const profitableMonthsLen = profitableMonthsArr.length;
        
        // check profitable months array against current stock price
        if (profitableMonthsArr[profitableMonthsLen - 1] < currStockPrice) {
            if (profitableMonthsLen === k) {
                // keep the whole array except first element
                profitableMonthsArr.shift();
            }
            profitableMonthsArr.push(currStockPrice);
        }
        else {
            profitableMonthsArr = [currStockPrice];
        }
        
        if (profitableMonthsLen === k) profitableMonthsCount++;
    }
    
    return profitableMonthsCount;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const stockPricesCount = parseInt(readLine().trim(), 10);

    let stockPrices = [];

    for (let i = 0; i < stockPricesCount; i++) {
        const stockPricesItem = parseInt(readLine().trim(), 10);
        stockPrices.push(stockPricesItem);
    }

    const k = parseInt(readLine().trim(), 10);

    const result = countHighlyProfitableMonths(stockPrices, k);

    ws.write(result + '\n');

    ws.end();
}
