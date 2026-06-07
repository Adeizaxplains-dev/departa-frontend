const API_BASE = "https://departa-backend.onrender.com/api";

async function loginUser(e) {
  e.preventDefault();

  const userData = {
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
  };

  try {
    const res = await fetch(`${API_BASE}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    const data = await res.json();

    if (data.success) {
      alert("Login successful!");

      localStorage.setItem("token", data.token);

      // redirect to dashboard
      window.location.href = "dashboard.html";
    } else {
      alert(data.message || "Login failed");
    }
  } catch (error) {
    console.error("Login Error:", error);
    alert("Network error. Try again.");
  }
}