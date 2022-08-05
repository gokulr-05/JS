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
