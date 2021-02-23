// https://www.hackerrank.com/challenges/find-digits/problem

'use strict';

function findDigits(number) {
  let digits = String(number).split('');

  let divisors = 0;

  for (const digit of digits) {
    if (number % digit == 0) {
      divisors++;
    }  
  }

  return divisors;
}
