const tail = function (arr) {
  let newarr = [];
  if (arr.length <= 1) {
    return [];
  } else {
    for (let i = 1; i < arr.length; i++) {
      newarr[i - 1] = arr[i];
    }
  }
  return newarr;
};
module.exports = tail;
