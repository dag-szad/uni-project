// // Query selectors
// const logInButton = document.querySelector(".loginButton");
// const exitButton = document.querySelector(".modal-exit");
// // Toggle modal
// function toggleModal() {
//   const modal = document.querySelector(".overlay");
//   modal.classList.toggle("is-hidden");
// }
// // Switch open/close
// function handleModalToggle(event) {
//   switch (event.type) {
//     case "click":
//       toggleModal();
//       break;
//     case "keydown":
//       if (event.key === "Escape") {
//         toggleModal();
//       }
//       break;
//     default:
//       break;
//   }
// }
// // Events
// logInButton.addEventListener("click", handleModalToggle);
// exitButton.addEventListener("click", handleModalToggle);
// window.addEventListener("keydown", handleModalToggle);
// // Query selectors
// const emailInput = document.querySelector(".emailInput");
// const passwordInput = document.querySelector(".passwordInput");
// const submitButton = document.querySelector(".modal-submit");
// // Login data
// const email = "user@mail.com";
// const password = "user1";
// // Login authentication
// function logIn() {
//   if (emailInput.value === email && passwordInput.value === password) {
//     window.location.href = "home.html";
//   } else if (emailInput.value !== email || passwordInput.value !== password) {
//     window.alert("Invalid user data");
//   } else {
//     console.log("Some error");
//   }
// }
// submitButton.addEventListener("click", logIn);
const age = document.querySelector("#userAge");
const gender = document.querySelector("#userGender");
const height = document.querySelector("#userHeight");
const weight = document.querySelector("#userWeight");

//# sourceMappingURL=home.579125c3.js.map
