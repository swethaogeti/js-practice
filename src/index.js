// import "./styles.css";

// document.getElementById("app").innerHTML = `
// <h1>Hello Vanilla!</h1>
// <div>
//   We use the same configuration as Parcel to bundle this sandbox, you can find more
//   info about Parcel
//   <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
// </div>
// `;

//what will the output
const objOne = {
  type: "poster",
  mode: "color print"
};

const objTwo = {
  type: "poster",
  mode: "color print"
};

const objOneCopy = objOne;
console.log(objOne === objOne);
console;

//how to invoke function inside array

const myArray = [
  (function logger() {
    console.log("hello");
  })()
];

//explain hoisting with example
hoistedVariable = 3;
console.log(hoistedVariable);
let hoistedVariable;

hoistedFunction();
function hoistedFunction() {
  console.log("sweety");
}

function doSomething() {
  x = 33;
  console.log(x);
  var x;
}

doSomething();
//variable initializations are not hoisted
var x;
console.log(x);
x = 23;

//call apply and bind

function sayHello(say) {
  console.log(this.name, say);
}

const obj = {
  name: "sweety"
};

sayHello.call(obj, "hey");
sayHello.apply(obj, ["mady"]);
const ans = sayHello.bind(obj, "rosy");
console.log(ans());

sayHello.call(obj);
const obj1 = {
  name: "swetha",
  sayHi() {
    console.log("hi", this.name);
  }
};

const obj2 = {
  name: "rocky"
};
obj1.sayHi.call(obj2);

var person = {
  firstName: "Hari",
  sayHi: function () {
    console.log("Hi " + this.firstName);
  },
  greet: {
    sayHello: function () {
      console.log("Hello " + this.firstName); // Evaluates to Hello undefined as "this" keyword is undefined here, the closest parent object greet does not have a firstName attribute
    }
  }
};
person.sayHi();
person.greet.sayHello.call(person);
