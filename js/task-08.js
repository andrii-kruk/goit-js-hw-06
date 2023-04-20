const refs = {
  form: document.querySelector(".login-form"),
  mail: document.querySelector("[name = 'email']"),
  password: document.querySelector("[name = 'password']"),
};
let user = {};
refs.form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const formElements = event.currentTarget.elements;

  if (refs.mail.value === "" || refs.password.value === "") {
    alert("Ви маєте заповнити усі поля!");
  } else {
    // console.log(`${formElements.email.name}: ${refs.mail.value}`);
    // console.log(`${formElements.password.name}: ${refs.password.value}`);
    user.mail = refs.mail.value;
    user.password = refs.password.value;

    console.log(`Email: ${user.mail}`);
    console.log(`Password: ${user.password}`);

    event.currentTarget.reset();
  }
}
