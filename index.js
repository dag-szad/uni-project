// Imports
import { handleModalToggle } from "./js/index/modalOpening.js";
import { signIn } from "./js/index/signIn.js";
import { logIn } from "./js/index/logIn.js";


// Sign in query selectors and events
const signInButtons = document.querySelectorAll(".signInButton");
signInButtons.forEach(function(signInButton) {
    signInButton.addEventListener("click", (event) => {
        handleModalToggle(event, "signin");
    })
  });

const exitSignInButton = document.querySelector(".signin-modal-exit");
exitSignInButton.addEventListener("click", (event) => {
    handleModalToggle(event, "signin");
})

window.addEventListener("keydown", (event) => {
    handleModalToggle(event, "signin");
})


// Log in query selectors and events
const logInButton = document.querySelector(".logInButton");
logInButton.addEventListener("click", (event) => {
    handleModalToggle(event, "login");
})

const exitLogInButton = document.querySelector(".login-modal-exit");
exitLogInButton.addEventListener("click", (event) => {
    handleModalToggle(event, "login");
})

window.addEventListener("keydown", (event) => {
    handleModalToggle(event, "login");
})

// Query selectors
// const nameInput = document.querySelector("#nameInput");
// const emailInput = document.querySelector("#emailInput");
// const passwordInput = document.querySelector("#passwordInput");
// const submitSignIn = document.querySelector("#signInButton");

// // Simple logging
// function logging() {
//   // const stored

//   if (emailInput.value === 0) {
//     signIn(nameInput.value, emailInput.value, passwordInput.value);
//     toggleModal();
//   } else {
//     logIn(emailInput.value, passwordInput.value);
//     toggleModal();
//   }
// }

// submitSignIn.addEventListener("click", signIn);
