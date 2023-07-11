const without = function (array, itemsToRemove) {
  let newarr = [];

  for (let element of array) {
    if (!itemsToRemove.includes(element)) {
      //includes uses === operator (matches type and value both)
      newarr.push(element);
    }
  }
  return newarr;
};
module.exports = without;
