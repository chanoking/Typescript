"use strict";
let user1;
user1 = {
    name: "chano",
    age: 29,
    greet(phrase) {
        console.log(`${phrase} ${this.name}`);
    },
};
user1.greet("Welcome");
