var obj = {
    num : 5
}

var addNum = function(a){
    return this.num + a;
}

console.log(addNum.call(obj,4));

var addNum2 = function(a,b,c){
    return this.num + a +b +c;
}

var arr = [1,2,3];
console.log(addNum2.apply(obj,arr));

var bound = addNum2.bind(obj);
console.log(bound(1,5,3));


var student = {
    age:20
}

var printAge = function(){
    return this.age;
}

var studentBound = printAge.bind(student);
console.log(studentBound());