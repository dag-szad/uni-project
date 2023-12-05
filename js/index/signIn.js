const nameInput = document.querySelector("#nameInput");
const emailInput = document.querySelector("#emailInput");
const passwordInput = document.querySelector("#passwordInput");

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

    const uniqueUser = `userloginData_${newUser.name}`;
    localStorage.setItem(uniqueUser, JSON.stringify(newUser));

    window.location.href = "home.html";
  }
}

const submitSignIn = document.querySelector("#submitSignInButton");
submitSignIn.addEventListener("click", signIn);