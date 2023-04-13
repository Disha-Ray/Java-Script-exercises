// forEach method in array

const arr = [1, 2, 3, 4];
function mul(num, index) {
    console.log(`index is ${index} , Number is ${num * 2}`);
}

for (let i = 0; i < arr.length; i++) {
    mul(arr[i], i);
}

console.log("  ");
console.log("forEach method");
arr.forEach(mul);

console.log("Second method :");
arr.forEach(function (number, index) {
    console.log(`index is ${index} , Number is ${number * 2}`);
});

console.log("Third method : ");
arr.forEach(function (number) {
    console.log(number * 2);
});

//  paractical use of forEach

const array = [
    { firstName: "Disha", age: 22 },
    { firstName: "abnn", age: 23 },
    { firstName: "hgftr", age: 25 },
    { firstName: "qwer", age: 28 },
];

for (let user of array) {
    console.log(user.firstName);
}

console.log(' ');
console.log("Using forEach");
array.forEach(function (user) {
    console.log(user.firstName);
});

//---------------------------------------------- END  --------------------------------------------

// map method 
// important for react
//map method that takes callback function as an input 

console.log(' ');
console.log("Map Method");
const numbers = [1, 2, 3, 4, 5];
const square = function (num) {
    return num * num;
}
// always return value in callback func in case of map method 
// or else it will be undefined that's why returning value is imp

const ans = numbers.map(square);
console.log(ans);

// map function always creates a new array instead of changing the original one

const arrr = [3, 6, 9, 11];
const square2 = arrr.map(function (number) {
    return number * number;
});
console.log(square2);

const pracarray = arrr.map(function (n) {
    return n * 10;
});
console.log(pracarray);

//------------------------------------ XXXXXXXXXXXXXXXXXXXXXXXX -----------------------------------

// filter method

console.log("  ");
console.log("Filter Method");
const filarr = [1, 2, 3, 4, 5, 6, 7, 8];
const fil = function (n1) {
    return n1 % 2 === 0;  // iff true then added in nwe array created by filter method 
}

const filans = filarr.filter(fil);
console.log(filans);

const filans2 = filarr.filter(function (filt) {
    return filt % 2 === 0;
});
console.log(filans2);

// ----------------------------------------- XXXXXXXXXXXXXXXXXXXXX  -------------------------------

// reduce method

// aim: find sum of all numbers in array

console.log(" ");
console.log("Filter Method");
const redarr = [1, 2, 3, 4, 5];
const sum = redarr.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 100); // 100 initial value of accumulator

console.log(sum);

// accumulator ,  currentValue,  return
//      1               2           3
//      3               3           6
//      6               4           10
//      10              5           15

// real life example
const userCart = [
    { id: 01, nameofPro: "mobile", price: 12000 },
    { id: 02, nameofPro: "laptop", price: 62000 },
    { id: 03, nameofPro: "monitor", price: 12000 },
    { id: 04, nameofPro: "ipad", price: 92000 },
];

const totalAmount = userCart.reduce((totalprice, Currentprice) => {
    return totalprice + Currentprice.price
}, 0);

console.log(totalAmount);

//----------------------------------------  XXXXXXXXXXXXXXXXXXXXXXXXXXXXX  -------------------------

// sort method
console.log(" ");
console.log("Sort Method");

const sortarr1 = [200, 400, 1, 5, 7];
sortarr1.sort();
console.log(sortarr1);

// sort method sort in terms of strings 
const sortarr2 = ["AAbv", "nhbg", "on", "abcde", "zxcv"];
sortarr2.sort();
console.log(sortarr2);

// how to actually use sort in js
sortarr1.sort((a, b) => {
    return a - b;
}); // for descending order b-a;
console.log(sortarr1);

// 200-400 ----> negative ------> 200,400
// 400-1 ---------> positive -----> 1,400

//__________________________________________________________________________________

// realistic example of sort method

