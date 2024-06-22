
// DATA TYPES: JavaScript has 8 Datatypes which are: String, Number, Bigint, Boolean, Undefined, Null, Symbol, Object, Array
// We use 'typeof' to know the data-type

var mary_1 = 12;         // Number
var mary_2 = 'Mary';     // String
var mary_3 = false;      // Boolean
var mary_4 = 12.5;       // Float or decimal
var mary_5 = undefined;  // Undefined
var mary_6 = null;
var maryFriends = ['Samuel', 'David', 'Micheal', 'Emmanuel', 12, 4.5, null, undefined];   // Array 
const myFavFrnd = {
    name: 'Amaka',
    age: 10,
    isTall: false
}                               // Object - an object contains a set/number of key and value pairs
// An object is denoted by 'curly braces'
// An array is denoted by 'square brackets'


console.log(typeof mary_1)
console.log(typeof mary_2)
console.log(typeof mary_3)
console.log(typeof mary_4)
console.log(typeof mary_5)
console.log(typeof mary_6)
console.log(typeof maryFriends)

// Concatenation:  Is the process of adding one or more variables of 'string' data types using plus(+).
var guest = 'Kelvin';
var prefixGuest = "His name is ";
var guestAge = 12;
var sentence = prefixGuest + guest;
var sentence2 = sentence + ' and he is ' + guestAge + 'yrs old.';

console.log(sentence)
console.log(sentence2)

// Note:  An array is a type of object