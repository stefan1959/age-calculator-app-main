let currentDate = new Date();
let currentYear = currentDate.getFullYear();
let currentMonth = currentDate.getMonth() + 1; // Months are zero-indexed
let currentDay = currentDate.getDate();

const inputDay = document.getElementById("day");
const inputMonth = document.getElementById("month");
const inputYear = document.getElementById("year");
const dayLabel = document.getElementById("dayLabel");
const monthLabel = document.getElementById("monthLabel");
const yearLabel = document.getElementById("yearLabel");
const dayWarning = document.getElementById("dayWarning");

const years = document.getElementById("result-years");
const months = document.getElementById("result-months");
const days = document.getElementById("result-days");
const Button = document.getElementById("calculate-age");

Button.addEventListener("click", function () {
  // Validate the input fields
  dateFormat = inputMonth.value + "/" + inputDay.value + "/" + inputYear.value;
  let dateCheck = new Date(dateFormat);
  if (isNaN(dateCheck)) {
    dayLabel.classList.add("warning");
    monthLabel.classList.add("warning");
    yearLabel.classList.add("warning");
    dayWarning.innerHTML = "Must be a valid date";
    return;
  } else {
    dayLabel.classList.remove("warning");
    monthLabel.classList.remove("warning");
    yearLabel.classList.remove("warning");
    dayWarning.innerHTML = "";
  }

  // Get the values from the input fields
  const day = inputDay.value;
  const month = inputMonth.value;
  const year = inputYear.value;
  // Calculate the age
  const [ageYears, ageMonths, ageDays] = calculateAge(year, month, day);
  // Update the HTML elements with the calculated age
  years.innerHTML = ageYears;
  months.innerHTML = ageMonths;
  days.innerHTML = ageDays;
});

// inputDay.value = "08";
// inputMonth.value = "07";
// inputYear.value = "1959";

// calculateAge(inputYear.value, inputMonth.value, inputDay.value);
// const [year, month, day] = calculateAge(inputYear.value, inputMonth.value, inputDay.value);
// Update the HTML elements with the calculated age

function calculateAge(inputY, inputM, inputD) {
  let year = currentYear - inputY;
  let month, day;

  if (inputM < currentMonth) {
    month = currentMonth - inputM;
  } else if (inputM > currentMonth) {
    year = year - 1;
    month = 12 - (inputM - currentMonth);
  } else {
    month = 0;
  }

  if (inputD < currentDay) {
    day = currentDay - inputD;
  } else if (inputD > currentDay) {
    month = month - 1;
    day = 30 - (inputD - currentDay);
  } else {
    day = 0;
  }

  return [year, month, day];
}
