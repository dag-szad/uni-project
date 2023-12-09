// Query selectors from sign up form
const nameInput = document.querySelector("#signInNameInput");
const emailInput = document.querySelector("#signInEmailInput");
const passwordInput = document.querySelector("#signInPasswordInput");

// Register
export function signIn() {
  const nameData = nameInput.value;
  const emailData = emailInput.value;
  const passwordData = passwordInput.value;

  // Class constructor for new user data
  class User {
    constructor(name, email, password) {
      this.name = name;
      this.email = email;
      this.password = password;
    }
  }

  // Register if/else for form validation
  if (!nameData || !emailData || !passwordData) {
    window.alert("Please fill name, email and password.");
    return;
  } else {
    const newUser = new User(nameData, emailData, passwordData);
    localStorage.setItem("uniqueUser", JSON.stringify(newUser));
    window.location.href = "home.html";
  }
}
