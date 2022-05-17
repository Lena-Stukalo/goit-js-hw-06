const form = document.querySelector(".login-form");
const resetButton = document.createElement("button");
resetButton.textContent = "Reset";
resetButton.type = "button";
resetButton.addEventListener("click", () => {
  form.reset();
});
form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === "" || password.value === "") {
    window.alert("Please fill in all the fields!");
  } else {
    console.log({ elements: { email, password } });
    form.append(resetButton);
  }
}
