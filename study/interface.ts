interface Person {
  name: string;
  age: number;
  greet(phrase: string): void;
}

let user1: Person;
user1 = {
  name: "chano",
  age: 29,
  greet(phrase) {
    console.log(`${phrase} ${this.name}`);
  },
};

user1.greet("Welcome");
