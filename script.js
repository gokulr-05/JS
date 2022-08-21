// "use strict";

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

// console.log(b);
// console.log(c);
// console.log(a);

// let a = 10;
// var b = 20;
// const c = 30;

// func6();

// let func6 = function () {
//   console.log("func2");
// };

// func7();

// var func7 = () => {
//   console.log("func7");
// };

// ---------------------------global object-------------------------

// let a = 10;
// var b = 20;
// const c = 30;

// let f1 = function () {
//   let f1_a = 1;
// };

// f1();
// console.log("window=", window);
// console.log("window.b=", window.b);
// console.log("window.a=", window.a);

// ************************************ keyword "this" ***************************************

// console.log("this=", this);

// function f1() {
//   console.log("In f1 function: this=", this);
// }

// f1();

// -----------------------------------------------------------------------------------------------

// var a = 100;
// {
//   let a = 10;
//   console.log("variable in inner scope : a=", a);
// }
// console.log(a);

// -------------------------------------------------------------------------------------------------
//let f1 = () => {
//  console.log("this=", this);
//};

//f1();

//------------------------------------------------------------------------------------------------------

//function f1()
//{

//	var i;
//	for( i=0;i<5;++i)
//	{
//		console.log('this=',this);
//		console.log(i);
//	}
//	console.log('this=',this);
//	console.log('after for loop i=',i);

//}

//f1();
//console.log('after f1 function i=',i);
//console.log('this=',this);

//------------------------------------------------------------------------------------------------------

// let f1=()=>{
// 	var a=10;
// 	console.log(this);

// 	};
// f1();

// let f2=function()
// {
// 	var a=20;
// 	console.log(this);
// }
// f2();

// function f3()
// {
// 	var a=30;
// 	console.log(this);
// }
// f3();

//------------------------------------------------------------------------------------------------------
// setTimeout(() => {
//   console.log("timer");
// }, 5000);

// let x = (y) => {
//   console.log("x");
//   y();
// };
// x(function () {
//   console.log("y");
// });

//------------------------------------------------------------------------------------------------------

// function attachEventListener() {
//   let count = 0;

//   document.getElementById("btn1").addEventListener("click", function xyz() {
//     console.log("button clicked");
//     console.log("count", ++count);
//   });
// }

// attachEventListener();

//------------------------------------------------------------------------------------------------------

// let a = 10;
// console.log(a);

//------------------------------------------------------------------------------------------------------

// call in javascript

// let obj1 = {
//   first: "gowtham",
//   last: "karthick",
// };

// let obj2 = { first: "akshay", last: "saini" };

// let fullName = function () {
//   console.log(this);
//   console.log(`${this.first} ${this.last}`);
// };

// fullName.call(obj1);

// fullName.call(obj2);

//------------------------------------------------------------------------------------------------------

// function fun() {
//   console.log(this);
// }

// fun();
// fun.call(obj1);

//------------------------------------------------------------------------------------------------------

// let obj3 = { name: "akshay", nickName: " saini" };

// console.log(obj3);

//------------------------------------------------------------------------------------------------------

// let obj1 = {
//   first: "gowtham",
//   last: "karthick",
// };

// let obj2 = { first: "akshay", last: "saini" };

// let fullName = function () {
//   console.log(this);
//   console.log(`${this.first} ${this.last}`);
// };

// fullName();
// fullName.call(obj1);
// fullName.call(obj2);

// let greet = function (greeting) {
//   console.log(`${greeting} ${this.first}`);
// };

// greet.call(obj1, "hello");
// greet.apply(obj1, ["hello"]);

// let bindedFunc = greet.bind(obj1, "hello");
// bindedFunc();

//------------------------------------------------------------------------------------------------------

// currying in javascript

// METHOD 1: CLOSURE

// let fun1 = (a) => {
//   return (fun2 = (b) => {
//     return (fun3 = (c) => {
//       console.log(a + b + c);
//     });
//   });
// };

// fun1(10)(20)(30);

//METHOD 2: bind

// let fun = (a, b, c) => {
//   console.log("binded function=", a + b + c);
// };

// let fun1 = fun.bind(this, 10);
// let fun2 = fun1.bind(this, 20);
// let fun3 = fun2.bind(this, 30);

// fun3();

// ------------------------------------------------------------------------------

// let fun = (a, b, c) => {
//   console.log(a + b + c);
// };

// let fun1 = fun.bind(this, 10);

// fun1(20, 30);

// ------------------------------------------------------------------------------

// let arr = [1, 2, 3, 4, 5];

// console.log("arr=", arr);
// console.log("proto of arr =", arr.__proto__);
// console.log("proto of proto of arr=", arr.__proto__.__proto__);
// console.log(
//   "proto of proto of proto of arr=",
//   arr.__proto__.__proto__.__proto__
// );

// let obj = { name: "guru" };

// console.log("proto of obj=", obj.__proto__);
// console.log("obj=", obj);

// function func1() {
//   let a = 10;
// }

// console.log("proto of func1=", func1.__proto__);
// console.log("func1=", func1);

// let s = "gowtham";

// console.log("s=", s);
// console.log("proto of s=", s.__proto__);

// let a = 10;

// console.log("a=", a);
// console.log("proto of a", a.__proto__);

// ------------------------------------------------------------------------------

// Function.prototype.mine = function () {
//   console.log("mine function is executed");
// };

// let fun1 = () => {};

// ------------------------------------------------------------------------------

// EVENT BUBBLING

// document.getElementById("grandParent").addEventListener(
//   "click",
//   (e) => {
//     console.log("grandParent");
//   },
//   true
// );

// document.getElementById("parent").addEventListener(
//   "click",
//   (e) => {
//     console.log("parent");
//   },
//   false
// );
// document.getElementById("child").addEventListener(
//   "click",
//   (e) => {
//     console.log("child");
//   },
//   false
// );

// document.getElementById("btn").addEventListener("click", () => {
//   console.log("button clicked");
// });

// ------------------------------------------------------------------------------

// ------------------------------------------------------------------------------

// EVENT CAPTURING

// document.getElementById("grandParent").addEventListener(
//   "click",
//   (e) => {
//     console.log("grandParent");
//   },
//   true
// );

// document.getElementById("parent").addEventListener(
//   "click",
//   (e) => {
//     console.log("parent");
//   },
//   true
// );
// document.getElementById("child").addEventListener(
//   "click",
//   (e) => {
//     console.log("child");
//   },
//   true
// );

// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------

// EVENT BUBBLING

// document.getElementById("grandParent").addEventListener(
//   "click",
//   (e) => {
//     console.log("grandParent");
//   },
//   false
// );

// EVENT CAPTURING
// document.getElementById("parent").addEventListener(
//   "click",
//   (e) => {
//     console.log("parent");
//   },
//   true
// );

// EVENT CAPTURING
// document.getElementById("child").addEventListener(
//   "click",
//   (e) => {
//     console.log("child");
//   },
//   true
// );

// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------

// EVENT BUBBLING

