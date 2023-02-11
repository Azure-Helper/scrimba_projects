const themeBtn = document.getElementById("theme-btn");
const theme = window.localStorage.getItem("theme");
const inputNum = document.getElementById("input-num");
const convertBtn = document.getElementById("convert-btn");
const lengthEl = document.getElementById("display-length");
const volumeEl = document.getElementById("display-volume");
const massEl = document.getElementById("display-mass");

if (theme === "dark") document.body.classList.add("dark");

themeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark");
  if (theme === "dark") {
    window.localStorage.setItem("theme", "light");
  } else {
    window.localStorage.setItem("theme", "dark");
  }
});

convertBtn.addEventListener("click", function () {
  let length = `<p>${inputNum.value} meters = ${(
    inputNum.value * 3.281
  ).toFixed(3)} feet | ${inputNum.value} feet = ${(
    inputNum.value * 0.305
  ).toFixed(3)} meters</p>`;
  lengthEl.innerHTML = length;

  let volume = `<p>${inputNum.value} liters = ${(
    inputNum.value * 0.264
  ).toFixed(3)} gallons | ${inputNum.value} liters = ${(
    inputNum.value * 3.785
  ).toFixed(3)} liters</p>`;
  volumeEl.innerHTML = volume;

  let mass = `<p>${inputNum.value} kilos = ${(inputNum.value * 2.204).toFixed(
    3
  )} pounds | ${inputNum.value} pounds = ${(inputNum.value * 0.453).toFixed(
    3
  )} kilos</p>`;
  massEl.innerHTML = mass;
});
