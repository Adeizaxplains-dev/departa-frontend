import { API_BASE } from "./config.js";

async function registerUser(e) {
  e.preventDefault();

  const userData = {
    fullName: document.getElementById("fullName").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
  };

  try {
    const res = await fetch(`${API_BASE}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    const data = await res.json();

    if (data.success) {
      alert("Registration successful!");

      // optional redirect
      window.location.href = "login.html";

      console.log(data);
    } else {
      alert(data.message || "Registration failed");
    }
  } catch (error) {
    console.error("Register Error:", error);
    alert("Network error. Try again.");
  }
}