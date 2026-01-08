/** @type {HTMLInputElement} */
const task = document.querySelector(".tasks");
const btnadd = document.querySelector(".adding");
const listing = document.querySelector("ul");

function reading(userinput) {
  const divlist = document.createElement("div");
  divlist.style.display = "flex";
  divlist.style.justifyContent = "space-between";
  const newli = document.createElement("li");
  newli.textContent = userinput;
  newli.style.paddingRight = "4rem";
  const delbtn = document.createElement("button");
  delbtn.classList.add("del");
  delbtn.textContent = "x";
  divlist.appendChild(newli);
  divlist.appendChild(delbtn);
  listing.appendChild(divlist);
}
window.onload = () => {
  const saveti = localStorage.getItem("todolist");
  if (saveti) {
    const save = JSON.parse(saveti);
    save.forEach((element) => {
      reading(element);
    });
  }
};

btnadd.addEventListener("click", function() {
  const userinput = task.value;
  if (userinput !== "") {
    reading(userinput);
    updatelist(userinput);
  }
  task.value = "";
});

listing.addEventListener("click", function(event) {
  if (event.target.classList.contains("del")) {
    const removeitem = event.target.parentElement;
    if (removeitem) {
      removeitem.remove();
    }
  }
});

function updatelist(todo) {
  const check = localStorage.getItem("todolist");
  const items = JSON.parse(check || "[]");
  items.push(todo);
  localStorage.setItem("todolist", JSON.stringify(items));
}
