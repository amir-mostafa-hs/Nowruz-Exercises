const form = document.querySelector("form");

const createPost = async (evt) => {
  evt.preventDefault();

  const postData = {
    userId: Math.ceil(Math.random() * 10),
    title: evt.target.title.value,
    body: evt.target.body.value,
  };

  await fetch("http://localhost:3000/posts", {
    method: "POST",
    body: JSON.stringify(postData),
    headers: { "content-Type": "application/json" },
  });

  window.location.replace("./index.html");
};

form.addEventListener("submit", createPost);
