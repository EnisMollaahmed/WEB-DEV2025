const inputField = document.querySelector(".todo-input");
const buttn = document.querySelector(".add-button");
const uList = document.querySelector(".ulist");

buttn.addEventListener("click", (e)=>{
    const lItem = document.createElement("li");
    console.log(inputField.value);
    lItem.textContent = inputField.value;
    uList.appendChild(lItem);
    inputField.value = "";
});