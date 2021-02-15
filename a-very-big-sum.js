// https://www.hackerrank.com/challenges/a-very-big-sum/problem

'use strict';

function aVeryBigSum(numbers) {
  let sum = 0n;
  for (const number of numbers) {
    sum += BigInt(number);
  }
  return sum;
}
