// discussions.js

const menuToggle = document.getElementById("menuToggle");
const sidebar = document.getElementById("sidebar");

/* ================= MOBILE SIDEBAR ================= */

menuToggle.addEventListener("click", () => {

  sidebar.classList.toggle("active");

});

/* ================= DISCUSSION BUTTONS ================= */

const buttons = document.querySelectorAll(".discussion-footer button");

buttons.forEach(button => {

  button.addEventListener("click", () => {

    button.classList.toggle("active");

  });

});