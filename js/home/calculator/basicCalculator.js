export function basicCalculation(weight, height, age, gender, activity, goal) {
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
