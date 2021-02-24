// https://www.hackerrank.com/challenges/find-digits/problem

'use strict';

function findDigits(number) {
  let divisors = 0;

  for (const digit of String(number)) {
    if (number % digit == 0) {
      divisors++;
    }  
  }

  return divisors;
}
