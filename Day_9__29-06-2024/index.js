// OBJECTS - is dentoed by curly braces. Objects always have properties. It has key and value pairs
var myObj_1 = {
  name: "Mary",
  location: "Calabar",
  isFemale: true,
  getBiography: function () {
    return `My name is ${this.name}, based in ${this.location} and i am a ${
      this.isFemale ? "female" : "male"
    }.`;
  },
};

console.log(myObj_1)

// To access a property in an object, you use 'dot'
console.log(myObj_1.location)
console.log(myObj_1.name)
console.log(myObj_1.getBiography())   // The 'getBiography' is called a method of the object(myObj_1)

// Quick refresh on tenary operators
var goodLady = true;
var goodGuy = false;

console.log(goodLady ? 'I am a good lady' : 'I am a bad bitch')
console.log(goodGuy ? 'I am a good guy' : 'I am a naughty guy')

// Another way of accessing an object property is by using square bracket, and also nested objects.
var myObj_2 = {
    bestNum: 30.4,
    favFriend: 'Smith',
    hobby: 'Singing',
    bestFrnd: {
        name: 'Samuel',
        age: 10,
        location: 'Abuja'
    }
}

console.log(myObj_2['bestNum'])
console.log(myObj_2['favFriend'])
console.log(myObj_2['hobby'])

// How do we print out the bestFrnd's name, age and location 
console.log(myObj_2.bestFrnd.name)
console.log(myObj_2['bestFrnd']['age'])
console.log(myObj_2.bestFrnd['location'])