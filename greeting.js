const inputName = document.querySelector("#inputName");
const inputButton = document.querySelector("#inputButton");
const afterInput = document.querySelector("#afterInput")

inputValue = inputName.value; 

localStorage.setItem("name",inputValue);
const savedName = localStorage.getItem("name");

function inputClick(){
// need to hide input blank and button
// need to show the sentence with inputvalue  
afterInput.innerText = `Hello ${savedName}`; 
}

inputButton.eventlistener("click",inputClick);


