//write a callback
// function greet(callback) {
//   console.log("hello say hi !!");
//   callback();
// }

// function name() {
//   console.log("sweety this is callback called after the greet");
// }

// greet(name);

//write a callback hell example

//callback hell is a term used to describe the problem of deeply nested callback function in javascript ,resulting in code that is difficult to read and maintain. it occures when multiple asynchronus operations are performed one after another , and each operation requires a callback function to be executed upton completion

// async function step1(callback) {
//   console.log("step1");
//   callback();
// }
// async function step2(callback) {
//   console.log("step2");
//   callback();
// }
// async function step3(callback) {
//   console.log("step3");
//   callback();
// }

// step1(function () {
//   step2(function () {
//     step3(function () {
//       console.log("ALL DONE");
//     });
//   });
// });

// promises
//create a promise which resolves after 1 second

// const promise = new Promise((resolve, reject) => {
//   setTimeout(function () {
//     resolve("data,promised resolve");
//   }, 5000);
// });

// promise
//   .then((data) => console.log(data, "inside the .then"))
//   .catch((data) => console.log(data, "inside the catch"))
//   .finally(console.log("clean up"));

//promise chaining- is a technique in javascript that allow to chain multiple promises objects together executing each one in sequence , the result as an argument to the next promise in the chain allowinf you to build a squence of asynchronus operation

// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("data1 promise one"), 1000);
// });

// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("data 2 promise two"), 1000);
// });

// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("data 3 promise three"), 1000);
// });

// promise1
//   .then((data) => {
//     console.log(data);
//     return promise2;
//   })
//   .then((data2) => {
//     console.log(data2);
//     return promise3;
//   })
//   .then((data3) => {
//     console.log(data3);
//   });

//write a program using async await

// async function fetchData() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/todos");
//     const data = await response.json();
//     console.log(data);
//   } catch (err) {
//     console.log(err);
//   }
// }

// fetchData();

//promise chaining problem with async await

// function getdata(callback) {
//   setTimeout(() => {
//     callback("data");
//   }, 1000);
// }

//use async await to solve the callback hell

function getdata(callback) {
  setTimeout(() => callback("data"), 1000);
}

function processData(data, callback) {
  setTimeout(() => callback("processed data"), 1000);
}

function validateData(data, callback) {
  setTimeout(() => callback("validated data"), 1000);
}

async function main() {
  try {
    let data = await new Promise((resolve, reject) => {
      getdata(resolve);
    });
    let processedData = await new Promise((resolve, reject) => {
      processData(data, resolve);
    });

    let validData = await new Promise((resolve, reject) => {
      validateData(processedData, resolve);
    });
    console.log(validData);
  } catch (err) {
    // console.log(err);
  }
}
main();
