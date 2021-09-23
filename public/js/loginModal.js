// Get the modal
var modal = document.getElementById("loginModal");
// Get the button that opens the modal
var btn = document.getElementById("loginBtn");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var newAcc = document.getElementById("newAcc")
var useLogin = document.getElementById("useLogin")
var loginForm = document.getElementById("loginForm")
var registerForm = document.getElementById("registerForm")

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
  loginForm.classList.remove("hidden")
  registerForm.classList.add("hidden")
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

newAcc.onclick = function() {
  loginForm.classList.add("hidden")
  registerForm.classList.remove("hidden")
}

useLogin.onclick = function () {
  loginForm.classList.remove("hidden")
  registerForm.classList.add("hidden")
}