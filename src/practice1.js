//write a callback
function greet(callback) {
  console.log("hello say hi !!");
  callback();
}

function name() {
  console.log("sweety this is callback called after the greet");
}

greet(name);

//write a callback hell example

//callback hell is a term used to describe the problem of deeply nested callback function in javascript ,resulting in code that is difficult to read and maintain. it occures when multiple asynchronus operations are performed one after another , and each operation requires a callback function to be executed upton completion

function step1(callback) {
  console.log("step1");
  callback();
}
function step2(callback) {
  console.log("step2");
  callback();
}
function step3(callback) {
  console.log("step3");
  callback();
}

step1(function () {
  step2(function () {
    step3(function () {
      console.log("ALL DONE");
    });
  });
});

// promises
//create a promise which resolves after 1 second

const promise = new Promise((resolve, reject) => {
  setTimeout(function () {
    resolve("data,promised resolve");
  }, 5000);
});

promise
  .then((data) => console.log(data, "inside the .then"))
  .catch((data) => console.log(data, "inside the catch"))
  .finally(console.log("clean up"));

//promise chaining- is a technique in javascript that allow to chain multiple promises objects together executing each one in sequence , the result as an argument to the next promise in the chain allowinf you to build a squence of asynchronus operation

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => console.log("promise 1"), 1000);
});
