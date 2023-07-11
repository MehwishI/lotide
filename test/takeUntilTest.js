const takeUntil = require("../takeUntil");
const assertArraysEqual = require("../assertArraysEqual");

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const data2 = [
  "I've",
  "been",
  "to",
  "Hollywood",
  ",",
  "I've",
  "been",
  "to",
  "Redwood",
];

assertArraysEqual(
  takeUntil(data2, (x) => x === ","),
  [""]
);
assertArraysEqual(
  takeUntil(data1, (x) => x < 0),
  [1, 2, 5, 7, 2]
);
assertArraysEqual(
  takeUntil(data1, (x) => x < 0),
  [1, 2, 5]
);
