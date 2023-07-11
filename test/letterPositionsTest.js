const letterPositions = require("../letterPositions");
const assert = require("chai").assert;

describe("#letterPositions", () => {
  it("returns [4] for (hello).o", () => {
    assert.deepEqual(letterPositions("hello").o, [4]);
  });

  it("returns undefined for (Inayah).e", () => {
    assert.strictEqual(letterPositions("Inayah").e, undefined);
  });
});
