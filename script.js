let kichenInput = document.querySelector("#kichen-input");
let kichenInputBtn = document.querySelector("#add-btn");
let kichenInputList = document.querySelector("#item-list");

let kichenInputData;
let kichenInputArry = [];

kichenInputBtn.addEventListener("click", addKichenItem);

function setLocalStorage() {
  localStorage.setItem("key", JSON.stringify(kichenInputArry));
}
function getLocalStorage() {
  if (localStorage.getItem("key")) {
    kichenInputArry = JSON.parse(localStorage.getItem("key"));

    buldUi();
  }
}

function buldUi() {
  kichenInputList.textContent = "";
  kichenInputArry.forEach((item) => {
    if (item !== "") {
      let li = document.createElement("li");
      let span = document.createElement("span");
      kichenInputList.appendChild(li);
      li.style.cssText = "animation-name: slideIn;";
      li.appendChild(span);
      span.innerText = item;
      kichenInput.value = "";
      kichenInput.focus();

      // creat delet icon
      let dlt = document.createElement("i");
      dlt.classList.add("fas", "fa-trash");
      li.appendChild(dlt);

      // ceat edit icon
      let edit = document.createElement("i");
      edit.classList.add("fas", "fa-edit");
      li.appendChild(edit);
    }
  });
}
function addKichenItem() {
  kichenInputData = kichenInput.value;
  kichenInputArry.push(kichenInputData);

  // local sctorage

  setLocalStorage();
  getLocalStorage();
}
function deleteItem(event) {
  if (event.target.classList[1] === "fa-trash") {
    let parrent = event.target.parentElement;
    let span = parrent.querySelector("span");
    let oldValue = span.innerText;
    parrent.classList.add("slideOut");
    parrent.addEventListener("transitionend", () => {
      parrent.remove();
      setLocalStorage();
    });
    let position = kichenInputArry.indexOf(oldValue);
    console.log(position);
    kichenInputArry.splice(position, 1);
  }
}
function editItem(event) {
  if (event.target.classList[1] === "fa-edit") {
    let item = event.target.parentElement;
    let span = item.querySelector("span");
    let oldValue = span.innerText;
    let position = kichenInputArry.indexOf(oldValue);
    let editedvalue = prompt("Plees Enter New Item...");
    kichenInputArry[position] = editedvalue;
    span.innerText = editedvalue;
    setLocalStorage();
  }
}

kichenInputList.addEventListener("click", deleteItem);
kichenInputList.addEventListener("click", editItem);
getLocalStorage();
