document.addEventListener('DOMContentLoaded', function() {
    let submitBtn = document.getElementById('submit-btn');
    let todoList = document.getElementById('todo-list');
    let todoInput = document.getElementById('todo-input');

    submitBtn.addEventListener('click', function() {
        let todoText = todoInput.value;
        if (todoText) {
            let todoItem = document.createElement('li');
            let deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.classList.add('delete-btn');
            todoItem.textContent = todoText;
            todoItem.appendChild(deleteBtn);
            todoList.appendChild(todoItem);
            todoInput.value = '';
        }
    });

    todoList.addEventListener('click', function(event) {
        if (event.target.classList.contains('delete-btn')) {
            event.target.parentElement.remove();
        }
    });
});