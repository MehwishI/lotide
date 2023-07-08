const letterPositions = function (sentence) {
  const result = {};

  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
      if (!result[sentence[i]]) {
        result[sentence[i]] = [i];
      } else {
        result[sentence[i]].push(i);
      }
    }
  }

  return result;
};

module.exports = letterPositions;
