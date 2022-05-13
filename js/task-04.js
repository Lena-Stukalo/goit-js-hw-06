let counterValue = 0;
const valueSpan = document.querySelector("#value");
const incrementButton = document.querySelector(
  "button[data-action='increment']"
);
const decrementButton = document.querySelector(
  "button[data-action='decrement']"
);
decrementButton.addEventListener("click", () => {
  counterValue = counterValue - 1;
  valueSpan.textContent = counterValue;
});
incrementButton.addEventListener("click", () => {
  counterValue = counterValue + 1;
  valueSpan.textContent = counterValue;
});
