const assertArraysEqual = require("../assertArraysEqual");
const assert = require("chai").assert;

// assertArraysEqual([1,2,3],[1,2,3]);//returns true
// assertArraysEqual([1,2,"h"],[1,2,3]);//returns false

describe("#assertArraysEqual", () => {
  it("returns false for [1,2,'h'] and [1,2,3]", () => {
    assert.strictEqual(assertArraysEqual([1, 2, "h"], [1, 2, 3]), false);
  });

  it("returns true for [5,6,7] and [5,6,7]", () => {
    assert.strictEqual(assertArraysEqual([5, 6, 7], [5, 6, 7]), true);
  });
});
