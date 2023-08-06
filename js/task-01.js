const categoriesRef = document.querySelector("#categories");
const categoriesItemsRefs = categoriesRef.children;

console.log(`Number of categories: ${categoriesItemsRefs.length}`);

Array.from(categoriesItemsRefs).forEach((value) => {
  console.log(`Category: ${value.firstElementChild.textContent}`);
  console.log(`Elements: ${value.lastElementChild.children.length}`);
});
