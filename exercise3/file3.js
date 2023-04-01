"use strict";
// booleans & comparison operators

let a1 = 5;
let a2 = 7;
console.log(a2 > a1);
console.log(a1 > a2);
console.log(a1 == a2);
console.log(a2 >= a2);

// == vs ===
let b1 = "8";
let b2 = 8
console.log(b1 + b2);
console.log(b1 == b2); // do not consider data types
console.log(b1 === b2);  // considers data types

//  != vs !==
console.log(b1 != b2);
console.log(b1 !== b2); // checks data types
//------------------------------- XXXXXXXXXXXXXXXXXXXXXXXXXX -------------------------------------

// truthy and falsy values
// falsy values - false, "", null, undefined, 0

let fname = "Disha";
if (fname) {
    console.log(fname);
}
else {
    console.log("fname is empty");
}
// fname=0/null/false/ no values initialized. -> then falsy value
// when value is given to variable then it's truthy values. 


// if else conition
let age = 19
if (age >= 18) {
    console.log("User can play");
}
else {
    console.log("User cannot play ");
}

let n1 = 10;
if (n1 % 2 === 0) {
    console.log("It's an even number")
}
else {
    console.log("It's an odd number")
}
//----------------------- XXXXXXXXXXXXXXXXXXXXXXXXXXXXX ------------------------
// ternary operators
let age1 = 8;
let drink = age1 >= 5 ? "coffee" : "milk";
console.log(drink);

//------------------------- XXXXXXXXXXXXXXXXXXXXXXXXXXX -----------------------------------

//  AND OR OPERATOR
let nname = "Disha";
let age2 = 29;
if (nname[0] === "D" && age2 >= 18) {
    console.log("Name starts with D and age is above 18");
}
else {
    console.log("Name does not starts with D or age not above 18");
}

//  || -> OR opeartor when one of 2 conditions is true then true
// when both conditions false then false
let c = 22;
let r = 90;
if (c >= 18 || r > 100) {
    console.log("inside if");
}
else {
    console.log("inside else");
}
//---------------------- XXXXXXXXXXXXXXXXXXXXXXXXX -----------------------------------

//nested if else
// a game of guess the missing number
// winning Number is 19
// if user guess 19 win, lower than or greater than 19 loss

let wnum = 19;
let userGuess = prompt("Guess a Number")
console.log(typeof userGuess, userGuess);
// by default prompt takes input in string form, i.e host string
// convert string to number
let wnum1 = 19;
let userGuesse = +prompt("Guess a Number")
console.log(typeof userGuesse, userGuesse); // now its a number

if (wnum1 === userGuesse) {
    console.log("Your guess is right");
}
else {
    // console.log("Your guess is wrong");
    if (wnum1 > 19) {
        console.log("Your guess is too high!!!");
    }
    else {
        console.log("Your guess is too low");
    }
}

// ______________________________ END _____________________________________

// booleans and compariosn operators
// truthy and falsy values
// if else condition
// or and operator
// nested if else