function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype.greet = function () {
  return "Hi,im" + this.firstName + "!";
};

const p1 = new Person("sweety", "kate");
console.log(p1);
let greeting = p1.greet();
console.log(greeting);

let s = p1.toString();
console.log(s);

const p2 = new Person("swetha");
console.log(p2);

p2.sayHi = function () {
  return "hey hi p2" + this.firstName;
};

let sayHi = p2.sayHi();
console.log(sayHi);
