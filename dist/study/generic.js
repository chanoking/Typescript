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
function extractAndConvert(obj, message) {
    return obj[message];
}
console.log(extractAndConvert({ name: "Max" }, "name"));
class StorageData {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    deleteItme(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItem() {
        return [...this.data];
    }
}
const data = new StorageData();
data.addItem("tomato");
console.log(data.getItem());
