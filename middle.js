const middle = function (myarr) {
  let newarr = [];
  if (myarr.length <= 2) {
    return [];
  }
  if (myarr.length % 2 === 0) {
    newarr.push(myarr[myarr.length / 2 - 1]);
    newarr.push(myarr[myarr.length / 2]);
  } else {
    newarr.push(myarr[myarr.length / 2 - 0.5]);
  }
  return newarr;
};

console.log(middle([]));
console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []
console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]
console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]

module.exports = middle;
