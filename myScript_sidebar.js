var sideBar_width="230px"
function toggleNav(){
    navSize = document.getElementById("mySidebar").style.width;
    if (navSize == sideBar_width)
      return closeNav();
    return openNav();
  }
function openNav() {
  document.getElementById("mySidebar").style.width = sideBar_width;
  document.getElementById("test").style.marginLeft = sideBar_width;
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("test").style.marginLeft= "0";
}
