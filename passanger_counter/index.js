let count = 0;
let countValue = document.getElementById("count-value");
let saveValue = document.getElementById("save-value");

function increment() {
  count += 1;
  countValue.textContent = count;
  console.log(count);
}

function save() {
  let countStr = " " + count + " - ";
  saveValue.textContent += countStr;
  count = 0;
  countValue.textContent = count;
}

function reset() {
  count = 0;
  countValue.textContent = count;
  saveValue.textContent = "Previous Entries: ";
}
