// https://www.hackerrank.com/challenges/mini-max-sum/problem

'use strict';

function miniMaxSum(numbers) {
  let ascending = numbers.sort((a, b) => a - b);

  let lowerSum = 0;
  let upperSum = 0;

  for (let i = 0; i < numbers.length - 1; i++) {
    lowerSum += ascending[i];
    upperSum += ascending[numbers.length - 1 - i];
  }

  console.log(lowerSum, upperSum);
}
