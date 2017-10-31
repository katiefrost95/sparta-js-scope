// var outsideVariable = 5;
//
// function doSomething () {
//   var insideVariable = "inside";
//   console.log(outsideVariable)
// }
// doSomething();
// console.log(insideVariable)

// function firstFunction() {
//   console.log("I am the first function");
// }
//  function secondFunction() {
//    firstFunction();
//    console.log
//    ("I am the second function");
//    function insideSecondFunction() {
//      console.log("I'm inside the second function")
//    }
//    insideSecondFunction();
// }
// secondFunction();

function joinStringAndPrint (string1, string2) {
  var newString = string1 + string2;

//Declaring the function
  function printString (string) {
    console.log(string);
  }
//call the function here
  printString (newString);

  return newString;
}

var hello = "hello, ";
var world = "world";
joinStringAndPrint (hello, world);
