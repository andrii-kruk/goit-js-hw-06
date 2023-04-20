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

const pageGalleryList = document.querySelector(".gallery");
const imgWidth = 500;
const imgHeight = 300;

const gallery = images
  .map(
    (image) =>
      `<li class="galleryList"><img src=${image.url} alt=${image.alt} width=${imgWidth} height=${imgHeight}></li>`
  )
  .join("");

pageGalleryList.insertAdjacentHTML("beforeend", gallery);
pageGalleryList.style.listStyle = "none";