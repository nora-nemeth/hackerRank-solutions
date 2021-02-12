// https://www.hackerrank.com/challenges/plus-minus/problem?h_r=profile

'use strict';

function plusMinus(numbers) {
  const all = numbers.length;
  let negatives = 0;
  let positives = 0;
  let zeros = 0;

  for (const number of numbers) {
    if (number < 0) {
      negatives++;
    } else if (number > 0) {
      positives++;
    } else {
      zeros++;
    }
  }

  const printRatio = (ratio) => console.log(ratio.toFixed(6));

  printRatio(positives / all);
  printRatio(negatives / all);
  printRatio(zeros / all);
}
