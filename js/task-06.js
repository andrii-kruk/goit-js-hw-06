const refs = { input: document.querySelector("#validation-input") };

refs.input.addEventListener("blur", onInputBlur);
const inputValue = parseInt(refs.input.dataset.length)

function onInputBlur(event) {
  if (refs.input.value.length === inputValue) {
    refs.input.classList.add("valid");
    refs.input.classList.remove("invalid");
} else {
    refs.input.classList.add("invalid");
    refs.input.classList.remove("valid");
  }
}
