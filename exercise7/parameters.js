// default parameters

function add(a, b) {
    if (typeof b === "undefined") {
        b = 0;
    }
    return a + b;
}
let ans = add(2);
console.log(ans);

function add1(a, b = 0) { // b=0 is default parameter
    return a + b;
}
let ansd = add1(2, 9);
console.log(ansd);
let ans2 = add1(8);
console.log(ans2);

//---------------------------------------- XXX -----------------------------------------------------

function restPara(a, b, ...c) { // ...c is rest parameter
    console.log("a is : ", a);
    console.log("b is : ", b);
    console.log("c is : ", ...c);
}
restPara(1, 2, 3, 4, 5, 6, 7, 8, 9);

function addall(...numbers) {
    let total = 0;
    for (let number of numbers) {
        total += number;
    }
    return total;
}
console.log("ADD is : ", addall(1, 2, 3, 4, 5));

//------------------------------------  XXXXXXXXXXXXXXXXXXXXXXXX  ----------------------------------

// parameter destructuring 
// used in react
const obj = {
    name1: "Disha",
    dept: "CSE",
    age: 23
}

function print({ name1, dept, age }) {
    console.log(name1);
    console.log(dept);
    console.log(age);

}
print(obj);

//--------------------------------- XXXXXXXXXXXXXXXXXXXXXXX ----------------------------------------

// callback function

function fun2(d) {
    console.log("Inside fun2");
    console.log("Printing parameter : ", d);
}

function fun1(callback) {
    console.log(callback);
    callback("Disha");
}

fun1(fun2);
// callback function is basically used with sql queries

//----------------------------------- XXXXXXXXXXXXXXXXXXXXXXXXX -----------------------------------

// function returning function

console.log("FUNCTION RETURNING FUNCTION.");
function freturnf() {
    function hello() {
        console.log("Hello!!!");
    }
    return hello;
}

let hello = freturnf();
console.log(hello);
hello();

// high order function is a function that can call and return a function -> ex-freturnf()

// direct return function()

function myfun() {
    return function () {
        return "hello World";
    };
}

const dans = myfun();
console.log(dans);

// ----------------------------------------------  END  --------------------------------------------

//  default paremeters
//  rest parameters
//  parameter destructuring
//  callback fucntion
//  function returning function