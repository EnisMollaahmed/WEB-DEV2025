const inputField = document.querySelector(".todo-input");
const buttn = document.querySelector(".add-button");
const uList = document.querySelector(".ulist");

buttn.addEventListener("click", ()=>{
    const lItem = document.createElement("li");
    lItem.textContent = inputField.value;
    uList.appendChild(lItem);
});