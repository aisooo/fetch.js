const url = "https://jsonplaceholder.typicode.com/posts";
const btn = document.getElementById("btn");
const bodyContent = document.querySelector(".main_content_list");
const li = document.querySelector(".list_items");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      for (var i = 0; i < data.length; i++) {
        var id = data[i].userId;
        var title = data[i].title;

        var p = document.createElement("p");
        var span = document.createElement("span");

        p.innerText = id;
        span.innerText = title;

        li.append(p);
        p.append(span);
      }
    });
});
