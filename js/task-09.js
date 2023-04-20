function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  body: document.querySelector("body"),
  buttonColor: document.querySelector(".change-color"),
  span: document.querySelector(".color"),
};

refs.buttonColor.addEventListener("click", () => {
  const color = getRandomHexColor();
  refs.span.textContent = color;
  refs.body.style.backgroundColor = color;
});
