const categoriesItemsRefs = document.querySelectorAll("#categories .item");

categoriesItemsRefs.forEach((value) => {
  console.log(`Category: ${value.firstElementChild.textContent}`);
  console.log(`Elements: ${value.lastElementChild.children.length}`);
});
