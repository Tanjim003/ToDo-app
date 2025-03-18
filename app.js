import { todoInput, addBtn, resetBtn, todoList } from './domElements.js';

// Create todo item
export const createTodoItem = (text) => {
    const li = document.createElement('li');
    li.classList.add('todo-item');
    
    const span = document.createElement('span');
    span.textContent = text;
    
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'x';
    deleteBtn.classList.add('delete-btn');
    
    deleteBtn.addEventListener('click', () => {
        li.classList.add('fade-out');
        setTimeout(() => {
            li.remove();
            saveLocalStorage();
        }, 300);
    });
    
    li.append(span, deleteBtn);
    return li;
};

// Add Todo
export const addTodo = () => {
    const taskText = todoInput.value.trim();
    if (!taskText) {
        alert('Please enter a task');
        return;
    }
    
    const newTodo = createTodoItem(taskText);
    todoList.appendChild(newTodo);
    todoInput.value = '';
    saveLocalStorage();
};

// Reset Todos
export const resetTodos = () => {
    if (confirm('Are you sure?')) {
        todoList.innerHTML = '';
        localStorage.removeItem('todos');
    }
};

// Save to LocalStorage
export const saveLocalStorage = () => {
    const todos = [...todoList.querySelectorAll('li span')].map(item => item.textContent);
    localStorage.setItem('todos', JSON.stringify(todos));
};

// Load from LocalStorage
export const loadFromLocalStorage = () => {
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    todos.forEach(todo => {
        const newTodo = createTodoItem(todo);
        todoList.appendChild(newTodo);
    });
};

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    loadFromLocalStorage();
    addBtn.addEventListener('click', addTodo);
    todoInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') addTodo();
    });
    resetBtn.addEventListener('click', resetTodos);
});