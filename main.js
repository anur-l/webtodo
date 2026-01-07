const task = document.querySelector(".tasks");
const btnadd = document.querySelector(".adding");
const listt = document.querySelector("ul");
btnadd.addEventListener("click", function() {
  const userinput = task.value;
  if (userinput !== "") {
    const divlist = document.createElement("div");
    divlist.style.display = "flex";
    divlist.style.justifyContent = "space-between"; 
    const newli = document.createElement("li");
    newli.textContent = userinput;
    newli.style.paddingRight = "4rem";
    const delbtn = document.createElement("button");
    delbtn.textContent = "x";
    divlist.appendChild(newli);
    divlist.appendChild(delbtn);
    listt.appendChild(divlist);
  }
  task.value = "";
});
