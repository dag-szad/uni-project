const nameInput = document.querySelector("#signInNameInput");
const emailInput = document.querySelector("#signInEmailInput");
const passwordInput = document.querySelector("#signInPasswordInput");

export function signIn() {
  const nameData = nameInput.value;
  const emailData = emailInput.value;
  const passwordData = passwordInput.value;

  class User {
    constructor(name, email, password) {
      this.name = name;
      this.email = email;
      this.password = password;
    }
  }

  if (!nameData || !emailData || !passwordData) {
    window.alert("Please fill name, email and password.");
    return;
  } else {
    const newUser = new User(nameData, emailData, passwordData);

    localStorage.setItem("uniqueUser", JSON.stringify(newUser));

    window.location.href = "home.html";
  }
}
