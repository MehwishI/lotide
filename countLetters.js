const countLetters = function (str) {
  let obj = {};
  let count = 0;
  console.log(str);

  for (let letter of str) {
    if (letter !== " ") {
      if (!obj.hasOwnProperty(letter)) {
        obj[letter] = 1;
      } else {
        obj[letter] = obj[letter] + 1;
      }
    }
  }
  return obj;
};

module.exports = countLetters;
