const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const goToLink = document.querySelector("a");
const h1 = document.querySelector("h1");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
const savedUsername = localStorage.getItem(USERNAME_KEY);


if (savedUsername === null){
  loginForm.classList.remove(HIDDEN_CLASSNAME);
} else {
  greetings();
}

loginForm.addEventListener("submit", onLoginSubmit);

function onLoginSubmit(event){
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  h1.innerHTML = username;
  if(h1.innerText.length > 0){
    // h1.innerHTML = "Welcome " + username + "!";
    greetings();
  }
}

function preventLink(event){
  event.preventDefault();
  console.dir(event);
}

function greetings(){
  const username = localStorage.getItem(USERNAME_KEY);
  h1.innerHTML = `Welcome ${username}!`;
  h1.classList.toggle(HIDDEN_CLASSNAME);
}