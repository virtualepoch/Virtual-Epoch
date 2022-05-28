const menuBtn = document.querySelector(".menu-btn");
let menuOpen = false;
menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    menuOpen = false;
  }
});

const menuBox = document.getElementById("menu-box");

function openMenu() {
  if (menuBox.style.top == "") {
    menuBox.style.top = "0";
    link1.style.top = "0";
    link2.style.top = "0";
    link3.style.top = "0";
    link4.style.top = "0";
  } else {
    menuBox.style.top = "";
    link1.style.top = "";
    link2.style.top = "";
    link3.style.top = "";
    link4.style.top = "";
  }
}

const h2 = document.getElementById("h2");
const h3 = document.getElementById("h3");
const h4 = document.getElementById("h4");
const h5 = document.getElementById("h5");

window.onload = function indexHtagAnim() {
  h2.className = "load";
  h3.className = "load";
  h4.className = "load";
  h5.className = "load";
  actionbtn.style.display = "block";
  actionbtn2.style.display = "none";
  actionbtn3.style.display = "none";
  actionbtn4.style.display = "none";
};

const home = document.getElementById("home");
const about = document.getElementById("about");
const projects = document.getElementById("projects");
const contact = document.getElementById("contact");
const actionbtn = document.getElementById("actionbtn-page-1");
const actionbtn2 = document.getElementById("actionbtn-page-2");
const actionbtn3 = document.getElementById("actionbtn-page-3");
const actionbtn4 = document.getElementById("actionbtn-page-4");

function changeHome() {
  home.style.display = "block";
  about.style.display = "none";
  projects.style.display = "none";
  contact.style.display = "none";
  actionbtn.style.display = "block";
  actionbtn2.style.display = "none";
  actionbtn3.style.display = "none";
  actionbtn4.style.display = "none";
  menuBox.style.top = "";
}
function changeAbout() {
  home.style.display = "none";
  about.style.display = "block";
  projects.style.display = "none";
  contact.style.display = "none";
  actionbtn.style.display = "none";
  actionbtn2.style.display = "block";
  actionbtn3.style.display = "none";
  actionbtn4.style.display = "none";
  menuBox.style.top = "";
}
function changeProjects() {
  home.style.display = "none";
  about.style.display = "none";
  projects.style.display = "block";
  contact.style.display = "none";
  actionbtn.style.display = "none";
  actionbtn2.style.display = "none";
  actionbtn3.style.display = "block";
  actionbtn4.style.display = "none";
  menuBox.style.top = "";
}
function changeContact() {
  home.style.display = "none";
  about.style.display = "none";
  projects.style.display = "none";
  contact.style.display = "block";
  actionbtn.style.display = "none";
  actionbtn2.style.display = "none";
  actionbtn3.style.display = "none";
  actionbtn4.style.display = "block";
  menuBox.style.top = "";
}