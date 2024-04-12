//to learn function you must learn memory management

// re-usable block of codes --> functions

// function twoNumSum(a, b) {
//   console.log(a + b);
// }
// twoNumSum(1, 2);

//spread returns array

// function claculateCartPrice(...num1) {
//   return num1;
// }
// //... is spread notation so it returns values as elements of array
// console.log(claculateCartPrice(100, 200, 400, 500));

//scopes

//global scopes --> everyone can access this value
//block scopes reside inside curly brackets

//nested functions:
//inner function can access the main function
//main function cannot access the inner function variables

//Example:

// function one() {
//   let var1 = "random1";

//   function two() {
//     let var2 = " random2";
//     let var3 = var1 + var2;
//     console.log(var3);
//   }

//   let var4 = var1 + var2; // error var2 is not defines because of scope
//   two();
// }
// one();
