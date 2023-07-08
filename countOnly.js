// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function (allItems, itemsToCount) {
  const obj = {};

  for (let element of allItems) {
    if (
      itemsToCount.hasOwnProperty(element) &&
      itemsToCount[element] === true
    ) {
      if (obj.hasOwnProperty(element)) {
        obj[element]++;
      } else {
        obj[element] = 1;
      }
    }
  }
  return obj;
};

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

module.exports = countOnly;
