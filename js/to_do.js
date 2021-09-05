// Declaring the Variables

const todoForm = document.querySelector("#todo-form");
const todoList = document.querySelector("#todo-list");
const todoInput = todoForm.querySelector("input");

const TODO_KEY = "todos";

let todos = [];

// AddEventListners

todoForm.addEventListener("submit", preventEvent);
document.addEventListener("click", deleteTodo);
document.addEventListener("DOMContentLoaded", getTodos);

// Functions



function preventEvent(event){
  event.preventDefault();
  todos.push(todoInput.value);
  paintTodo(todoInput.value);
}

function paintTodo(todo){
  // create Element
  const todoLi = document.createElement("li");
  const todoSpan = document.createElement("span");
  const deleteBtn = document.createElement("button");
  
  deleteBtn.classList.add("delete-btn");
  // put todoSpan to inputVal, put x to delteBtn
  todoSpan.innerText = todo;
  deleteBtn.innerText = "❌";
  
  // put todoSpan & deleteBtn to todoLi
  todoLi.appendChild(deleteBtn);
  todoLi.appendChild(todoSpan);
  todoList.appendChild(todoLi);
  
  // save the todo in Local Storage
  saveTodosToLocalStorage(todos);
  
  // initiallize input
  todoInput.value = "";
}

function deleteTodo(event){
  // The clicked target is the delete button.
  const target = event.target;
  if(target.classList[0] === "delete-btn"){
    target.parentNode.remove();
    deleteTodoInLocalStorage(target);
  }
}

function saveTodosToLocalStorage(todo){
  localStorage.setItem(TODO_KEY, JSON.stringify(todo));
}

function getTodos(){
  if(localStorage.getItem(TODO_KEY) === null){
    todos = [];
  }else{
    todos = JSON.parse(localStorage.getItem(TODO_KEY));
  }
  todos.forEach(function(todo){
    paintTodo(todo);
  })
}

function deleteTodoInLocalStorage(todo){
  const todoIndex = todo.parentNode.children[0].innerText;
  todos.splice(todos.indexOf(todoIndex), 1);
  localStorage.setItem(TODO_KEY, JSON.stringify(todos));
}