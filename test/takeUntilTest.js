const takeUntil = require("../takeUntil");
const assertArraysEqual = require("../assertArraysEqual");

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
