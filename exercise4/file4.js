"use strict";
// Nested if else
let tempInDegree = 50;
if (tempInDegree < 0) {
    console.log("Extremly cold outside");
}
else if (tempInDegree < 16) {
    console.log("It is cold outside");
}
else if (tempInDegree < 25) {
    console.log("Weather is okay");;
}
else if (tempInDegree < 35) {
    console.log("Let's go for swim");
}
else if (tempInDegree < 45) {
    console.log("Turn on AC");
}
else {
    console.log("Too hot");
}

//------------------------- XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX -------------------------------------

// switch statements
let day = 9;
switch (day) {
    case 0:
        console.log("Sunday");
        break;
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid Day");
        break;
}

//-------------------------------------- XXXXXXXXXXXXXXXXXXXXXXXX --------------------------------

//While loop
let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}
console.log(`value of i : ${i}`);
// value of i has been incremented to 11 but we cannot see it
// Find sum of first 10 natural numbers using loop

let total = 0;
let j = 1;
while (j <= 10) {
    // total = total + j;
    total += j;
    j++;
}
console.log(total);
console.log(j);

// using math
let num = 10;
let ans = (num * (num + 1)) / 2;
console.log(ans);
//------------------------------- xxxxxxxxxxxxxxxxxxxxxxxxxxxxx -------------------------------
// For loop
console.log("Printing using for loop");
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
// 1. if let i is in for(let i=1;....) then let i does not exist outside this loop but var i does exist i.e for(var i=1; .........) will exist outside loop

// let i=1;
// for(;i<=10li++)  -> also works

// for loop example
let tot = 0;
let n1 = 10;
for (let k = 1; k <= 10; k++) {
    tot += k;
}
console.log(tot);
//----------------------------- XXXXXXXXXXXXXXXXXXXXX ------------------------------------------

// BREAK AND CONTINUE KEYWORD
console.log("Break keyword : ")
for (let i = 1; i <= 10; i++) {
    if (i === 4)
        break;
    console.log(i);
}

console.log("Continue keyword : ")
for (let i = 1; i <= 10; i++) {
    if (i === 4)
        continue;
    console.log(i);
}
//----------------------------- XXXXXXXXXXXXXXXXXXXXXXXXXXX -----------------------------------
// do while loop
console.log("Do While loop");
let w = 20;
do {
    console.log(w);
    w++;
} while (w <= 9);// runs one time even when condition is false

//------------------------------- END ---------------------------------------------------------

// Nested if else
// switch case
// while loop
// for loop
// break and continue keywords
// do while loop