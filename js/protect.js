// ===============================
// PROTECT ROUTES (AUTH GUARD)
// ===============================

function getToken() {
  return localStorage.getItem("token");
}

function getUser() {
  return JSON.parse(localStorage.getItem("user"));
}

// Run this on every protected page
function protectPage() {
  const token = getToken();

  if (!token) {
    window.location.href = "login.html";
  }
}

// Role-based protection
function protectRole(requiredRole) {
  const user = getUser();

  if (!user) {
    window.location.href = "login.html";
    return;
  }

  if (user.role !== requiredRole) {
    alert("Access denied");
    window.location.href = "login.html";
  }
}