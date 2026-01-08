/** @type {HTMLInputElement} */
const task = document.querySelector(".tasks");
const btnadd = document.querySelector(".adding");
const listing = document.querySelector(".items");
function reading(userinput) {
  const divlist = document.createElement("div");
  divlist.style.display = "flex";
  divlist.style.justifyContent = "space-between";
  divlist.classList.add("boxtodo");

  const divpara = document.createElement("div");
  divpara.style.display = "flex";
  divpara.style.gap = "0.4rem";

  const cbox = document.createElement("input");
  cbox.type = "checkbox";
  cbox.classList.add("cbox");

  const newp = document.createElement("p");
  newp.classList.add("todopara");
  newp.textContent = userinput;
  newp.style.paddingRight = "4rem";

  const delbtn = document.createElement("button");
  delbtn.classList.add("del");
  delbtn.textContent = "x";
  divpara.appendChild(cbox);
  divpara.appendChild(newp);

  divlist.appendChild(divpara);
  divlist.appendChild(delbtn);
  listing.appendChild(divlist);
  cbox.addEventListener("change", () => {
    if (cbox.checked) {
      newp.style.textDecoration = 'line-through';
      newp.style.color = 'grey';
    }else {
    newp.style.textDecoration = 'none';
    newp.style.color = 'black';
  }
  });
  userinput.value = "";
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
      let deleteitem = removeitem.querySelector(".todopara").textContent;
      removeitem.remove();
      removelist(deleteitem);
    }
  }
});

function updatelist(todo) {
  const check = localStorage.getItem("todolist");
  const items = JSON.parse(check || "[]");
  items.push(todo);
  localStorage.setItem("todolist", JSON.stringify(items));
}

function removelist(remove) {
  const check = localStorage.getItem("todolist");
  let items = JSON.parse(check || "[]");
  items = items.filter((items) => items !== remove);
  localStorage.setItem("todolist", JSON.stringify(items));
}
