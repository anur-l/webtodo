/** @type {HTMLInputElement} */
const task = document.querySelector(".tasks");
const btnadd = document.querySelector(".adding");
const listing = document.querySelector("ul");
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
    delbtn.classList.add("del");
    delbtn.textContent = "x";
    divlist.appendChild(newli);
    divlist.appendChild(delbtn);
    listing.appendChild(divlist); 
  }
  task.value = "";
});

listing.addEventListener('click', function(event) {
 
  if(event.target.classList.contains("del")){
    const removeitem = event.target.parentElement;
    if (removeitem) {
      removeitem.remove();
    }
  }

})
