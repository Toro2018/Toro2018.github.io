var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");


function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	var deleteButton = document.createElement('Button');
	deleteButton.appendChild(document.createTextNode("delete")); 
	li.appendChild(document.createTextNode(input.value));
	li.appendChild(deleteButton);
	ul.appendChild(li);
	input.value = "";
	lineThrough();
	// to call the function of toggle text after adding list
	clearElement();
	// to call the function of clear list after adding list
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);



function lineThrough(){	
	var liCount = document.querySelectorAll("li");
	for( i=0; i<liCount.length; i++)
		{ liCount[i].addEventListener('click', toggleList);
	}
}

function clearElement(){
	var removeButton = document.querySelectorAll("button");
	for( i=1; i<removeButton.length; i++)
		// note here the i starts from 1
		{ removeButton[i].addEventListener('click', clear);
	}
}

function toggleList(event){
	event.target.classList.toggle("done");
}

function clear(event){
	event.target.parentNode.remove();
}

lineThrough();
clearElement();
// 1. If you click on the list item, it toggles the .done  class on and off.

// 2. Add buttons next to each list item to delete the item when clicked on its corresponding delete button.

// 3. BONUS: When adding a new list item, it automatically adds the delete button next to it. 