//closures
//make this run only once

let view;
function callOnce() {
  let called = 0;
  return function () {
    if (called > 0) {
      console.log("alredy called");
    } else {
      view = "sweety";
      console.log(view);
      called++;
    }
  };
}

let ans = callOnce();
ans();
ans();
ans();
ans();
ans();
ans();

function once(func, context) {
  let ran;
  if (func) {
    ran = func.apply(context || this, arguments);
    func = null;
  }
  return ran;
}
const hello = (a, b) => console.log("hello world", a, b);

hello();
hello();
hello();

//implement caching/memorize

function myMemorize(fn, context) {
  let result = {};
  return function (...args) {
    let argsCache = JSON.stringify(args);
    if (!result[argsCache]) {
      result[argsCache] = fn.call(context || this, ...args);
    }
    return result[argsCache];
  };
}

const clumsyProduct = (num1, num2) => {
  for (let i = 0; i < 10000; i++) {}
  return num1 + num2;
};

const memorizeClumsyProduct = myMemorize(clumsyProduct);
console.time("first call");
console.log(memorizeClumsyProduct(3323, 2323));
console.timeEnd("first call");

console.time("second call");
console.log(memorizeClumsyProduct(3323, 2323));
console.timeEnd("second call");
