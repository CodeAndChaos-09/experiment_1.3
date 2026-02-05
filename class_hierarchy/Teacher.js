class Teacher extends Person {
  constructor(name, age, subject) {
    super(name, age);
    this.subject = subject;
  }

  getDetails() {
    return `${this.name}, Age: ${this.age}, Subject: ${this.subject}`;
  }
}
