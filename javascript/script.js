const taskInput = document.getElementById("task-input");
const addBtn = document.getElementById("add-btn");
const taskList = document.getElementById("task-list");

// Add task on button click
addBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    addTask(taskText);
    taskInput.value = "";
  }
});

// Function to create and add a new task
function addTask(taskText) {
  const li = document.createElement("li");
  li.textContent = taskText;

  // Toggle complete status on click
  li.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  // Right-click to remove task
  li.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    li.remove();
  });

  taskList.appendChild(li);
}
