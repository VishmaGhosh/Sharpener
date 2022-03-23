function Student(firstName, lastName, roll, sex, dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.roll = roll;
    this.sex = sex;
    this.dob = new Date(dob);
    this.getBirthYear = function(){
        return this.dob.getFullYear();
    } 
    this.getFullName = function(){
        return `${this.firstName} ${this.lastName}`;
    }
}

function isEligebel(dob){
    let year = dob.getFullYear();
    console.log(year);
    if(2021-year >= 18){
        console.log("Is Eligebel");
    }
    else console.log("Not Eligebel");
}

const student1 = new Student("jhon","doe",30,"male","11-11-1996");
const student2 = new Student("Rahul","Dev",23,"male","3-2-2003");

console.log(student2.getBirthYear());
isEligebel(student2.dob);