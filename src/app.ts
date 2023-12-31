const athletics: Array<String | Number> = [];

athletics.push("Tennis", 5);

console.log(athletics);

function merge<T, U>(objA: T, obj2: U) {
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
