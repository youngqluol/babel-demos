require('./in');
Promise.resolve().finally();

class Test {
  constructor(name) {
    this.name = name;
  }
}

const test = new Test('name');
console.log(test.name);

const fn = () => {
  console.log(1);
}