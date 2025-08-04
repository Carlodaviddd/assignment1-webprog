/* Highlight the current active page
https://www.geeksforgeeks.org/how-to-make-active-navbar-in-html-css-and-javascript/ */
const currentPage = window.location.pathname.split("/").pop();
const links = document.querySelectorAll(".navbar a");

// Loop through links
for (let i = 0; i < links.length; i++) {
  if (links[i].getAttribute("href") === currentPage) {
    links[i].classList.add("active");
    break;
  }
}

/* Hero Section */
// After 10seconds, image will display
setTimeout(function () {
  document.getElementById("hero").style.backgroundImage =
    'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("island-moon.jpg")';
}, 10000);