// document.getElementById("grandParent").addEventListener(
//   "click",
//   (e) => {
//     console.log("grandParent");
//   },
//   false
// );

// EVENT BUBBLING
// document.getElementById("parent").addEventListener(
//   "click",
//   (e) => {
//     console.log("parent");
//   },
//   false
// );

// EVENT BUBBLING
// document.getElementById("child").addEventListener(
//   "click",
//   (e) => {
//     console.log("child");

//     // to stop propagation
//     e.stopPropagation();
//   },
//   false
// );

// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------

// EVENT CAPTURING

// document.getElementById("grandParent").addEventListener(
//   "click",
//   (e) => {
//     console.log("grandParent");
//     // to stop propagation
//     e.stopPropagation();
//   },
//   true
// );

// EVENT CAPTURING
// document.getElementById("parent").addEventListener(
//   "click",
//   (e) => {
//     console.log("parent");
//   },
//   true
// );

// EVENT CAPTURING
// document.getElementById("child").addEventListener(
//   "click",
//   (e) => {
//     console.log("child");
//   },
//   true
// );

// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------

// EVENT DELEGATION

// document.getElementById("grandParent").addEventListener(
//   "click",
//   (e) => {
//     console.log("grandParent");
//     console.log(e);
//   },
//   true
// );

// document.getElementById("parent").addEventListener(
//   "click",
//   (e) => {
//     console.log("parent");
//     console.log(e);
//   },
//   true
// );

// document.getElementById("child").addEventListener(
//   "click",
//   (e) => {
//     console.log("child");
//     console.log(e);
//   },
//   true
// );

// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------

// EVENT DELEGATION

// document.getElementById("grandParent").addEventListener("keypress", (e) => {
//   console.log(e);
// });

// ------------------------------------------------------------------------------

// EVENT DELEGATION

// document.getElementById("ul1").addEventListener(
//   "click",
//   (e) => {
//     console.log(e);
//     let text = e.target.innerText;

//     console.log(`${text} is clicked`);
//   },
//   false
// );

// document.getElementById("li1").addEventListener(
//   "click",
//   () => {
//     console.log("li1");
//   },
//   false
// );

// DEBOUNCING IN JAVASCRIPT

// MY OWN DEBOUNCING LOGIC

// let counter = 0;
// let prev = 0,
//   curr;
// function inp() {
//   let d = new Date();

//   curr = d.getTime();

// console.log(d.getTime());

//   if (curr - prev > 500) {
//     console.log("data fetched....", ++counter);
//   }

//   if (counter > 0) {
//     prev = curr;
//   }
// }

// ------------------------------------------------------------------------------

// ARGUMENTS IN ARROW FUNCTION

// let fun1 = () => {
//   console.log("this=", this);
//   console.log("argument=", arguments);
//   // console.log("argument=", arguments[0]);
// };

// let fun2 = function () {
//   console.log("arguments in function expression=", arguments[0]);
//   console.log("arguments in function expression=", arguments);
// };

// function fun3() {
//   console.log("arguments in function declaration=", arguments);
// }

// fun2(10, 20, 30);
// fun3(10, 20, 30);
// fun1(10, 20, 30);

// ------------------------------------------------------------------------------

// DEBOUNCING

// let debounce = (func, delay) => {
//   let debounceTimer;
//   return function () {
//     let context = this;
//     let args = arguments;
//     clearTimeout(debounceTimer);
//     debounceTimer = setTimeout(() => func.apply(context, args), delay);
//   };
// };

// let dd = debounce(function () {
//   console.log("debounce function executed");
// }, 1000);

// ------------------------------------------------------------------------------

// let d1 = document.getElementById("d1");

// d1.addEventListener(
//   "keyup",
//   debounce(function () {
//     console.log("debounce by add event listener");
//   }, 1000)
// );

// ------------------------------------------------------------------------------

// let dummy = function (func, delay) {
//   return () => {
//     let timer;
//     clearTimeout(timer);
//     timer = setTimeout(() => {
//       func.apply(this, arguments);
//     }, delay);
//   };
// };

// let dummy1 = dummy(() => {
//   console.log("dummy fetching");
// }, 1000);

// ------------------------------------------------------------------------------
// my own try

// let testingDebounce1 = function (func, delay) {
//   let debounceTimer;

//   return function () {
//     let context = this;
//     let args = arguments;
//     clearTimeout(debounceTimer);
//     debounceTimer = setTimeout(() => {
//       func.apply(context, args);
//     }, delay);
//   };
// };

// let testingDebounce = testingDebounce1(function () {
//   console.log("Testing Debounce");
// }, 1000);

// ------------------------------------------------------------------------------
// MY OWN THROTTLING

// let testThrottle1 = function (func, delay) {
//   let prev = 0,
//     curr;
//   return function (e) {
//     let d = new Date();
//     curr = d.getTime();

//     if (curr - prev > delay) {
//       prev = curr;
//       func(e.target.value);
//       // console.log(e.target.value);
//     }
//   };
// };

// let testthrottlingEle = document.getElementById("testthrottle");

// testthrottlingEle.addEventListener(
//   "keyup",
//   testThrottle1(() => {
//     console.log(`fetching data:`);
//   }, 1000)
// );

// ------------------------------------------------------------------------------

// let bdy = document.getElementById("div1");
// window.addEventListener("scroll", () => {
//   console.log(window.scrollX, window.scrollY);
// });

// let div1 = document.getElementById("div1");
// div1.addEventListener("scroll", (e) => {
//   console.log(e);
//   console.log(e.target.scrollTop);
// });

// window.addEventListener("resize", (e) => {
//   console.log(e.target);
//   console.log(
//     e.target.screen.availHeight,
//     e.target.screen.availWidth,
//     e.target.screen.height,
//     e.target.screen.width
//   );
//   console.log("resize");
// });

// ------------------------------------------------------------------------------

// THROTTLING
// MY OWN TRY
// WINDOW RESIZING

// let betterResize = function (func, delay) {
//   let bool = true;
//   return function () {
//     let context = this;
//     let args = arguments;
//     if (bool === true) {
//       setTimeout(() => {
//         func.apply(context, args);
//         bool = true;
//       }, delay);
//       bool = false;
//     }
//   };
// };

// window.addEventListener(
//   "resize",
//   betterResize(() => {
//     console.log("resizing...");
//   }, 1000)
// );

// ------------------------------------------------------------------------------
// THROTTLING
// MY OWN TRY
// BUTTON CLICK

// let throttleBtnFunc = function (func, delay) {
//   let bool = true;
//   return function () {
//     let context = this;
//     let args = arguments;
//     if (bool === true) {
//       setTimeout(() => {
//         func.apply(context, args);
//         bool = true;
//       }, delay);
//       bool = false;
//     }
//   };
// };

// let throttleBtn = document.getElementById("throttleBtn");
// throttleBtn.addEventListener(
//   "click",
//   throttleBtnFunc(function () {
//     console.log("Button Clicked");
//   }, 1000)
// );

// ------------------------------------------------------------------------------
// THROTTLING
// MY OWN TRY
// SCROLLING

