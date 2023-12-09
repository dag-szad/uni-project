//Imports
import { basicCalculation } from "./basicCalculator.js";
import { proteinCount, carbsCount, fatsCount } from "./advancedCalculator.js";

// Final calculation and render
export function calcHandle(event) {
  event.preventDefault();

  // Variables with form values
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
}
