// https://www.hackerrank.com/challenges/mars-exploration/problem

"use strict";

function marsExploration(signal) {
  let change = 0;

  for (let i = 0; i < signal.length; i += 3) {
    if (signal[i] !== "S") {
      change++;
    } else if (signal[i + 1] !== "O") {
      change++;
    } else if (signal[i + 2] !== "S") {
      change++;
    }
  }

  return change;
}
