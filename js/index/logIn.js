// Query selectors from log in form
const nameInput = document.querySelector("#logInNameInput");
const passwordInput = document.querySelector("#logInPasswordInput");

//Login form authentication
export function logIn() {
  const nameData = nameInput.value;
  const passwordData = passwordInput.value;

  const storedUser = JSON.parse(localStorage.getItem("uniqueUser"));

  if (nameData === storedUser.name && passwordData === storedUser.password) {
    window.location.href = "home.html";
  } else {
    window.alert("User not found");
  }
}
