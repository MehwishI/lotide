const assertEqual = function (actual,expected){

  if(actual===expected)
  {
    console.log("Assertion Passed! "+ actual +" === "+expected); 
  }
  else 
  {
    console.log("Assertion Failed! "+ actual +" !== "+ expected); 
  }
  

};

assertEqual("Lighthouse labs","bootcamp");

assertEqual(1,1);
assertEqual(1,"abc");
assertEqual(1,33);