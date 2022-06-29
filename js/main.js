const homeHeader = document.querySelector(".section-main-heading");
const h2 = document.querySelector("#h2");
const h3 = document.querySelector("#h3");
const h4 = document.querySelector("#h4");
const h5 = document.querySelector("#h5");

window.onload = function loadHome() {
  homeHeader.classList.add("load");
  h2.classList.add("load");
  h3.classList.add("load");
  h4.classList.add("load");
  h5.classList.add("load");
};

const navBtn = document.querySelector(".nav-btn");
const navBox = document.querySelector(".nav-box");
const link1 = document.querySelector("#link1");
const link2 = document.querySelector("#link2");
const link3 = document.querySelector("#link3");
const link4 = document.querySelector("#link4");

navBtn.addEventListener("click", () => {
  navBtn.classList.toggle("open");
  navBox.classList.toggle("open");
  link1.classList.toggle("open");
  link2.classList.toggle("open");
  link3.classList.toggle("open");
  link4.classList.toggle("open");
});

navBtn.addEventListener("touchstart", function () {
  navBtn.style.boxShadow = "none";
});
navBtn.addEventListener("touchend", function () {
  navBtn.style.boxShadow = "";
});
navBtn.addEventListener("mousedown", function () {
  navBtn.style.boxShadow = "none";
});
navBtn.addEventListener("mouseup", function () {
  navBtn.style.boxShadow = "";
});

const home = document.querySelector("#home");
const about = document.querySelector("#about");
const projects = document.querySelector("#projects");
const contact = document.querySelector("#contact");
const actionBtn = document.querySelector(".action-btn-page-1");
const actionBtn2 = document.querySelector(".action-btn-page-2");
const actionBtn3 = document.querySelector(".action-btn-page-3");
const actionBtn4 = document.querySelector(".action-btn-page-4");

function changeHome() {
  home.style.display = "flex";
  about.style.display = "none";
  projects.style.display = "none";
  contact.style.display = "none";
  actionBtn.style.display = "block";
  actionBtn2.style.display = "none";
  actionBtn3.style.display = "none";
  actionBtn4.style.display = "none";
  navBox.classList.remove("open");
  navBtn.classList.remove("open");
  link1.classList.remove("open");
  link2.classList.remove("open");
  link3.classList.remove("open");
  link4.classList.remove("open");
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
  navBox.classList.remove("open");
  navBtn.classList.remove("open");
  link1.classList.remove("open");
  link2.classList.remove("open");
  link3.classList.remove("open");
  link4.classList.remove("open");
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
  navBox.classList.remove("open");
  navBtn.classList.remove("open");
  link1.classList.remove("open");
  link2.classList.remove("open");
  link3.classList.remove("open");
  link4.classList.remove("open");
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
  navBox.classList.remove("open");
  navBtn.classList.remove("open");
  link1.classList.remove("open");
  link2.classList.remove("open");
  link3.classList.remove("open");
  link4.classList.remove("open");
}

const resumePage = document.querySelector("#resume-page");

function openResume() {
  if (resumePage.classList.contains("open")) {
    resumePage.classList.remove("open");
  } else {
    resumePage.classList.add("open");
  }
}
