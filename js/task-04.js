const refs = {
  btnDecrement: document.querySelector("button[data-action = 'decrement']"),
  btnIncrement: document.querySelector("button[data-action = 'increment']"),
};

const span = document.querySelector("span");
let counterValue = 0;

refs.btnDecrement.addEventListener("click", getDecrementValue);
refs.btnIncrement.addEventListener("click", getIncrementValue);

function getDecrementValue() {
    counterValue -= 1;
    span.textContent = counterValue;
}

function getIncrementValue() {
    counterValue += 1;
    span.textContent = counterValue;
}
