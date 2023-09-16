document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("burger").addEventListener("click", function () {
    document.querySelector(".header__navbar").classList.toggle("open");
  });
});
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    document.querySelector("header__navbar").classList.remove("open");
  }
});
document.getElementById("navbar__menu").addEventListener("click", (event) => {
  event._isClickWithInMenu = true;
});
document.getElementById("burger").addEventListener("click", (event) => {
  event._isClickWithInMenu = true;
});
document.body.addEventListener("click", (event) => {
  if (event._isClickWithInMenu) return;
  document.querySelector(".header__navbar").classList.remove("open");
});
