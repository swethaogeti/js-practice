function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype.greet = function () {
  return "Hi,im" + this.firstName + "!";
};

const p1 = new Person("sweety", "kate");
console.log(p1);
let greeting = p1.greet();
console.log(greeting);

let s = p1.toString();
console.log(s);

const p2 = new Person("swetha");
console.log(p2);

p2.sayHi = function () {
  return "hey hi p2" + this.firstName;
};

let sayHi = p2.sayHi();
console.log(sayHi);

//for in 

// for(const prop in p1){
//   console.log(prop ,p1[prop])
// } 

var decoration={
  color:'red'
}

var circle=Object.create(decoration)

circle.radius=10;

// for(const prop in circle){
//   console.log(prop)
// }

for(const prop in circle){
  if(circle.hasOwnProperty(prop)){
    console.log(prop)
  }
}


//enmerable properties

const p3={
  firstName:'jhon',
  lastName:'doe'
}

p3.age=22
Object.defineProperty(p3,'ssn',
{enumerable:false,value:1212122121})

for(const key in p3){
  console.log(key)
}

console.log(p3.propertyIsEnumerable('firstName'))

//Object.values()

const p4={
  name:'sweety',
  age:22
}

const profile=Object.values(p4)
console.log(profile)

//Object.entries()
const ssn=Symbol('ssn')
const p5={
  name:'sweety',
  lastName:'kate',
  age:22,
[ssn]:'23816371253'

}
const kv=Object.entries(p5)
console.log(kv)