// courses.js

const menuToggle = document.getElementById("menuToggle");
const sidebar = document.getElementById("sidebar");

/* ================= MOBILE SIDEBAR ================= */

menuToggle.addEventListener("click", () => {

  sidebar.classList.toggle("active");

});

/* ================= SAVE BUTTON ================= */

const saveButtons = document.querySelectorAll(".save-btn");

saveButtons.forEach(button => {

  button.addEventListener("click", () => {

    button.classList.toggle("saved");

    if(button.classList.contains("saved")){
      button.innerHTML = "✅";
    } else {
      button.innerHTML = "🔖";
    }

  });

});

/* ================= VIEW COURSE ================= */

const viewButtons = document.querySelectorAll(".view-btn");

viewButtons.forEach(button => {

  button.addEventListener("click", () => {

    alert("Course page will connect to backend later.");

  });

});