// export const clean = () => {
//     return 5;
// }

// export const basedata = 10;

class Human {
  constructor() {
    this.gender = "male";
  }
  printGender() {
    console.log(this.gender);
  }
}

class Person extends Human {
  constructor() {
    super();
    this.name = "Vishma";
    this.age = 26;
  }

  printAge() {
    console.log(this.age);
  }

  printName() {
    console.log(this.name);
  }
}

const person = new Person();
person.printName();
person.printAge();
person.printGender();


const studentArr = [
  {
  name : 'Yash',
    age: '25'
  },
  {
  name : 'Vaibhav',
    age: '23'
  },
  
  ]
  function changeAge(studentObj){
  
  studentObj.age = '30'
  
  }
  changeAge(studentArr[0] )
  console.log(studentArr[0].age)