const newTaskInput = document.getElementById("new-task");
const addButton = document.getElementById("add-button");
const todoList = document.getElementById("todo-list");

addButton.addEventListener("click", addTask);
newTaskInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});

function addTask() {
  const taskName = newTaskInput.value.trim();

  if (taskName === "") {
    alert("لطفاً نام وظیفه را وارد کنید!");
    return;
  }

  // createElement
  const li = document.createElement("li");
  li.textContent = taskName;

  // removeElement
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "حذف";
  deleteButton.classList.add("delete-button");
  deleteButton.onclick = function () {
    li.remove();
  };

  li.appendChild(deleteButton);
  todoList.appendChild(li);
  newTaskInput.value = "";
}
