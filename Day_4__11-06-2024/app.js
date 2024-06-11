

// document.getElementById()
// document.getElementsByClassName()
// document.getElementsByName()
// document.getElementsByTagName()

document.getElementById('mary_george_box').innerHTML = "We changed this from javascript.";

var maryBoxes = document.getElementsByClassName('mary_box');
maryBoxes[0].innerHTML = 'This text was changed by javascript.'
