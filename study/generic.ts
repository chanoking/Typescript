const athletics: Array<String | Number> = [];

athletics.push("Tennis", 5);

console.log(athletics);

function merge<T extends object, U extends object>(objA: T, obj2: U) {
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

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  message: U
) {
  return obj[message];
}

console.log(extractAndConvert({ name: "Max" }, "name"));

class StorageData<T> {
  private data: T[] = [];
  addItem(item: T) {
    this.data.push(item);
  }
  deleteItme(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }
  getItem(): T[] {
    return [...this.data];
  }
}

const data = new StorageData<string>();
data.addItem("tomato");
console.log(data.getItem());
