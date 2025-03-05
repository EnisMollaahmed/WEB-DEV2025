document.addEventListener('DOMContentLoaded', function() {
    let submitBtn = document.getElementById('submit-btn');
    let todoList = document.getElementById('todo-list');
    let todoInput = document.getElementById('todo-input');

    submitBtn.addEventListener('click', function() {
        let todoText = todoInput.value;
        if (todoText) {
            let todoItem = document.createElement('li');
            todoItem.textContent = todoText;
            todoList.appendChild(todoItem);
            todoInput.value = '';
        }
    });
});