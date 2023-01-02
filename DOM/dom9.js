// DOUBT: CAN WE CREATE DESCRIPTION ID FROM HERE NOT FROM HTML CODE?

var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// filter event
filter.addEventListener('keyup', filterItems);

//Add item
function addItem(e){
    e.preventDefault();
    // Get input value
    var newItem = document.getElementById('item').value;
    var newItem_2 = document.getElementById('description').value;       
       
    // create new li element
    var li = document.createElement('li');
    // Add class
    li.className = 'list-group-item';
    // Add text node with input value
    li.appendChild(document.createTextNode(newItem));
    li.appendChild(document.createTextNode(" " + newItem_2));
  
    // Create del button element
    var deleteBtn = document.createElement('button');
    // Add classes to del button 
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    // Append text node
    deleteBtn.appendChild(document.createTextNode('X'));
    // Append button to li
    li.appendChild(deleteBtn);

    // Create edit button element   
    var editBtn = document.createElement('button');
    // Add classes to del button 
    editBtn.className = 'btn btn-sm float-right editBtn';
    // Append text node
    editBtn.appendChild(document.createTextNode('Edit'));
    // Append button to li
    li.appendChild(editBtn);
    
    // Append li to list
    itemList.appendChild(li);   
}

// Remove item
function removeItem(e){
    if(e.target.classList.contains('delete')){
      if(confirm('Are You Sure?')){
        var li = e.target.parentElement;
        itemList.removeChild(li);
      }
    }
}
  
// filter items
function filterItems(e){
    // convert text to lowercase
    var text = e.target.value.toLowerCase();
    // get all the li's, present as array of nodes
    var items = itemList.getElementsByTagName('li');
    // console.log(items);
    // converting items from HTML collection to an array
    Array.from(items).forEach(function(item){
      // text in first input box will be the 1st child
      var itemName = item.firstChild.textContent;
      // text in second input box will be the 2nd child, so iterating & getting the item's childnode 1 which the item present in 2nd input box
      var description = item.childNodes[1].textContent;
      if(itemName.toLowerCase().indexOf(text) != -1 || description.toLowerCase().indexOf(text) != -1){    
        item.style.display = 'block';
      }else{
        item.style.display = 'none';
      }
    })
}

