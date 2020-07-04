class Person {
  
  constructor(
    public name: string,
    public readonly age: number
  ) {
  }
} 

class Student extends Person {
  constructor(name: string, age: number){
    super(name, age)
  }
}

const pessoa1 = new Person("Ilgsson", 25);
const student1 = new Student("Arlaine", 24);

console.log(pessoa1);
console.log(student1);
