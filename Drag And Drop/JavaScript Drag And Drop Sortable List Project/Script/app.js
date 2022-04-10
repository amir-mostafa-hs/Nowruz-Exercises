const draggableList = document.querySelector("#draggableList");
const checkBtn = document.querySelector("#check");
const softwareCompanies = [
  "Apple",
  "Microsoft",
  "Alphabet (Google)",
  "Oracle",
  "Adobe",
  "Salesforce",
  "Intuit",
  "SAP",
  "IBM",
  "ServiceNow",
];

// store array
const listItems = [];

let dragStartIndex;

createList();

// insert list items
function createList() {
  [...softwareCompanies]
    .map((a) => ({ value: a, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .forEach((person, index) => {
      const listItem = document.createElement("li");
      listItem.setAttribute("dataIndex", index);
      listItem.innerHTML = `
        <span class="number">${index + 1}</span>
        <div class="draggable" draggable="true">
          <p class="softwareName">${person.value}</p>
          <i class="fas fa-grip-lines"></i>
        </div>
      `;
      listItems.push(listItem);

      draggableList.appendChild(listItem);
    });
  addEventListeners();
}

function addEventListeners() {
  const draggables = document.querySelectorAll(".draggable");
  const dragListItems = document.querySelectorAll(".draggableList li");

  draggables.forEach((draggable) => {
    draggable.addEventListener("dragstart", dragStart);
  });

  dragListItems.forEach((item) => {
    item.addEventListener("dragover", dragOver);
    item.addEventListener("drop", dragDrop);
    item.addEventListener("dragenter", dragEnter);
    item.addEventListener("dragleave", dragLeave);
  });
}

function dragStart() {
  dragStartIndex = this.closest("li").getAttribute("dataIndex");
}

function dragEnter() {
  this.classList.add("over");
}

function dragLeave() {
  this.classList.remove("over");
}

function dragOver(e) {
  e.preventDefault();
}

function dragDrop() {
  const dragEndIndex = this.getAttribute("dataIndex");
  swapItems(dragStartIndex, dragEndIndex);

  this.classList.remove("over");
}

// swap list items
function swapItems(fromIndex, toIndex) {
  const itemOne = listItems[fromIndex].querySelector(".draggable");
  const itemTwo = listItems[toIndex].querySelector(".draggable");

  listItems[fromIndex].appendChild(itemTwo);
  listItems[toIndex].appendChild(itemOne);
}

// check the order of list items
function checkOrder() {
  listItems.forEach((listItem, index) => {
    const softwareName = listItem.querySelector(".draggable").innerText.trim();

    if (softwareName !== softwareCompanies[index]) {
      listItem.classList.add("wrong");
    } else {
      listItem.classList.remove("wrong");
      listItem.classList.add("right");
    }
  });
}

checkBtn.addEventListener("click", checkOrder);
