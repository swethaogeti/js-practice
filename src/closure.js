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
