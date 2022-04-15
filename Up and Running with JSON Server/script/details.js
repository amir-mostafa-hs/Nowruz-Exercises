const id = new URLSearchParams(window.location.search).get("id");
const container = document.querySelector(".details");

window.addEventListener("DOMContentLoaded", () => rendetDetails());

const rendetDetails = async () => {
  const postsApiUrl = "http://localhost:3000/posts/";

  const responseDetails = await (await fetch(postsApiUrl + id)).json();

  const title = document.createElement("h1");
  title.textContent = responseDetails.title;

  const textBody = document.createElement("p");
  textBody.textContent = responseDetails.body;

  container.append(title, textBody);
};
