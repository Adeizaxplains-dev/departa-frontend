// profile.js

const menuToggle = document.getElementById("menuToggle");
const sidebar = document.getElementById("sidebar");

/* ================= MOBILE SIDEBAR ================= */

menuToggle.addEventListener("click", () => {

  sidebar.classList.toggle("active");

});

/* ================= EDIT PROFILE ================= */

const editBtn = document.querySelector(".edit-btn");

editBtn.addEventListener("click", () => {

  alert("Edit profile functionality will connect to backend later.");

});