function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;

  this.getName = function () {
    return this.firstName + " " + this.lastName;
  };
}

let person = new Person("sweety", "Doe");
