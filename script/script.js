/* Highlight the current active page
https://www.geeksforgeeks.org/how-to-make-active-navbar-in-html-css-and-javascript/ */
let currentPage = window.location.pathname.split("/").pop();
if (currentPage === "") currentPage = "index.html";

const links = document.querySelectorAll(".navbar a");

for (let i = 0; i < links.length; i++) {
  if (links[i].getAttribute("href") === currentPage) {
    links[i].classList.add("active");
    break;
  }
}

/* Burger */
document.addEventListener("DOMContentLoaded", () => {
  const burger = document.getElementById("burger");
  const navLinks = document.getElementById("nav-links");

  burger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
});

/* Hero Section */
// After 10seconds, image will display
setTimeout(function () {
  document.getElementById("hero").style.backgroundImage =
    'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/img/island-moon.jpg")';
}, 1000);
