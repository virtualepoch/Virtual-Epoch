var menubox = document.getElementById("menubox");
var menubtn = document.getElementById("menubtn");
var link1 = document.getElementById("link1");

menubtn.onclick = function fnMenubox() {
  if (menubox.className == "open") {
    menubox.className = "";
    link1.className = "";
    link2.className = "";
    link3.className = "";
    link4.className = "";
  } else {
    menubox.className = "open";
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
  if (h2.className == "") {
    h2.className = "load";
    h3.className = "load";
    h4.className = "load";
    h5.className = "load";
  }
};

var home = document.getElementById("home");
var about = document.getElementById("about");
var projects = document.getElementById("projects");
var contact = document.getElementById("contact");


function changeHome() {
  home.style.display = "block";
  about.style.display = "none";
  projects.style.display = "none";
  contact.style.display = "none";
  menubox.className = "";
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
  menubox.className = "";
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
  menubox.className = "";
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
  menubox.className = "";
  link1.className = "";
  link2.className = "";
  link3.className = "";
  link4.className = "";
}
