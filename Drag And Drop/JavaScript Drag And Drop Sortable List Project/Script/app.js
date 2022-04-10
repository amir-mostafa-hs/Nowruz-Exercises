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

// Insert list items into DOM
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
}
