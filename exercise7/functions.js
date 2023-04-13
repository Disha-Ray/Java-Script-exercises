// function declaration
// printing fucntion

function hbd() {
    console.log("Happy Birthday to you .....");

}
hbd();
hbd();
hbd();
hbd();  // calling the function
//__________________________________________________________________________________________________

// return function

function sum(a, b) {
    return a + b;
}
console.log(sum(2, 9));
let ans = sum(3, 7);
console.log(ans);
// in function if u have 3 parameters and send only two argumats then prints NaN -> as parameter for which there is no argument it becomes undefined

//__________________________________________________________________________________________________
// examples
function even(n) {
    if (n % 2 === 0)
        return true;
    return false;
}
console.log(even(10));

function even1() {
    return (n % 2 === 0);
}
console.log(even(10));

// ____________________________________________________________________________________________

function find(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return ("found  " + i);
        }
    }
    return -1;
}

const array = [2, 4, 6, 8, 10, 12, 20];
const ansd = find(array, 8);
console.log(ansd);

//_________________________________________________________________________________________________

// function expression
const print = function () {
    console.log("Const function works as well");
}
print();
print();
print();
//_________________________________________________________________________________________________

const add = function (num1, num2, num3) {
    return num1 + num2 + num3;
}
console.log(add(10, 20, 30));

//------------------------------------- END --------------------------------------------------------

// arrow functions
const disha = () => {
    console.log("My name is disha");
}
disha();

// arrow function examples
const addsum = (n1, n2, n3) => {
    return n1 + n2 + n3;
}
console.log(addsum(2, 8, 1));

const str = (array2) => {
    return array2[0];
}
console.log(str("nature"));

// when u have only one parameter in function -> remove parentheses
const rrr = n4 => {
    return (n4 % 2 === 0);
}
console.log(rrr(8));

//__________________________________________________________________________________________________
// another type of arrow function

const rrr1 = n5 => n5 % 2 === 0;
console.log(rrr1(90));

const addd = (v, x, m) => v + x + m;
console.log(addd(5, 10, 15));

//-------------------------------------- END ------------------------------------------------------

// functions inside functions
function finf() {
    console.log("Function inside Function ");
    const myadd = (w1, w2, w3) => w1 + w2 + w3;
    const mul = (m1, m2) => m1 * m2;
    console.log(myadd(4, 10, 6));
    console.log(mul(5, 10));
}

finf();
// ------------------------------------ END -------------------------------------------------------

// arrow declaration (print, return)
//  function expressions -> cosnt fun_name = function(parameters) {}
// arrow functions -> const func_name = (para1, para2, para3) +>{}
// const func_name = (parameters n1,n2) => n1+n2;
// function inside function