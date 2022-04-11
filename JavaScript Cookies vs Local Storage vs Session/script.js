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
