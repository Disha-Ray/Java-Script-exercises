"use strict";
// arrays
// arrays are reference type in java script so they are objects in js
let fruits = ["apple", "Mango", "Guava", "pineapple", "grapes", "strawberry"];
console.log(fruits);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

let num = [1, 3, 5, 2, 9, 22, 89, 2];
console.log(num);
console.log(num[4]);
console.log(num[0]);

let mixed = [0, 6, 8.5, 5.9, "string", "abc", null, undefined];
console.log(mixed);
//--------------------------------- XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX -------------------------
// change array elemnts
fruits[1] = "Banana";
console.log(fruits);
console.log(typeof fruits);
console.log(Array.isArray(fruits));
// let obj={}; -> object so we are getting specific with Array.isArray(arr_name);

//--------------------------- XXXXXXXXXXXXXXXXXXXXXXXXXXXX ----------------------------------------
// Array operations
// 1. push -> add elemnts at end of array
fruits.push("blackberry");
console.log(fruits);

//pop() -> remove elements from end
let a = ["abc", "xyz", "tapan", "Rupsha"];
a.pop();
console.log(a.pop());// we can store it in a new variable
console.log(a);
// pop not only removes but also returns the popped element

// unshift -> add elements at front
a.unshift("bcrec");
a.unshift("Durgapur");
console.log(a);

// shift -> remove elements from front
let removedtring = a.shift();
console.log("Removed string from a is : " + removedtring);
console.log(a);

// NOTE -> Push and Pop is faster than shift and unshift
//--------------------------- XXXXXXXXXXXXXXXXXXXXXXXXXX -------------------------------------
//Primitive data type vs Reference data types

//primitive
let n1 = 17;
let n2 = n1;
console.log(n1);
console.log(n2);
n1++;
console.log(n1);
console.log(n2);

// reference
let arr1 = ["i1", "i2", "i3"];
let arr2 = arr1;
console.log(arr1);
console.log(arr2);
arr1.push("i4");
console.log(arr1);
console.log(arr2);

// primitive did not change -> primitive is stored in stack where each variable gets a diff block so change made in one not change the other

// reference is stored in heap area and their address in stored in stack,so both arr1 and arr2 are having same address therefore changes made in one shows in other

// Primitive -> changes are not made to original variable a new variable is returned 
// Reference -> changes are made to original copy

//-------------------------------- XXXXXXXXXXXXXXXXXXXXXXXXXXXX --------------------------------
// Clone of an array

console.log(arr1 === arr2);// same array

//  4 methods for clone of array    -> slice is fastest

let array1 = ["i1", "i2", "i3", "i4"];
let array2 = ["i1", "i2", "i3", "i4"];
console.log(array1 === array2);

array1 = array2.slice(0);
console.log(array1 === array2);

array2 = [].concat(array1);
console.log(array1 === array2);

// spread operator
array2 = [...array1];
console.log(array1 === array2);

array2 = array1.slice(0).concat(["i5", "i6"]);
console.log(array2);

array2 = [].concat(array1, ["i5", "i6"]);
console.log(array2);

array2 = [...array1, "i5", "i6"];
console.log(array2);

let array3 = ["e1", "e2"];
array2 = [...array1, ...array3];
console.log(array2);

//----------------------------- XXXXXXXXXXXXXXXXXXXXXXXXXX ---------------------------------------
// for loop in array
let places = ["london", "paris", "mumbai"];
for (let i = 0; i <= places.length - 1; i++) {
    console.log(places[i].toUpperCase());
    // console.log(places[i]);
}

let places2 = [];
for (let i = 0; i <= places.length - 1; i++) {
    places2.push(places[i].toUpperCase());
    // console.log(places[i]);
}
console.log(places2);
//------------------------- XXXXXXXXXXXXXXXXXXXXXXXX -------------------------------------------
//  use const for creating array
const array4 = ["a1", "a2", "a3"];
array4.push("a4", "a5");
console.log(array4);
// array4 = ["b1", "b2"]; -> error
// we will declare arrays with const and not let
// problem with let 
let arr5 = [2, 8, 9, 2];
arr5 = [2];
arr5.push(8);
console.log(arr5);
//--------------------  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx --------------------------------------
// while loop for array
let n = 0;
console.log(array4.length);
while (n < array4.length) {
    console.log(array4[n]);
    n++;
}
//------------------------- XXXXXXXXXXXXXXXXXXXXXXXXXXX -------------------------------------------
// for of loop
const arr6 = ["apple", "banana", "mango"];
let arr7 = [];
for (let fruit of arr6) {
    console.log(fruit.toUpperCase());
    arr7.push(fruit.toUpperCase());
}
console.log(arr7);
//------------------------------ XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX ---------------------------
// for in  loop
for (let index in arr6) {
    console.log(arr6[index]);
}

// use for loop, for of loop
//--------------------- XXXXXXXXXXXXXXXXXXXXXXXXXXXX -----------------------------------------------
// ARRAY DESTRUCTURING
let arr = ["value1", "value2"];
let myvar1 = arr[0];
let myvar2 = arr[1];
console.log(myvar1);
console.log(myvar2);
// shortcut in Js for this
let [myVariable1, myVariable2] = arr; // if declared const value could'nt be changed
console.log(myVariable1);
console.log(myVariable2);
myVariable1 = "value changed"; // they are like normal variables
console.log(myVariable1);
console.log(myVariable2);
//if arr had 3 or more elements then also only first 2 elements will store in two variables
// more elements need more varibales for each

// less elements in array and more variables then unused  variables will be undefined
console.log("when there are less elements and more variables");
let arrr = ["value1"];
let [myVariables1, myVariables2, myVariables3] = arrr; // if declared const value could'nt be changed
console.log(myVariables1);
console.log(myVariables2);
console.log(myVariables3);
// let [var1, , var2]=arr having 3 elements then var1 has first element, var3 has third element.

// let [v1,v2,...newarr]=array having multiple values then v1=first element, v2=second element,
// v3=all remaining elements
//-----------------------------------------------END -----------------------------------------

// array
// change array elements
// push(), pop(), unshift(), shift()
//primitive vs reference data type
//clone of an array
// for loop in array
// use const for creating array
// while loop in array
//for of loop
// for in loop
// Array Destructuring