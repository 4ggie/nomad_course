const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let todos = [];

todoForm.addEventListener("submit", handleTodoSubmit);
document.addEventListener("DOMContentLoaded", getTodos);

function handleTodoSubmit(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";
  const newTodoObj = {
    text : newTodo,
    id : Date.now()
  };
  todos.push(newTodoObj);
  paintTodo(newTodoObj);
  saveTodos();
}

function paintTodo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  const deleteBtn = document.createElement("button");
  deleteBtn.addEventListener("click", deleteTodo);

  deleteBtn.innerText = "✖️";
  span.innerText = newTodo.text;

  // "append" must be positioned in the end.
  li.appendChild(deleteBtn);
  li.appendChild(span);
  todoList.appendChild(li);

}

function deleteTodo(event) {
  const target = event.target;
  if(target.innerText === "✖️"){
    target.parentElement.classList.add('fall');
    target.parentElement.addEventListener("transitionend", function(){
      target.parentElement.remove();
    })
  }
  const li = event.target.parentElement;
  todos = todos.filter(todo => todo.id !== parseInt(li.id));
  saveTodos();
}

function saveTodos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function getTodos(){
  if(localStorage.getItem(TODOS_KEY) === null){
    todos = [];
  }else{
    todos = JSON.parse(localStorage.getItem(TODOS_KEY));
  }
  todos.forEach(paintTodo);
}