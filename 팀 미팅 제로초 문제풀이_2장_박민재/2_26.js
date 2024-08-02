// p.187
class Human {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sayName() {
    console.log(`이름 : ${this.name}`);
  }
  sayAge() {
    console.log(`나이 : ${this.age}`);
  }
}

const zeroCho = new Human("조현영", 30);
zeroCho.sayName();
zeroCho.sayAge();
