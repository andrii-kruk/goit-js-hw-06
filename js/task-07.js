const refs = {
  inputController: document.querySelector("#font-size-control"),
  span: document.querySelector("#text"),
};

refs.inputController.addEventListener("click", onInputControllerFocus);
refs.span.style.fontSize = refs.inputController.value + "px";

function onInputControllerFocus(event) {
  const inputValue = event.currentTarget.value;
  refs.span.style.fontSize = inputValue + "px";
}
