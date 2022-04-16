const container = document.querySelector(".blogs");
const searchForm = document.querySelector(".search");

const rendetPosts = async (term) => {
  const postsApiUrl =
    "http://localhost:3000/posts?_sort=id&_order=desc" +
    (term ? `&q=${term}` : "");
  const usersApiUrl = "http://localhost:3000/users";

  container.innerText = "";

  const responsePostsData = await (await fetch(postsApiUrl)).json();
  const responseUsersData = await (await fetch(usersApiUrl)).json();

  responsePostsData.forEach((post) => {
    const div = document.createElement("div");
    div.classList.add("post");
    const postTitle = document.createElement("h2");
    postTitle.textContent = post.title;
    postTitle.classList.add("post-title");

    const creatorName = document.createElement("p");
    creatorName.textContent = responseUsersData
      .filter((item) => item.id === post.userId)
      .map((item) => item.name);
    creatorName.classList.add("psot-creator-name");

    const textBody = document.createElement("p");
    textBody.textContent =
      post.body.split(" ").splice(0, 15).join(" ") + " ...";

    const readMore = document.createElement("a");
    readMore.href = `./details.html?id=${post.id}`;
    readMore.textContent = "Read More ...";

    div.append(postTitle, creatorName, textBody, readMore);
    container.append(div);
  });
};

searchForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  rendetPosts(evt.target.term.value.trim());
});

window.addEventListener("DOMContentLoaded", () => rendetPosts());
