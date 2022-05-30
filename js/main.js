const home = document.getElementById("home");
const about = document.getElementById("about");
const projects = document.getElementById("projects");
const contact = document.getElementById("contact");
const actionBtn = document.getElementById("action-btn-page-1");
const actionBtn2 = document.getElementById("action-btn-page-2");
const actionBtn3 = document.getElementById("action-btn-page-3");
const actionBtn4 = document.getElementById("action-btn-page-4");
const h2 = document.getElementById("h2");
const h3 = document.getElementById("h3");
const h4 = document.getElementById("h4");
const h5 = document.getElementById("h5");

window.onload = function loadHome() {
  home.style.display = "block";
  about.style.display = "none";
  projects.style.display = "none";
  contact.style.display = "none";
  actionBtn.style.display = "block";
  actionBtn2.style.display = "none";
  actionBtn3.style.display = "none";
  actionBtn4.style.display = "none";
  h2.className = "load";
  h3.className = "load";
  h4.className = "load";
  h5.className = "load";
};

const menuBtn = document.querySelector(".menu-btn");
const menuBox = document.getElementById("menu-box");
let menuOpen = false;

menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    menuOpen = true;
    menuBox.style.top = "0";
    link1.style.top = "0";
    link2.style.top = "0";
    link3.style.top = "0";
    link4.style.top = "0";
  } else {
    menuBtn.classList.remove("open");
    menuOpen = false;
    menuBox.style.top = "";
    link1.style.top = "";
    link2.style.top = "";
    link3.style.top = "";
    link4.style.top = "";
  }
});

menuBtn.addEventListener("touchstart", function () {
  menuBtn.style.boxShadow = "none";
});
menuBtn.addEventListener("touchend", function () {
  menuBtn.style.boxShadow = "";
});
menuBtn.addEventListener("mousedown", function () {
  menuBtn.style.boxShadow = "none";
});
menuBtn.addEventListener("mouseup", function () {
  menuBtn.style.boxShadow = "";
});

function changeHome() {
  home.style.display = "block";
  about.style.display = "none";
  projects.style.display = "none";
  contact.style.display = "none";
  actionBtn.style.display = "block";
  actionBtn2.style.display = "none";
  actionBtn3.style.display = "none";
  actionBtn4.style.display = "none";
  menuBox.style.top = "";
  menuBtn.classList.remove("open");
  menuOpen = false;
}
function changeAbout() {
  home.style.display = "none";
  about.style.display = "block";
  projects.style.display = "none";
  contact.style.display = "none";
  actionBtn.style.display = "none";
  actionBtn2.style.display = "block";
  actionBtn3.style.display = "none";
  actionBtn4.style.display = "none";
  menuBox.style.top = "";
  menuBtn.classList.remove("open");
  menuOpen = false;
}
function changeProjects() {
  home.style.display = "none";
  about.style.display = "none";
  projects.style.display = "block";
  contact.style.display = "none";
  actionBtn.style.display = "none";
  actionBtn2.style.display = "none";
  actionBtn3.style.display = "block";
  actionBtn4.style.display = "none";
  menuBox.style.top = "";
  menuBtn.classList.remove("open");
  menuOpen = false;
}
function changeContact() {
  home.style.display = "none";
  about.style.display = "none";
  projects.style.display = "none";
  contact.style.display = "block";
  actionBtn.style.display = "none";
  actionBtn2.style.display = "none";
  actionBtn3.style.display = "none";
  actionBtn4.style.display = "block";
  menuBox.style.top = "";
  menuBtn.classList.remove("open");
  menuOpen = false;
}
