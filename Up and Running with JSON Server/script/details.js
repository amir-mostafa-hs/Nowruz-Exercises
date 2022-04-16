const id = new URLSearchParams(window.location.search).get("id");
const aliUrl = "http://localhost:3000/posts";
const container = document.querySelector(".details");
const deleteBtn = document.querySelector(".button");

const rendetDetails = async () => {
  const responseDetails = await (await fetch(`${aliUrl}/${id}`)).json();

  const title = document.createElement("h1");
  title.textContent = responseDetails.title;

  const textBody = document.createElement("p");
  textBody.textContent = responseDetails.body;

  container.append(title, textBody);
};

deleteBtn.addEventListener("click", async () => {
  const response = await fetch(`${aliUrl}/${id}`, {
    method: "DELETE",
  });
  window.location.replace("./index.html");
});

window.addEventListener("DOMContentLoaded", () => rendetDetails());
