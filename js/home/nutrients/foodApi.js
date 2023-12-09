export async function searchRecipes() {
  try {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=858fdc921a634c1c98cebc6dae75edbb&diet=vegan`
    );
    const data = await response.json();

    if (data.results && data.results.length > 0) {
      const numberOfRecipes = 3;
      const randomIndexes = [];

      while (randomIndexes.length < numberOfRecipes) {
        const randomIndex = Math.floor(Math.random() * data.results.length);
        if (!randomIndexes.includes(randomIndex)) {
          randomIndexes.push(randomIndex);
        }
      }

      randomIndexes.forEach((index) => {
        const recipe = data.results[index];
        console.log(recipe.title);

        const mealsDiv = document.querySelector("#generatedMeals");
        const meal = document.createElement('p');
        
        meal.appendChild(document.createTextNode(`${recipe.title}`));
        mealsDiv.appendChild(meal);

      });
    } else {
      console.log("No recipes to show");
    }
  } catch (error) {
    console.error("Some error: ", error);
  }
}
