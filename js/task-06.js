const input = document.querySelector("#validation-input");
const inputDataLenght = Number(input.dataset.length);
input.addEventListener("blur", (event) => {
  if (inputDataLenght < event.currentTarget.value.length) {
    if (input.classList.contains("invalid")) {
      input.classList.remove("invalid");
    }
    input.classList.add("valid");
  } else {
    if (input.classList.contains("valid")) {
      input.classList.remove("valid");
    }
    input.classList.add("invalid");
  }
});
