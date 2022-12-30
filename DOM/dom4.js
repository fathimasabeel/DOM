// GETELEMENTSBYCLASSNAME

var items = document.getElementsByClassName("list-group-item");
console.log(items);
// console.log(items[1]);
// items[1].textContent = "Hello 2"
// items[1].style.fontWeight = "bold";
// items[2].style.backgroundColor = "green";

// Gives error
// items.style.backgroundColor = "#f4f4f4";

for(i=0; i<items.length; i++){
    items[2].style.backgroundColor = "green";
    items[i].style = 'color: red';
    items[i].style.fontWeight = "bold";
}