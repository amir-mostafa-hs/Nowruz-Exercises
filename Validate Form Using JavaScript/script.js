const errors = document.querySelectorAll("span[id*='error']");

function validateName(itemName) {
  const item = document.querySelector(`#contact${itemName}`).value;

  if (itemName === "Name") {
    // console.log(item);
    if (item.length === 0) {
      errors[0].textContent = "Name is required";
    } else if (!item.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
      errors[0].textContent = "Write full name";
    } else {
      errors[0].innerHTML = "<i class='fas fa-check-circle'></i>";
    }
  }
}
