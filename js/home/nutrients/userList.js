// Updating home dom with new values
export function listUpdate() {
  const searchInput = document.querySelector("#searchInput").value;
  const amount = document.querySelector("#amount").value;

  const userData = document.querySelector("#userList");
  const userListItem = document.createElement('li');
  const userIngredient = document.createElement('p');
  const userAmount = document.createElement('p');

  userIngredient.appendChild(document.createTextNode(`${searchInput}`))
  userAmount.appendChild(document.createTextNode(`${amount} g`))

  userListItem.appendChild(userIngredient);
  userListItem.appendChild(userAmount);

  userData.appendChild(userListItem);
}