// let throttleScroll = function (func, delay) {
//   let bool = true;

//   return function (e) {
//     let context = this;
//     let args = arguments;
//     if (bool === true) {
//       setTimeout(() => {
//         // console.log();
//         func.apply(context, args);
//         bool = true;
//       }, delay);
//       bool = false;
//     }
//   };
// };

// window.addEventListener(
//   "scroll",
//   throttleScroll(function () {
//     console.log("scrolling...");
//     console.log(window.scrollY);
//   }, 1000)
// );

// ------------------------------------------------------------------------------

// this button

// let thisButton = document.getElementById("thisKeyword");
// thisButton.addEventListener("click", function () {
//   console.log("this: ", this);
// });

// ------------------------------------------------------------------------------

//Polyfill for bind method
// let obj1 = { name: "obj1" };
// let obj2 = { name: "obj2" };
// let function1 = function (state, district) {
//   console.log(`My name is ${this.name} ${district} ${state}`);
// };

// Function.prototype.myBind = function (...args) {
//   let func = this;
//   let obj = args[0];
//   let arg1 = args.slice(1);

//   return function () {
//     func.call(obj, ...arg1, ...arguments);
//   };
// };

// let f1 = function1.myBind(obj1, "TamilNadu");

// f1("Namakkal");

// ------------------------------------------------------------------------------

// datatype of function

// let a = () => {};
// let b = function () {};
// function c() {}
// let d = function e() {};
// console.log(typeof a === "function");
// console.log(typeof b);
// console.log(typeof c);
// console.log(typeof d);

// ------------------------------------------------------------------------------
// check if the arguments are valid or not

// let a1 = undefined;
// let a2 = 10;
// console.log(typeof a1 !== "undefined");
// console.log(typeof a2 !== "undefined");

// ------------------------------------------------------------------------------

// let n = null;
// console.log(typeof n);
// let u;
// console.log(typeof u);

// console.log("null == undefined=", null == undefined);
// console.log("null === undefined=", null === undefined);

// console.log("10==100:", 10 == 100);

// ------------------------------------------------------------------------------

// // removeEventListener

// let bool1 = false;
// let count = 0;
// let rmv = document.getElementById("removeEventListener");
// rmv.addEventListener("click", (e) => {
//   console.log("remove-", ++count);
//   if (count > 5) {
//     rmv.removeEventListener("click", () => {});
//   }
// });

// ------------------------------------------------------------------------------

// FLATTEN THE ARRAY

// let arr1 = [
//   [1, 2],
//   [3, 4],
//   [5, 6, 7, 8, 9],
//   [10, 11, 12],
// ];

// let arr2 = [];

// for (let i of arr1) {
//   arr2 = [...arr2, ...i];
// }

// arr1 = [...arr2];

// console.log(arr1);
// console.log(arr2);

// let arr3 = [[[1, 2]], [[[3, 4]]], [5]];

// console.log("flattening using flat():");
// console.log(arr3.flat(10));

// flatMap()
// console.log("flatMap():");

// let arr4 = [[1], [[2]], , , , , , [4], 5];

// let arr4Res = arr4.flatMap((val, ind, arr) => {
//   return [[val * 2]];
// });
// console.log(arr4Res);

// let arr4Res = arr4
//   .map((val, ind, arr) => {
//     return [[val * 2]];
//   })
//   .flat(2);
// console.log(arr4Res);

// let arr4Res = arr4.flat(9);

// console.log(arr4Res);

// ------------------------------------------------------------------------------

// CUSTOM FLAT METHOD TO FLATTEN THE ARRAY

// METHOD 1: USING USER DEFINED FUNCTION

// let flatArr1 = [[1, 2], 3, [4, 5, 6], [[[7, 8, 9]]]];

// let myFlat = function (arr, depth = 1) {
//   let array1 = [];
//   arr.map((val) => {
//     if (Array.isArray(val) && depth > 0) {
//       array1.push(...myFlat(val, depth - 1));
//     } else {
//       array1.push(val);
//     }
//   });

//   return array1;
// };

// let flatRes = myFlat(flatArr1, 3);

// console.log("flatRes=", flatRes);
// ------------------------------------------------------------------------------

// METHOD 2: USING PROTOTYPE

// Array.prototype.myFlat1 = function (depth = 1) {
//   let arr = [...this];
//   // console.log("this=", this);

//   let array1 = [];
//   arr.map((val) => {
//     if (Array.isArray(val) && depth > 0) {
//       array1.push(...val.myFlat1(depth - 1));
//     } else {
//       array1.push(val);
//     }
//   });

//   return array1;
// };

// let res = flatArr1.myFlat1(3);
// console.log(res);

// ------------------------------------------------------------------------------

// let flat1 = [[1], [2, 3], [[4, 5]]];

// let flat2 = [].concat(...flat1);
// console.log("flat2=", flat2);

// let concat1 = [1, 2];
// let concat2 = [3, 4];
// let concat3 = [[5, 6]];

// let concatt = concat1.concat(concat2, concat3);
// console.log("concatt=", concatt);

// ------------------------------------------------------------------------------
// let , var , const

// var vara = 10;
// var vara = 20;
// console.log("vara=", vara);

// ------------------------------------------------------------------------------

// PREDICT THE OUTPUT

// function timeoutFunc() {
//   for (var i = 0; i < 3; ++i) {
//     setTimeout(function log() {
//       console.log(i);
//     }, i * 1000);
//   }
// }
// timeoutFunc();

// ------------------------------------------------------------------------------

// settimeout with closure

// function timeoutFunc1Timer(variable1) {
//   setTimeout(function log1() {
//     console.log("setTimeout using closure:", variable1);
//   });
// }

// function timeoutFunc1() {
//   for (var i = 0; i < 3; ++i) {
//     timeoutFunc1Timer(i);
//   }
// }

// timeoutFunc1();

// ------------------------------------------------------------------------------

// call , apply , bind

// let obj6 = {
//   name: "gokul",
//   wishes: function (word) {
//     console.log(`${this.name} says hello ${word}`);
//   },
// };

// let obj7 = { name: "gowtham" };

// obj6.wishes.call(obj7, "world");
// obj6.wishes.apply(obj7, ["world"]);
// let bindedFunc = obj6.wishes.bind(obj7, "world");
// bindedFunc();

// ------------------------------------------------------------------------------

//polyfill for composition of the function
// very very important

// let obj8 = { name: "gokul" };

// let extractName = function (obj) {
//   return obj.name;
// };

// let upper = function (str1) {
//   return str1.toUpperCase();
// };

// function addFive(a) {
//   return a + 5;
// }

// function subtractTwo(a) {
//   return a - 2;
// }

// function multiplyFour(a) {
//   return a * 4;
// }

// let composition = function (...functions) {
//   return function (val1) {
//     let finalValue = functions.reduceRight((acc, fn) => {
//       return fn(acc);
//     }, val1);

//     return finalValue;
//   };
// };

