// https://www.hackerrank.com/challenges/staircase/problem

'use strict';

function staircase(n) {
  for (let i = 1; i <= n; i++) {
    const line = '#'.repeat(i).padStart(n, ' ');
    console.log(line);
  }
}
