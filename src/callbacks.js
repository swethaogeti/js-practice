//synchronous callbacks

function filter(numbers, callback) {
  let result = [];
  for (const number of numbers) {
    if (callback(number)) {
      result.push(number);
    }
  }
  return result;
}
let numbers = [1, 2, 4, 7, 3, 5, 6];
let odd = filter(numbers, (number) => number % 2 != 0);

console.log(odd);

//asynchronous callback-an asynchronous callback is executed after the executed after the execution of the high-order function the callback

function download(url, callback) {
  setTimeout(() => {
    console.log("downloading....");
    callback(url);
  }, 1000);
}
function process(picture) {
  console.log(`process...`);
}

let url = "https://wwww.javascripttutorial.net/pic.jpg";
download(url, process);
