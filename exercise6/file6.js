'use strict';
// Introduction to objects
//object are reference types
// for real world data arrays are not sufficient
//we store values in objects in key:value pairs 
// objects don't have index

// create objects
const person = { name: "Disha", Age: 22 };
console.log(person);
console.log(typeof person);
console.log(person.Age); // accesing data in object 

const student = {
    name: "Ram",
    Age: 19,
    hobbies: ["singing", "dancing", "reading"]
}
// if there are two same keys then later one overwrites
//let obj={key1: "value1",
// key2: "value2",
// key1: " value59"};
// then its key2: "value2", key1: " value59"


console.log(student);
// Access data in objects
console.log(student.hobbies);
console.log(student.name);
console.log(student.Age);

// add key value pairs to objects
student.gender = "male";
console.log(student);

// dot and bracket notation
console.log(student.name);
console.log(student["name"]);
student["Department"] = "CSE";
console.log(student);
// in Js key is by default string
//---------------------- XXXXXXXXXXXXXXXXXXXXXXXXXXX -----------------------------------------------
// Difference between dot and bracket notation

const about = {
    name: " Anjali",
    Age: 21,
    gender: "female",
    "about me": " I am a CSE student" //space -> make it a string
}
console.log(about);
// console.log(about."about me");   -> ERROR
console.log(about["about me"]);

const key = "email";
// about[key] = "anjalisen2002@gmail.com";// both works
about.key = "anjalisen2002@gmail.com";
console.log(about);

//----------------------------------------  END ---------------------------------------------------

//how to create objects
// how to access data in objects
// add key value pairs to an object
// dot and bracket notation
// Difference between dot and bracket notation