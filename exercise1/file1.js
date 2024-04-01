"use strict";
// we cannot declare variables without var when there is use strict
console.log("hello World!!");
console.log('Disha Ray');
// " " and ' ' works for string

// Creating variables in Js

var firstName = "Disha";
console.log(firstName); //if we comment this line out then it will be not printing Disha
console.log("firstName");

// console.log(firstname);  IT IS AN ERROR

// change value of variable
// variable names are case sensitive
firstName = "Ray";
console.log(firstName);

// variables can be declared without using var
// Lastname = "Sen";
// console.log(Lastname);

// ------------------------------------------ XXXXXXXXXXXXXXXXXXXX ---------------------------------
// RULES FOR NAMING VARIABLES
// CANNOT start with number, cannot use space, 
// can start/use underscore and dollar

var value1 = 100;
console.log(value1 * 2);
console.log(value1 / 2);
console.log(value1 + 500);
console.log(value1 - 50);

// finding to the power 
var value2 = 3;
console.log(value2 ** 2);
console.log(value2 ** 3);
console.log(value2 ** 5);
console.log(value2 ** 0.5);

var value3 = 25;
console.log(value3 ** 0.5);

// First_name -> snake case writing AND firstName -> camelcase writing

// convention in java script -> start with smallcase and write in camelcase


// ------------------------------ XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX --------------------------- 

//  LET KEYWORD 
// let is used to create variables like var

let val = 5;
console.log(val);
let nameL = "Krishna";
console.log(nameL);

// Differences between let and var
//1. block scope vs function scope (Main Difference)
// 2. 

var school = "GTBPS";
var school = "BCREC";
console.log(school);

// let num = 100;
// let num=10;
// console.log(num);
//2. error -> we cannot declare same variable with let twice
// but we can change value
let num = 100;
num = 10;
console.log(num);

// ---------------------------- XXXXXXXXXXXXXXXXXXXXX -----------------------------------

// DECLARE CONSTANTS

const pi = 3.14;
// pi = 3.17; error : cannot change value of const
console.log(pi);
console.log(pi * 10);
console.log(pi ** 2);

// END
// KEYWORDS- var, let, const
// declaring variables
// printing with console.log();


