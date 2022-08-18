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
