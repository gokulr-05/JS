const user = {
  name: "Gokul",
  greet() {
    return `Hello, ${this.name}!`;
  },
  farewell: function () {
    return `GoodBye, ${this.name}!`;
  },
  arr: () => {
    return `arr, ${this.name}!`;
  },
};

console.log(user.greet());
console.log(user.farewell());
console.log(user.arr());
