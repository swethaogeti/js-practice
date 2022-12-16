//pollyfills for the filter

const arr = [12, 234, 5, 6, 23, 57];
Array.prototype.myFilter = myFilter;

function myFilter(callback) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i])) {
      result.push(this[i]);
    }
  }
  return result;
}

console.log(arr.myFilter((num) => num > 23));
