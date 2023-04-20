function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  inputAmout: document.querySelector("[type = 'number']"),
  boxContainer: document.querySelector("#boxes"),
  createBtn: document.querySelector("[data-create]"),
  desrotyBtn: document.querySelector("[data-destroy]"),
};

refs.createBtn.addEventListener("click", createBoxes);
refs.desrotyBtn.addEventListener("click", destroyBoxes);

function createBoxes() {
  const minValue = parseInt(refs.inputAmout.min);
  const maxValue = parseInt(refs.inputAmout.max);
  const amount = refs.inputAmout.value;
  const step = refs.inputAmout.step;
  let size = 30;

  if (amount > minValue && amount < maxValue) {
    for (let i = 0; i < amount; i += parseInt(step)) {
      const newDiwBox = document.createElement("div");
      refs.boxContainer.append(newDiwBox);
      newDiwBox.style.width = size + "px";
      newDiwBox.style.height = size + "px";
      newDiwBox.style.backgroundColor = getRandomHexColor();
      size += 10;
    }
  } else {
    alert("Введіть значення від 1 до 100");
  }
  refs.inputAmout.value = "";
}

function destroyBoxes() {
  refs.boxContainer.innerHTML = "";
}
