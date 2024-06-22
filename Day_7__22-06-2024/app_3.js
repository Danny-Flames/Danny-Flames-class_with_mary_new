
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