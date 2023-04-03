// how to iterate objects
const student = {
    name: "Ram",
    Age: 19,
    hobbies: ["singing", "dancing", "reading"]
}
// for in loop
for (let key in student) {
    console.log(key);
} // print only the keys 

for (let key in student) {
    console.log(student.key);
}

for (let key in student) {
    console.log(student[key]);
} // same as in array

// for (let k of student) {
//     console.log(student[key]);
// }        -> ERROR 

// 3 ways to itearte
for (let key in student) {
    console.log(`${key}:${student[key]}`); // dot will also work but show the array for hobbies
}

for (let key in student) {
    console.log(`${key}:${student.key}`); // dot will also work but show the array for hobbies
}

for (let key in student) {
    console.log(key, ":", student[key]);
}
// another way for iterating objects 
// object.key
console.log("Using Object.key")
console.log(Object.keys(student));


for (let key of Object.keys(student)) {
    console.log(student[key]);
}
//---------------------------- XXXXXXXXXXXXXXXXXXXXXXXXXXXX ---------------------------------------
// Computed Properties
const key1 = "obj1";
const key2 = "obj2";

const value1 = "myvalue1";
const value2 = "myvalue2";

const obj = {
    [key1]: value1,
    [key2]: value2
}
console.log(obj);

//Another method
const obj1 = {};
obj1[key1] = value1;
obj1[key2] = value2;
console.log(obj1);


// ------------------------------------------  END  ------------------------------------------------

// how to iterate objects
// Computed Properties