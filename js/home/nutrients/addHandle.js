// Imports
import { nutrientsCount, nutrientsAdd } from "./nutrientsCount.js";
import { listUpdate } from "./userList.js";

let basicCaloriesResult = 0;
let basicProteinResult = 0;
let basicCarbsResult = 0;
let basicFatsResult = 0;

// Adding new nutrients count to the base values
export function addHandler() {
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