const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const makeIngredientsItem = (ingredient) => {
  const itemRef = document.createElement("li");
  itemRef.classList.add("item");
  itemRef.textContent = ingredient;
  return itemRef;
};

const ingredientsItemsRefs = ingredients.map(makeIngredientsItem);
document.querySelector("#ingredients").append(...ingredientsItemsRefs);
