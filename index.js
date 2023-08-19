const toggleBtn = document.querySelector("#navbar__toggle-btn");
const navbar = document.querySelector(".navbar__main");
const body = document.querySelector("body");
const container = document.querySelector(".container");

function toggleNav() {
  if (navbar.classList.contains("show")) {
    toggleBtn.innerHTML = '<i class="fa-solid fa-bars">';
  } else {
    toggleBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
  }
  navbar.classList.toggle("show");
}

console.log(body.firstChild);

navbar.querySelectorAll("li").forEach((navLink) => {
  navLink.addEventListener("click", toggleNav);
});

toggleBtn.addEventListener("click", toggleNav);
