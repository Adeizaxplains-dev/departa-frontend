// dashboard.js

const menuToggle = document.getElementById("menuToggle");
const sidebar = document.getElementById("sidebar");

/* ================= MOBILE SIDEBAR ================= */

menuToggle.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});

/* ================= SIMPLE INTERACTIONS ================= */

const discussionButtons = document.querySelectorAll(".discussion-actions button");

discussionButtons.forEach(button => {

  button.addEventListener("click", () => {

    button.classList.toggle("clicked");

  });

});