

// GETELEMENTBYID
var header = document.getElementById('main-header');
console.log(header);
header.style.borderBottom = 'solid 3px #000';

var element = document.getElementsByClassName("title");
console.log(element);
// need to run 'for loop' to get the elements
for(i=0; i<element.length; i++){
    element[0].style = 'color: green';
    element[0].style.fontWeight = "bold";
    // element[0].style.backgroundColor = "yellow";

}


