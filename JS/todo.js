const toDoInPut = document.querySelector(".toDo_input");
const toDos = document.querySelector(".todos");
const toDoList = document.querySelector(".toDo_List");

let toDoItem = [];

function saveToDos() {
  localStorage.setItem("toDos", JSON.stringify(toDoItem));
}

function CheckToDo(event) {
  const check_li = event.target.parentElement;
  check_li.classList.add("decoration");
}
function ToDoDelete(event) {
  const delete_li = event.target.parentElement;
  delete_li.remove();
  toDoItem = toDoItem.filter((todo) => todo.id !== parseInt(delete_li.id));
  saveToDos();
}

function paintToDo(newToDo) {
  const li = document.createElement("li");
  li.id = newToDo.id;
  const li_span = document.createElement("span");
  li_span.innerText = newToDo.text;
  const li_Trash_Button = document.createElement("button");
  li_Trash_Button.innerHTML = `✂︎`;
  const li_Check_Button = document.createElement("button");
  li_Check_Button.innerHTML = `✍︎`;
  li.appendChild(li_span);
  li.appendChild(li_Check_Button);
  li.appendChild(li_Trash_Button);
  toDos.appendChild(li);
  li_Check_Button.addEventListener("click", CheckToDo);
  li_Trash_Button.addEventListener("click", ToDoDelete);
}

function hadleListSubmit(event) {
  event.preventDefault();
  const newToDoObjct = {
    text: toDoInPut.value,
    id: Date.now(),
  };
  toDoInPut.value = "";
  toDoItem.push(newToDoObjct);
  paintToDo(newToDoObjct);
  saveToDos();
}

toDoList.addEventListener("submit", hadleListSubmit);

const savedToDos = localStorage.getItem("toDos");

if (savedToDos !== null) {
  const parseToDo = JSON.parse(savedToDos);
  toDoItem = parseToDo;
  parseToDo.forEach(paintToDo);
}
