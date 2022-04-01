var menu_box = document.getElementById("menu-box");

function openMenu() {
  if (menu_box.className == "open") {
    menu_box.className = "";
    link1.className = "";
    link2.className = "";
    link3.className = "";
    link4.className = "";
  } else {
    menu_box.className = "open";
    link1.className = "open";
    link2.className = "open";
    link3.className = "open";
    link4.className = "open";
  }
};

var h2 = document.getElementById("h2");
var h3 = document.getElementById("h3");
var h4 = document.getElementById("h4");
var h5 = document.getElementById("h5");

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

var home = document.getElementById("home");
var about = document.getElementById("about");
var projects = document.getElementById("projects");
var contact = document.getElementById("contact");
var actionbtn = document.getElementById("actionbtn-page-1");
var actionbtn2 = document.getElementById("actionbtn-page-2");
var actionbtn3 = document.getElementById("actionbtn-page-3");
var actionbtn4 = document.getElementById("actionbtn-page-4");

function changeHome() {
  home.style.display = "block";
  about.style.display = "none";
  projects.style.display = "none";
  contact.style.display = "none";
  actionbtn.style.display = "block";
  actionbtn2.style.display = "none";
  actionbtn3.style.display = "none";
  actionbtn4.style.display = "none";
  menu_box.className = "";
  link1.className = "";
  link2.className = "";
  link3.className = "";
  link4.className = "";
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
  menu_box.className = "";
  link1.className = "";
  link2.className = "";
  link3.className = "";
  link4.className = "";
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
  menu_box.className = "";
  link1.className = "";
  link2.className = "";
  link3.className = "";
  link4.className = "";
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
  menu_box.className = "";
  link1.className = "";
  link2.className = "";
  link3.className = "";
  link4.className = "";
}
