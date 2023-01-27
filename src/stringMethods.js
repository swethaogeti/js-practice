//string-length

//string- replace
// the replace method returns a new string with the specified string/regex replace

const str1 = "ball bat";
const pattern = /b/g;
let strReplace = str1.replace(pattern, "sweety");
// console.log(strReplace)

//string- replaceAll

const str2 = "dog donkey dog monkey dog";
// console.log(str2.replaceAll('dog','sweety'))

//string - indesOf- str.indexOf(pattern,fromIndex)

const str3 = "avaScript is not Java";
// console.log(str3.indexOf('Java'))

//string - lastIndexOf

const str4 = "programming is progarmming";
// console.log(str4.lastIndexOf('g'))

const sentence = "Java is to JavaScript what Car is to Carpet.";
let check = sentence.startsWith("Java");
// console.log(check); // true

let check1 = sentence.startsWith("Java is");
// console.log(check1); // true

// case sensitive
let check2 = sentence.startsWith("JavaScript");
// console.log(check2); // false

// second argument specifies the starting position
let check3 = sentence.startsWith("JavaScript", 11);
//console.log(check3); // true

// string - endsWith(sarchingStr,optionalFrom)

const str6 = sentence.endsWith("Carpet.");
// console.log(str6)

//string - match() method sreturns the result of matching a string match() method with the help of example

const str7 = "JavaScript is a fun programming language programming.";
const exp = /programming/g;
console.log(str7.match(exp));