// let compose2 = composition(upper, extractName);
// let compose1 = composition(addFive, subtractTwo, multiplyFour);
// let resultValue2 = compose2(obj8);
// let resultValue1 = compose1(5);

// console.log("result value=", resultValue2);
// console.log("result value1=", resultValue1);

// ------------------------------------------------------------------------------
// polyfill for compose method without using reduceRight
// very very important

// let composition2 = function (...funcs) {
//   return function (x) {
//     let arg = x;
//     for (let i = funcs.length - 1; i >= 0; --i) {
//       arg = funcs[i](arg);
//     }

//     return arg;
//   };
// };

// let compose3 = composition2(upper, extractName);
// let compose4 = composition2(addFive, subtractTwo, multiplyFour);
// let resultValue3 = compose3(obj8);
// let resultValue4 = compose4(5);
// console.log("polyfill composition without reduceRight: ", resultValue3);
// console.log("polyfill composition without reduceRight: ", resultValue4);

// ------------------------------------------------------------------------------

// polyfill for pipe() method

// method 1: by using reduce() method

// let piping1 = function (...funcs) {
//   return function (arg) {
//     let res = funcs.reduce((acc, fn) => {
//       return fn(acc);
//     }, arg);

//     return res;
//   };
// };

// let pipe1 = piping1(extractName, upper);
// let pipe2 = piping1(multiplyFour, subtractTwo, addFive);

// let resultValue5 = pipe1(obj8);
// let resultValue6 = pipe2(5);
// console.log("piped value: ", resultValue5);
// console.log("piped value: ", resultValue6);

// ------------------------------------------------------------------------------

// method 2: piping without using reduce()

// let piping2 = function (...funcs) {
//   return function (arg) {
//     let result = arg;
//     for (let i = 0; i < funcs.length; ++i) {
//       result = funcs[i](result);
//     }

//     return result;
//   };
// };

// let pipe3 = piping2(extractName, upper);
// let resultValue7 = pipe3(obj8);
// console.log("piping without reduce(): ", resultValue7);

// let pipe4 = piping2(multiplyFour, subtractTwo, addFive);
// let resultValue8 = pipe4(5);
// console.log("piping without reduce(): ", resultValue8);

// ------------------------------------------------------------------------------
// PROMISE

// console.log("Promise:");

// let fetching1 = function async() {
//   let response = fetch("https://627f71ccbe1ccb0a465fd36c.mockapi.io/students");
//   console.log("response promise=", response);
//   console.log("typeof response promise=", typeof response);
// let data = response.json();
// };

// fetching1();

// ------------------------------------------------------------------------------

// hosting

// let hoisting1 = function () {
//   console.log("hoistingVar1=", hoistingVar1);
//   console.log("hoistingVar2=", hoistingVar2);

//   var hoistingVar1 = 10;
//   let hoistingVar2 = 20;
// };

// hoisting1();

// console.log("variableA=", variableA);
// console.log("variableB=", variableB);
// console.log("variableC=", variableC);

// var variableA = "gokul";
// let variableB = "guru";
// const variableC = "gowtham";

// ------------------------------------------------------------------------------

// let obj9 = {
//   name: "gokul",
//   display: () => {
//     console.log("display this=", this.name);
//   },
// };

// let obj10 = {
//   name: "guru",
// };

// obj9.display();

// let function2 = function () {
//   console.log("function this=", this);
// };

// function2();

// let arrow1 = () => {
//   let n = this;
//   console.log("arrow this=", this);
// };

// arrow1();

// let o = { name: "g" };

// console.log("o.a=", o.a);

// ------------------------------------------------------------------------------

// var a = 100;
// let obj11 = {
//   name: "gokul",
//   func8: function () {
//     let a = 10;
//     var b = 20;
//     const c = 30;
//     console.log("func8 this=", this);
//   },
// };

// obj11.func8();

// ------------------------------------------------------------------------------

// let func10 = () => {
//   console.log(this);
//   console.log("this === undefined=", this === undefined);
//   console.log("this===window", this === window);
// };

// let func11 = function () {
//   console.log(this);
//   console.log("this == undefined=", this == undefined);
//   console.log("this==window", this == window);
// };

// func11();
// ------------------------------------------------------------------------------

// var nameee = "guru";

// let obj12 = { name: "gokul" };

// let arrow2 = () => {
//   console.log("this.name=", this.name);
// };

// arrow2.call(obj12);

// ------------------------------------------------------------------------------

// var obj = {
//   name: "gokul",
//   display: () => {
//     console.log(this);
//   },
// };

// var obj1 = { name: "ABC" };

// obj.display.call(obj1);

// ------------------------------------------------------------------------------

// let obj13 = {
//   name: "gokul",
//   display: function () {
//     console.log("this keyword in function expression: ", this);
//   },
//   arrowDisplay: () => {
//     console.log("this keyword in arrow function: ", this);
//   },

//   invocation: function () {
//     this.display();
//     this.arrowDisplay();
//   },
// };

// obj13.invocation();

// obj13.display();
// obj13.arrowDisplay();
// ------------------------------------------------------------------------------

// let obj14 = {
//   name: "gokul",
//   func1: function () {
//     function innerFunc() {
//       console.log("inner function: this=", this);
//     }
//     innerFunc();
//     innerFunc.call(this);
//   },
// };

// obj14.func1();

// ------------------------------------------------------------------------------

// let obj15 = {
//   name: "obj15",
//   display: function () {
//     console.log("display function: this = ", this);
//   },
// };

// obj15.display();
// let TempVariable = obj15.display;
// TempVariable();
// ------------------------------------------------------------------------------

// let function3 = function () {
//   console.log("inside function3: this keyword: ", this);
// };

// let object1 = { name: "object1" };

// function3.call(object1);

// ------------------------------------------------------------------------------

// BINDING IN JAVASCRIPT:
// 1) default binding (direct invocation of function)
// 2) implicit binding (invocation of a method inside of an object)
// 3) explicit binding (indirect invocation)

// default binding:

// let function1 = function () {
//   console.log("this keyword inside function1:", this);
// };

// function1();

// implicit binding:

// let object2 = {
//   name: "object2",
//   function2: function () {
//     console.log("this keyword inside function2: ", this);
//   },
// };

// object2.function2();

// explicit binding
// explicit binding can be done using call(), apply(), bind()

// let object3 = {
//   name: "object3",
//   function3: function (a) {
//     console.log("parameter: ", a);
//     console.log("this keyword inside function3: ", this);
//   },
// };

// let object4 = {
//   name: "object4",
// };

// explicit binding: call()
// object3.function3.call(object4, 1);

// explicit binding using apply()
// object3.function3.apply(object4, [1]);

// explicit binding using bind()
// let func = object3.function3.bind(object4, 1);
// func();

// ------------------------------------------------------------------------------

// program

// let newFunc = function () {
//   console.log("this in newFunc: ", this);

//   this.name = "gokul";

//   this.display = function () {
//     console.log("display");
//   };
// };

// let obj = new newFunc();

// obj.display();

// ------------------------------------------------------------------------------

// function myFunction() {
//   return { myKey: 1 };
// }

