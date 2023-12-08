export function listUpdate() {
  const searchInput = document.querySelector("#searchInput").value;
  const amount = document.querySelector("#amount").value;

  const userData = document.querySelector("#userList");
  const userIngredient = document.createElement('li');
  const userAmount = document.createElement('li');

  userIngredient.appendChild(document.createTextNode(`${searchInput}`))
  userAmount.appendChild(document.createTextNode(`${amount} g`))

  userData.appendChild(userIngredient);
  userData.appendChild(userAmount);
}