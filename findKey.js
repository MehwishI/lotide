const findKey = function (obj, callback) {
  for (let key of Object.keys(obj)) {
    if (callback(obj[key])) {
      return key;
    }
  }
  return undefined;
};
module.exports = findKey;
