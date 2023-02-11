const postHTML = document.querySelector("main");

let likeCount = document.getElementsByClassName("likes");

const posts = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "images/avatar-vangogh.jpg",
    post: "images/post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: 21,
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/avatar-courbet.jpg",
    post: "images/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
  },
  {
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "images/avatar-ducreux.jpg",
    post: "images/post-ducreux.jpg",
    comment:
      "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 152,
  },
];

function renderPosts() {
  for (let i = 0; i < posts.length; i++) {
    postHTML.innerHTML += `<div class="post">
  <div class="post-head">
    <img class="avatar" src="${posts[i].avatar}" />
    <div>
      <h3 class="name">${posts[i].name}</h3>
      <p class="location">${posts[i].location}</p>
    </div>
  </div>
  <img class="post-img" src="${posts[i].post}" />
  <img class="icon-heart" src="images/icon-heart.png" alt=""  data-heart=${posts.id} />
  <img class="icon-comment" src="images/icon-comment.png" alt="" />
  <img class="icon-dm" src="images/icon-dm.png" alt="" />
  <p class="likes">${posts[i].likes} likes</p>
  <p class="caption">
    <span class="caption-bold">${posts[i].username}</span> ${posts[i].comment}
  </p>
</div>`;
  }
}

renderPosts();

// document.addEventListener("click", function (e) {
//   if (e.target.dataset.heart) {
//     console.log("click");
//   }
// });
