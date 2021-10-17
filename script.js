// If you click the Add button, it will add what you typed to the list
function addItem() {
    let whatyoutyped = document.getElementById("inputboxtext").value;  //getting value of input typed
    let newItem = document.createElement('li');  //creating new li element to add
    newItem.innerHTML = whatyoutyped;   //putting input text into the new li
    newItem.className = "list-item";    //adding a class for easy selection
    document.getElementById("ul").appendChild(newItem); //adding new li onto end of list
    document.getElementById("inputboxtext").value = '';  //resetting placeholder value of input text box
    
    let listitems = document.getElementsByClassName("list-item"); //getting all list items
    for (let i=0; i < listitems.length; i++) { //iterates through list
        listitems[i].onclick = function(){  //performs function when clicked to clicked list item
            listitems[i].className = "checked";  //adds class "checked" that in CSS will strikethrough
            setTimeout(() => {listitems[i].remove()}, 1000);   //removes item after 1 second
        };
    };
};

