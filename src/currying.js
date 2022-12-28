//currying

//sum(2)(3)(1)

function sum(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

//console.log(sum(2)(3)(1))

//eluate('add')(1)(2) //3

function evaluate(op) {
  return function (a) {
    return function (b) {
      if (op === "add") {
        return a + b;
      } else if (op === "mul") {
        return a * b;
      } else if (op === "div") {
        return a / b;
      } else if (op === "sub") {
        return a - b;
      } else {
        return "Invalid operation";
      }
    };
  };
}

//console.log(evaluate('add')(2)(3))

//infinite currying sum(1)(2)(3)() or sum(2)(4)(5)(7)(0)()

function infiniteCurrying(a) {
  return function (b) {
    if (b) {
      return infiniteCurrying(a + b);
    }
    return a;
  };
}

//console.log(infiniteCurrying(1)(3)(4)(1)(8)())

//currying vs partial application

function add(a) {
  return function (b, c) {
    return a + b + c;
  };
}
const x = add(10);
// console.log(x(5,6))
// console.log(add(10)(2,3))

//convert f(a,b,c) into f(a)(b)(c)
function curry(func) {
  return function curriedFunc(...args) {
    if (args.length >= func.length) {
      return func(...args);
    } else {
      return function (...next) {
        return curriedFunc(...args, ...next);
      };
    }
  };
}

const sumFunc = (a, b, c, d) => a + b + c + d;
const totalSum = curry(sumFunc);
//console.log(totalSum(1)(2)(3(4)));
