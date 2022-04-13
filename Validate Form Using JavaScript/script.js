const errors = document.querySelectorAll("span[id*='error']");

function validation(itemName) {
  const item = document.querySelector(`#contact${itemName}`).value;

  if (itemName === "Name") {
    if (item.length === 0) {
      errors[0].textContent = "Name is required";
      return false;
    } else if (!item.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
      errors[0].textContent = "Write full name";
      return false;
    } else {
      errors[0].innerHTML = "<i class='fas fa-check-circle'></i>";
    }
  } else if (itemName === "Phone") {
    if (item.length === 0) {
      errors[1].textContent = "Phone is required";
      return false;
    } else if (item.length !== 10) {
      errors[1].textContent = "Phone should be 10 digits";
      return false;
    } else if (!item.match(/^[0-9]{10}$/)) {
      errors[1].textContent = "Only digits please";
      return false;
    } else {
      errors[1].innerHTML = "<i class='fas fa-check-circle'></i>";
    }
  } else if (itemName === "Email") {
    if (item.length === 0) {
      errors[2].textContent = "Email is required";
      return false;
    } else if (!item.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
      errors[2].textContent = "Email invalid";
      return false;
    } else {
      errors[2].innerHTML = "<i class='fas fa-check-circle'></i>";
    }
  } else if (itemName === "Message") {
    const requiredCharacters = 30 - item.length;
    if (requiredCharacters > 0) {
      errors[3].textContent = `${requiredCharacters} more characters required`;
      return false;
    } else {
      errors[3].innerHTML = "<i class='fas fa-check-circle'></i>";
    }
  }
  return true;
}

function validationForm() {
  if (
    !(
      validation("Name") ||
      validation("Phone") ||
      validation("Email") ||
      validation("Message")
    )
  ) {
    errors[4].style.display = "block";
    errors[4].textContent = "Please fix error";
    setTimeout(() => {
      errors[4].style.display = "none";
    }, 3000);
  } else {
    errors[4].style.display = "block";
    errors[4].innerHTML = "<i class='fas fa-check-circle'></i>";
    setTimeout(() => {
      document.querySelector("form").submit();
    }, 1000);
  }
}
