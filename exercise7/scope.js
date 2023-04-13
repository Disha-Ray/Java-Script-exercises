// global scope
let myvar1 = "abcd";
console.log("sbcbcncn", myvar1);

//__________________________________________________________________________________________________

// scope is the area/region/space where a variable or function is accessible
//Global scope means global space or a public space.
// Local scope means a local region or a restricted region.

const fullName = "Oluwatobi Sofela";

function profile() {
    function sayName() {
        function writeName() {
            return fullName;
        }
        return writeName();
    }
    return sayName();
}

//Therefore, the scope chain that exists from the variable’s call to the global scope is:

// writeName() scope ---> sayName() scope ---> profile() scope ---> global scope
//The global scope is the last link in JavaScript's scope chain.

// So, here are the sequential steps the computer must take to locate fullName's lexical scope:

// 1. Firstly, the computer will check if fullName got defined locally within the writeName() function. But it will find no fullName definition there, so it moves up to the next scope to continue its quest.

// 2.Secondly, the computer will search for fullName's definition in sayName() (the next space in the scope chain). Still, it doesn't find it there, so it climbs up the ladder to the next scope.

// 3.Thirdly, the computer will search for fullName's definition in the profile() function. Yet still, fullName is not found there. So the computer goes forward to seek fullName's lexical scope in the next region of the scope chain.

// 4. Fourthly, the computer goes to the global scope (the following scope after profile()). Fortunately, it finds fullName's definition there! Therefore, it gets its content ("Oluwatobi Sofela") and returns it.

//__________________________________________________________________________________________________

const fullName1 = "Oluwatobi Sofela";

// Nested functions containing two more fullName variables:
function profile1() {
    const fullName1 = "Tobi Sho";
    function sayName1() {
        const fullName1 = "Oluwa Sofe";
        function writeName1() {
            return fullName1;
        }
        return writeName1();
    }
    return sayName1();
}
console.log(profile1());
//sayName()’s fullName variable will get called because sayName() is the scope inside which the computer will first find a fullName definition.

// Therefore, when profile() gets invoked, the returned value will be "Oluwa Sofe".

//__________________________________________________________________________________________________
// Some things to keep in mind:

// Suppose the computer did not find fullName's definition in any of the scopes. In such a case, the computer will return Uncaught ReferenceError: fullName is not defined.

// The global scope is always the last scope of any JavaScript scope chain. In other words, the global scope is where all searches will end.

// An inner (child) scope has access to its parent (outer) scope, but an outer scope does not have access to its child scope.

// For instance, in the snippet above, writeName() can access codes inside any of its parent scope (sayName(), profile(), or the global scope).

// However, neither sayName(), profile(), nor the global scope can access any of writeName()'s codes.

//_________________________________________________________________________________________________
// lexical scope
//Lexical scope is the definition area of an expression. an item's lexical scope is the place in which the item got created.

// also lexical scope is known as static scope.
// The place an item got invoked (or called) is not necessarily the item's lexical scope. Instead, an item's definition space is its lexical scope.
// involved with finding accessibility of variables in case of functions inside functions 

const myName = "Oluwatobi";

// Call myName variable from a function:
function getName() {
    return myName;
}

// lexical scope is global

function getName() {
    const myName = "Oluwatobi";
    return myName;
}
//myName’s lexical scope is getName()’s local environment because getName() is myName’s definition space.

function showLastName() {
    const lastName = "Sofela";
    return lastName;
}

// Define another function:
function displayFullName() {
    const fullName = "Oluwatobi " + showLastName();
    return fullName;
}

// Invoke displayFullName():
console.log(displayFullName());

// The invocation above will return:
//   "Oluwatobi Sofela"

//An alternative to the lexical scope is the dynamic scope — but it rarely gets used in programming. Only a few languages, like bash, use dynamic scope.

function myapp() {
    let myvar2 = "vbn";
    console.log("Inside myapp", myvar1, myvar2);

    const myfunc = function () {
        let myvar3 = "mmm";
        console.log("Inside myfunc", myvar1, myvar2, myvar3);

        const myfunc2 = () => {
            let myvar4 = "lkjh";
            console.log("Inside myfunc", myvar1, myvar2, myvar3, myvar4);
        }
        myfunc2();
    }
    myfunc();
}

myapp();
console.log("Globally accessible ", myvar1);

// ---------------------------------------- END --------------------------------------------------
// block scope vs function scope
// let & const are block scope
// var function scope
//  {
//     block 1
// }

//  {
//     block 2
// }

{
    let a = 4;
    const b = 10;
    console.log(a);
    console.log(b);
}
// console.log(a); error a not defined
// console.log(b); error b not defined
// cannot access let , const outside this block

{
    var c = 90;
    console.log(c);
}
{
    var c = 100;
    console.log(c);
}
{
    console.log(c);
}

function even() {
    if (true) {
        let n = 10;
        console.log("even number : ", n);
    }
    console.log("Inside even");
}
even();
// console.log(n);  -> error -> block scope

// ----------------------------------------  END  -------------------------------------------------

//  scope
//  global scope
//  local scope
//  scope chain
//  lexical scope
//  block scope vs function scope