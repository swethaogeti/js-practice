//pollyfill for the filter

const arr = [5, 23, 14, 1, 7, 27];

function myFilter(callback) {
  let filteredArray = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i])) {
      filteredArray.push(this[i]);
    }
  }
  return filteredArray;
}
Array.prototype.myFilter = myFilter;
//console.log(arr.myFilter((num) => num > 23));

//polyfill for map

function myMap(callback) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
  }
  return result;
}

Array.prototype.myMap = myMap;

//console.log(arr.myMap(num=>num*2))

//polyfill for reduce
//arr.reduce((acc,curr,i,arr)=>{},initialvalue)
function myReduce(callback, initialvalue) {
  let accumulator = initialvalue;
  for (let i = 0; i < this.length; i++) {
    accumulator = accumulator
      ? callback(accumulator, this[i], i, this)
      : this[i];
  }
  return accumulator;
}
Array.prototype.myReduce = myReduce;
//console.log(arr.myReduce((acc,curr)=>{return(acc+curr)},0))

//polyfill for find
//arr.find((ele,index,arr)=>{})

function myFind(callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      return this[i];
    }
  }
}

Array.prototype.myFind = myFind;
//console.log(arr.myFind(num=>num>5))

//polyfill for forEach
//arr.forEach(num=>console.log(num))

function myForEach(callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
}
Array.prototype.myForEach = myForEach;

//arr.myForEach(num=>console.log(num*5))
