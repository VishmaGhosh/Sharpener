// let name = "vishma Ghosh"
// let age = 26;
// let address = "Malda, West Bengal"

// personalDetails = `My name is ${name}, age is ${age}, address is ${address}`
// // console.log(personalDetails);

// let arr = personalDetails.split(",");
// // console.log(arr);

// const fruits = ["mango","orange","apple"];

// fruits[3] = "graps";

// console.log(fruits);

// fruits.unshift("banana");
// fruits.push("strawberry");

// console.log(fruits);
// console.log(Array.isArray(fruits));
// console.log(fruits.indexOf("mango"));
let unit = "C";
console.log(convertTemp(35,unit)+unit);

function convertTemp(num, unit){
    return unit === "K" ? 273+num : num-273; 
}
