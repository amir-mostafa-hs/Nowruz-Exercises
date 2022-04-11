// !Local Storage
/*
    localStorage method:
     1- setItem : used to set the key and value of local storage .
     2- getItem : used to get the value of the local storage key
     3- removeItem : used to remove the local storage value.

*/
localStorage.setItem("Name", "AmirMostafa");

const userName = localStorage.getItem("Name");

console.log(`User Name is: ${userName}`);

localStorage.removeItem("Name");

// !Session Storage
/*
    like local storage method 
*/
sessionStorage.setItem("Email", "email@email.com");

const userEmail = sessionStorage.getItem("Email");

console.log(`User Email is: ${userEmail}`);

sessionStorage.removeItem("Email");

// !Cookies
/*
    like object.
    we can set the expires time to cookies.
*/
document.cookie =
  "userValue = admin; expires = " + new Date(9999, 8, 9, 9, 9, 9).toString();

document.cookie =
  "userPass = 12345; expires = " + new Date(9999, 8, 9, 9, 9, 9).toString();

// Convert cookies values to an object
const cookies = document.cookie.replaceAll(";", "").split(" ");
const cookiesValue = cookies.map((item) => item.split("="));

const cookiesObject = {};
cookiesValue.forEach((item) => (cookiesObject[item[0]] = item[1]));
console.log(cookiesObject);
console.log(cookiesObject.userValue);
