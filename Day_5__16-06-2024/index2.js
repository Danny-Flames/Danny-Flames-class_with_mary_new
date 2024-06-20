
// OPERATORS - assignment operator(=), comparison operators( >, <, ==, !=, and so on...), addition(+), subtraction;

// Addition
let num1 = 20;
let num2 = 30;
let sum = num1 + num2;

console.log(sum)

// Subtraction
const num3 = 40;
const num4 = 10;
const result = num3 - num4;

console.log(result)

// Division
let num5 = 20;
let num6 = 30;
let result2 = num5 / num6;

console.log(result2)

// Subtraction
const num7 = 5;
const num8 = 7;
const result3 = num7 * num8;

console.log(result3)

// Comparison operators:  ==, !=, >, <, >=, <= 
var person1 = "Daniel";
var person2 = "Mary"
var areTheySamePerson = person1 == person2;
var areTheyNotSamePerson = person1 != person2;

console.log(areTheySamePerson)
console.log(areTheyNotSamePerson)

const favNum1 = 20;
const favNum2 = 10;

const isFavNum1GreaterThanFavNum2 = favNum1 > favNum2;
const isFavNum1LesserThanFavNum2 = favNum1 < favNum2;

console.log(isFavNum1GreaterThanFavNum2)
console.log(isFavNum1LesserThanFavNum2)

let tenants_1 = 30;
let tenants_2 = 50;
let tenants_4 = 15;
let tenants_5 = 25;
let tenants_3 = 15;

console.log(tenants_1 >= tenants_2)      // false
console.log(tenants_2 >= tenants_2)      // true
console.log(tenants_1 <= tenants_2)      // true
console.log(tenants_4 >= tenants_5)      // false
console.log(tenants_4 >= tenants_3)      // true      

// Logical operators:    &&, ||     where '&&' means 'and', where '||' means 'or'
// We'll come back to this during 'Conditional statements - if and else'

// Tenary operator:   ?
const maryGender = 'female';
const danielGender = 'male'
const isMaryFemale = maryGender == 'femnale' ? 'She is a male' : 'She is a female.'
const isDanielFemale = danielGender == 'male' ? 'He is a female' : 'He is a male.'


console.log(isMaryFemale)    // She is a male
console.log(isDanielFemale)  // He is a male.

let lagosLoc = 'Nigeria';
const isLagosNigeria2 = lagosLoc != 'Nigeria' ? 'I am in nigeria' : 'I am in ghana';
const isLagosNigeria = lagosLoc == 'Nigeria' ? 'I am in ghana' : 'I am in nigeria';

console.log(isLagosNigeria2)  // I am in nigeria
console.log(isLagosNigeria)   // I am in ghana

var fact = "Apple is good";
var issalie = fact !=  "Apple is good" ? "False" : "True";
var issalie2 = fact ==  "Apple is goood" ? "False" : "True";

console.log(issalie)   // True
console.log(issalie2)  // True

// Tenary explanation:   expression is true ? this : that