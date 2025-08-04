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

/* Mark Converter */
const inputGrade = document.getElementById("input-text");
const convertBtn = document.getElementById("convert-btn");
const markResult = document.getElementById("result");

// If convertBtn exist, add click event to convert the input number to a letter grade
if (convertBtn) {
  convertBtn.addEventListener("click", function () {
    const inputValue = inputGrade.value.trim();
    markResult.textContent = inputValue;

    if (inputValue === "") {
      markResult.textContent = "Grade cannot be empty.";
    } else if (isNaN(inputValue)) {
      markResult.textContent = "Please enter a valid number.";
    } else if (inputValue < 0) {
      markResult.textContent = "Grade cannot be negative number.";
    } else if (inputValue > 100) {
      markResult.textContent = "Grade cannot exceed 100.";
    } else {
      let grade = "";
      if (Number(inputValue) >= 90) {
        grade = "A";
      } else if (Number(inputValue) < 90 && Number(inputValue) >= 80) {
        grade = "B";
      } else if (Number(inputValue) < 80 && Number(inputValue) >= 70) {
        grade = "C";
      } else if (Number(inputValue) < 70 && Number(inputValue) >= 60) {
        grade = "D";
      } else if (Number(inputValue) < 60 && Number(inputValue) >= 50) {
        grade = "E";
      } else {
        grade = "F";
      }
      markResult.textContent = `Your grade is ${grade}.`;
    }
  });
}
