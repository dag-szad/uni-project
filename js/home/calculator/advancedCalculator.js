export function proteinCount(weight) {
  const proteinAmount = weight * 0.8;
  return proteinAmount;
}

export function carbsCount(activityValue, weight) {
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

export function fatsCount(goalValue, weight) {
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
