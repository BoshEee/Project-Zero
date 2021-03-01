const addButton = document.querySelector(".add");
const delButton = document.querySelector(".del");
const task = document.querySelector(".text");
const list = document.querySelector(".list");

/* 
! API:

* setItem(key, value) – store key/value pair.
* getItem(key) – get the value by key.
* removeItem(key) – remove the key with its value.
* clear() – delete everything.
* key(index) – get the key number index.
* length – the number of stored items.
* Use Object.keys to get all keys.
* We access keys as object properties, in that case storage event isn’t triggered.

! Storage event:
* Triggers on setItem, removeItem, clear calls.
* Contains all the data about the operation (key/oldValue/newValue), the document url and the storage object storageArea.
* Triggers on all window objects that have access to the storage except the one that generated it (within a tab for sessionStorage, globally for localStorage).
*/

window.onload = function () {
  const preTasks = window.localStorage.getItem("task");
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
  addLocalStorage(singleTask.textContent);
});

delButton.addEventListener("click", () => {
  window.localStorage.removeItem("task");
});

function addLocalStorage(theTask) {
  window.localStorage.setItem("task", theTask);
}
