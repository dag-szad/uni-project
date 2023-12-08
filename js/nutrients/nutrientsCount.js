import { ingredients } from "./ingredientsList.js";

export function nutrientsCount() {
  const searchInput = document.querySelector("#searchInput").value.toLowerCase();
  const amount = document.querySelector("#amount").value;

  const newIngredient = ingredients.find((selectedIngredient) =>
    selectedIngredient.name.toLowerCase().includes(searchInput)
  );

  const newKcal = ((newIngredient.kcal / 100) * amount).toFixed(0);
  const newProteins = ((newIngredient.proteins / 100) * amount).toFixed(0);
  const newCarbs = ((newIngredient.carbs / 100) * amount).toFixed(0);
  const newFats = ((newIngredient.fats / 100) * amount).toFixed(0);

  return {
    kcal: newKcal,
    proteins: newProteins,
    carbs: newCarbs,
    fats: newFats,
  };
}

export function nutrientsAdd(prop) {
  const result = nutrientsCount();

  switch (prop) {
    case "kcal":
      return result.kcal;
    case "proteins":
      return result.proteins;
    case "carbs":
      return result.carbs;
    case "fats":
      return result.fats;
    default:
      return 0;
  }
}
