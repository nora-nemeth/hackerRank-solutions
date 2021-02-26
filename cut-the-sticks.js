// https://www.hackerrank.com/challenges/cut-the-sticks/problem

'use strict';

function cutTheSticks(sticks) {
  let result = [];

  while (sticks.length > 0) {
    result.push(sticks.length);
    sticks = sticks.map((stick) => stick - Math.min(...sticks)).filter((stick) => stick > 0);
  }

  return result;
}
