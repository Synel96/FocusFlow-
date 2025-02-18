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

  li.textContent = newItem;
  myList.appendChild(li);

  document.getElementById("newItem").value = "";

  //Create remove button
  let removeButton = document.createElement("button");
  removeButton.textContent = "X";
  removeButton.classList.add("remove");
  removeButton.onclick = () => li.remove();
  li.appendChild(removeButton);
}

document
  .getElementById("newItem")
  .addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      addItem();
    }
  });
