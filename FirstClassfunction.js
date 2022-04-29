// Difference between function statement and function expression is
// Hoisting =>   when we call b()  before expression its have value of undefined
// a() is call normally

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

// Anonymous Function
// it's shows systax error, we do not create function with out name.
// it's use when function use as a value.  
// function () {

// }


// Named Function Expression
var c = function xyz(){
    console.log("In c");
}

// Difference between Parameter and Arguments
// param1 and param2 are the parameter or local veriable of that function
var v = function(param1, param2){
    console.log(param1,param2);
}
// what passes to the function like 2, 3 are they arguments
v(2,3);

// First class function
// Ability to use function as value is known as firstclass function
// so use as an argument of an function or return a function as value 
// these ability is call firstclass function

var r = function(param){
    return function(){

    }
}

console.log(r());

// Arrow function 