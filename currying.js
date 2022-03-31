let multiply = function(a,b){
    console.log(a*b);
}

let multiplyByTwo = multiply.bind(this,2);
multiplyByTwo(4);

let multiplyByThree = multiply.bind(this,3);
multiplyByThree(4);

let add = function(x){
   return function (y){
       console.log(x+y);
   }
}

let addTwo = add(2);
addTwo(112);