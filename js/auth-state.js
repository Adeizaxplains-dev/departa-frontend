// ===============================
// AUTO LOGIN CHECK
// ===============================

function isLoggedIn() {
  return !!localStorage.getItem("token");
}

function getCurrentUser() {
  return JSON.parse(localStorage.getItem("user"));
}

function redirectIfLoggedIn() {
  if (isLoggedIn()) {
    const user = getCurrentUser();

    if (user.role === "student") {
      window.location.href = "student-dashboard.html";
    } else if (user.role === "lecturer") {
      window.location.href = "lecturer-dashboard.html";
    } else if (user.role === "admin") {
      window.location.href = "admin-dashboard.html";
    }
  }
}