//const userCart = [
//     { id: 01, nameofPro: "mobile", price: 12000 },
//     { id: 02, nameofPro: "laptop", price: 62000 },
//     { id: 03, nameofPro: "monitor", price: 12000 },
//     { id: 04, nameofPro: "ipad", price: 92000 },
// ];

// Low To High

const LowToHigh = userCart.slice(0).sort((a, b) => {
    return a.price - b.price;
});
console.log("Original array");
console.log(userCart);
console.log(LowToHigh);

const HightoLow = userCart.slice(0).sort((a, b) => {
    return b.price - a.price;
});
console.log(HightoLow);

// ---------------------------- XXXXXXXXXXXXXXXXXXXXXXXX --------------------------------------

// find method

const findarr1 = ["school", "pencil", "pen", "notes", "bag", "bench"];

function isLength(string) {
    return string.length === 3;
}
const findans = findarr1.find(isLength);
console.log(findans);
// returns only the first occurence

const findans1 = findarr1.find((str) => str.length === 3);
console.log(findans1);

const usersd = [
    { userID: 01, User_Name: "Anna", Age: 22, Dept: "CSE" },
    { userID: 02, User_Name: "ddd", Age: 24, Dept: "CSE" },
    { userID: 03, User_Name: "asdf", Age: 42, Dept: "ECE" },
    { userID: 04, User_Name: "axy", Age: 12, Dept: "CSE" },
    { userID: 05, User_Name: "uiop", Age: 22, Dept: "IT" },
    { userID: 06, User_Name: "nana", Age: 22, Dept: "CE" },

]
const printd = usersd.find((usersd) => usersd.userID === 03);
console.log(printd);

// -------------------------------------  XXXXXXXXXXXXXXXXXXXXXXXXX  -------------------------------

// every method
const nums = [2, 3, 4, 6, 7, 8];
const every_ans = nums.every((num) => num % 2 === 0);
console.log(every_ans);
// every method ----> true/false (boolean)
//_____________________________________________________________________________________________

// practical example of every method

const userCartd = [
    { id: 01, nameofPro: "mobile", price: 12000 },
    { id: 02, nameofPro: "laptop", price: 2000 },
    { id: 03, nameofPro: "monitor", price: 12000 },
    { id: 04, nameofPro: "ipad", price: 22000 },
];

const anssd = userCartd.every((cartItem) => cartItem.price < 30000);
console.log(anssd);  // all items lesser than 30000 -----> true

const anssdi = userCart.every((cartItem) => cartItem.price < 30000);
console.log(anssdi);  // if at least one price is >30000 ----> false

// -------------------------------------  XXXXXXXXXXXXXXXXXXXXX  -----------------------------------

//  some method

const numds = [2, 5, 0, , 8, 7];
const even = numds.some((dis) => dis % 2 === 0);
console.log(even);  // even if one is true then true

const prac_some = userCart.some((vari) => vari.price < 30000);
console.log(prac_some);
//-----------------------------------  XXXXXXXXXXXXXXXXXXXXXXXXXXX  --------------------------------

// fill method

console.log("Fill Method");
const createArray = new Array(10).fill(-1);
console.log(createArray);

const fillarr = [2, 3, 4, 5, , 6, 7, 8];
fillarr.fill(0, 1, 4);
console.log(fillarr);

//--------------------------------  XXXXXXXXXXXXXXXXXXXXXXXXXX  -----------------------------------

// splice method
// used in deleting/inserting something from middle of an array

const items = ["it1", "it2", "it3", "it4"];
//delete

console.log("splice methods");
items.splice(1, 1); // start, delete
console.log(items);

// insert
//order ------>  start , delete , insert

items.splice(1, 0, "inserted item");
console.log(items);

const del = items.splice(1, 2);
console.log(del);

// insert and delete together

const newarr = ["item1", "item2", "item3", "item4", "item5", "item6"];
const delarr = newarr.splice(1, 2, "newitem1", "newitem2");
console.log(newarr);
console.log(delarr);

//----------------------------------------  END  -----------------------------------------------

//  forEach
//   map
//  filter
//  reduce
//  sort
//  find
//  every
//  some
//  fill
//  splice