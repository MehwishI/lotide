const words = ["ground", "control", "to", "major", "tom"];

const map = function (array, callback) {
  const result = [];
  for (let item of array) {
    result.push(callback(item));
  }
  return result;
};
module.exports = map;
