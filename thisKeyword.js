'use strict';
// "this" inside global scope

this.table = "Window table"
console.log(window.table);

let cleanTable = function(soap){
    console.log(`cleaning ${this.table} using ${soap}`);
}

this.garage ={
    table : "garage table"
}

console.log(this.garage.table);

cleanTable.call(this, 'some soap');
cleanTable.call(this.garage,'some soap')

// "this" inside an object

let VishmasRoom = {
    table : "Vishma table",
    cleanTable(){
        console.log(`cleaning ${this.table}`);
    }

}


// "this" inside a inner function

// let clean = function(soap){
//     // let that = this;
//     const innerFunction = function(soap1){
//         console.log(`cleaning ${this.table} using ${soap1}`);
//     }
//     innerFunction.bind(this)(soap);
// }

let clean = function(soap){
    const innerFunction = (soap1) => {
        console.log(`cleaning ${this.table} using ${soap1}`);
    }
    innerFunction(soap);
}

clean.call(this, 'soap')

// this inside a constructor

let createRoom = function(name){
    this.table = `${name}'s table`
}
createRoom.prototype.cleanTable = function(soap){
    console.log(`cleaning ${this.table} using ${soap}`);
}

let suvaRoom = new createRoom('suva');
suvaRoom.cleanTable('soap');

// this inside a class

class Student {
    static numOfStudent = 0;
    constructor(name,age,phone,marks){
        this.name = name;
        this.age = age;
        this.phone = phone;
        this.marks = marks;
        this.setStudent();
    }
    setStudent(){
        Student.numOfStudent = Student.numOfStudent+1;;  
    }

    isEligibleForPlacement(minAge){
        return (minMarks) => {
            if(this.age > minAge && this.marks > minMarks){
                console.log(`${this.name} is eligible for placement`);
            }
            else console.log(`${this.name} is not eligible for placement`);
        }
    }
    
}

let ram = new Student('ram',20,25413,50);
let sam = new Student('sam',25,25413,70);
let jhon = new Student('jhon',22,25417,20);
let radha = new Student('radha',21,254542,35);
let alex = new Student('alex',27,254553,80);
sam.isEligibleForPlacement(20)(40);
ram.isEligibleForPlacement(20)(40);
jhon.isEligibleForPlacement(20)(40);


console.log(Student.numOfStudent);





let multi = (a,b) => {return a*b};
console.log(multi(2,3));

var x = function(){
    this.val = 1;
    setTimeout(() =>{
        this.val++;
        console.log(this.val);
    },1)
}
var xx = new x();