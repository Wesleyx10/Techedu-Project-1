const links = document.querySelector(".links");
const open = document.querySelector(".open");
const close = document.querySelector(".close");
const button = document.querySelector(".btns");

open.addEventListener("click", () => {
  links.style.display = "flex";
  close.style.display = "block";
  open.style.display = "none";
  button.style.display = "block";
});
close.addEventListener("click", () => {
  links.style.display = "none";
  close.style.display = "none";
  open.style.display = "block";
  button.style.display = "none";
});
