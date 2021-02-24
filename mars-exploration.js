// https://www.hackerrank.com/challenges/mars-exploration/problem

"use strict";

function marsExploration(signal) {
  let change = 0;

  for (let i = 0; i < signal.length; i += 3) {
    if (signal[i] !== 'S') {
      change++;
    }
    if (signal[i+1] !== 'O') {
      change++;
    }
    if (signal[i+2] !== 'S') {
      change++;
    }
  }

  return change;
}


//other solution


function marsExploration(signal) {
  let change = 0;
  
  const pattern = ['S', 'O', 'S'];

  for (let i = 0; i < signal.length; ++i) {
    if (signal[i] !== pattern[i % 3]) {
      change++;
    }
  }

  return change;
}


//funtional solution


function countAlterations(signal, pattern) {
  const isAltered = (char, index) => char !== pattern[index % pattern.length];
  return signal.split('').filter(isAltered).length;
}

function marsExploration(signal) {
  const pattern = ['S', 'O', 'S'];
  return countAlterations(signal, pattern);
}
