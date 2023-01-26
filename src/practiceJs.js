// function add(x, y) {
//   return x + y;
// }
// let result = add.call(this, 10, 30);
// console.log(result);

// var greeting = "Hi";

// var messenger = {
//   greeting: "Hello"
// };

// function say(name) {
//   console.log(this.greeting + " " + name);
// }

// say.call(messenger, "sweety");

const computer = {
  name: "MacBook",
  isOn: false,
  turnOn() {
    this.isOn = true;
    return `this ${this.name} is on`;
  },
  turnOff() {
    this.isOn = false;
    return `this ${this.name} is off`;
  }
};

const server = {
  name: "Dell PowerEdge T30",
  isOn: false
};

// let result=computer.turnOn.apply(server);
// console.log(result)

let arr = [1, 2, 3];
let numbers = [4, 5, 6];

arr.push.apply(arr, numbers);
// console.log(arr)

// const person = {
//   firstName: "John",
//   lastName: "Doe"
// };

// function greet(greeting, message) {
//   return `${greeting} ${this.firstName} ${message}`;
// }

// let result = greet.apply(person, ["hi", "whatsup"]);
// console.log(result);

// let person = {
//   name: "John Doe",
//   getName: function () {
//     console.log(this.name);
//   }
// };

// let f = person.getName.bind(person);
// setTimeout(f, 1000);

// let runner = {
//   name: "Runner",
//   run: function (speed) {
//     console.log(this.name + " runs at " + speed + " mph.");
//   }
// };

// let flyer = {
//   name: "Flyer",
//   fly: function (speed) {
//     console.log(this.name + " flies at " + speed + " mph.");
//   }
// };

// let run = runner.run.bind(flyer, 1200);

// run();

//closure

// function greeting() {
//   let message = "say hi";

//   function innerGreeting() {
//     console.log(message, "this is prnting from the innner function");
//   }

//   return innerGreeting;
// }

// let hi = greeting();
// hi();

// function greeting(message){
//   return function (name){
//     return message + " "+ name;
//   }
// }
// let sayHi1=greeting('hello')
// let sayHi2=greeting('hi')
// console.log(sayHi1('sweety'))
// console.log(sayHi2('joys'))

//closures in loop

// function x() {
//   for (var i = 0; i <= 5; i++) {
//     function close(i) {
//       setTimeout(function () {
//         console.log(i);
//       }, i * 1000);
//     }
//     close(i);
//   }
// }

// x();

// function y() {
//   for (let i = 0; i <= 5; i++) {
//     setTimeout(function () {
//       console.log(i);
//     }, i * 1000);
//   }
// }
// y();

//settimeout takes out the  copy of callback attaches timers and stores it some where referce of i

// let block scope new i for every loop

function multiply(a, b) {
  return a * b;
}

function operation(fn, a, b) {
  return fn(a, b);
}

// let result = operation(multiply, 2, 3);
// console.log(result);

// (() => {
//   //...
//   console.log("iife");
// })();

// (function namedIIFE() {
//   //...
//   console.log("iife");
// })();

// function download(url) {
//   setTimeout(() => {
//     // script to download the picture here
//     console.log(`Downloading ${url} ...`);
//   }, 1000);
// }

function process(picture) {
  console.log(`Processing ${picture}`);
}
let url = "https://www.javascripttutorial.net/pic.jpg";
// download(url);
// process(url);

function download(url, cb) {
  setTimeout(() => {
    console.log("its downloading");

    cb(url);
  }, 1000);
}
// download(url, process);

const url1 = "https://www.javascripttutorial.net/pic1.jpg";
const url2 = "https://www.javascripttutorial.net/pic2.jpg";
const url3 = "https://www.javascripttutorial.net/pic3.jpg";

//nesting many asynchronous functions inside callbacks is known as the pyramid of doom or the callback hell
// download(url1, function (url1) {
//   console.log("prodcess1");
//   download(url2, function (url2) {
//     console.log("process2");
//     download(url3, function (url3) {
//       console.log("process3");
//     });
//   });
// });

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('resolved');

//   }, 1000);
// });

// console.log(promise)

//promise.then((data) => console.log(data));

let success = true;
function getUsers() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve([
          { username: "john", email: "john@test.com" },
          { username: "jane", email: "jane@test.com" }
        ]);
      } else {
        reject("failed !! rejected");
      }
    }, 1000);
  });
}

//const promise=getUsers().then(data=>console.log(data),error=>console.log('error'))

const promise = getUsers()
  .then((data) => console.log(data))
  .catch((err) => console.log(err))
  .finally(() => console.log("finally "));
// console.log(promise)

let p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(10);
  }, 3 * 100);
});

// p.then((result) => {
//   console.log(result);
//   return result * 2;
// }).then((result) => {
//   console.log(result);
//   return result * 2;
// });

// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("The first promise has resolved");
//     resolve(10);
//   }, 1 * 1000);
// });
// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("The second promise has rejected");
//     reject("rehjected");
//   }, 2 * 1000);
// });
// const p3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("The third promise has resolved");
//     resolve(30);
//   }, 3 * 1000);
// });

// Promise.all([p1, p2, p3])
//   .then((result) => console.log(result)) // never execute
// //   .catch((err) => console.log(err));
// function sum(...args) {
//   let total = 0;
//   for (const a of args) {
//     total += a;
//   }
//   return total;
// }

// const nums = [1, 2, 3, 4, 5, 6, 2, 2];
// console.log(sum(...nums));

// var obj = {
//   i: 10,
//   b: function() {console.log(this.i)},
//   c: function() {
//     console.log(this.i);
//   }
// }

// obj.b();
// obj.c();

const p1 = new Promise((resolve, reject) => {
  resolve("resolve promise1");
});
const p2 = new Promise((resolve, reject) => {
  reject("resolve promise2");
});

Promise.all([p1, p2]).then((result) => console.log(result));
Promise.allSettled([p1, p2]).then((result) => console.log(result));
