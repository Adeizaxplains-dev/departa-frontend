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

/* ================= FORM SUBMIT ================= */

uploadForm.addEventListener("submit", (e) => {

  e.preventDefault();

  alert("Material upload will connect to backend later.");

});