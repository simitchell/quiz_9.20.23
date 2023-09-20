'use strict'


// 1
function myFunc () {
    console.log("Hello, World");
};

myFunc();

//2
function yourFunc () {
    const x = "bar";
    console.log(x);
};

yourFunc();

//3
function numFunc (number) {
    console.log(number + 1);
};

numFunc(7);

//4

// const btn1 = document.querySelector('#btn1');

// btn1.addEventListener('click', (event) => {
//     event.preventDefault();
//     alert("Nice click.");
// });

//5

//6
function goodFunc (newValue) {
    const value = newValue;
};

function badFunc (a) {
    return goodFunc(a);
};

goodFunc();
badFunc(2);