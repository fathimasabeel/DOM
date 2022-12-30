var li = document.getElementsByTagName("li");
console.log(li);
console.log(li[1]);
li[1].textContent = "Hello 2";
li[2].style.backgroundColor = "yellow"; //Doubt if we write outside the for loop not getting it why?
li[1].style.fontWeight = "bold";

for(i=0; i<li.length; i++){
    li[i].style = 'color: red';
    // li[2].style.backgroundColor = "yellow";
    li[i].style.backgroundColor = "#f4f4f4";
    li[i].style.fontWeight = "bold";
}

