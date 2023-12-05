// Toggle modal
function toggleModal(formType) {
  const modal = document.querySelector(`.${formType}-overlay`);
  const form = document.querySelector(`.${formType}-form`);

  modal.classList.toggle("is-hidden");
  form.classList.toggle("is-hidden");
}

// Switch open/close
export function handleModalToggle(event, formType) {
  switch (event.type) {
    case "click":
      toggleModal(formType);
      break;
    case "keydown":
      if (event.key === "Escape") {
        toggleModal(formType);
      }
      break;
    default:
      break;
  }
}
