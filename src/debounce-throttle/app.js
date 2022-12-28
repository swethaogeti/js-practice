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
const debounceCount = myDebounce(() => {
  count.innerHTML = ++triggerCount;
}, 800);
btn.addEventListener("click", () => {
  btnPress.innerHTML = ++pressCount;
  debounceCount();
});
