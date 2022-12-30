// QuerySelector//
var header = document.querySelector('#main-header');
var secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.backgroundColor = 'green';

var thirdItem = document.querySelector('.list-group-item:nth-child(3)');
thirdItem.style.color = 'white';

//QuerySelectorAll//
var titles = document.querySelectorAll('.title');
// console.log(titles);
// titles[0].textContent = 'Hello';

var items = document.querySelectorAll('.list-group-item');
items[1].style.color = 'green';

var odd = document.querySelectorAll('li:nth-child(odd)');
// var even = document.querySelectorAll('li:nth-child(even)');

for(var i=0; i<odd.length; i++){
    // odd[i].style.backgroundColor = '#f4f4f4'
    // even[i].style.backgroundColor = '#ccc'
    odd[i].style.backgroundColor = 'green';
}