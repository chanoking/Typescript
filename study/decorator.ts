function Logger(constructor: Function) {
  console.log("Logging.....");
  console.log(constructor);
}

@Logger
class Person {
  name = "Max";

  constructor() {
    console.log("Creating person object...");
  }
}

const person = new Person();

console.log(person);
class Printer {
  message: string = "hey, what's going on??";
  showMessage() {
    console.log(this.message);
  }
}

const printer = new Printer();

const button = document.querySelector("button");

button?.addEventListener("click", printer.showMessage.bind(printer));

class Course {
  title: string;
  price: number;
  constructor(title: string, price: number) {
    this.title = title;
    this.price = price;
  }
}

const save = document.querySelector("form");
save?.addEventListener("submit", (event) => {
  event.preventDefault();
  const titleEl = document.getElementById("title") as HTMLInputElement;
  const priceEl = document.getElementById("price") as HTMLInputElement;

  const title = titleEl.value;
  const price = +priceEl.value;

  const createdCourse = { title, price };
  console.log(createdCourse);
  return createdCourse;
});
