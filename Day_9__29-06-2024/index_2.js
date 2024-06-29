
// EVENTS: HTML events are "things" that happen to HTML elements.
// When JavaScript is used in HTML pages, JavaScript can "react" on these events.
// Types of events:  onclick, onmouseover, onmouseout, onchange, onload

// When trying to make references to elements in your html document, you'll mostly work with:  
// document.getElementById
// document.getElementsByClassName
// document.getElementsByTagName

var firstDiv = document.getElementById('mary_test')
var testBoxDiv = document.getElementById('test_box')

console.log(firstDiv)
console.log(testBoxDiv)

// Event: onclick

function sayHello() {
    alert('Hello beautiful mary!')
}