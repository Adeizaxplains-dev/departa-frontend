// upload.js

const menuToggle = document.getElementById("menuToggle");
const sidebar = document.getElementById("sidebar");

const browseBtn = document.getElementById("browseBtn");
const fileInput = document.getElementById("fileInput");
const fileName = document.getElementById("fileName");

const uploadForm = document.getElementById("uploadForm");

/* ================= MOBILE SIDEBAR ================= */

menuToggle.addEventListener("click", () => {

  sidebar.classList.toggle("active");

});

/* ================= FILE BROWSE ================= */

browseBtn.addEventListener("click", () => {

  fileInput.click();

});

/* ================= SHOW FILE NAME ================= */

fileInput.addEventListener("change", () => {

  if(fileInput.files.length > 0){

    fileName.innerHTML =
      "Selected File: " + fileInput.files[0].name;

  }

});

document.getElementById("uploadForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData();

  formData.append("title", document.getElementById("title").value);
  formData.append("description", document.getElementById("description").value);
  formData.append("courseId", document.getElementById("courseId").value);
  formData.append("file", document.getElementById("file").files[0]);

  const token = localStorage.getItem("token");

  const res = await fetch("http://localhost:5000/api/materials", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`
    },
    body: formData
  });

  const data = await res.json();

  alert(data.message || "Uploaded!");
});

/* ================= FORM SUBMIT ================= */

uploadForm.addEventListener("submit", (e) => {

  e.preventDefault();

  alert("Material upload will connect to backend later.");

});