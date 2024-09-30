const todoInput = document.getElementById('todo-input');
const addButton = document.getElementById('add-button');
const todoList = document.getElementById('todo-list');

addButton.addEventListener('click', addTodo);
todoInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTodo();
    }
});

function addTodo() {
    const todoText = todoInput.value.trim();
    if (todoText) {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${todoText}</span>
            <button class="delete-btn">Delete</button>
        `;
        todoList.appendChild(li);
        todoInput.value = '';

        li.querySelector('.delete-btn').addEventListener('click', () => {
            li.style.animation = 'fadeIn 0.5s ease reverse';
            setTimeout(() => {
                todoList.removeChild(li);
            }, 500);
        });
    }
}