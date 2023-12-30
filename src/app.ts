// const add = function (num1: number, num2: number) {
//   return num1 + num2;
// };

// console.log(add("4", 5));
// enum Role {
//   ADMIN,
//   USER,
//   OWNER,
//   BUYER,
// }
// const person = {
//   name: "chano",
//   age: 29,
//   role: Role.OWNER,
// };

// console.log(person.name, person.age, person.role);

// let userInput: unknown;
// let userName: string;

// // userInput = 6;
// userInput = "chano";
// userName = userInput;

// function generateError(message: string, code: number): never {
//   throw { message, errorCode: code };
// }

// generateError("An error occured!", 500);

let name1;
function add() {
  name1 = "chano";
  return name1;
}

console.log(add());
console.log("asdf");

const hobbies = ["reading a book", "watching a movie", "walking and running"];
const newHobbies: string[] = [];
newHobbies.push(...hobbies);
console.log(newHobbies);

const person = {
  name: "chano",
  age: 29,
};

const copiedPerson = person;
copiedPerson.name = "juno";
console.log(copiedPerson);
console.log(person);
