import { basicCalculation } from "./basicCalculator.js";
import { proteinCount, carbsCount, fatsCount } from "./advancedCalculator.js";
import { searchRecipes } from "../nutrients/foodApi.js";
import { ingredients } from "../nutrients/ingredientsList.js";
import { nutrientsCount } from "../nutrients/nutrientsCount.js";
import { nutrientsAdd } from "../nutrients/nutrientsCount.js";
import { listUpdate } from "../nutrients/userList.js";

const submitButton = document.querySelector("#submitButton");

submitButton.addEventListener("click", (event) => {
  event.preventDefault();

  const age = parseFloat(document.querySelector("#userAge").value);
  const gender = document.querySelector("#userGender").value;
  const height = parseFloat(document.querySelector("#userHeight").value);
  const weight = parseFloat(document.querySelector("#userWeight").value);
  const activity = document.querySelector("#userActivity").value;
  const goal = document.querySelector("#userGoal").value;

  if (!age || !height || !weight) {
    window.alert("Please fill age, height and weight form");
  } else {
    const basicCaloriesResult = basicCalculation(
      weight,
      height,
      age,
      gender,
      activity,
      goal
    ).toFixed(0);
    const proteinCountResult = proteinCount(weight).toFixed(0);
    const carbsCountResult = carbsCount(activity, weight).toFixed(0);
    const fatsCountResult = fatsCount(goal, weight).toFixed(0);

    const makroFoodEnergy = document.querySelector("#makroFoodEnergy");
    makroFoodEnergy.innerHTML = `<p>${basicCaloriesResult} kcal</p>`;

    const makroProtein = document.querySelector("#makroProtein");
    makroProtein.innerHTML = `<p>${proteinCountResult} g</p>`;

    const makroCarbs = document.querySelector("#makroCarbs");
    makroCarbs.innerHTML = `<p>${carbsCountResult} g</p>`;

    const makroFats = document.querySelector("#makroFats");
    makroFats.innerHTML = `<p>${fatsCountResult} g</p>`;
  }
});

// const generateButton = document.querySelector("#generateButton");

// generateButton.addEventListener("click", (event) => {
//   event.preventDefault();
//   console.log("Button clicked");
//   searchRecipes();
// });


const selectList = document.querySelector("#searchList");

ingredients.forEach(function(ingredient) {
  const option = document.createElement("option");
  option.value = ingredient.name;
  selectList.appendChild(option);
});


let basicCaloriesResult = 0;
let basicProteinResult = 0;
let basicCarbsResult = 0;
let basicFatsResult = 0;

const addButton = document.querySelector("#addButton");
addButton.addEventListener("click", addHandler);

function addHandler() {
  nutrientsCount();
  listUpdate();

  const newCaloriesResult = basicCaloriesResult + parseFloat(nutrientsAdd("kcal"));
  const newProteinResult = basicProteinResult + parseFloat(nutrientsAdd("proteins"));
  const newCarbsResult = basicCarbsResult + parseFloat(nutrientsAdd("carbs"));
  const newFatsResult = basicFatsResult + parseFloat(nutrientsAdd("fats"));

  const makroFoodEnergyResult = document.querySelector("#makroFoodEnergyResult");
  makroFoodEnergyResult.innerHTML = `<p>${newCaloriesResult.toFixed(0)} kcal</p>`;

  const makroProteinResult = document.querySelector("#makroProteinResult");
  makroProteinResult.innerHTML = `<p>${newProteinResult.toFixed(0)} g</p>`;

  const makroCarbsResult = document.querySelector("#makroCarbsResult");
  makroCarbsResult.innerHTML = `<p>${newCarbsResult.toFixed(0)} g</p>`;

  const makroFatsResult = document.querySelector("#makroFatsResult");
  makroFatsResult.innerHTML = `<p>${newFatsResult.toFixed(0)} g</p>`;

  basicCaloriesResult = newCaloriesResult;
  basicProteinResult = newProteinResult;
  basicCarbsResult = newCarbsResult;
  basicFatsResult = newFatsResult;
}
