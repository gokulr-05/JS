// document.getElementById("btn1").addEventListener("click", () => {
//   console.log("btn clicked");
// });

// function a() {
//   {
//     var a1 = 10;
//   }

//   function b() {
//     console.log(a1);
//   }

//   b();
// }

// a();

// ***************************************** execution context **********************************

// let a = 10;
// var b = 20;

// function func1() {
//   let func1_a = 30;
//   var func1_b = 40;
// }

// let func2 = function () {
//   let func2_a = 50;
//   var func2_b = 60;
// };

// let func3 = () => {
//   let func3_a = 70;
//   var func3_b = 80;
// };

// var func4 = function () {
//   let func2_a = 50;
//   var func2_b = 60;
// };

// var func5 = () => {
//   let func3_a = 70;
//   var func3_b = 80;
// };

// func1();
// func2();

// ********************************************************************* Hoisting ************************************

console.log(b);
console.log(c);
console.log(a);

let a = 10;
var b = 20;
const c = 30;
