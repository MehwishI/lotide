const flatten = function (myarr) {
  let newarr = [];
  for (let element of myarr) {
    if (Array.isArray(element)) {
      newarr = newarr.concat(flatten(element));
    } else {
      newarr.push(element);
    }
  }
  return newarr;
};
module.exports = flatten;
