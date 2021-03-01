const addButton = document.querySelector(".add");
const task = document.querySelector(".text");
const list = document.querySelector(".list");

window.onload = function () {
  const preTasks = document.cookie;
  if (preTasks) {
    const singleTask = document.createElement("li");
    singleTask.textContent = preTasks;
    list.appendChild(singleTask);
    alert("Your Tasks For Today : " + preTasks);
  } else {
    alert("No Tasks For Today");
  }
};

addButton.addEventListener("click", () => {
  const singleTask = document.createElement("li");
  singleTask.textContent = task.value;
  list.appendChild(singleTask);
  addCookie(singleTask.textContent);
});

function addCookie(theTask) {
  document.cookie = theTask;
}
