// https://www.hackerrank.com/challenges/birthday-cake-candles/problem

'use strict';

function birthdayCakeCandles(candles) {
  let max = -Infinity;
  let count = 0;

  for (const candle of candles) {
    if (candle > max) {
      max = candle;
      count = 1;
    } else if (candle === max) {
      count++;
    }
  }

  return count;
}
