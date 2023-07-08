const countOnly = require("../countOnly");
const assert = require("chai").assert;

const firstNames = [
  "Karl",
  "Salima",
  "Fang",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe",
];

describe("#countOnly", () => {
  it("returns undefined for { Jason: true, Karima: true,Fang: true,Agouhanna: false }", () => {
    assert.strictEqual(
      countOnly(firstNames, {
        Jason: true,
        Karima: true,
        Fang: true,
        Agouhanna: false,
      })["Karima"],
      undefined
    );
  });
});

const result1 = countOnly(firstNames, {
  Jason: true,
  Karima: true,
  Fang: true,
  Agouhanna: false,
});

// assertEqual(result1["Jason"], 1);
// assertEqual(result1["Karima"], undefined);
// assertEqual(result1["Fang"], 2);
// assertEqual(result1["Agouhanna"], undefined);
