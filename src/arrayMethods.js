// adding and removing elements

let arrPush = [1, 3, 4, 52, 1];
const arrSpread = [2, 1, 6, 8];
arrPush.push(1, ...arrSpread);
//console.log(arrPush);

//unshift() method adds one or more elements to the begining of an array and returns the new array's length

let arr2 = [1, 4, 5, 6, 7];
let arrUnshipt = [3, 5, 6];
arr2.unshift(0, ...arrUnshipt);
//console.log(arr2)

//the arr.pop() method rmoves the last element from n array and returns the removed element , if ar is empty the pop() returns undefined
let arr3 = [1, 2, 3, 4, 5, 6];
const arrPop = arr3.pop();
// console.log(arrPop)
// console.log(arr3)

// 4 . shift() methods remove the first element from the an array and the result that element

let arr4 = [1, 2, 3, 45];
let arrShift = arr4.shift();
// console.log(arrShift)
// console.log(arr4)

//5. splice - delete , insert , replace
//original arr is modified
let arr5 = [1, 2, 3, 4, 2, 3, 6, 7];
//delete- arr.splice(position,num)pos tells starting position to delete  num setermines the number of elements to delete

const arrSpliceDelete = arr5.splice(0, 3);
// console.log(arrSpliceDelete);
// console.log(arr5);

//inserting - arr.splice(possition , 0 , e1,e2,e3) position specifies the starting position in the array that the new element will be inserted , 0 instructs the splice() method to not dlete any aray elements

let arrSpliceInsert = arr5.splice(0, 0, 2, 2, 2, 2);
// console.log(arr5);

//replace - splice methods you to inseret new element into an array while deleting existing element simultaneously

arr5.splice(0, 4, 33, 11, 33);
// console.log(arr5)

//arr.slice method returns a shallow copy of a portion of an array into a new array,extrsct the
//arr.slice()- if start metod is ommited , slice metod starts extracts from the begging of the string
//slice returns remaining elements after deleting
let arr6 = [1, 2, 3, 4, 2, 3];
const arrSlice = arr6.slice(2);
//console.log(arrSlice);
// console.log(arr6);

const arrSliceEmpty = arr6.slice();
// console.log(arrSliceEmpty);

const arrSliceLastElement = arr6.slice(7);
// console.log(arrSliceLastElement);

const arrSliceStartEnd = arr6.slice(0, 2);
// console.log(arrSliceStartEnd)

const arrSliceNegIndex = arr6.slice(-3);
// console.log(arrSliceNegIndex)

//slice arr.slice(0,-5)=> arr.length+end 6+(-3)=3
const arrSliceNegLast = arr6.slice(0, -3);
//console.log(arrSliceNegLast)

//slice arr.slice(2,6) // if last is greater than length of array then complete array from start position to ending is returned

const arrSlicePosStartEnd = arr6.slice(2, 5);
//console.log(arrSlicePosStartEnd);

//extract jhon

let email = "john@example.com";
let localPart = email.slice(0, email.indexOf("@"));
// console.log(localPart)

//find elements

// indexOf() arr.indexOf(searchElemnt,fromIndex) to find the position of an elemnet in an array , you use the indexOf method thid method returns the index of the first occurence the element that you want to find or -1 if the element is not found

let arr7 = [1, 2, 3, 4, 5, 6, 7, 2, 2, 1, 89];
let arrIndexOf = arr7.indexOf(5);
// console.log(arrIndexOf)

//refer
// console.log(scores.indexOf(20,-1)); // 5 (fromIndex = 6+ (-1) = 5)
// console.log(scores.indexOf(20,-5)); // 1 (fromIndex = 6+ (-5) = 1)

//the lastIndexOf method returns the index of the lat occurence of the searchElement in the array it returns -1 if it cannot find the element
let arrLastIndexOf = arr7.lastIndexOf(2);
// console.log(arrLastIndexOf)

//8. find - es6 introduced a new metho called find(), find() method returns the first element in an array that passes a test function.
// If the callback returns a truthy value, the find() immediately returns the element and stops searching. Otherwise, it returns undefined.
//find(callback(element[, index[, array]])[, thisArg])
let arr8 = [1, 2, 3, 4, 5, 6, 2];

const arrFind = arr8.find((item) => item / 2 === 1);
// console.log(arrFind)

//findIndex-method returns the index of the element taht satisfies a testing function --1 if o element passed the test
const arr9 = [1, 2, 3, 4, 5, 6, 7];
const arrFindIndex = arr9.findIndex((item) => item > 9);
// console.log(arrFindIndex)

//includes - includes check if the element exist in the array if exists returns true if not false
// arr.includes(element,fromIndex)

let arr10 = [12, 3, 4, 5, 3, 5];
const arrIncludes = arr10.includes(4, 3);
// console.log(arrIncludes);

//Higher order functions
//map=> arr.map(callback(currentElement, index,arr))
// It’s important to note that the map() method does not change the original array, it creates a new array of all elements that have been transformed by the callback function.

let arr11 = [16, 36, 25];
const arrMap = arr11.map((ele) => Math.floor(Math.PI * ele * ele));
//  console.log(arrMap)
// console.log(arr11.map(Math.sqrt))

// filter- One of the most common tasks when working with an array is to create a new array that contains a subset of elements of the original array.

let arr12 = [
  { name: "Los Angeles", population: 3792621 },
  { name: "New York", population: 8175133 },
  { name: "Chicago", population: 2695598 },
  { name: "Houston", population: 2099451 },
  { name: "Philadelphia", population: 1526006 }
];

const arrFilter = arr12.filter((item) => item.population > 3000000);
// console.log(arrFilter)

//reduce -  Array reduce() and reduceRight() methods to reduce an array to a value.
// arr.reduce((previousElement,currentElement,index,array)=>{},intialValue)
let arr13 = [1, 2, 3, 4, 5];

const arrReduce = arr13.reduce((acc, curr) => acc + curr);
// console.log(arrReduce)

let shoppingCart = [
  {
    product: "phone",
    qty: 1,
    price: 500
  },
  {
    product: "Screen Protector",
    qty: 1,
    price: 10
  },
  {
    product: "Memory Card",
    qty: 2,
    price: 20
  }
];

const shoppingtotal = shoppingCart.reduce((acc, curr) => acc + curr.price, 0);
// console.log(shoppingtotal)

//every() dertermining if alll array elements pass the test

// Returns true if all array elements pass the given test function (callback returns a truthy value).

let arr14 = [2, 3, 4, 5];
const arrEvery = arr14.every((item) => item > 2);
// console.log(arrEvery)

let range = {
  min: 0,
  max: 10
};
let isInRange = arr14.every(function (e) {
  return e >= this.min && e <= this.max;
}, range);
// console.log(isInRange)

//some - check if one at least one array element passes a test

let arr15 = [1, 2, 3, 45];
const arrSome = arr15.some((ele) => ele > 100);
// console.log(arrSome);

// forEach - forEach methos to execute a function on every element in an array

let arr16 = [1, 2, 3, 4, 5];
// arr16.forEach(e=>console.log(e*2))

//sort - The sort() method allows you to sort elements of an array in place. Besides returning the sorted array, the sort() method changes the positions of the elements in the original array.

// By default, the sort() method sorts the array elements in ascending order with

let arr17 = [2, 8, 5, 3, 1, 0];
// arr17.sort();

arr17.sort(function (a, b) {
  if (a > b) return 1;
  if (a < b) return -1;
  return 0;
});
console.log(arr17);