// let obj1 = new myFunction();

// console.log(obj1);

// ------------------------------------------------------------------------------

// let outer = function () {
//   console.log("outer function: this:", this);
//   let inner = function () {
//     console.log("inner function : this:", this);
//   };
//   inner();
// };

// let objA = { myKey: 1, myOuter: outer };
// let objB = { myKey: 2 };
// let outerVariable = objA.myOuter;

// outer();
// objA.myOuter();

// outerVariable();
// outer.call(objB);

// ------------------------------------------------------------------------------

// function outer() {
//   let inner = () => {
//     console.log(this);
//   };
//   inner();
// }

// const objA = {
//   someKey: 1,
//   outer: outer,
// };
// const objB = {
//   someKey: 2,
// };

// In this example, each time when inner function is called,
// JS simply takes the this value from outer function
// outer(); // Window {}
// objA.outer(); // {someKey: 1, outer: ƒ} --> objA
// outer.call(objB); // {someKey: 2} --> objB

// ------------------------------------------------------------------------------

// function outer() {
//   console.log("this in outer() : ", this);
//   let inner = () => {
//     console.log("this in inner() : ", this);
//   };

//   inner();
// }

// let obj1 = { name: "gokul", display: outer };

// let obj2 = { name: "guru" };

// let method1 = obj1.display;
// // outer();

// // obj1.display();

// method1();

// ------------------------------------------------------------------------------

// console.log("a");
// console.log("b");
// setTimeout(() => {
//   console.log("set");
// }, 0);
// Promise.resolve(() => {
//   console.log("Pro");
// }).then((res) => {
//   res();
// });

// ------------------------------------------------------------------------------
// infinite currying

// let add = function (a) {
//   return function (b) {
//     if (b !== undefined) {
//       return add(a + b);
//     } else {
//       return a;
//     }
//   };
// };

// console.log(add(5)(2)(4)(5)());

// ------------------------------------------------------------------------------
// program

let calc = {
  total: null,
  add: function (a) {
    this.total = this.total === null ? a : this.total + a;
    return this;
  },
  multiply: function (b) {
    this.total = this.total === null ? b : this.total * b;
    return this;
  },
  subtract: function (c) {
    this.total = this.total === null ? c : this.total - c;
    return this;
  },
};

const result = calc.add(10).multiply(5).subtract(30).add(10);
// console.log(result.total);

// ------------------------------------------------------------------------------

// Implicit type coercion

// plus +

// let a = 3 + "5";
// console.log(typeof a, a);

// let b = "3" + 5;
// console.log(typeof b, b);

// let c = "3" + "5";
// console.log(typeof c, c);

// let d = +"5";
// console.log(typeof d, d);

// let d1 = +"a";
// console.log("alpha 1 : ", d1, typeof d1);

// let d2 = 1 + "a";
// console.log("alpha 2: ", d2, typeof d2);

// let d3 = "a" + 1;
// console.log("alpha 3:", d3, typeof d3);

// let d4 = "a" + "1";
// console.log("alpha 4: ", d4, typeof d4);

// minus -

// let e = 3 - "5";
// console.log(typeof e, e);

// let f = "3" - 5;
// console.log(typeof f, f);

// let g = "3" - "5";
// console.log(typeof g, g);

// let h = -"5";
// console.log(typeof h, h);

// let h1 = -"a";
// console.log("alpha 1 : ", h1, typeof h1);

// let h2 = 1 - "a";
// console.log("alpha 2: ", h2, typeof h2);

// let h3 = "a" - 1;
// console.log("alpha 3:", h3, typeof h3);

// let h4 = "a" - "1";
// console.log("alpha 4: ", h4, typeof h4);

// multiply *

// let i = 3 * "5";
// console.log(typeof i, i);

// let j = "3" * 5;
// console.log(typeof j, j);

// let k = "3" * "5";
// console.log(typeof k, k);

// let l =  * "3";
// console.log(l);  syntax error

// division /

// let m = 15 / "5";
// console.log(typeof m, m);

// let n = "15" / 5;
// console.log(typeof n, n);

// let o = "15" / "5";
// console.log(typeof o, o);

// let p=*'5';
// console.log(typeof p ,p);   syntax error

// ------------------------------------------------------------------------------

// logical operators

// OR operator

// let a1 = 0;
// let a2 = null;
// let a3 = undefined;
// console.log(a1 || a2 || a3);

// // AND operator

// let b1 = 2;
// let b2 = 3;
// let b3 = 4;
// console.log(b1 && b2 && b3);

// let c1 = 2;
// let c2 = 0;
// let c3 = 10;
// console.log(c1 && c2 && c3);

// let dd1 = null;
// let dd2 = 0;
// let dd3 = 5;
// console.log(dd1 && dd2 && dd3);

// // comparision operator

// let com1 = 12,
//   com2 = "12";
// console.log(com1 == com2);

// console.log(com1 === com2);

// NaN

// console.log(Number("1"));
// console.log(
//   "*******************************NaN******************************8"
// );
// console.log(isNaN("hello"));
// console.log(isNaN("1"));
// console.log(isNaN("1a"));
// console.log(isNaN(true));
// console.log(isNaN(false));
// console.log("null=", isNaN(null));
// console.log("undefined=", isNaN(undefined));

// // ------------------------------------------------------------------------------
// function functionnn1() {
//   let a = 10;
//   console.log(this);
// }

// let functionnn2 = function () {
//   console.log(this);
//   let b = 10;
// };

// functionnn1();
// functionnn2();

// ------------------------------------------------------------------------------

// let object5 = {
//   name: "gokul",
//   method1: function () {
//     console.log(this);
//   },
// };

// let objectVariable = object5.method1;

// let object6 = {
//   name: "gowtham",
//   method1: objectVariable,
// };

// object5.method1();
// object6.method1();

// ------------------------------------------------------------------------------

// currying in javascript

// let add = function (a, b) {
//   return a + b;
// };

// let curryingAdd = function (a) {
//   return function (b) {
//     return a + b;
//   };
// };

// let addVariable1 = add(5, 6);
// console.log(addVariable1);

// let addVariable2 = curryingAdd(5)(6);
// console.log(addVariable2);

// let addVariable3 = add(5);
// console.log(addVariable3);

// let addVariable4 = curryingAdd(5);
// console.log(addVariable4);

// ------------------------------------------------------------------------------

// let globala = 10;

// let globalFunc = function () {
//   console.log(globala);
// };

// globalFunc();

// ------------------------------------------------------------------------------

// var Person = function (pName) {
//   var name = pName;

//   this.getName = function () {
//     return name;
//   };
// };

// var person = new Person("Neelesh");
// console.log(person);
// console.log(person.getName());
// console.log(typeof Person);
// console.log(typeof person);

// ------------------------------------------------------------------------------

// let func1 = function () {
//   let a = "gokul";

//   console.log(a);
// };

// func1();
// ------------------------------------------------------------------------------

// let arr = [1, 2, 3, 4, 5];
// console.log(arr);

// console.log(arr);

