const burgerIcon = document.getElementById("burger-icon");
const navBarMobile = document.getElementById("nav-bar-mobile");
const exitButton = document.getElementById("nav-exit");
burgerIcon.addEventListener("click", showMenu);
exitButton.addEventListener("click", closeMenu);
function showMenu() {
  navBarMobile.style.display = "flex";
  console.log("hi");
}
function closeMenu() {
  navBarMobile.style.display = "none";
}
