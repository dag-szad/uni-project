// Imports
import { ingredients } from "./nutrients/ingredientsList.js";
import { searchRecipes } from "./nutrients/foodApi.js";
import { calcHandle } from "./calculator/calcHandle.js";
import { addHandler } from "./nutrients/addHandle.js";


// Calculator form
const submitButton = document.querySelector("#submitButton");
submitButton.addEventListener("click", calcHandle);


// Ingredients list generator
const selectList = document.querySelector("#searchList");
ingredients.forEach(function(ingredient) {
  const option = document.createElement("option");
  option.value = ingredient.name;
  selectList.appendChild(option);
});


// Adding list item and nutrients count below form
const addButton = document.querySelector("#addButton");
addButton.addEventListener("click", addHandler);


// Random recipes generator
const generateButton = document.querySelector("#generateButton");
generateButton.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("Button clicked");
  searchRecipes();
});