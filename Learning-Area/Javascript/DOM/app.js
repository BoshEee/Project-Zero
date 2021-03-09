const title = document.getElementById("title");
const text = document.getElementById("myText");
const btn = document.getElementById("btn");
const btnRed = document.getElementById("btnred");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  let content = text.value;
  title.textContent = content;
  text.value = "";
});

btnRed.addEventListener("click", (e) => {
  e.preventDefault();
  title.classList.toggle("red");
});
