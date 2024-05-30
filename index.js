const form = document.getElementById("loginForm");
form.addEventListener("submit", validatePass);
function validatePass(event) {
  const password = document.getElementById("password");
  const Confirmpassword = document.getElementById("confirmPassword");
  const Error = document.getElementById("error_message");
  if (password.value != Confirmpassword.value) {
    Error.style.display = "inline";
    event.preventDefault();
  } else {
    Error.style.display = "none";
  }
}
