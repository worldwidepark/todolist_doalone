const inputTodo = document.querySelector("#inputTodo");
const inputList = document.querySelector("#inputList");
const todoValue = inputTodo.inputValue;


function writeValue(event){
 //Remove event
 //Add list
 const list = "";
 list.innerText = todoValue;
 //Add button value X
   
}





inputTodo.addEventListener("submit",writeValue);
