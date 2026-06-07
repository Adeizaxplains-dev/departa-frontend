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

  const user = JSON.parse(localStorage.getItem("user"));

if (!user) {
  window.location.href = "login.html";
}

// show user info
document.getElementById("userInfo").innerHTML = `
  <p>Name: ${user.fullName}</p>
  <p>Role: ${user.role}</p>
`;

// 🔐 extra protection per page
const page = window.location.pathname;

if (page.includes("student") && user.role !== "student") {
  alert("Access denied");
  window.location.href = "login.html";
}

if (page.includes("lecturer") && user.role !== "lecturer") {
  alert("Access denied");
  window.location.href = "login.html";
}

if (page.includes("admin") && user.role !== "admin") {
  alert("Access denied");
  window.location.href = "login.html";
}

});