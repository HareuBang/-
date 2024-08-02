// p.191
class Human {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sayName() {
    console.log(this.name);
  }
  sayAge() {
    console.log(this.age);
  }
}

class Developer extends Human {
  constructor(name, age, availableLanguages) {
    super(name, age);
    this.availableLanguages = availableLanguages;
  }
  showAvailableLanguages(){
    console.log(...this.availableLanguages);
  }
}

const developer = new Developer("제로초", 30, ["HTML", "CSS", "JS"]);
developer.showAvailableLanguages();