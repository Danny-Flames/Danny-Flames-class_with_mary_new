
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

// Class work -1
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

// Function with arguments/parameters
// Parameters are values/variables the function depends on during declaration.
// Arguments are values/variables that must be passed into the function when it is invoked(called).

function addTwoNums(a, b) {
    let sum = a + b;
    return sum;
}

console.log(addTwoNums(4, 5))
console.log(addTwoNums(12, 6))
console.log(addTwoNums(100, 200))


function displayUserNameAndAge(name, age) {
    let userSentence = 'My name is ' + name + '. I am ' + age + 'yrs old.';
    return userSentence;
}

console.log(displayUserNameAndAge('Mary', 4))
console.log(displayUserNameAndAge('Samson', 2))
console.log(displayUserNameAndAge('Samuel', 6))

// Class work-2
// Write a student program that accepts four arguments:  name, school, course, currentLevel and then print a 
// valid sentence telling the user his/her full details based off the arguments passed.

