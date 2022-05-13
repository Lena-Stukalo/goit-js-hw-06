const input = document.querySelector("#font-size-control");
const span = document.querySelector("#text");
console.log(span);

input.addEventListener("input", (event) => {
  span.style.fontSize = `${event.currentTarget.value}px`;
});