// let func2 = function () {
//   let a = "func2";
//   // console.log(this);
// };

// console.log(func2);
// func2();

// ------------------------------------------------------------------------------
// let z = 100;
// console.log(z);

// console.log(Math);

// let z = 10;
// z();

// ------------------------------------------------------------------------------

// CONSTRUCTOR FUNCTION IN JAVASCRIPT

// let Graduate = function (name, age, profession) {
//   this.name = name;
//   this.age = age;

//   this.profession = profession;
// };

// let person1 = new Graduate("gokul", 21, "FrontEnd Developer");
// let person2 = Graduate("guru", 22, "QA");

// console.log(person1);
// console.log(person2);
// console.log(window);

// ------------------------------------------------------------------------------

// let obj1 = {
//   name: "object1",
//   method1: function () {
//     console.log(this);
//     let aa = () => {
//       console.log("method1:");
//       console.log(this);
//     };

//     aa();
//   },
// };

// let obj2 = { name: "object2" };

// obj1.method1();

// ------------------------------------------------------------------------------

// let arr11 = [1, 2];
// console.log(arr11);

// console.log(
//   "*******************************string****************************************"
// );
// let s = "gokul";
// console.log(typeof s);

// ------------------------------------------------------------------------------

// let arr1 = [1, 2, 3, 4, 5];

// let obj = Object.getPrototypeOf(arr1);
// console.log(obj);

// let obj11 = Object.getPrototypeOf(obj);
// console.log(obj11);

// let obj2 = Object.getPrototypeOf(obj11);
// console.log(obj2);

// ------------------------------------------------------------------------------

// Array.prototype.additionOperation = function (...arg1) {
//   let sum = 0;

//   for (let i = 0; i < arg1.length; ++i) {
//     sum += arg1[i];
//   }
//   console.log(sum);
//   return sum;
// };

// let arr1 = [1, 2, 3, 45];

// console.log(arr1);

// console.log(Object.getPrototypeOf(arr1));

// let arr2 = ["gokul", "hp"];
// arr2.prototype.subtractionOperation = function () {
//   console.log("this is subtraction operation");
// };

// console.log(arr2);

// console.log(Function.prototype);

// Function.prototype.function1 = function () {
//   console.log("this is function prototype");
// };

// let f11 = function () {
//   console.log("f1");
// };

// // ------------------------------------------------------------------------------
// let obj = new Object({ name: "gokul", profession: "FrontEnd Developer" });

// console.log(obj);

// ------------------------------------------------------------------------------

// different ways of creating the object:
// 1) object literal
// 2) by directly using object instance
// 3) by using constructor function

// object literal :

// let o1 = { name: "gokul", profession: "FrontEnd Developer" };
// console.log(o1);

// // by directly using object instance
// let o2 = new Object({ name: "gokul", profession: "FrontEnd Develper" });
// console.log(o2);

// // by using constructor function

// let Person1 = function (name, profession) {
//   this.name = name;
//   this.profession = profession;
// };

// let o3 = new Person1("gokul", "FrontEnd Developer");
// console.log(o3);

// ------------------------------------------------------------------------------
// promise

// let promiseFunction = function (...arg) {
//   return new Promise((resolve, reject) => {
//     if (arg.length > 3) {
//       reject("The arguments length should be less than or equal to 3");
//     } else if (arg.length === 3) {
//       let sum = 0;
//       for (let i = 0; i < arg.length; ++i) {
//         sum = sum + arg[i];
//       }
//       resolve(`The sum is ${sum}`);
//     }
//   });
// };

// let additionVal = promiseFunction(5, 2, 6)
//   .then((r) => {
//     console.log("The output:", r);
//   })
//   .catch((r1) => {
//     console.log("The error:", r1);
//   });
// console.log(additionVal);

// ------------------------------------------------------------------------------

// promise

// let promiseFunc2 = function (x) {
//   return new Promise((myresolve, myreject) => {
//     if (x === 0) {
//       myresolve("my promise is got resolved");
//     } else if (x !== 0) {
//       myreject("my promise is got rejected");
//     }
//   });
// };

// let val = promiseFunc2(90).then(
//   function (val) {
//     console.log(val);
//   },
//   function (err) {
//     console.log(err);
//   }
// );
// console.log(val);

// ------------------------------------------------------------------------------

// promise

// console.log("before promise");

// setTimeout(() => {
//   console.log("Timeout");
// }, 0);

// let promise1 = new Promise((resolve, reject) => {
//   if (1 + 1 === 2) {
//     resolve("My promise is resolved");
//     console.log("inside promise obj");
//   } else {
//     reject("My Promise is Rejected");
//   }
// });

// promise1
//   .then((msg) => {
//     console.log(msg);
//   })
//   .catch((msg) => {
//     console.log(msg);
//   });

// console.log("After Promise");

// ------------------------------------------------------------------------------

// Promise.all()

// let p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise 1 resolved");
//   }, 5000);
// });
// let p2 = new Promise((resolve, reject) => {
//   reject("Promise 2 rejected");
// });
// let p3 = new Promise((resolve, reject) => {
//   resolve("Promise 3 resolved");
// });

// Promise.all([p1, p2, p3])
//   .then((msg) => {
//     console.log("then():" + "Promise.all:" + msg);
//   })
//   .catch((msg) => {
//     console.log("catch():" + "Promise.all:" + msg);
//   });

// Promise.race([p1, p2, p3])
//   .then((msg) => {
//     console.log("then():" + "Promise.race:" + msg);
//   })
//   .catch((msg) => {
//     console.log("catch():" + "Promise.race:" + msg);
//   });

// ------------------------------------------------------------------------------

// function funa(a) {
//   console.log(a, "a");
//   console.log(a + "a");
// }

// let arr = ["english", "england"];

// funa(arr);

// ------------------------------------------------------------------------------

// console.log("Before Promise");

// let promise1 = new Promise((resolve, reject) => {
//   resolve("The promise resolved");
//   console.log("Inside Promise ");
// });

// let function1 = async function () {
//   let response = await promise1;
//   console.log("The Async Await handling: " + response);
// };

// function1();

// console.log("After Promise");

// ------------------------------------------------------------------------------

// console.log("Before Promise");

// let promiseFunction = function () {
//   return new Promise((resolve, reject) => {
//     resolve("Promise Resolved");
//     console.log("Inside Promise");
//   });
// };

// let function1 = async function () {
//   let response = await promiseFunction();
//   console.log(response);
// };

// function1();

// console.log("After Promise");

// ------------------------------------------------------------------------------

// function Person(name) {
//   this.name = name;
// }

// Person.prototype.getName = function () {
//   console.log(this.name);
// };

// let p = new Person("yamaka");
// console.log(p);
// p.getName();

// function Car(name) {
//   this.name = name;
// }

// let c = new Car("polo");
// c.getName();

// ------------------------------------------------------------------------------

// function based prototypal inheritance

// function Bike(name, color) {
//   this.name = name;
//   this.color = color;
// }

// Bike.prototype.getDetails = function () {
//   console.log(`${this.name} is ${this.color}`);
// };

