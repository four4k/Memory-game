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
const handleSubmit = (event) => {
  event.preventDefault();
  localStorage.setItem('player', input.value);
  window.location = '../pages/game.html'
}
input.addEventListener("input", validateInput);
form.addEventListener("submit", handleSubmit);
