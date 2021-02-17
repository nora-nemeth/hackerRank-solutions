// https://www.hackerrank.com/challenges/cats-and-a-mouse/problem

'use strict';

function catAndMouse(catA, catB, mouseC) {
  const catADistance = Math.abs(mouseC - catA);
  const catBDistance = Math.abs(mouseC - catB);

  if (catADistance === catBDistance) {
    return "Mouse C";
  } else if (catADistance < catBDistance) {
    return "Cat A";
  } else if (catADistance > catBDistance) {
    return "Cat B";
  }
}