// let o1 = new Bike("Yamaka", "black");
// console.log(o1);
// o1.getDetails();

// ------------------------------------------------------------------------------

// class based inheritance

// class Bike1 {
//   constructor(name, color) {
//     this.name = name;
//     this.color = color;
//   }

//   getDetails() {
//     console.log(`${this.name} is ${this.color}`);
//   }
// }

// let o2 = new Bike("pulsar", "red");
// console.log(o2);
// o2.getDetails();

// ------------------------------------------------------------------------------

// let x = 10;
// console.log(x);

// delete x;
// console.log(x);
// ------------------------------------------------------------------------------

// let f1 = function (a, a) {
//   console.log(a);
// };
// f1("gokul", "guru");

// let x = 10;
// console.log(x);
// delete x;

// ------------------------------------------------------------------------------

// memoization

let memoizedFuncAdd100 = function () {
  let cachedValues = {};

  return function (param1) {
    if (param1 in cachedValues) {
      return cachedValues[param1];
    } else {
      let val = param1 + 100;
      cachedValues[param1] = val;
      return cachedValues[param1];
    }
  };
};

let memoizedFunc = memoizedFuncAdd100();
console.log(memoizedFunc(123));
console.log(memoizedFunc(123));

// ------------------------------------------------------------------------------

// generator function

function* generatorFunc() {
  yield 1;
  yield 2;
  console.log("inside the generator function");
  yield 3;
  return 5;
  // yield 10;
}

let generate = generatorFunc();
// console.log(generate);

console.log(generate.next());
console.log(generate.next());
console.log(generate.next());
console.log(generate.next());
console.log(generate.next());

// ------------------------------------------------------------------------------

// function* generatorFunc2() {
//   let count = 10;
//   for (let i = 0; i < 3; ++i) {
//     yield i;
//     console.log("inside for loop: ", i);
//   }

//   return count;
// }

// let generate2 = generatorFunc2();
// console.log(generate2.next());
// console.log(generate2.next());
// console.log(generate2.next());
// console.log(generate2.next());

// ------------------------------------------------------------------------------

// set

// let arr = [1, 5, 2, 6, 8, 3, 10, 3, 10, 2];
// console.log("arr=" + arr);
// let set1 = new Set(arr);
// console.log('set1=',set1);

// ------------------------------------------------------------------------------

// set

// let set1 = new Set([1, 2, 3, 4, 5]);
// console.log(set1);

// let set2 = new Set(["gokul", "guru"]);
// console.log(set2);

// let set3 = new Set([{ 1: "gokul" }, { 2: "guru" }]);
// console.log(set3);

// let set4 = new Set([
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ]);

// console.log(set4);

// ------------------------------------------------------------------------------

// let arr = [1, 2, 3];
// let set5 = new Set([1, 2, 3]);
// console.log("aaa:",set5.has(1));

// // set
// console.log("Set");
// let obj2 = { 1: "gokul" };
// let weakSet2 = new Set([obj2, { 2: "guru" }]);
// console.log(weakSet2.has(obj2));
// console.log(weakSet2.has({ 1: "gokul" }));

// // weakSet
// console.log("Weakset");
// let obj1 = { 1: "gokul" };
// let weakSet1 = new WeakSet([obj1, { 2: "guru" }]);
// console.log(weakSet1.has(obj1));
// console.log(weakSet1.has({ 1: "gokul" }));

// ------------------------------------------------------------------------------

// let obj1 = {message:"Hello world"};
// const newSet3 = new WeakSet([obj1]);
// console.log(newSet3.has(obj1));

// ------------------------------------------------------------------------------

// // set

// // primitive data type

// // number
// let set1 = new Set([1, 2, 3, 4, 5]);

// console.log("set1=", set1);
// console.log(set1.has(3));

// // string
// let set2 = new Set(["gokul", "guru"]);
// console.log("set2=", set2);
// console.log(set2.has("gokul"));

// // non primitive
// // array

// let arr1 = [3, 4];
// let set4 = new Set([[1, 2], arr1]);
// console.log("set4=", set4);
// console.log(set4.has([1, 2]));
// console.log(set4.has(arr1));

// // object
// let obj1 = { 1: "gokul" };
// let set3 = new Set([obj1, { 2: "guru" }]);
// console.log("set3=", set3);
// console.log(set3.has(obj1));

// console.log(set3.has({ 2: "guru" }));

// // ------------------------------------------------------------------------------
// // weakSet

// // weakset has only object data type which is non primitive

// let obj2 = { 2: "guru" };
// let weakSet1 = new WeakSet([{ 1: "gokul" }, obj2]);
// console.log("weakSet1=", weakSet1);
// console.log(weakSet1.has({ 1: "gokul" }));
// console.log(weakSet1.has(obj2));

// // ------------------------------------------------------------------------------

// let obj = { 2: "gokul", 1: "guru", 3: "gopi" };
// obj[2]="gokul";
// obj[1]="guru";
// obj[3]='gopi'
// console.log(obj);

// // ------------------------------------------------------------------------------

// let map1 = new Map();

// map1.set(1, "gokul");
// console.log("map1=", map1);
// console.log(map1.get(1));
// map1.set(2, "guru");

// console.log(map1);

// console.log(map1.keys());
// console.log(map1.values());
// console.log(map1.entries());
// console.log(map1.size);
// console.log(Object.getPrototypeOf(map1));
// console.log(Object.isFrozen);
// console.log(map1);

// // Object.setPrototypeOf(map1, { 1: "gokul" });
// console.log(map1);

// // ------------------------------------------------------------------------------

let o = { 1: "gokul" };

let obj = { o: 1 };
console.log(obj);

let map2 = new Map();

map2.set(o, 100);
console.log(map2);

// // ------------------------------------------------------------------------------

// object destructuring in javascript

let obj1 = { objName: "kiran", objAge: 55, objStrength: "skills" };

let { objName: name, objAge: age, objStrength: strength } = obj1;
console.log(name, age, strength);

let fun11 = function () {
  let a = 5;
};

console.log(typeof fun11);

let s = "gokul";
console.log(typeof s);

// // ------------------------------------------------------------------------------

// object

let object1 = {
  firstName: "gokul",
  lastName: "R",
  getName: function () {
    console.log(`${this.firstName} ${this.lastName}`);
  },
  address: {
    area: "thillai",
    street: "MGR street",
  },

  dir: ["north", "south", "east"],

  set1: new Set([]),
  map1: new Map([]),
};

console.log(object1);

let map1 = new Map([
  ["firstName", "gokul"],
  [
    "getName",
    function () {
      console.log(map1.get("firstName"));
    },
  ],
]);
// console.log(map1.get("firstName"));
// console.log(map1.get("getName"));
map1.get("getName")();

// // ------------------------------------------------------------------------------

// let object3 = {
//   name: "prototype object name",
//   getName: function () {
//     console.log(this.name);
//   },
// };

// let object2 = Object.create(object3);
// console.log(object2);
// console.log(object2.name);
// object2.getName();

