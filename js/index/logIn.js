//Login authentication
export function logIn(emailInput, passwordInput) {
  const savedLoginDataString = localStorage.getItem("userLoginData");

  if (savedLoginDataString) {
    const savedLoginData = JSON.parse(savedLoginDataString);

    if (
      emailInput === savedLoginData.email &&
      passwordInput === savedLoginData.password
    ) {
      window.location.href = "home.html";
    } else {
      window.alert("Invalid user data");
    }
  }
}
