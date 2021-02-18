// https://www.hackerrank.com/challenges/jumping-on-the-clouds/problem

'use strict';

function jumpingOnClouds(clouds) {
  let jumps = 0;

  for (let i = 0; i < clouds.length; i++) {
    if (clouds[i] == 0 && clouds[i + 1] == 0 && clouds[i + 2] == 0) {
      jumps += 1;
      i++;
    } else if (clouds[i] == 0 && clouds[i + 1] == 1) {
      jumps += 1;
      i++;
    } else if (clouds[i] == 0 && clouds[i + 1] == 0) {
      jumps += 1;
    }
  }

  return jumps;
}
