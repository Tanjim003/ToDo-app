
const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const resetBtn = document.getElementById('reset-btn');
const todoList = document.getElementById('todo-list');
//Event Listener
addBtn.addEventListener('click', addTodo);
todoInput.addEventListener('keydown',(e) =>{
    if(e.key === 'Enter') addTodo();
});
resetBtn.addEventListener('click', resetTodo);
//create todo item
function createTodoItem(text){
    const li = document.createElement('li');
    const span = document.createElement('Span');
    span.textContent = text;
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'x';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click' ,() => {
       li.remove();
       saveLocalStorage();
    });
    li.appendChild(span);
    li.appendChild(deleteBtn);
    return li;

}
// Add Todo
function addTodo(){
    const taskText  = todoInput.value.trim();
    if(!taskText){
        alert('Please Enter a task !');
        return;
    }
    const newTodo = createTodoItem(taskText);
    todoList.appendChild(newTodo);
    todoInput.value='';
    saveLocalStorage();
}


// function addTodo() {
//     const taskText = todoInput.value.trim(); // Fixed: was ariaValueMax earlier
//     if (!taskText) {
//         alert('Please enter a task!');
//         return;
//     }
    
//     const newTodo = createTodoItem(taskText);
//     todoList.appendChild(newTodo);
//     todoInput.value = '';
//     saveLocalStorage();
// }

// Reset Todos
function resetTodos() {
    if (confirm('Are you sure?')) {
        todoList.innerHTML = ''; // Fixed: comma typo earlier
        localStorage.removeItem('todos');
    }
}

// Save to LocalStorage
function saveLocalStorage() {
    const todos = [];
    todoList.querySelectorAll('li span').forEach(item => {
        todos.push(item.textContent);
    });
    localStorage.setItem('todos', JSON.stringify(todos));
}

// Load from LocalStorage
function loadFromLocalStorage() {
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    todos.forEach(todo => {
        const newTodo = createTodoItem(todo);
        todoList.appendChild(newTodo);
    });
}

// Initialize
//loadFromLocalStorage(); // Load saved todos on page load
//     //create span for text
//     const span = document.createElement('li');
//     span.textContent = text;
//     //create delete button
//     const deleteBtn = document.createElement('button');
//     deleteBtn.textContent = 'x';
//     deleteBtn.classList.add('belete-btn');
//     deleteBtn.addEventListerner('click', () => {
//         li.remove();
//         saveLocalStorage();
//     });
//     li.appendChild(span);
//     li.appendChild(deleteBtn);
//     return li;
// }
// // Main function to add a new todo
// // function addTodo() {
// //     const taskText = todoInput.value.trim();
    
// //     if (taskText === '') {
// //         alert('Please enter a task!');
// //         return;
// //     }
    
// //     // Create and append new list item
// //     const newTodo = createTodoItem(taskText);
// //     todoList.appendChild(newTodo);
    
// //     // Clear input field
// //     todoInput.value = '';
    
// //     // Save to localStorage
// //     saveToLocalStorage();
// // }

// function addTodo(){
//     const taskText = todoInput.ariaValueMax.trim();
//     if(taskText === ''){
//         alert('Please enter a task');
//         return;
//     }
//     const newTodo = createTodoItem(taskText);
//     todoList.appendChild(newTodo);
//     todoInput.value = '';
//     saveLocalStorage();
// }


// // Function to reset all todos
// // function resetTodos() {
// //     if (confirm('Are you sure you want to delete all tasks?')) {
// //         todoList.innerHTML = '';
// //         localStorage.removeItem('todos');
// //     }
// // }

// // // LocalStorage functions
// // function saveToLocalStorage() {
// //     const todos = [];
// //     document.querySelectorAll('#todo-list li span').forEach(todo => {
// //         todos.push(todo.textContent);
// //     });
// //     localStorage.setItem('todos', JSON.stringify(todos));
// // }

// function resetTodos(){
//     if(confirm('Are you sure you want to delete all task ?')){
//         todoList,innerHTML ='';
//         localStorage.removeItem('todos');
//     }
// }
// function saveLocalStorage(){
//     const todos= [];
//     document.querySelectorAll('#todo-list li span').forEach(todo => {
//         todos.push(todo.textContent);
//     });
//     localStorage.setItem('todos',JSON.stringify(todos));
// }
// function loadFromLocalStorage() {
//         const todos = JSON.parse(localStorage.getItem('todos')) || [];
//         todos.forEach(todo => {
//             const newTodo = createTodoItem(todo);
//             todoList.appendChild(newTodo);
//        });
//      }
// // 1. Select all necessary elements from the DOM
// const todoInput = document.getElementById('todo-input');
// const addBtn = document.getElementById('add-btn');
// const resetBtn = document.getElementById('reset-btn');
// const todoList = document.getElementById('todo-list');

// // 2. Add event listeners for adding tasks
// addBtn.addEventListener('click', addTodo);
// todoInput.addEventListener('keypress', (e) => {
//     if (e.key === 'Enter') addTodo();
// });

// // 3. Add event listener for reset button
// resetBtn.addEventListener('click', resetTodos);

// // Function to create a new todo item
// function createTodoItem(text) {
//     const li = document.createElement('li');
    
//     // Create span for task text
//     const span = document.createElement('span');
//     span.textContent = text;
    
//     // Create delete button
//     const deleteBtn = document.createElement('button');
//     deleteBtn.textContent = '×';
//     deleteBtn.classList.add('delete-btn');
//     deleteBtn.addEventListener('click', () => {
//         li.remove();
//         saveToLocalStorage();
//     });

//     // Assemble the list item
//     li.appendChild(span);
//     li.appendChild(deleteBtn);
//     return li;
// }


// // Function to reset all todos
// function resetTodos() {
//     if (confirm('Are you sure you want to delete all tasks?')) {
//         todoList.innerHTML = '';
//         localStorage.removeItem('todos');
//     }
// }

// // LocalStorage functions
// function saveToLocalStorage() {
//     const todos = [];
//     document.querySelectorAll('#todo-list li span').forEach(todo => {
//         todos.push(todo.textContent);
//     });
//     localStorage.setItem('todos', JSON.stringify(todos));
// }

// 

