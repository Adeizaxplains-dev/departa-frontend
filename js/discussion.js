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

async function loadThreads() {
  const token = localStorage.getItem("token");

  const res = await fetch("http://localhost:5000/api/discussions", {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  const data = await res.json();

  const container = document.getElementById("threads");

  container.innerHTML = data.map(thread => `
    <div style="border:1px solid #ddd; padding:10px; margin:10px;">
      <h3>${thread.title}</h3>
      <p>${thread.content}</p>
      <small>By: ${thread.createdBy.fullName} (${thread.createdBy.role})</small>

      <button onclick="openThread('${thread._id}')">
        Open Thread
      </button>
    </div>
  `).join("");
}

loadThreads();