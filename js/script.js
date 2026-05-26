const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {

  if(navLinks.style.display === "flex"){
    navLinks.style.display = "none";
  } else {
    navLinks.style.display = "flex";
    navLinks.style.flexDirection = "column";
    navLinks.style.position = "absolute";
    navLinks.style.top = "80px";
    navLinks.style.right = "8%";
    navLinks.style.background = "#fff";
    navLinks.style.padding = "20px";
    navLinks.style.borderRadius = "16px";
    navLinks.style.boxShadow = "0 10px 30px rgba(0,0,0,0.08)";
  }

});