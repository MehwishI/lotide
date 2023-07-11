const map = require("../map");
const assertArraysEqual = require("../assertArraysEqual");

const words = ["ground", "control", "to", "major", "tom"];

assertArraysEqual(
  map(words, (word) => word[0]),
  ["a", "b", "c"]
);

assertArraysEqual(
  map(words, (word) => word[0]),
  ["g", "c", "t", "m", "t"]
);

assertArraysEqual(
  map(words, (word) => word[1]),
  ["r", "o", "o", "a", "o"]
);

assertArraysEqual(
  map(words, (word) => word[2]),
  ["r", "o", "o", "a", "o"]
);
