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

// let name1;
// function add() {
//   name1 = "chano";
//   return name1;
// }

// console.log(add());
// console.log("asdf");

// const hobbies = ["reading a book", "watching a movie", "walking and running"];
// const newHobbies: string[] = [];
// newHobbies.push(...hobbies);
// console.log(newHobbies);

// const person = {
//   name: "chano",
//   age: 29,
// };

// const copiedPerson = person;
// copiedPerson.name = "juno";
// console.log(copiedPerson);
// console.log(person);

// const [person1, person2] = ["chano", "juno"];
// console.log(person2);

// const [hobby1, hobby2, ...rest] = hobbies;

// console.log(hobby2);

class Department {
  // public name: string;
  private employees: string[] = [];
  constructor(private readonly id: string, public name: string) {
    // this.name = name;
  }

  describe(this: Department) {
    console.log(`Department: ${this.name} : (${this.id})`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  admins: string[] = [];
  constructor(id: string, admins: string[]) {
    super(id, "d1");
    this.admins = admins;
  }
}

const its = new ITDepartment("dfd", ["Max"]);

its.addEmployee("Max");
its.addEmployee("Manu");

// its.employees[2] = "Anna";
its.name = "management";

its.describe();
its.printEmployeeInformation();

console.log(its);

// const copiedAccounting = { name: "accounting", describe: accounting.describe };

// copiedAccounting.describe();
