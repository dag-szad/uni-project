const submitButton = document.querySelector("#submitButton");

submitButton.addEventListener("click", (event) => {
  event.preventDefault();

  const age = parseFloat(document.querySelector("#userAge").value);
  const gender = document.querySelector("#userGender").value;
  const height = parseFloat(document.querySelector("#userHeight").value);
  const weight = parseFloat(document.querySelector("#userWeight").value);
  const activity = document.querySelector("#userActivity").value;
  const goal = document.querySelector("#userGoal").value;


  const basicCaloriesResult = basicCalculation(weight, height, age, gender, activity, goal).toFixed(0);
  const proteinCountResult = proteinCount(weight).toFixed(1);
  const carbsCountResult = carbsCount(activity, weight).toFixed(1);
  const fatsCountResult = fatsCount(goal, weight).toFixed(1);


  const makroFoodEnergy = document.querySelector("#makroFoodEnergy");
  makroFoodEnergy.innerHTML = `<p>${basicCaloriesResult} kcal</p>`;

  const makroProtein = document.querySelector("#makroProtein");
  makroProtein.innerHTML = `<p>${proteinCountResult} g</p>`;

  const makroCarbs = document.querySelector("#makroCarbs");
  makroCarbs.innerHTML = `<p>${carbsCountResult} g</p>`;
  
  const makroFats = document.querySelector("#makroFats");
  makroFats.innerHTML = `<p>${fatsCountResult} g</p>`;
});


function basicCalculation(weight, height, age, gender, activity, goal) {
  const basicCalories =
    (10 * weight + 6.25 * height - 5 * age + genderOptions(gender)) *
    activityOptions(activity) *
    goalOptions(goal);

  return basicCalories;
}


function genderOptions(genderValue) {
  switch (genderValue) {
    case "1":
      return 5;
    case "2":
      return Math.abs(161) * -1;
    case "3":
      return Math.abs(78) * -1;
    case "4":
      return Math.abs(78) * -1;
    default:
      break;
  }
}


function activityOptions(activityValue) {
  switch (activityValue) {
    case "1":
      return 1.2;
    case "2":
      return 1.375;
    case "3":
      return 1.55;
    case "4":
      return 1.725;
    case "5":
      return 1.9;
    default:
      break;
  }
}


function goalOptions(goalValue) {
  switch (goalValue) {
    case "1":
      return 0.9;
    case "2":
      return 0.95;
    case "3":
      return 1;
    case "4":
      return 1.05;
    case "5":
      return 1.1;
    default:
      break;
  }
}


function proteinCount(weight) {
  const proteinAmount = weight * 0.8;
  return proteinAmount;
}


function carbsCount(activityValue, weight) {
  switch (activityValue) {
    case "1":
      return weight * 6;
    case "2":
      return weight * 7;
    case "3":
      return weight * 8;
    case "4":
      return weight * 9;
    case "5":
      return weight * 10;
    default:
      break;
  }
}

function fatsCount(goalValue, weight) {
  switch (goalValue) {
    case "1":
      return weight * 0.5;
    case "2":
      return weight * 0.6;
    case "3":
      return weight * 0.7;
    case "4":
      return weight * 0.9;
    case "5":
      return weight * 1;
    default:
      break;
  }
}

