const myList = document.getElementById("myList");

function addItem() {
  let newItem = document.getElementById("newItem").value;
  let li = document.createElement("li");

  li.textContent = newItem;
  myList.appendChild(li);

  document.getElementById("newItem").value = "";
}
