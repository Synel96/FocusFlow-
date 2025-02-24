"use strict";

const myList = document.getElementById("myList");

function addItem() {
  // Add List Item
  let newItem = document.getElementById("newItem").value;
  if (newItem.trim() === "") {
    alert("Please enter a to-do first!(Or you have nothing to-do?😉)");
    return;
  }
  let li = document.createElement("li");

  li.textContent ="";
  myList.appendChild(li);

  //Create span element
  let text = document.createElement("span");
  text.classList.add("text");
  text.textContent = newItem;
  li.appendChild(text);

  //Create Button Container
  let buttonContainer = document.createElement("div");
  buttonContainer.classList.add("buttonCon");
  li.appendChild(buttonContainer);

  //Create remove button
  let removeButton = document.createElement("button");
  removeButton.textContent = "X";
  removeButton.classList.add("remove");
  removeButton.onclick = () => li.remove();
  buttonContainer.appendChild(removeButton);

  //Create tick button ✅
  let tickButton = document.createElement("button");
  tickButton.textContent = "✅";
  tickButton.classList.add("tick");
  tickButton.onclick = () => {
    li.classList.toggle("completed");
  };
  buttonContainer.appendChild(tickButton);

  document.getElementById("newItem").value = "";
}
// Calling the add function while pushing enter
document
  .getElementById("newItem")
  .addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      addItem();
    }
  });
