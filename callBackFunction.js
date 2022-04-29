// callback Function
setTimeout(function () {
    console.log('timmer1');
}, 1000);
setTimeout(function () {
    console.log('timmer2');
}, 0);
function x(y) {
    console.log('in X');
    y();
}

x(function y() {
    setTimeout(() => {
        console.log('in y');
    }, 0)
})


// javascript is a synchronous single threaded language

// Blicking the main thread

// Power of callback

// Deep about event listeners

// Scope demo with event listeners

// GarbageCollection and removeEventListener

function attachEventListener() {
    let count = 0;
    document.getElementById("clickMe")
        .addEventListener('click', function xyz() {
            console.log("Button clicked", ++count);
        })
}
attachEventListener();

window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM has loaded');
});

var obj = {
    'key1' : 'value1',
    'key2' : 'value2',
    'key3' : 'value3',
}

var obj2 = {...obj, 'key4': 'value4'};

console.log(obj);
console.log(obj2);

let arr = [1,2,3]

let arr2 = [4,6];

let arr3 = [...arr,...arr2];
console.log(arr3);