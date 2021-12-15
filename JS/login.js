const loginForm = document.querySelector(".login_form");
const login_input = document.querySelector(".login_input");
const logOutBtn = document.querySelector(".logout_btn");
const greeting = document.querySelector(".greeting");
const toWork = document.querySelector(".toWork");
const weather = document.querySelector(".weather");

const HIDDEN_CLASS = "hidden";
const STORAGE_NAME = "user";

function handleLoginSubmit(event) {
  event.preventDefault();
  login_input.classList.add(HIDDEN_CLASS);
  localStorage.setItem(STORAGE_NAME, login_input.value);
  greetHello();
}

function greetHello() {
  greeting.classList.remove(HIDDEN_CLASS);
  toWork.classList.remove(HIDDEN_CLASS);
  greeting.innerText = `Hellow ${localStorage.user}`;
}

function handleLogOutClick() {
  localStorage.removeItem(STORAGE_NAME);
  toWork.classList.add(HIDDEN_CLASS);
  window.location.reload();
}

if (localStorage.getItem(STORAGE_NAME) === null) {
  login_input.classList.remove(HIDDEN_CLASS);
  loginForm.addEventListener("submit", handleLoginSubmit);
} else {
  greetHello();
}
logOutBtn.addEventListener("click", handleLogOutClick);
