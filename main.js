/** @type {HTMLInputElement} */
const task = document.querySelector(".tasks");
const btnadd = document.querySelector(".adding");
const listing = document.querySelector(".items");
function reading(userinput) {
  const text = typeof userinput === "string" ? userinput : userinput.text;
  const iscomp = typeof userinput === "string" ? false : userinput.completed;
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
  cbox.checked = iscomp;

  const newp = document.createElement("p");
  newp.classList.add("todopara");
  newp.textContent = text;
  newp.style.paddingRight = "4rem";
  
  if (iscomp) {
    newp.style.textDecoration = "line-through";
    newp.style.color = "grey";
  }

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
      newp.style.textDecoration = "line-through";
      newp.style.color = "grey";
    } else {
      newp.style.textDecoration = "none";
      newp.style.color = "black";
    }
    updatelist();
  });
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
    updatelist();
  }else{
  alert("Empty task...");
  }
  task.value = "";
});

listing.addEventListener("click", function(event) {
  if (event.target.classList.contains("del")) {
    const removeitem = event.target.parentElement;
    if (removeitem) {
      removeitem.remove();
      updatelist();
    }
  }
});

function updatelist() {
  const items = [];
  const alltasks = document.querySelectorAll(".boxtodo");

  alltasks.forEach((box) => {
    const text = box.querySelector(".todopara").textContent;
    const checkbox = box.querySelector(".cbox").checked;

    items.push({ text: text, completed: checkbox });
  });

  localStorage.setItem("todolist", JSON.stringify(items));
}

