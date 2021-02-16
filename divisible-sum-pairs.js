// https://www.hackerrank.com/challenges/divisible-sum-pairs/problem

'use strict';

function divisibleSumPairs(length, number, numbers) {
  let count = 0;

  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j < length; j++) {
      if ((numbers[i] + numbers[j]) % number == 0) {
        count++;
      }
    }
  }
  return count;
}
