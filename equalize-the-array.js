// https://www.hackerrank.com/challenges/equality-in-a-array/problem

"use strict";

function equalizeArray(numbers) {
  let sortedNumbers = numbers.sort((a, b) => a - b);

  let frequency = new Map();

  for (let i = 0; i < sortedNumbers.length; i++) {
    if (frequency.has(sortedNumbers[i])) {
      frequency.set(sortedNumbers[i], frequency.get(sortedNumbers[i]) + 1);
    } else {
      frequency.set(sortedNumbers[i], 1);
    }
  }

  let maxValue = -Infinity;

  for (let value of frequency.values()) {
    if (value > maxValue) {
      maxValue = value;
    }
  }

  return sortedNumbers.length - maxValue;
}
