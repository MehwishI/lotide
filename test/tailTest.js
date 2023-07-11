//const assertEqual = require('../assertEqual');
const tail = require("../tail");
const assert = require("chai").assert;

describe("#tail", () => {
  it("returns [] for []", () => {
    assert.deepEqual(tail([]), []);
  });

  it("returns [Lighthouse,Labs] for [Hello, Lighthouse, Labs]", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), [
      "Lighthouse",
      "Labs",
    ]);
  });
  it("returns 3 length for [Yo Yo, Lighthouse, Labs]", () => {
    assert.strictEqual(["Yo Yo", "Lighthouse", "Labs"].length, 3);
  });
});
