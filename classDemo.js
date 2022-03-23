class Student {
    constructor(firstName, lastName, roll, sex, dob){
        this.firstName = firstName;
        this.lastName = lastName;
        this.roll = roll;
        this.sex = sex;
        this.dob = new Date(dob);
    }

    getBirthYear(){
        return this.dob.getFullYear();
    }

    getFullName(){
        return `${this.firstName} ${this.lastName}`;
    }
}

const student1 = new Student("jhon","doe",30,"male","11-11-1996");
const student2 = new Student("Rahul","Dev",23,"male","3-2-2003");

console.log(student2.getBirthYear());