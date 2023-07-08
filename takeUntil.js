const takeUntil = function (array, callback) {
  const result = [];
  for (let item of array) {
    if (!callback(item)) {
      result.push(item);
    } else return result;
  }
  return result;
};


module.exports = takeUntil;
