"use strict";

document
  .querySelector("#header-menu-btn")
  .addEventListener("click", function () {
    document.querySelector(".mobile-menu").classList.toggle("is-open");
  });

document.querySelector("#close-btn").addEventListener("click", function () {
  document.querySelector(".mobile-menu").classList.remove("is-open");
});
