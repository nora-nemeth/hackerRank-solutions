// https://www.hackerrank.com/challenges/the-hurdle-race/problem

'use strict';

function hurdleRace(maxJump, heights) {
  const maxHeight = Math.max(...heights);
  return maxHeight < maxJump ? 0 : maxHeight - maxJump;
}
