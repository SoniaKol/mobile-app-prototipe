"use strict";

document
  .querySelector("#header-menu-btn")
  .addEventListener("click", function () {
    document.querySelector(".mobile-menu").classList.toggle("is-open");
  });

document.querySelector("#close-btn").addEventListener("click", function () {
  document.querySelector(".mobile-menu").classList.remove("is-open");
});

document.querySelector(".hero-btn").addEventListener("click", function () {
  document.querySelector(".backdrop").classList.toggle("is-open");
});

document
  .querySelector("#modal-close-btn")
  .addEventListener("click", function () {
    document.querySelector(".backdrop").classList.remove("is-open");
  });
