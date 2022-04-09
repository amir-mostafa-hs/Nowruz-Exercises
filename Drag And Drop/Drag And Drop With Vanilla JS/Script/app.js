// get element
const fillElem = document.querySelector(".fill");
const empties = document.querySelectorAll(".empty");

// add eventListener
fillElem.addEventListener("dragstart", dragStart);
fillElem.addEventListener("dragend", dragEnd);

empties.forEach((empty) => {
  empty.addEventListener("dragover", dragOver);
  empty.addEventListener("dragenter", dragEnter);
  empty.addEventListener("dragleave", dragLeave);
  empty.addEventListener("drop", dragDrop);
});

// create drag function
function dragStart(evt) {
  this.classList.add("hold");
  setTimeout(() => this.classList.add("invisible"));
}
function dragEnd() {
  this.className = "fill";
}

function dragOver(evt) {
  evt.preventDefault();
}
function dragEnter(evt) {
  evt.preventDefault();
  this.classList.add("hovered");
}
function dragLeave() {
  this.className = "empty";
}
function dragDrop() {
  this.className = "empty";
  this.append(fillElem);
}
