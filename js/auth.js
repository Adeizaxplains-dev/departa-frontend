// auth.js

const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");

/* ================= LOGIN ================= */

if(loginForm){

  loginForm.addEventListener("submit", (e) => {

    e.preventDefault();

    alert("Login functionality will connect to backend later.");

  });

  window.location.href = "dashboard.html";

}

/* ================= REGISTER ================= */

if(registerForm){

  registerForm.addEventListener("submit", (e) => {

    e.preventDefault();

    alert("Registration functionality will connect to backend later.");

  });

  window.location.href = "dashboard.html";

}