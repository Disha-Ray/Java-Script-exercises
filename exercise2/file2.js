"use strict";
// STRING INDEXING

let firstName = "Disha";

// D    I   S   H   A
//0     1   2   3   4
console.log(firstName);
console.log(firstName[2]);
console.log("Length of string : " + firstName.length);

let variable = "jhgnuiorstfgdcccvertgfbio";
console.log(variable);
console.log("Length of string : " + variable.length);
console.log("Last character of string : " + variable[variable.length - 1]);

//---------------------------- XXXXXXXXXXXXXXXXXXXXXXXXXXX ----------------------------

//USEFUL STRING METHODS
//trim()
// toUpperCase()


// trim() will remove spaces from before and after my words in string and create a new string without spaces

// it will not change the original string as strings are immutable, theefore creating a new variable or storing in sam variable is imprtant

console.log("TRIM :");
let abc = "       Jupiter      ";
let newString = abc.trim();
console.log(newString);
abc = abc.trim(); // we can store in abc as well
console.log(abc);

let xyz = "    Sun  far    away        ";
let newString2 = xyz.trim();
console.log(newString2);

// ___________________________________________________________________________________________


// toUpperCase()

//three different ways to print new generated string as string is immutable original string ill not change a new string is generated

console.log("To upper case : ");
let a = "milkywaygalaxy";
a = a.toUpperCase();
console.log(a);

let b = "solarradiation";
console.log(b.toUpperCase());

let c = "saturn";
let d = c.toUpperCase();
console.log(d);

//toLowerCase()

let x = "asDFVHTBuTGGblmkiscaYYUHBVCR";
x = x.toLowerCase();
console.log("To lower case : " + x);

//_________________________________________________________________________________________

//slice()
// Sunrise -> from it i want only sun -> we use slice

let word = "sunrise";
let newString1 = word.slice(0, 3); // 4 is not included
console.log(newString1);
word = word.slice(3);
console.log(word);

// --------------------------------- XXXXXXXXXXXXXXXXXXXXXXXXXXXXX ------------------------------

//typeof operator -> gives datatypes
//number, string, booleans, undefined, null, BigInt, symbols

let age = 22;
let dec = 2.9;
console.log(typeof age);
console.log(typeof word);
console.log(typeof x);
console.log(typeof dec);

// -------------------------------------- XXXXXXXXXXXXXXXXXXXXXX -----------------------------
// CONVERT NUMBER TO STRING
console.log("Converting number to string");
age = age + "";
console.log(typeof age);

let s = 37;
console.log(typeof (s + ""));

//-------------------------- XXXXXXXXXXXXXXXXXXXXXXXXXXXx ------------------------------------

let str = "34";
str = +"34";
console.log(typeof str);

// Another way of conversion

let n = 15;
n = String(n);
console.log(typeof n);

let st = "1130987162";
st = Number(st);
console.log(typeof st);

//------------------------- XXXXXXXXXXXXXXXXXXXXXXXXXXX -----------------------------------------

//Concatenation of two strings
console.log("Concatenation of two strings : ");
let str1 = "Solar";
let str2 = "System";
let full = str1 + " " + str2;
console.log(full);

let n1 = "10";
let n2 = "10";
console.log(n1 + n2);

let n3 = +n1 + +n2;
console.log(n3);
console.log(typeof n3);

//------------------------------- XXXXXXXXXXXXXXXXXXXXXXXXXX -------------------------------

//TEMPLATE STRING

let yrs = 30;
let fname = "Rajat";
console.log("The candidate's name is " + fname + " and his age is " + yrs);

// using template string
console.log(`The candidate's name is ${fname} and his age is ${yrs} `);
//${} -> dollar placeholder

//---------------------XXXXXXXXXXXXXXXXX------------------------------

// undefined 
let lname;
console.log(lname); // when no value assigned then its undefined
lname = "smith";
console.log(typeof lname, lname); // var, let can be undefined but 
// const cannot be undefined -> gives error.

// null
let myvar = null;
console.log(typeof myvar);
console.log(typeof null); // bug in js, error , not fixed b/c thn all codes, libraries, frameworks has to be changed.

console.log(myvar);
myvar = "today";
console.log(myvar, typeof myvar);

// ------------------ XXXXXXXXXXXXXXXXXX---------------------------------------------------

//BigInt

console.log(Number.MAX_SAFE_INTEGER);
let mynum = BigInt(123);
console.log(mynum);
let mynum1 = 1788n;
console.log(mynum1);
let mynum2 = 12345678900987654212546473892n;
console.log(mynum2);

console.log(mynum + mynum1);
// BigInt can only be mathematically operated with BigInt like +,-,/,*etc.

//-------------------------------------XXXXXXXXXXX    END        XXXXXXXXXXX-----------------------

// string indexing
// string methods - trim(), toUpperCase(), toLOwerCase(); slice()
// typeof operator
// convert number to string and string to number
// concatenation of two strings
//template string
//undefined, null, BigInt