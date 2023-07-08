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
module.exports = middle;
