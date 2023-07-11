const map = require("../map");
const assertArraysEqual = require("../assertArraysEqual");

const words = ["ground", "control", "to", "major", "tom"];
console.log(
  assertArraysEqual(
    map(words, (word) => word[0]),
    ["a", "b", "c"]
  )
);
console.log(map(words, (word) => word[3]));

assertArraysEqual(
  map(words, (word) => word[0]),
  ["g", "c", "t", "m", "t"]
);

assertArraysEqual(
  map(words, (word) => word[1]),
  ["r", "o", "o", "a", "o"]
);

console.log(
  assertArraysEqual(
    map(words, (word) => word[2]),
    ["r", "o", "o", "a", "o"]
  )
);
