/*
function raiseAlarm() {
    alert('I show it once after 2 seconds.');
}

var delayedAlert = setTimeout(raiseAlarm, 2000);
*/

/*function raiseAlarm() {
    alert('I show myself every two seconds.')
}

var interval = setInterval(raiseAlarm, 2000);

function stop() {
    alert('It took 10 seconds. The following statement interrupts the interval.');
    clearInterval(interval);
}

setTimeout(stop, 10000);
*/

/*console.log(document);

window.onload = function() {
  console.log('The page is fully loaded.');
}

console.log(location);

window.location = 'http://www.kodilla.pl';
*/
/*console.log(location);

var navigation = document.getElementById('nav');
console.log(navigation);
*/

/*var withMenuItemsClass = document.getElementsByClassName('menuItem');
console.log(withMenuItemsClass);

var menu = document.getElementById('Menu');
var withMenuItemsClassInNav = menu.getElementsByClassName('menuItem');
console.log(withMenuItemsClassInNav);*/

/*var itemsByTagName = document.getElementsByTagName('li');
console.log(itemsByTagName);
*/

/*var navigation = document.getElementById('nav');
console.log(navigation.nextElementSibling);*/

/*var newElem = document.createElement('p');
newElem.innerHTML = 'The text inside the p tag, which is under newElem';
console.log(newElem);*/

/*var navigation = document.getElementById('nav');
var newElem = document.createElement('p');

newElem.innerHTML = 'The text inside the p tag, which is under newElem';

navigation.appendChild(newElem);*/


/*var menu = document.getElementById('Menu');
menu.className += ' navbar-right';
console.log(menu.className);
*/

/*var navigation = document.getElementsByClassName('menuItem');
console.log(navigation[0].style);
navigation[0].style.background = 'red';
navigation[0].style.padding = '10px';
console.log(navigation[0].style);
*/

var withButtonClass = document.getElementsByClassName('button');
console.log(withButtonClass);

for ( var i = 0 ; i < withButtonClass.length; i++) {
  console.log(withButtonClass[i].innerText);

  alert(withButtonClass[i].innerText);
}

