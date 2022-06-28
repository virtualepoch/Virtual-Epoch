const homeHeader = document.querySelector(".section-main-header");
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
let navOpen = false;

navBtn.addEventListener("click", () => {
  if (!navOpen) {
    navBtn.classList.add("open");
    navBox.classList.add("open");
    navOpen = true;
    link1.style.top = "0";
    link2.style.top = "0";
    link3.style.top = "0";
    link4.style.top = "0";
  } else {
    navBtn.classList.remove("open");
    navBox.classList.remove("open");
    navOpen = false;
    link1.style.top = "";
    link2.style.top = "";
    link3.style.top = "";
    link4.style.top = "";
  }
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
  navOpen = false;
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
  navOpen = false;
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
  navOpen = false;
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
  navOpen = false;
}

const resumePage = document.querySelector("#resume-page");

function openResume() {
  if (resumePage.classList.contains("open")) {
    resumePage.classList.remove("open");
  } else {
    resumePage.classList.add("open");
  }
}
