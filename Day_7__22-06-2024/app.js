
// Continuation of Operators: %, ++, --,
// % is called 'modulus', it returns the remainder

const myNum1 = 20;
const myNum2 = 4;
const myNum3 = 6;
const myNum4 = 30;
const myNum5 = 4;

const resDivided = myNum1 / myNum2;
const resModulus = myNum1 % myNum2;
const resModulus2 = myNum1 % myNum3;

console.log('resDivided: ', resDivided)
console.log('resModulus: ', resModulus)
console.log('resModulus2: ', resModulus2)

console.log(myNum4 % myNum5)
console.log(myNum4 % myNum1)
console.log(67 % 13)
console.log(103 % 9)

// Increment operator:  ++
let num1 = 4;
num1++;                  // num1 = num1 + 1

console.log(num1)

var x = 16;
x++;

console.log(x)

// Decrement operator:  --
let num2 = 8;
num2--;                 // num2 = num2 - 1

console.log(num2)

var y = 15;
y--;

console.log(y)

// More examples on increment and decrement
let num3 = 10;
num3++;
num3++;
num3--;
num3++;
num3--;
num3++;
num3--;
num3--;
num3++;
num3--;

console.log(num3)