const BASE_URL =
  window.location.hostname === "localhost"
    ? "http://localhost:5000/api"
    : "https://departa-backend.onrender.com/api";

// Get token
function getToken() {
  return localStorage.getItem("token");
}
async function authFetch(url, options = {}) {
  try {
    const token = getToken();

    const res = await fetch(BASE_URL + url, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        ...options.headers
      }
    });

    return res;
  } catch (err) {
    console.error("API Error:", err);
    throw err;
  }
}

async function loadUser() {
  try {
    const res = await authFetch("/auth/me");
    const data = await res.json();

    if (!res.ok) {
      localStorage.clear();
      window.location.href = "login.html";
      return;
    }

    localStorage.setItem("user", JSON.stringify(data.user));
    return data.user;

  } catch (err) {
    console.error(err);
    alert("Network error");
  }
}

async function getMaterials() {
  const res = await authFetch("/materials");
  return await res.json();
}

async function getCourses() {
  const res = await authFetch("/courses");
  return await res.json();
}