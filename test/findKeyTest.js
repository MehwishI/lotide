const findKey = require('../findKey');
const assertEqual = require('../assertEqual');

const result1 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 1 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 1) // => "noma"

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 1 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 1), "Blue Hill");

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 1 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 3), "noma");

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 1 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), "elBulli");