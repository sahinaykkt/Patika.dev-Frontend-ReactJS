const task = document.querySelector("#task");
const list = document.querySelector("#list");

const existingList = document.getElementsByTagName("li");
for (let i = 0; i < existingList.length; i++) {
  let liDOM = existingList[i];

  const xButton = document.createElement("span");
  xButton.className = "close";
  xButton.innerHTML = "x";

  liDOM.appendChild(xButton);
}

function newElement() {
  if (task.value === "") {
    $(".error").toast("show");
  } else {
    $(".success").toast("show");
    const newLi = document.createElement("li");
    const xButton = document.createElement("span");
    xButton.className = "close";
    xButton.innerHTML = "x";

    newLi.innerHTML = `${task.value}<span class="close">x</>`;
    list.appendChild(newLi);
    task.value = "";
  }
}

list.addEventListener("click", (event) => {
  if (event.target.className === "close") {
    event.target.parentElement.remove();
  } else {
    event.target.classList.toggle("checked");
  }
});
