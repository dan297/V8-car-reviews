// Get the modal
const modal = document.getElementById("loginModal");
// Get the button that opens the modal
const btn = document.getElementById("loginBtn");
// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];
const newAcc = document.getElementById("newAcc")
const useLogin = document.getElementById("useLogin")
const loginForm = document.getElementById("loginForm")
const registerForm = document.getElementById("registerForm")

const handleLoginSubmit = async event => {
  event.preventDefault();

  const email = document.getElementById("email-login")
        .value.trim()
        .toLowerCase();
  const password = document.getElementById("password-login")
        .value.trim();
  
  if (email && password) {
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({email, password}),
      headers: {
        "Content-Type": "application/json"
      },
    });

    if (response.ok) {
      setTimeout(() => {
        location.reload()
      },1000)
    } else {
      alert("Login unsuccessful")
    }
  } else {
    alert("You must enter your email and password to log in.")
  }
}

const handleRegisterSubmit = async event => {
  event.preventDefault()

  const firstName = document.getElementById("first-name-register").value.trim().toLowerCase()
  const lastName = document.getElementById("last-name-register").value.trim().toLowerCase()
  const email = document.getElementById("email-register")
        .value.trim()
        .toLowerCase();
  const password = document.getElementById("password-register")
        .value.trim();
  const username = document.getElementById("username-register").value.trim()

  const validInput = firstName && lastName && email && password && username

  if (validInput) {
    const response = await fetch("/api/users/register", {
      method: "POST",
      body: JSON.stringify({first_name: firstName, last_name: lastName, email, password, username}),
      headers: {
        "Content-Type": "application/json"
      },
    });

    if (response.ok) {
      location.reload()
    } else {
      alert("Register unsuccessful")
    }
  } else {
    alert("You must fill in all your details to register.")
  }
}


loginForm.addEventListener("submit", handleLoginSubmit)
registerForm.addEventListener("submit", handleRegisterSubmit)

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