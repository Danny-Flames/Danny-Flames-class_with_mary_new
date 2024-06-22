
// FUNCTIONS : A JavaScript function is a block of code designed to perform a particular task.
// A JavaScript function is executed when "something" invokes it (calls it).

// function functionName() {
//     return something
// }

// Let's create(declare) our function
function displayName() {
    let aboutMe = 'My name is John Doe';
    let myAge = 10;
    let sentence = aboutMe + '. I am ' + myAge + 'yrs old.';

    // console.log(sentence)

    return sentence;
}

// Let's call(invoke) our function in order to execute it.
// displayName();

let danielBiography = displayName();
console.log(danielBiography)

function addNum() {
    let num1 = 10;
    let num2 = 40;
    return num1 + num2;
}

console.log(addNum())

// Class work
// Create a function of any name, create 3 variables holding Number data type, using addition sign(+)
// and subtraction sign(-) to do the computation.  eg:  12 + 4 - 6, return the value of the computation 
// in the function and ensure to log this returned value to the console.

function maryGeorge() {
    let firstNum = 20;
    let secondNum = 10;
    let thirdNum = 5;
    return firstNum + secondNum - thirdNum
}

console.log(maryGeorge())