// https://www.hackerrank.com/challenges/picking-numbers/problem

'use strict';

function pickingNumbers(numbers) {
  let counts = new Map();

  for (let i = 0; i < numbers.length; i++) {
    if (counts.has(numbers[i])) {
      counts.set(numbers[i], counts.get(numbers[i]) + 1);
    }
    else {
      counts.set(numbers[i], 1);
    }
  }

  let max = -Infinity;
  
  for (const [key] of counts) {
    if (counts.has(key + 1)) {
      let length = counts.get(key) + counts.get(key + 1);

      if (length > max) {
        max = length;
      }
    }

    else if (counts.get(key) > max) {
      max = counts.get(key);
    }
  }

  return max; 
}
