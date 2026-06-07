// ===============================
// BASE API URL (DEV + PROD READY)
// ===============================
const BASE_URL =
  window.location.hostname === "localhost"
    ? "http://localhost:5000/api"
    : "https://your-backend-url.onrender.com/api";


// ===============================
// LOGIN FORM HANDLER
// ===============================
const loginForm = document.getElementById("loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const button = loginForm.querySelector("button");
    button.disabled = true;

    const email = loginForm.email?.value || document.getElementById("email").value;
    const password = loginForm.password?.value || document.getElementById("password").value;

    try {
      const res = await fetch(`${BASE_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Login failed");
        return;
      }

      // Save auth data
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      const role = data.user?.role;

      // Redirect based on role
      if (role === "student") {
        window.location.href = "student-dashboard.html";
      } else if (role === "lecturer") {
        window.location.href = "lecturer-dashboard.html";
      } else if (role === "admin") {
        window.location.href = "admin-dashboard.html";
      } else {
        alert("Unknown user role");
      }

    } catch (error) {
      console.error("Login error:", error);
      alert("Server connection failed");
    } finally {
      button.disabled = false;
    }
  });
}


// ===============================
// LOGOUT FUNCTION (GLOBAL USE)
// ===============================
function logout() {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  window.location.href = "login.html";
}