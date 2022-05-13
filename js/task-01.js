const categories = document.querySelector("#categories");
console.log(
  `Number of categories: ${categories.querySelectorAll(".item").length}`
);
const categoriesItems = categories.querySelectorAll(".item");
[...categoriesItems].map((item) => {
  console.log();
  console.log(`Category: ${item.querySelector("h2").textContent}`);
  console.log(`Elements: ${item.querySelectorAll("li").length}`);
});
