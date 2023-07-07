const assertEqual = function (actual,expected){

  if(actual===expected)
  {
    console.log(`Assertion Passed!, ${actual} === ${expected}`); 
    return true;
  }
  else 
  {
    console.log(`Assertion Failed!, ${actual} !== ${expected}`); 
    return false;
  }
  

};


// assertEqual("Lighthouse labs","bootcamp");

// assertEqual(1,1);
// assertEqual(1,"abc");
// assertEqual(1,33);
module.exports = assertEqual;