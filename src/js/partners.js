const navMenu = document.querySelector("nav ul");

document.querySelector(".mobile-button").addEventListener("click", function () {
  navMenu.classList.add("active");
});

document.querySelector("#closeButton").addEventListener("click", function () {
  navMenu.classList.remove("active");
});
