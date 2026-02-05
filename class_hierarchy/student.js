class Student extends Person {
  constructor(name, age, course) {
    super(name, age);
    this.course = course;
  }

  getDetails() {
    return `${this.name}, Age: ${this.age}, Course: ${this.course}`;
  }
}
