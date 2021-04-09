document.addEventListener("DOMContentLoaded", () => {
  const taskForm = document.getElementById("create-task-form");
  taskForm.addEventListener("submit", newTask);
});

const newTask = event => {
  event.preventDefault();
  const taskList = document.getElementById("tasks")
  const taskDesc = document.getElementById("new-task-description")
  const createNewTask = document.createElement("li");
  createNewTask.innerText = taskDesc.value;
  taskList.appendChild(createNewTask)
};