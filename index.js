// Query selectors
const logInButton = document.querySelector(".loginButton");
const exitButton = document.querySelector(".modal-exit");

// Toggle modal
function toggleModal() {
  const modal = document.querySelector(".overlay");
  modal.classList.toggle("is-hidden");
}

// Switch open/close
function handleModalToggle(event) {
  switch (event.type) {
    case "click":
      toggleModal();
      break;
    case "keydown":
      if (event.key === "Escape") {
        toggleModal();
      }
      break;
    default:
      break;
  }
}

// Events
logInButton.addEventListener("click", handleModalToggle);
exitButton.addEventListener("click", handleModalToggle);
window.addEventListener("keydown", handleModalToggle);

// Query selectors
const emailInput = document.querySelector(".emailInput");
const passwordInput = document.querySelector(".passwordInput");
const submitButton = document.querySelector(".modal-submit");

// Adding data to local storage
function signIn() {
  const emailData = emailInput.value;
  const passwordData = passwordInput.value;

  if (!emailData || !passwordData) {
    console.log("Please fill in both email and password.");
    return;
  }

  // Login data
  const userLoginData = {
    email: emailData,
    password: passwordData,
  };

  localStorage.setItem("userLoginData", JSON.stringify(userLoginData));
  console.log("User data added", userLoginData);

  window.location.href = "home.html";
  toggleModal();
}

//Login authentication
function logIn() {
  const savedLoginDataString = localStorage.getItem("userLoginData");

  if (savedLoginDataString) {
    const savedLoginData = JSON.parse(savedLoginDataString);

    if (
      emailInput.value === savedLoginData.email &&
      passwordInput.value === savedLoginData.password
    ) {
      window.location.href = "home.html";
      toggleModal();
    } else {
      window.alert("Invalid user data");
    }
  }
}

// Simple logging
function logging() {
  if (localStorage.length === 0) {
    signIn();
  } else {
    logIn();
  }
}

submitButton.addEventListener("click", logging);
