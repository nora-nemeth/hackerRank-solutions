// https://www.hackerrank.com/challenges/array-left-rotation/problem

'use strict';

function rotateLeft(d, arr) {
  for (let i = 1; i <= d; i++) {
    let firstElement = arr.shift();
    arr.push(firstElement);
  }
  return arr;
}

