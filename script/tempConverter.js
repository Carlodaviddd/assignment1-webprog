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

/* Burger */
document.addEventListener("DOMContentLoaded", () => {
  const burger = document.getElementById("burger");
  const navLinks = document.getElementById("nav-links");

  burger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
});

// Temperature converter
const inputTemp = document.getElementById("input-temp");
const convertTemp = document.getElementById("convert-temp");
const selectTemp = document.getElementById("select-temp");
const tempResult = document.getElementById("result-temp");

// Formulas
/* https://www.thoughtco.com/fahrenheit-to-celsius-formula-609230#:~:text=The%20formula%20for%20converting%20Fahrenheit,a%20larger%20number%20than%20Celsius. */
function fToC(f) {
  return ((f - 32) * 5) / 9;
}

/* https://www.thoughtco.com/convert-fahrenheit-to-kelvin-609231 */
function fToK(f) {
  return ((f - 32) * 5) / 9 + 273.15;
}

/* https://www.thoughtco.com/celcius-to-farenheit-formula-609227#:~:text=Celsius%20and%20Fahrenheit%20are%20two%20important%20temperature%20scales%20that%20are,are%20equal%20at%20%2D40%C2%B0. */
function cToF(c) {
  return (c * 9) / 5 + 32;
}

/* https://www.thoughtco.com/convert-celsius-to-kelvin-609229 */
function cToK(c) {
  return c + 273.15;
}

/* https://www.thoughtco.com/convert-kelvin-to-fahrenheit-609234#:~:text=The%20easiest%20formula%20for%20converting,Add%2032%20to%20this%20number. */
function kToF(k) {
  return ((k - 273.15) * 9) / 5 + 32;
}

/* https://www.thoughtco.com/convert-kelvin-to-celsius-609233#:~:text=Conversion%20Formula,answer%20will%20be%20in%20Celsius. */
function kToC(k) {
  return k - 273.15;
}

// If convertTemp button exist, add click event to convert the input number temperature based on the user select option
if (convertTemp) {
  convertTemp.addEventListener("click", function () {
    const tempValue = Number(inputTemp.value);
    // tempResult.textContent = tempValue;

    const options = selectTemp.value;

    if (isNaN(tempValue)) {
      tempResult.textContent = "Please enter a valid number.";
    } else if (options === "f-ck") {
      const celcius = fToC(tempValue);
      const kelvin = fToK(tempValue);
      tempResult.textContent = `Celcius: ${celcius.toFixed(
        2
      )} °C, Kelvin: ${kelvin.toFixed(2)} K`;
    } else if (options === "c-fk") {
      const fahrenheit = cToF(tempValue);
      const kelvin = cToK(tempValue);
      tempResult.textContent = `Fahrenheit: ${fahrenheit.toFixed(
        2
      )} F, Kelvin: ${kelvin.toFixed(2)} K`;
    } else if (options === "k-fc") {
      const fahrenheit = kToF(tempValue);
      const celcius = kToC(tempValue);
      tempResult.textContent = `Fahrenheit: ${fahrenheit.toFixed(
        2
      )} F, Celcius: ${celcius.toFixed(2)} °C`;
    } else {
      tempResult.textContent = "Please select a conversion type";
    }
  });
}
