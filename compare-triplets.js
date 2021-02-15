// https://www.hackerrank.com/challenges/compare-the-triplets/problem

'use strict';

function compareTriplets(aliceRatings, bobRatings) {
  let score = [0, 0];
  for (let i = 0; i < aliceRatings.length; i++) {
    if (aliceRatings[i] > bobRatings[i]) {
      score[0]++;
    } else if (aliceRatings[i] < bobRatings[i]) {
      score[1]++;
    }
  }
  return score;
}
