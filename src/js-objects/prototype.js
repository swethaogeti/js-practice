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

//for in

// for(const prop in p1){
//   console.log(prop ,p1[prop])
// }

var decoration = {
  color: "red"
};

var circle = Object.create(decoration);

circle.radius = 10;

// for(const prop in circle){
//   console.log(prop)
// }

for (const prop in circle) {
  if (circle.hasOwnProperty(prop)) {
    console.log(prop);
  }
}

//enmerable properties

const p3 = {
  firstName: "jhon",
  lastName: "doe"
};

p3.age = 22;
Object.defineProperty(p3, "ssn", { enumerable: false, value: 1212122121 });

for (const key in p3) {
  console.log(key);
}

console.log(p3.propertyIsEnumerable("firstName"));

//Object.values()

const p4 = {
  name: "sweety",
  age: 22
};

const profile = Object.values(p4);
console.log(profile);

//Object.entries()
const ssn = Symbol("ssn");
const p5 = {
  name: "sweety",
  lastName: "kate",
  age: 22,
  [ssn]: "23816371253"
};
const kv = Object.entries(p5);
// console.log(kv)

//Object.assign()

let widgets = {
  color: "red"
};

let clonedWidget = Object.assign({}, widgets);
console.log(clonedWidget);

//Create method is used to create object i
//nstance with an already declared object properties
// and it’s prototype and assign it to a newly created
//prototype object and return’s empty object.

let box = {
  height: 10,
  width: 20
};

let style = {
  color: "Red",
  borderstyle: "solid"
};

let styleBox = Object.assign({}, box, style);
console.log(styleBox);

let amount = +0;
let volume = -0;
// console.log(Object.is(amount,volume));

// console.log(Object.is(NaN===NaN))

//factory function

function createPerson(firstName, lastName) {
  return {
    firstName: firstName,
    lastName: lastName,
    getFullName() {
      return firstName + "" + lastName;
    }
  };
}
let person1 = createPerson("John", "Doe");
let person2 = createPerson("Jane", "Doe");

// console.log(person1.getFullName());
// console.log(person2.getFullName());

//object destructing

let objDestructing = {
  firstName: "sweety",
  lastName: "kate",
  age: 22,
  middleName: "C"
};

// let {firstName:fname,lastName:lname}=objDestructing
// console.log(fname,lname)

// let {firstName,lastName}=objDestructing;
// console.log(firstName,lastName)

let {
  firstName,
  lastName,
  middleName = "",
  currentAge: age = 18
} = objDestructing;
console.log(middleName, age);

let employee = {
  id: 1001,
  name: {
    firstName: "John",
    lastName: "Doe"
  }
};

const {
  id,
  name: { firstName: f, lastName: l }
} = employee;
console.log(id, f, l);
