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
// console.log(str7.match(exp));

//string - trim() method removes the white spaces from the both ends of the string

const str8 = " sweety    ";
//console.log(str8.trim())

//string - padStart()- the padStrat method padds the currrent string
// with another string to the start
//str.padStart(targtLength,padString)
let str9 = "code";
// console.log(str9.padStart(20,'*'))

// string - padEnds method padds the current string with another string to the end

let str10 = "email";
// console.log(str9.padEnd(10,'*'))

//string- split () method divides a string into a list of substrings and return them as a array
//str.split(sperator,limit)

let str11 = "javascript";
// console.log(str11.split(""))
// console.log(str11.split('',3))

//string substring method returns a specific part of hte string between start and indexs
let str12 = "javascript is fun";
let strsubstring = str12.substring(1);

console.log(strsubstring);

function replaceString(oldStr, newStr, str) {
  for (let i = 0; i < str.length; i++) {
    if (str.substring(i, i + oldStr.length) == oldStr) {
      str =
        str.substring(0, i) +
        newStr +
        str.substring(i + oldStr.length, str.length);
    }
  }
  return str;
}
let str = "this is java tutorial";
