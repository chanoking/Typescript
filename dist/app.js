"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Logger(constructor) {
    console.log("Logging.....");
    console.log(constructor);
}
let Person = class Person {
    constructor() {
        this.name = "Max";
        console.log("Creating person object...");
    }
};
Person = __decorate([
    Logger
], Person);
const person = new Person();
console.log(person);
class Printer {
    constructor() {
        this.message = "hey, what's going on??";
    }
    showMessage() {
        console.log(this.message);
    }
}
const printer = new Printer();
const button = document.querySelector("button");
button === null || button === void 0 ? void 0 : button.addEventListener("click", printer.showMessage.bind(printer));
class Course {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
}
const save = document.querySelector("form");
save === null || save === void 0 ? void 0 : save.addEventListener("submit", (event) => {
    event.preventDefault();
    const titleEl = document.getElementById("title");
    const priceEl = document.getElementById("price");
    const title = titleEl.value;
    const price = +priceEl.value;
    const createdCourse = { title, price };
    console.log(createdCourse);
    return createdCourse;
});
