const btn = document.querySelector(".increment_btn");
const btnPress = document.querySelector(".increment_pressed");
const count = document.querySelector(".increment_count");

let pressCount = 0;
let triggerCount = 0;

const myDebounce = (callback, delay) => {
  let timer;
  return function (...args) {
    clearInterval(timer);
    timer = setTimeout(() => {
      callback(...args);
    }, delay);
  };
};

const myThrottle = (callback, delay) => {
  let last = 0;
  return function (...args) {
    let now = new Date().getTime();
    if (now - last < delay) return;
    last = now;
    return callback(...args);
  };
};

const myThrottleCount = myThrottle(() => {
  count.innerHTML = ++triggerCount;
}, 800);
btn.addEventListener("click", () => {
  btnPress.innerHTML = ++pressCount;
  myThrottleCount();
});
