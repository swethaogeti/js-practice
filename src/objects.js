let person = {
  firstname: "sweety",
  lastName: "Doe",
  hello: function () {
    console.log("say hi");
  },

  sayHi() {
    console.log("hey hi");
  },

  testThis() {
    console.log(this.firstname);
  }
};
function greet() {
  console.log("hello1 world");
}
//1
person.greet = greet;
