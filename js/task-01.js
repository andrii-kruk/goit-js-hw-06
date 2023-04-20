const categoryEl = document.querySelectorAll("h2");
const categories = document.querySelectorAll('#categories .item')
console.log("Number of categories:", categoryEl.length);

categories.forEach((element) => {
  console.log("Category:", element.firstElementChild.textContent);
  console.log('Elements:', element.lastElementChild.children.length);
})

