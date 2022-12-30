// Traversing the DOM//
var itemList = document.querySelector('#items'); //selected by Id
// // parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode.parentNode);

// parentElement
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor = '#f4f4f4';
console.log(itemList.parentElement.parentElement.parentElement);

// //childNodes
// console.log(itemList.childNodes);

// // children
// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'yellow';

// firstChild
console.log(itemList.firstChild);

// firstElementChild
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent = 'Hello 1';

// lastChild
console.log(itemList.lastChild);

// lastElementChild
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent = 'Hello 4';

// create childelement
var li = document.createElement('li');
li.className = 'list-group-item'; //note: always add class if other items has because to look like 1 of them.
var new_child = document.createTextNode('hello 5');
li.appendChild(new_child);
var element = document.getElementById('main');
element.appendChild(li); // use this method to an element append as the last child

// nextSibling
console.log(itemList.nextSibling);

// nextElementSibling
console.log(itemList.nextElementSibling);
itemList.nextElementSibling.style.backgroundColor = '#ccc';

//previousSibling
console.log(itemList.previousSibling);

//previousElementSibling
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color = 'green';


// create a div
var newDiv = document.createElement('div');
// Add class
newDiv.className = 'hello';
// Add id
newDiv.id = 'hello1';
// Add attr
newDiv.setAttribute('title', 'Hello Div');
// Create text node
 var newDivText = document.createTextNode('Hello');
// Add text to div 
newDiv.appendChild(newDivText);

// inserting into DOM from JS 
var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');
console.log(newDiv);
newDiv.style.fontSize = '30px';
container.insertBefore(newDiv, h1);

// create a div2
var newDiv_2 = document.createElement('div');
// Add class2
newDiv_2.className = 'hello';
// Add id2
newDiv_2.id = 'hello1';
// Add attr2
newDiv_2.setAttribute('title', 'Hello Div');
// Create text node2
 var newDivText_2 = document.createTextNode('Hello World');
// Add text to div 
newDiv_2.appendChild(newDivText_2);

// inserting into DOM from JS
var container2 = document.getElementById('main');
container2.appendChild(newDiv_2);
var h2 = document.getElementById('items');
// console.log(newDiv_2);
newDiv_2.style.fontSize = '20px';
container2.insertBefore(newDiv_2, h2); // use this method to append the child before any element eg: items 1.


