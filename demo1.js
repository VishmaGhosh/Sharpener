// var a = 2;
// var c = 2;

// function b(){

// var x = 2;
// var c = 4
// console.log(c)

// }
// console.log(a);
// console.log(this.a);
// console.log(this.c)
// console.log(this.x)
// console.log(window.a)
// console.log(window.x)
// console.log(b());

// function abc() {
//     console.log(a);
//     }   

// abc();
// var a = 7;

// function outerfunction() {
//     console.log(a);
//     var c = 10;

//     innerfunction();
//     function innerfunction() {
//         console.log(b);
//         console.log(c);
//     }
// }
// var a = 7;
// var b = 3

// outerfunction();

// function outerfunction() {
//     console.log(a);
//     var a = 10;
//     innerfunction();
//     function innerfunction() {
//         console.log(a);
//         console.log(window.a);
//         console.log(this.a)
//     }
// }
// var a = 7;
// var b = 3
// outerfunction();

// let a = 5;

// let b = 6;

// console.log(this.b);

// console.log(window.b)

// console.log(window.a)

// console.log(this.a);

// var obj = {
//     "key1" : "apple",
//     "key2" : "mango",
//     "key3" : "banana",
//     "key4" : "graps"
// }

// var keys = Object.keys(obj);

// keys.forEach(key => {
//     console.log(obj[key]);
// });

// function x() {

//     let a = 10;

//     function y() {
//         console.log(a);
//     }
//     a = 50;
//     return y;
// }

// const z = x()

// console.log(z());

function y() {

    for (var i = 1; i < 6; i++) {
        setTimeout(() => console.log(i), i * 1000)
    }
    console.log('Done Coding')
}

y();


function y() {

    for (let i = 1; i < 6; i++) {
        setTimeout(() => console.log(i), i * 1000)
    }
    console.log('Done Coding')
}
y();

a();
b();

// Function Statement aka Function Declaration
function a(){
    console.log("In a");
}

// Function Expression
var b = function() {
    console.log("In b");
} 

