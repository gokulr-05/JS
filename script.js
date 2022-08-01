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

let debounce = (func, delay) => {
  let debounceTimer;
  return function () {
    let context = this;
    let args = arguments;
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => func.apply(context, args), delay);
  };
};

let dd = debounce(function () {
  console.log("debounce function executed");
}, 1000);

// ------------------------------------------------------------------------------

let d1 = document.getElementById("d1");

d1.addEventListener(
  "keyup",
  debounce(function () {
    console.log("debounce by add event listener");
  }, 1000)
);

// ------------------------------------------------------------------------------

let dummy = function (func, delay) {
  return () => {
    let timer;
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, arguments);
    }, delay);
  };
};

let dummy1 = dummy(() => {
  console.log("dummy fetching");
}, 1000);

// ------------------------------------------------------------------------------
// my own try

let testingDebounce1 = function (func, delay) {
  let debounceTimer;

  return function () {
    let context = this;
    let args = arguments;
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      func.apply(context, args);
    }, delay);
  };
};

let testingDebounce = testingDebounce1(function () {
  console.log("Testing Debounce");
}, 1000);

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

let betterResize = function (func, delay) {
  let bool = true;
  return function () {
    let context = this;
    let args = arguments;
    if (bool === true) {
      setTimeout(() => {
        func.apply(context, args);
        bool = true;
      }, delay);
      bool = false;
    }
  };
};

window.addEventListener(
  "resize",
  betterResize(() => {
    console.log("resizing...");
  }, 1000)
);

// ------------------------------------------------------------------------------
// THROTTLING
// MY OWN TRY
// BUTTON CLICK

let throttleBtnFunc = function (func, delay) {
  let bool = true;
  return function () {
    let context = this;
    let args = arguments;
    if (bool === true) {
      setTimeout(() => {
        func.apply(context, args);
        bool = true;
      }, delay);
      bool = false;
    }
  };
};

let throttleBtn = document.getElementById("throttleBtn");
throttleBtn.addEventListener(
  "click",
  throttleBtnFunc(function () {
    console.log("Button Clicked");
  }, 1000)
);

// ------------------------------------------------------------------------------
// THROTTLING
// MY OWN TRY
// SCROLLING

let throttleScroll = function (func, delay) {
  let bool = true;

  return function (e) {
    let context = this;
    let args = arguments;
    if (bool === true) {
      setTimeout(() => {
        console.log();
        func.apply(context, args);
        bool = true;
      }, delay);
      bool = false;
    }
  };
};

window.addEventListener(
  "scroll",
  throttleScroll(function () {
    console.log("scrolling...");
    console.log(window.scrollY);
  }, 1000)
);

// ------------------------------------------------------------------------------
