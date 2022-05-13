const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];
const list = document.querySelector(".gallery");
list.style.display = "flex";
list.style.jistifyContent = "space-between";
const liElementsArray = [];
images.map((image) => {
  const liElement = document.createElement("li");
  const imageElement = document.createElement("img");
  imageElement.src = image.url;
  imageElement.alt = image.alt;
  imageElement.style.width = "300px";
  liElement.insertAdjacentElement("afterbegin", imageElement);
  liElementsArray.push(liElement);
});
list.append(...liElementsArray);
