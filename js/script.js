// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// Kekita sego menu di klik
document.querySelector("#sego-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Klik di luar side bar untuk menghilangkan nav
const sego = document.querySelector("#sego-menu");

document.addEventListener("click", function (e) {
  if (!sego.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
