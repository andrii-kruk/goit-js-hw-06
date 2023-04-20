const refs = {
  input: document.querySelector("#name-input"),
  span: document.querySelector("#name-output"),
};
refs.input.addEventListener("input", onInputFocus);

function onInputFocus(event) {
  const value = event.currentTarget.value.trim();
  if (value === "") {
    refs.span.textContent = "Anonymous";
  } else {
    refs.span.textContent = value;
  }
}
