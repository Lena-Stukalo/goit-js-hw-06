function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const divHymlStatic = document.querySelector("#boxes");
const input = document.querySelector("input");
const createButton = document.querySelector("[data-create]");
const destroyButtom = document.querySelector("[data-destroy]");
let divSize = 30;
const divElementArray = [];
let amount = 0;

input.addEventListener("input", (event) => {
  amount = event.currentTarget.value;
});
createButton.addEventListener("click", () => {
  createBoxes(amount);
});
destroyButtom.addEventListener("click", () => {
  location.reload();
});

function createBoxes(amount) {
  for (let i = 0; i < amount; i = i + 1) {
    const divElement = document.createElement("div");
    console.log(divElement);
    divElement.style.backgroundColor = getRandomHexColor();
    divElement.style.width = `${divSize}px`;
    divElement.style.height = `${divSize}px`;
    divElementArray.push(divElement);
    divSize = divSize + 10;
  }
  divHymlStatic.append(...divElementArray);
}
