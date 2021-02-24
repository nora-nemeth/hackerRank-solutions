// https://www.hackerrank.com/challenges/camelcase/problem

"use strict";

//imperative

function camelcase(string) {
  let words = 1;

  for (const letter of string) {
    if (letter == letter.toUpperCase()) {
      words++;
    }
  }

  return words;
}


//functional

function camelcase(string) {
    return string.split('').filter(letter => letter === letter.toUpperCase()).length + 1;
}


//functional only with arrow functions

const camelcase = string => string.split('').filter(letter => letter === letter.toUpperCase()).length + 1;
