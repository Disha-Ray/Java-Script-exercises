// 'use strict';
//object inside an array
// very useful in real life applications

// arr = [
//          {Obj1},
//          {Obj2},
//          {obj3}
//      ]

// create objects inside array
const users = [
    { ID: 01, fName: "Disha", Age: 21, College: "BCREC", gender: "female" },
    { ID: 02, fName: "Ani", Age: 23, College: "BCREC", gender: "female" },
    { ID: 03, fName: "Rupsha", Age: 19, College: "BCREC", gender: "female" },
    { ID: 04, fName: "Megha", Age: 21, College: "BCREC", gender: "female" },
]

for (let user of users) {
    console.log(user);
}

for (let user of users) {
    console.log(user.ID);
}

// nested destructuring  -> destructure users

const [user1, user2, user3] = users;
console.log(user1);
console.log(user2);
console.log(user3);


const [{ ID, fName, Age: user1Age }, { college }, { gender }, ...rest] = users;
console.log(ID);
// console.log(Age);
console.log(gender);
console.log(rest);
console.log(user1Age);
//---------------------------------------------  END  ----------------------------------------------

// objects in array
// nested destructuring 