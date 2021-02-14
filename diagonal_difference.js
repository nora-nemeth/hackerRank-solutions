// https://www.hackerrank.com/challenges/diagonal-difference/problem

'use strict';

function diagonalDifference(matrix) {
  let difference = 0;

  for (let i = 0; i < matrix.length; i++) {
    difference += matrix[i][i];
    difference -= matrix[i][matrix.length - 1 - i];
  }

  return Math.abs(difference);
}
