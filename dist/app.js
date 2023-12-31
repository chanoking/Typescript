"use strict";
const athletics = [];
athletics.push("Tennis", 5);
console.log(athletics);
function merge(objA, obj2) {
    return Object.assign(objA, obj2);
}
const userA = {
    name: "chano",
    age: 40,
    gender: "male",
    hobby: "reading",
};
const user2 = {
    name: "juno",
    age: 39,
    gender: "female",
};
const mergedObj = merge(userA, user2);
mergedObj.gender;
