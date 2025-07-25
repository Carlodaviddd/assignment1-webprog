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

// Staff Page
const sortByName = document.getElementById("sortName");
const sortBySalary = document.getElementById("sortSalary");
const tbody = document.getElementById("staff");

var dataSet = [
  [
    "Brielle Williamson",
    "Integration Specialist",
    "New York",
    "4804",
    "2012/12/02",
    "$372,000",
  ],
  [
    "Herrod Chandler",
    "Sales Assistant",
    "San Francisco",
    "9608",
    "2012/08/06",
    "$137,500",
  ],
  [
    "Rhona Davidson",
    "Integration Specialist",
    "Tokyo",
    "6200",
    "2010/10/14",
    "$327,900",
  ],
  [
    "Colleen Hurst",
    "Javascript Developer",
    "San Francisco",
    "2360",
    "2009/09/15",
    "$205,500",
  ],
  [
    "Sonya Frost",
    "Software Engineer",
    "Edinburgh",
    "1667",
    "2008/12/13",
    "$103,600",
  ],
  ["Jena Gaines", "Office Manager", "London", "3814", "2008/12/19", "$90,560"],
  [
    "Quinn Flynn",
    "Support Lead",
    "Edinburgh",
    "9497",
    "2013/03/03",
    "$342,000",
  ],
  [
    "Tiger Nixon",
    "System Architect",
    "Edinburgh",
    "5421",
    "2011/04/25",
    "$320,800",
  ],
  ["Garrett Winters", "Accountant", "Tokyo", "8422", "2011/07/25", "$170,750"],
  [
    "Ashton Cox",
    "Junior Technical Author",
    "San Francisco",
    "1562",
    "2009/01/12",
    "$86,000",
  ],
  [
    "Cedric Kelly",
    "Senior Javascript Developer",
    "Edinburgh",
    "6224",
    "2012/03/29",
    "$433,060",
  ],
  ["Airi Satou", "Accountant", "Tokyo", "5407", "2008/11/28", "$162,700"],
  [
    "Charde Marshall",
    "Regional Director",
    "San Francisco",
    "6741",
    "2008/10/16",
    "$470,600",
  ],
  [
    "Haley Kennedy",
    "Senior Marketing Designer",
    "London",
    "3597",
    "2012/12/18",
    "$313,500",
  ],
  [
    "Tatyana Fitzpatrick",
    "Regional Director",
    "London",
    "1965",
    "2010/03/17",
    "$385,750",
  ],
  [
    "Michael Silva",
    "Marketing Designer",
    "London",
    "1581",
    "2012/11/27",
    "$198,500",
  ],
  [
    "Paul Byrd",
    "Chief Financial Officer (CFO)",
    "New York",
    "3059",
    "2010/06/09",
    "$725,000",
  ],
  [
    "Gloria Little",
    "Systems Administrator",
    "New York",
    "1721",
    "2009/04/10",
    "$237,500",
  ],
  [
    "Bradley Greer",
    "Software Engineer",
    "London",
    "2558",
    "2012/10/13",
    "$132,000",
  ],
  ["Dai Rios", "Personnel Lead", "Edinburgh", "2290", "2012/09/26", "$217,500"],
  [
    "Jenette Caldwell",
    "Development Lead",
    "New York",
    "1937",
    "2011/09/03",
    "$345,000",
  ],
  [
    "Yuri Berry",
    "Chief Marketing Officer (CMO)",
    "New York",
    "6154",
    "2009/06/25",
    "$675,000",
  ],
  [
    "Caesar Vance",
    "Pre-Sales Support",
    "New York",
    "8330",
    "2011/12/12",
    "$106,450",
  ],
  [
    "Doris Wilder",
    "Sales Assistant",
    "Sidney",
    "3023",
    "2010/09/20",
    "$85,600",
  ],
  [
    "Angelica Ramos",
    "Chief Executive Officer (CEO)",
    "London",
    "5797",
    "2009/10/09",
    "$1,200,000",
  ],
  ["Gavin Joyce", "Developer", "Edinburgh", "8822", "2010/12/22", "$92,575"],
  [
    "Jennifer Chang",
    "Regional Director",
    "Singapore",
    "9239",
    "2010/11/14",
    "$357,650",
  ],
  [
    "Brenden Wagner",
    "Software Engineer",
    "San Francisco",
    "1314",
    "2011/06/07",
    "$206,850",
  ],
  [
    "Fiona Green",
    "Chief Operating Officer (COO)",
    "San Francisco",
    "2947",
    "2010/03/11",
    "$850,000",
  ],
  [
    "Shou Itou",
    "Regional Marketing",
    "Tokyo",
    "8899",
    "2011/08/14",
    "$163,000",
  ],
  [
    "Michelle House",
    "Integration Specialist",
    "Sidney",
    "2769",
    "2011/06/02",
    "$95,400",
  ],
  ["Suki Burks", "Developer", "London", "6832", "2009/10/22", "$114,500"],
  [
    "Prescott Bartlett",
    "Technical Author",
    "London",
    "3606",
    "2011/05/07",
    "$145,000",
  ],
  [
    "Gavin Cortez",
    "Team Leader",
    "San Francisco",
    "2860",
    "2008/10/26",
    "$235,500",
  ],
  [
    "Martena Mccray",
    "Post-Sales support",
    "Edinburgh",
    "8240",
    "2011/03/09",
    "$324,050",
  ],
  [
    "Unity Butler",
    "Marketing Designer",
    "San Francisco",
    "5384",
    "2009/12/09",
    "$85,675",
  ],
];

let sortName = true;
let sortSalary = true;

// Function to display all staff data
function displayTable() {
  tbody.innerHTML = "";
  for (let i = 0; i < dataSet.length; i++) {
    let row = document.createElement("tr");
    for (let j = 0; j < dataSet[i].length; j++) {
      let td = document.createElement("td");
      td.textContent = dataSet[i][j];
      row.appendChild(td);
    }
    tbody.appendChild(row);
  }
}

// If the sortByName exist, add click event to sort the name asc/dsc
if (sortByName) {
  sortByName.addEventListener("click", function () {
    dataSet.sort(function (a, b) {
      if (a[0] < b[0]) {
        if (sortName) {
          return -1;
        } else {
          return 1;
        }
      }
      if (a[0] > b[0]) {
        if (sortName) {
          return 1;
        } else {
          return -1;
        }
      }
      return 0;
    });
    sortName = !sortName; // Toggle order
    displayTable(); // Update table
  });
}

// If sortBySalary exist, add click event to sort the salary asc/dsc
if (sortBySalary) {
  sortBySalary.addEventListener("click", function () {
    dataSet.sort(function (a, b) {
      let salary1 = Number(a[5].replace(/[^0-9]/g, ""));
      let salary2 = Number(b[5].replace(/[^0-9]/g, ""));
      if (sortSalary) {
        return salary1 - salary2;
      } else {
        return salary2 - salary1;
      }
    });
    sortSalary = !sortSalary; // Toggle order
    displayTable(); // Update table
  });
}

// Initial display of the staff data given
displayTable();
