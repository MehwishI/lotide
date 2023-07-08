const findKeyByValue = function (obj, valueToFind) {
  for (let key of Object.keys(obj)) {
    if (obj[key] === valueToFind) {
      return key;
    }
  }
  return undefined;
};

module.exports = findKeyByValue;
