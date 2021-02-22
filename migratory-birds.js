//https://www.hackerrank.com/challenges/migratory-birds/problem

'use strict';

function migratoryBirds(sightings) {
  let sortedSightings = sightings.sort((a, b) => a - b);

  let frequency = new Map();

  for (let i = 0; i < sortedSightings.length; i++) {
    if (frequency.has(sortedSightings[i])) {
      frequency.set(sortedSightings[i], frequency.get(sortedSightings[i]) + 1);
    }
    else {
      frequency.set(sortedSightings[i], 1);
    }
  }

  let max = -Infinity;
  let resultKey;

  for (let [key, value] of frequency) {
      if (value > max) {
      max = value
      resultKey = key;
    }
  }

  return resultKey;
}