// object2.name = "gokul";

// object2.getName();
// let object4 = { ...Object.getPrototypeOf(object2) };
// console.log(object4);
// let object5 = Object.getPrototypeOf(object4);
// console.log(object5);
// let object6 = Object.getPrototypeOf(object5);
// console.log(object6);

// // ------------------------------------------------------------------------------

let object2 = { name: "object2" };

let object3 = Object.create(object2);
object3.name = "object3";
console.log(object3.name);

// // ------------------------------------------------------------------------------

// object literal

let person = {
  firstname: "gokul",
  lastname: "R",
  getDetails: function () {
    console.log(person.firstname);
  },
  address: {
    street: "thillai nagar",
  },
};

// constructor

let Person1 = function (name, age) {
  this.name = name;
  this.age = age;
};
let object4 = new Person1("gokul", 15);

// Object.create()
let object5 = { name: "object5" };
let object6 = Object.create(object5);

// // ------------------------------------------------------------------------------

// class

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   getDetails() {
//     console.log(this.name + " " + this.age);
//   }
// }

// let person1 = new Person("gokul", 15);
// console.log(person1);
// person1.getDetails();

// // ------------------------------------------------------------------------------
// PERFECT PROGRAM FOR PROTOTYPAL INHERITANCE

let Person = function (name, birthYear) {
  this.name = name;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  return 2022 - this.birthYear;
};

Person.prototype.achievements = { rewards: "10000", awards: "Oscar Award" };

Person.prototype.marks = [100, 99, 89, 100];

let matilda = new Person("matilda", 1963);

console.log(matilda);
// console.log(matilda.calcAge());

let david = new Person("david", 1988);

console.log(david);
// console.log(david.calcAge());

console.log(matilda);
console.log(Person.prototype);
console.log(matilda.__proto__);

console.log(Person.prototype);
console.log(matilda);

let obj3 = { hifi: "hifi" };
Person.prototype = obj3;

let obj4 = { namaste: "javascript " };

matilda.__proto__ = obj4;
console.log(matilda);

matilda.__proto__.salam = "salam Bhai";

console.log(matilda);

matilda.__proto__ = [1, 2, 3];
console.log(matilda);

matilda.__proto__ = function () {
  console.log("hello");
};

console.log(matilda);

Person.prototype = [100, 101, 102];
console.log(Person.prototype);

Person.prototype.func = function () {
  console.log("Bae");
};

Person.prototype.obj = {
  baby: "is it ok?",
};

Person.prototype = { namePP: "prototying object" };

console.log(Person.prototype);

let p1 = new Person("p", 2001);
console.log(p1.__proto__);
console.log(Person.prototype.isPrototypeOf(p1));
console.log(p1.__proto__.isPrototypeOf(Person.prototype));
console.log(p1.__proto__.isPrototypeOf(p1.__proto__));
console.log(Person.prototype.isPrototypeOf(Person.prototype));
console.log(p1 instanceof Person);
console.log(p1);
console.log(p1.hasOwnProperty("name"));

console.log(Object.prototype.constructor);

// ES6 CLASSES

class PersonCl {
  constructor(name, birthYear) {
    this.name = name;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2022 - this.birthYear);
  }
}

PersonCl.prototype.greet = function () {
  console.log(`Hey ${this.name}`);
};

let mathew = new PersonCl("mathew", 1988);

console.log(mathew);

mathew.calcAge();
mathew.greet();

// getter and setter in javascript objects

let object7 = {
  name: "Rolex",
  birthYear: 1977,
  get getName() {
    return this.name;
  },

  set setName(val) {
    this.name = val;
  },
};

console.log(object7);
console.log(object7.getName);
object7.setName = "Dilli";
console.log(object7.getName);
console.log(object7);

let object8 = {
  name: "JD",
  get name1() {
    return this.name;
  },
  set name1(val) {
    this.name = val;
  },
};

console.log(object8);
object8.name1 = "Bhavani"; //setter
console.log(object8.name1); //getter

let Vehicle = function (name) {
  this.name = name;
};

Vehicle.prototype.welcome = function () {
  console.log("Welcome vehicle");
};

Vehicle.greeting = function () {
  console.log(this);
  console.log("Hey, This is my vehicle");
};

let v1 = new Vehicle("Benz");

console.log(v1);
console.log(Vehicle.greeting);

class Jeep {
  constructor(name) {
    this.name = name;
  }
  driving() {
    console.log("driving");
  }
  static wheeling() {
    console.log("Wheeling");
  }
}

let jeep1 = new Jeep("jeep");
console.log(jeep1);

Jeep.wheeling();

// object.create()
let object10 = {
  calcAge: function () {
    console.log(2022 - this.birthYear);
  },
};

let object11 = Object.create(object10);
object11.birthYear = 1988;

object11.calcAge();

// inheritance between constructor function

let Person2 = function (name, birthYear) {
  this.name = name;
  this.birthYear = birthYear;
};

Person2.prototype.calcAge = function () {
  console.log(2022 - this.birthYear);
};

let Student = function (name, birthYear, subject) {
  Person2.call(this, name, birthYear);
  this.subject = subject;
};
Student.prototype = Object.create(Person2.prototype);

Student.prototype.intro = function () {
  console.log(`Hi! ${this.name}`);
};

let student1 = new Student("guru", 2001, "CS");
student1.intro();
console.log(student1);
student1.calcAge();

// inheritance between classes
class PersonClass1 {
  constructor(name, birthYear) {
    this.name = name;
    this.birthYear = birthYear;
  }
  calcAge() {
    console.log(2022 - this.birthYear);
  }
}

class StudentClass1 extends PersonClass1 {
  constructor(name, birthYear, subject) {
    super(name, birthYear);
    this.subject = subject;
  }

  greeting() {
    console.log(`Hi! ${this.name}`);
  }
}

let stud1 = new StudentClass1("gowtham", 1990, "CS");
stud1.calcAge();
stud1.greeting();

class Bank {
  constructor(owner, currency, pin) {
    this.owner;
    this.currency = currency;
    this.pin = pin;
    this.locale = navigator.language;
    console.log(this.locale);

    // directly adding the method into each and every object
    this.getting = function () {
      console.log("getting");
    };
  }

  // adding method to prototype of object
  getting1() {
    console.log("getting1");
  }

  // static method belongs to the class(constructor function)
  static getting2() {
    console.log("getting2");
  }
}

let bank1 = new Bank("rocky", "EURO", "0000");

console.log(bank1);

// // ------------------------------------------------------------------------------

// let Car = function (company, model) {
//   this.company = company;
//   this.model = model;
// };

// Car.prototype.name = this.company;

// Car.prototype.nameFunc = function () {
//   this.name = this.company;
// };

// let polo = new Car("polo", 2015);
// console.log(polo);
// polo.nameFunc();
// console.log(polo);

// // ------------------------------------------------------------------------------

// let Bike = function (company, model) {
//   this.company = company;
//   this.model = model;
// };

// let b1 = new Bike("yamaka", 2018);
// console.log(b1);
