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

//mock-10
//Is there a way to get all the values of an object directly in an array? Answer: Object.values()
const obj3 = {
  firstName: "sweety",
  lastName: "smily",
  age: 22
};

// console.log(Object.values(obj3))
// console.log(Object.entries(obj3))

//write a program to capitalize first letter of a given string

function captalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const ans1 = captalizeFirstLetter("sweety");
console.log(ans1);

//try catch

// try{
//   console.log('hi there')
//   lalal;
// }catch(err){
//   console.log('err occured')

// }finally{
//   console.log('enter the finally')
// }

// try{
//   setTimeout(function(){
//     nosunchVariable;
//   },1000);
// }catch(err){
//   console.log('errpr')
// }

// setTimeout(function (){
//   try{
//     nosunchVariable;

//   }catch(err){
//     console.log('erro is caught here')
//   }
// })

let json = '{"age":30}';
try {
  let user = JSON.parse(json);
  if (!user.name) {
    throw new SyntaxError("incompeete data :no more");
  }
  console.log(user.name);
} catch (err) {
  console.log("JSON ERROR" + err.message);
}

// try {
//   alert("try");
//   if (confirm("make an error")) bad_mode();
// } catch (err) {
//   console.log("cathc");
// } finally {
//   console.log("finally");
// }

//promise.race

const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, "one");
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "two");
});

Promise.race([promise1, promise2]).then((value) => {
  console.log(value);
});

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("foo");
  }, 500);
});
promise.then((data) => console.log(data));
