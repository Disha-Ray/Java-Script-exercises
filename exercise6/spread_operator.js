'use strict';
// spread operator in array
let array1 = [1, 2, 3, 4];
let array2 = [5, 6, 7, 8];
let newArray = [...array1, ...array2, 89, 90];
console.log(newArray);

let newArray2 = [..."abc"];
console.log(newArray2);

let newArray3 = [..."123456789"];
console.log(newArray3);
// it does not wokr for numbers as they are not iterable like strings
// [...12345679]    -> error

// ----------------------- XXXXXXXXXXXXXXXXXXXXXXXXX --------------------------------------------
// spread operator for objects

const obj1 = {
    key1: "value1",
    key2: "value2"
}
const obj2 = {
    key3: "value3",
    key4: "value4"
}

const newObj = { ...obj1, ...obj2, key5: "value5" };
console.log(newObj);

//_________________________________________________________________________________________________

const obj3 = {
    key1: "value1",
    key2: "value2"
}
const obj4 = {
    key1: "Newvalue",
    key3: "value3",
    key4: "value4"
}

const newObj1 = { ...obj3, ...obj4 };
console.log(newObj1);

const newObj2 = { ...obj4, ...obj3 };
console.log(newObj2);

//__________________________________________________________________________________________________

const newObj3 = { ..."abc" };
console.log(newObj3);

const newObj4 = { ..."abcdefghij" };
console.log(newObj4);

const newObj5 = { ...["abc", "item2", "value3", "o0", "ppp"] };
console.log(newObj5);

// ----------------------------------------------  END  --------------------------------------------
// spread operator in array and objects