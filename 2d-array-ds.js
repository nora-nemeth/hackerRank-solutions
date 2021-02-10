// https://www.hackerrank.com/challenges/2d-array/problem

'use strict';

function hourglassSum(arr) {
  let hourglassValues = [];
  const add = (a, c) => a + c;
  for (let i = 0; i <= 3; i++) {
    for (let j = 0; j <= 3; j++) {
      hourglassValues.push(
        [
          arr[i][j],
          arr[i][j + 1],
          arr[i][j + 2],
          arr[i + 1][j + 1],
          arr[i + 2][j],
          arr[i + 2][j + 1],
          arr[i + 2][j + 2],
        ].reduce(add)
      );
    }
  }
  return Math.max(...hourglassValues);
}
