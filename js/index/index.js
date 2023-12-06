// Imports
import { handleModalToggle } from "./modalOpening.js";
import { signIn } from "./signIn.js";
import { logIn } from "./logIn.js";

// Sign in query selectors and events
const signInButtons = document.querySelectorAll(".signInButton");
signInButtons.forEach(function (signInButton) {
  signInButton.addEventListener("click", (event) => {
    handleModalToggle(event, "signin");
  });
});

const exitSignInButton = document.querySelector(".signin-modal-exit");
exitSignInButton.addEventListener("click", (event) => {
  handleModalToggle(event, "signin");
});

window.addEventListener("keydown", (event) => {
  handleModalToggle(event, "signin");
});

// Log in query selectors and events
const logInButton = document.querySelector(".logInButton");
logInButton.addEventListener("click", (event) => {
  handleModalToggle(event, "login");
});

const exitLogInButton = document.querySelector(".login-modal-exit");
exitLogInButton.addEventListener("click", (event) => {
  handleModalToggle(event, "login");
});

window.addEventListener("keydown", (event) => {
  handleModalToggle(event, "login");
});

// Sign in event
const submitSignIn = document.querySelector("#submitSignInButton");
submitSignIn.addEventListener("click", signIn);

// Log in event
const submitLogIn = document.querySelector("#submitLogInButton");
submitLogIn.addEventListener("click", logIn);
