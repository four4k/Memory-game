const input = document.querySelector(".login-input");
const btn = document.querySelector(".login-btn");
const form = document.querySelector(".form-login")

const validateInput = ({ target }) => {
  if (target.value.length > 1) {
    btn.removeAttribute("disabled");
    return;
  }
  btn.setAttribute("disabled", "");
};

input.addEventListener("input", validateInput);
