function Person() {
    this.name = 'Joel';
    this.age = 22;
    this.getAge = function() {

    }
}

// Person.prototype.age = 23;

const person = new Person();

class Person {
  constructor() {
    this.name = "Joel";
    this.age = 22;
  }

  getAge() {
    return this.age;
  }
}

const person = new Person();

console.log(person.getAge());
console.log(person);
