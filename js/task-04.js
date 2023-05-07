const counterEl = document.querySelector("#counter");
const decrementBtn = counterEl.firstElementChild;
const incrementBtn = counterEl.lastElementChild;
const counterValue = document.querySelector("#value");
let counter = 0;
decrementBtn.addEventListener("click", countDecrement);
incrementBtn.addEventListener("click", countIncrement);

function countDecrement() {
  counter -= 1;
  counterValue.textContent = counter;
}

function countIncrement() {
  counter += 1;
  counterValue.textContent = counter;
}






