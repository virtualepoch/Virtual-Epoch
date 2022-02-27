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

